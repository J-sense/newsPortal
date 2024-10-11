import Link from 'next/link'
import React from 'react'
import Newslist from '@/components/shared/News/Newslist'
const page = () => {
  return (
    <div className=''>
      <h1 className='text-2xl font-bold text-black py-8'>
        Latest News
      </h1>
      <div>
        
      </div>
      <div className='mb-12'>
        <Newslist />
      </div>
      {/* <div>

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
      </div> */}
    </div>
  )
}

export default page
