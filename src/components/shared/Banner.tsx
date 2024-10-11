import React from 'react'
import bannerimg from "@/assests/banner.jpg"
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='bg-slate-100 rounded-lg shadow-md'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-5'>
            <div>
              <Image src={bannerimg} alt='banner img' className='rounded-lg'/>
            </div>
            <div className='space-y-6'>
                <h1 className='text-sm text-gray-400  uppercase'>Technology</h1>
                <h1 className='text-3xl font-bold text-slate-950' >
                  OpenAi Is Growing Fast And Burning Through Piles Of Monery
                </h1>
                <p className='text-sm tracking-tighter text-gray-500'>
                  OpenAI is an advanced artificial intelligence research organization focused on creating and promoting friendly AI that benefits humanity. Founded in 2015, OpenAI's mission is to ensure that artificial general intelligence (AGI) is aligned with human values and can be used for the common good. The organization has developed cutting-edge technologies like GPT (Generative Pre-trained Transformer) models <br />
                <br />
                  OpenAI emphasizes safety and ethical AI development, fostering transparency and collaboration with researchers worldwide. Its vision extends to making AI widely accessible, ensuring the tools are responsibly developed to enhance human capabilities 
                </p>
                    
            </div>

        </div>
    </div>
  )
}

export default Banner
