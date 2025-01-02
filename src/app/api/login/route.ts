import { NextResponse, NextRequest } from 'next/server'

import { ERROR_CODE_INTERNAL_SERVER } from '@/constants'

// If the `middleware.js` determines that the request
// does not have a valid CSRF token, this endpoint is never called.
// Instead, the middleware responds with an error inmediately.

// I choose not to validate CSRF tokens in POST requests as a personal
// preference, which is why I use the PUT method here 👇👇👇.
export async function PUT(request: NextRequest) {
  try {
    // Put some real code here; I'm using the request object, but I'm actually
    // doing nothing with it.
    const anyHeader = request.headers.get('anyHeader') ?? ''
    console.log(`anyHeader:`, anyHeader)

    // Fake login response.
    const responsePayload = {
      message: 'You are now logged in',
    }
    return new Response(JSON.stringify(responsePayload), { status: 200 })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: ERROR_CODE_INTERNAL_SERVER },
      { status: 500 },
    )
  }
}
