"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 pb-4">
        <div className="flex justify-start gap-10 items-center">
          {/* Logo */}
          <div className="text-xl font-bold h-8 overflow-hidden" >
            <Link href="/" className="pt-0">
            <Image  
                          className="animate-pulse"
                          src="/logo.webp"
                          alt="Fruitoholic logomark"
                          width={60}
                          height={60}
                        /> 
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 pt-4">
            
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
            <Link href="/shop" className="text-gray-600 hover:text-blue-600 font-medium">Shop</Link>
          </nav>

         
        </div>

      </div>
    </header>
  );
};

export default Header;