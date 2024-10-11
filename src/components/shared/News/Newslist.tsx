'use client'
import { Button } from '@/components/ui/button'
import Newsitem from '@/types/newstypes'
import Image from 'next/image'
// import { error } from 'console'
import React, { useEffect, useState } from 'react'
import Categorylist from './Categorylist'

const Newslist = () => {
  const[news,setNews] = useState<Newsitem[]>([])
  const[search,setSearch] = useState<string>("")
  const[category,setCategory] = useState<string>("")

  const fetchNews = async (category:string,search:string) =>{
   try {
    const response = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news?category=${category}&search=${search}`)
    if(!response.ok){
      throw new Error(`Http error status:${response.status}`);
    }
    const data = await response.json()
    console.log(data)
    return data
   } catch (error) {
    console.error(error)
   }
  }
  useEffect(()=>{
    const getdata = async ()=>{
      const data = await fetchNews(category,search)
      setNews(data)
    }
    getdata()
  },[search, category])
  console.log(news)
  return (
    <div className='py-3'>
      <Categorylist onChangecategory={category}/>
    <div className="grid md:grid-cols-3 gap-3">
       {
            news.map((allnews,idx)=>(
             <div className="p-3 border shadow-xl space-y-4 shadow-slate-100 gap-3">
              <Image width={440} height={250} src={allnews.imageUrl} alt="card image" className="h-56 w-full object-container rounded-md" />
              <div className="space-y-2">
                <h1 className="text-xl font-bold text-slate-900">{allnews.title}</h1>
                <p className="mt-2 text-base tracking-tight">{allnews.description}</p>
                <Button variant="default">read more</Button>
              </div>
             </div>
            ))
          }
    </div>

    </div>
  )
}

export default Newslist
