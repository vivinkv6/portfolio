'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '@/lib/data';

const AboutPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    
      <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-sm p-3">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            {/* <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full overflow-hidden"
            > */}
              {/* <Image
                src={Avatar}
                alt="Vivin KV"
                className='rounded-full'
              /> */}
            {/* </motion.div> */}
            <span className="text-xl font-bold text-white">VIVIN KV</span>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer hover:text-blue-400 transition-colors text-white"
              >
              <Link href={item.link}>{item.name}</Link>  
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-gray-800 py-2"
            >
               {navLinks.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer hover:text-blue-400 transition-colors list-none ms-6 text-white"
              >
              <Link href={item.link}>{item.name}</Link>  
              </motion.li>
            ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

     
 
  );
};

export default AboutPage;