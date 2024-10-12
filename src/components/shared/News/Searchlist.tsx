import { Input } from '@/components/ui/input'
import React from 'react'
interface onsearchProps {
  onsearch:(search:string) => void;
}
const Searchlist = ({onsearch}:onsearchProps) => {
  return (
    <div className='flex flex-shrink'> 
      <h3 className='font-bold text-slate-900'>Search News</h3>
      <Input type='text' onChange={(e)=>onsearch(e.target.value)}/>

    </div>
  )
}

export default Searchlist
