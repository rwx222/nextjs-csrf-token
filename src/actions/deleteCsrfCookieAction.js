'use server'
import { cookies } from 'next/headers'

import { CSRF_TOKEN_NAME } from '@/constants'

/**
 * Deletes the CSRF cookie if it exists.
 *
 * @return {Promise<void>} A promise that resolves when the cookie is deleted or if it does not exist.
 * @throws {Error} If there is an error deleting the cookie.
 */
export default async function deleteCsrfCookieAction() {
  try {
    const cookieStore = cookies()
    const csrfCookie = cookieStore.get(CSRF_TOKEN_NAME)

    if (csrfCookie) {
      cookieStore.delete(CSRF_TOKEN_NAME)
    }
  } catch (error) {
    console.error(error)
  }
}
