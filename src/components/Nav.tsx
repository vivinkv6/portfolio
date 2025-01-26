"use client";
import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "@/lib/data";
import { mainFont, paraContent } from "@/app/font";

import dynamic from "next/dynamic";

const GitHubButton=dynamic(() => import("./button/Github"),{ssr:false})

const navVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const NavItem = React.memo(({ item, className }: { 
  item: { id: number | string; name: string; link: string }, 
  className?: string 
}) => (
  <motion.li
    key={item.id}
    whileHover={{ scale: 1.1 }}
    className={`cursor-pointer hover:text-blue-400 transition-colors text-white ${className}`}
  >
    <Link href={item.link}>{item.name}</Link>
  </motion.li>
));

NavItem.displayName = 'NavItem';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const navItemsDesktop = useMemo(() => 
    navLinks?.links?.map(item => (
      <NavItem 
        key={item.id} 
        item={item} 
        className={`text-lg font-[400] ${mainFont.className}`} 
      />
    )), 
    [navLinks?.links]
  );

  const navItemsMobile = useMemo(() => 
    navLinks?.links.map(item => (
      <NavItem 
        key={item.id} 
        item={item} 
        className={`list-none ms-6 ${paraContent.className}`} 
      />
    )), 
    [navLinks?.links]
  );

  return (
    <nav
    className="fixed top-0 left-0 right-0 z-20 bg-gray-950 border-b-2 border-b-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm p-3"
    role="navigation"
    aria-label="Main Navigation"
  >
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-4" aria-label="Go to homepage">
        <span className={`text-3xl font-bold text-white ${mainFont.className}`}>
          {navLinks?.title}
        </span>
      </Link>
  
      {/* Desktop Menu */}
      <ul className="hidden md:flex md:items-center space-x-6">
        {navItemsDesktop}
        <Suspense fallback={<div>Loading...</div>}>
          <GitHubButton />
        </Suspense>
      </ul>
  
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"}
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  
    {/* Mobile Menu */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          id="mobile-menu"
          variants={navVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="md:hidden bg-gray-950 py-2"
          onClick={toggleMenu}
          role="menu"
          aria-labelledby="mobile-menu"
        >
          {navItemsMobile}
          <motion.li
            whileHover={{ scale: 1.1 }}
            className={`cursor-pointer hover:text-blue-400 transition-colors list-none ms-6 text-white ${paraContent.className}`}
          >
            <GitHubButton />
          </motion.li>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
  
  );
};

export default React.memo(Navbar);