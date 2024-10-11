import { Select, SelectContent, SelectGroup, SelectValue, SelectLabel, SelectTrigger,SelectItem } from '@/components/ui/select';
import React from 'react'
interface categoryprops {
    onChangecategory:(category:string) => void;
}
const Categorylist = ({onChangecategory}:categoryprops) => {
    const categories =["all","general","tech","tech","health"]
  return (
    <div className='flex flex-shrink gap-3 bold text-slate-900 items-center mb-3'><h3 className='font-bold text-slate-900'>Fillter by category :</h3>
       <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {
            categories.map((category:string,idx:any)=>(
                <div key={idx}>
                      <SelectItem value={category}>{category}</SelectItem>
                </div>
            ))
          }
        
         
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}

export default Categorylist
