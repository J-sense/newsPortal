import Link from 'next/link'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
const Navbar = () => {
  return (
    <header className='py-4 shadow-md '>
        <nav className='flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between'>

      <div>
        <Link href="/" className=''>daily news</Link>
      </div>
      <div>
      <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className='flex items-center'>
                <NavigationMenuLink href='/'>News</NavigationMenuLink>
                <NavigationMenuLink href='/services'> 
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <NavigationMenuLink>Home</NavigationMenuLink>
                        <NavigationMenuLink>Home</NavigationMenuLink>
                        </NavigationMenuContent>  

                </NavigationMenuLink>
                <NavigationMenuLink href="/about">About</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
           </NavigationMenu>


      </div>
      <div></div>
        </nav>
    </header>
  )
}

export default Navbar
