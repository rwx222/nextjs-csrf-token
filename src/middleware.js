import { NextResponse } from 'next/server'

import {
  IS_PRODUCTION,
  CSRF_TOKEN_NAME,
  ERROR_CODE_INVALID_CSRF,
} from '@/constants'
import { generateCsrfToken, verifyCsrfToken } from '@/utils/csrfTokens'

export async function middleware(request) {
  const responseNext = NextResponse.next()

  // I don't validate POST requests because NextJS 'server actions' use this method,
  // and I don't want to overcomplicate things, because these tokens expire after a certain
  // period of time, it's normal and expected, but it would complicate the logic of 'server actions'.
  // I simply handle any sensitive API requests (or those that I want to validate with the CSRF token)
  // using the PUT, PATCH, or DELETE methods.
  if (
    request.method === 'PUT' ||
    request.method === 'PATCH' ||
    request.method === 'DELETE'
  ) {
    const invalidCsrfTokenResponse = NextResponse.json(
      { message: ERROR_CODE_INVALID_CSRF },
      { status: 403 }
    )

    try {
      // The token is sent in a request header (in PUT, PATCH or DELETE requests)
      // So here it's captured for validation.
      const csrfRequestToken = request.headers.get(CSRF_TOKEN_NAME) ?? ''
      const isTokenValid = await verifyCsrfToken(csrfRequestToken)

      if (!isTokenValid) {
        // If the token is invalid or not included in the request, it could be for several reasons:

        // 1. The user stayed on a single view without any activity for a long time,
        //    and by the time this request was made, the cookie had already expired.
        // 2. The request is not coming from our website, and/or the token was not created by us,
        //    in which case it could be a malicious actor trying to make a request to our API.
        // 3. It could also happen that we just made a deployment, and the token secret changes with each deployment,
        //    making tokens created before the last deployment invalid.

        // In any of these cases, we should respond with an error
        // and the corresponding status code so we can handle the error on the frontend.
        return invalidCsrfTokenResponse
      }
    } catch (error) {
      // Additionally, if an unexpected error occurs during the token validation process,
      // we should still send the response with the error.
      console.error(error)
      return invalidCsrfTokenResponse
    }
  } else if (
    request.method === 'GET' &&
    !request.cookies.has(CSRF_TOKEN_NAME)
  ) {
    // In the case of GET requests, the token is sent in a cookie,
    // so it's simply checked if the cookie exists (its validity isn't checked because that's not important here, only that it exists).
    // And if it doesn't exist (either because it's the first request or the previous cookie has expired),
    // a new cookie is generated and sent in the response.
    try {
      const csrfResponseToken = await generateCsrfToken()
      responseNext.cookies.set(CSRF_TOKEN_NAME, csrfResponseToken, {
        sameSite: 'lax',
        httpOnly: false, // This token needs to be accessible from JS on the front end
        secure: IS_PRODUCTION,
        maxAge: IS_PRODUCTION
          ? 60 * 60 // 60 minutes is a good amount of time without creating a token for each user.
          : 60 * 1, // 1 minute for development (for testing purposes).
      })
    } catch (error) {
      console.error(error)
    }
  }

  return responseNext
}

export const config = {
  matcher: [
    /*
      Match all request paths except for the ones starting with:
        - _next/static (static files)
        - _next/image (image optimization files)
        - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
