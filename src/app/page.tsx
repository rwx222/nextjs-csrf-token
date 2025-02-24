import Login from '@/components/Login/Login'

export default function Home() {
  return (
    <main className='p-2 text-lg leading-5 sm:pt-10'>
      <div className='border border-[#1d9bf0] rounded-xl p-5 max-w-md mx-auto'>
        <Login />

        <p className='pt-4'>{`Rules for this example`}</p>
        <p className='pt-4'>{`- Look for the '/login' PUT request in the network tab of your browser (developer tools) to see how it works.`}</p>
        <p className='pt-4'>{`- After 30 seconds of inactivity (without reloading the page or navigating to other routes), the cookie will expire.`}</p>
        <p className='pt-4'>{`- If you navigate to other routes or reload the page (GET requests), and the cookie has expired, the middleware will generate a new cookie.`}</p>
        <p className='pt-4'>{`- You can also generate a new cookie programmatically.`}</p>
        <p className='pt-4 text-right'>
          <a
            target='_blank'
            href='https://dev.to/andresdotsh/csrf-tokens-in-nextjs-3mlb'
            className='text-[#1d9bf0] font-medium mr-5'
          >{`📖 Post`}</a>

          <a
            target='_blank'
            href='https://github.com/andresdotsh/nextjs-csrf-token'
            className='text-[#1d9bf0] font-medium'
          >{`💻 GitHub`}</a>
        </p>
      </div>
    </main>
  )
}
