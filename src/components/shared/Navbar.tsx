'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { usePathname } from 'next/navigation'
import { ThemeContext } from '@/app/context/Themecontext'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State to manage mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // Toggle menu open/close
  }
const {isdark,toggletheme}:any = useContext(ThemeContext)
  return (
    <header className='py-4 shadow-md'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Logo or Brand Name */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className='text-xl font-bold'>daily news</Link>
        </div>

        {/* Navigation Menu for Large Screens */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavigationMenu className='flex items-center'>
            <NavigationMenuList className="flex items-center space-x-8">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/news" className={`${pathname === '/news' ? 'text-red-500 font-bold' : 'text-gray-500'} hover:underline`}>News</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className={`${pathname === '/services' ? 'text-red-500 font-bold' : 'text-gray-500'} hover:underline`}>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="absolute mt-2 p-4 bg-white shadow-lg rounded-lg">
                  <ul>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/service/webdevelopment" className="block px-4 py-2 hover:bg-gray-100">Web Development</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/service/appdevelopment" className="block px-4 py-2 hover:bg-gray-100">App Development</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={`${pathname === '/about' ? 'text-red-500 font-bold' : 'text-gray-500'} hover:underline`}>About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={`${pathname === '/contact' ? 'text-red-500 font-bold' : 'text-gray-500'} hover:underline`}>Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Switch, Button and Hamburger Menu for Small Screens */}
        <div className="flex-1 flex justify-end items-center gap-3">
          <div className="hidden md:flex items-center gap-3" onClick={toggleMenu}>
            <Switch />
            <Button variant="outline" className='bg-black text-white'>Login</Button>
          </div>

          {/* Hamburger Menu Icon for Small Screens */}
          <div className='block lg:hidden'>
            <Button variant="outline" onClick={toggleMenu}>
              {isMenuOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='lg:hidden bg-white shadow-lg py-4'>
          <div className="flex justify-center flex-col items-center space-y-4">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-center space-y-4">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/news" className="hover:underline">News</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="hover:underline">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Switcher and Login Button for Small Screens */}
            <div className='flex items-center gap-3 mt-4'>
              <Switch />
              <Button variant="outline" className='bg-black text-white'>Login</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
