import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-black py-12'>
        Latest News
      </h1>
      <div>

      </div>
      <div className='space-x-5'>
        <Link href="/news/sports">Sports </Link>
        <Link href="/news/health">Health</Link>
      </div>
      <div className='flex justify-between h-96'>
        <div className='bg-slate-200 md:w-4/5 flex items-center justify-center'>
            <p>All News</p>
        </div>
        <div className='bg-purple-200 md:w-1/5'>
        sideBAr</div>
      </div>
    </div>
  )
}

export default page
