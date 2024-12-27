'use server'

import { cookies } from 'next/headers'

import { CSRF_TOKEN_NAME } from '@/constants'

export default async function deleteCsrfCookieAction(): Promise<void> {
  try {
    const cookieStore = await cookies()
    const csrfCookie = cookieStore.get(CSRF_TOKEN_NAME)

    if (csrfCookie) {
      cookieStore.delete(CSRF_TOKEN_NAME)
    }
  } catch (error) {
    console.error(error)
  }
}
