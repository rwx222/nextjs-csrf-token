import Login from '@/components/Login/Login'

export default function Home() {
  return (
    <main className='p-2 text-lg leading-5 sm:pt-10'>
      <div className='border border-[#1d9bf0] rounded-xl p-5 max-w-md mx-auto'>
        <p className='pb-4'>{`Rules for this example`}</p>
        <p className='pb-4'>{`- Look for the '/login' PUT request in the network tab of your browser (developer tools) to see how it works.`}</p>
        <p className='pb-4'>{`- After 30 seconds of inactivity (without reloading the page or navigating to other routes), the cookie will expire.`}</p>
        <p className='pb-4'>{`- When navigating to other routes (GET requests), if the cookie has expired, the server generates a new cookie.`}</p>
        <p className='pb-4'>{`- If the cookie is expired, and you reload the page, a new cookie will be generated.`}</p>
        <p className='pb-4'>{`- If the cookie is expired, you can also generate a new cookie programmatically.`}</p>

        <Login />
      </div>
    </main>
  )
}
