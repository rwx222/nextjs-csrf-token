'use client'

import { useCallback, useState, Suspense } from 'react'
import { useRouter } from 'next/navigation'

import { CSRF_TOKEN_NAME } from '@/constants'
import getCookie from '@/utils/getCookie'
import deleteCsrfCookieAction from '@/actions/deleteCsrfCookieAction'

function BaseComponent() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [includeToken, setIncludeToken] = useState<boolean>(false)
  const [resultMessage, setResultMessage] = useState<string>('')

  const handleLogin = useCallback(async () => {
    try {
      setResultMessage('')
      setIsLoading(true)
      const csrfTokenCookie = getCookie(CSRF_TOKEN_NAME)
      const sessionRes = await fetch('/api/login', {
        method: 'PUT',
        headers: {
          [CSRF_TOKEN_NAME]: includeToken ? csrfTokenCookie : '',
        },
      })
      const sessionData = await sessionRes.json()
      setResultMessage(sessionData?.message)
    } catch (error) {
      console.error(error)
      setResultMessage('Unexpected error occurred.')
    } finally {
      setIsLoading(false)
    }
  }, [includeToken])

  const generateNewCookie = useCallback(async () => {
    try {
      setResultMessage('')
      await deleteCsrfCookieAction() // Delete previous cookie if still exists.
      router.refresh() // Sufficient to generate a new cookie because of the middleware.
    } catch (error) {
      console.error(error)
    }
  }, [router])

  return (
    <div className='border border-[#1d9bf0] rounded-xl p-5 text-lg'>
      <div>
        <input
          type='checkbox'
          id='send_token'
          checked={includeToken}
          onChange={(e) => {
            setResultMessage('')
            setIncludeToken(e.target.checked)
          }}
        />
        <label htmlFor='send_token' className='ml-2 cursor-pointer'>
          {`Send token in request`}
        </label>
      </div>

      <div className='pt-3'>
        <button
          type='button'
          onClick={handleLogin}
          disabled={isLoading}
          className='py-1 px-4 rounded bg-[#1d9bf0] font-medium min-w-56 w-full'
        >
          {includeToken ? 'Request (with token)' : 'Request (without token)'}
        </button>
      </div>

      <div className='pt-3'>
        <button
          type='button'
          onClick={generateNewCookie}
          disabled={isLoading}
          className='py-1 px-4 rounded bg-[#1d9bf0] font-medium min-w-56 w-full'
        >
          {'Generate new cookie'}
        </button>
      </div>

      <div className='pt-3 text-[#1d9bf0] font-semibold'>{`RESULT: '${resultMessage}'`}</div>
    </div>
  )
}

export default function Login() {
  return (
    <Suspense>
      <BaseComponent />
    </Suspense>
  )
}
