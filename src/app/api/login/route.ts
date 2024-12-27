import { NextResponse, NextRequest } from 'next/server'

import { ERROR_CODE_INTERNAL_SERVER } from '@/constants'

// If the `middleware.js` determines that the request
// does not have a valid CSRF token, this endpoint is never called.
// Instead, the middleware responds with an error inmediately.

// I don't validate CSRF token in POST requests because NextJS 'server actions' use POST method
// That's why I use the PUT method here 👇👇👇 (see middleware.js)
export async function PUT(request: NextRequest) {
  try {
    // ✅ 🚨 👉 Put some real code here to do anything you want in this endpoint
    // ✅ 🚨 👉 I'm just using the request object here without doing anything with it
    const anyHeader = request.headers.get('anyHeader') ?? ''
    console.log(`anyHeader:`, anyHeader)

    // ✅ 🚨 👉 Fake login response after some logic
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
