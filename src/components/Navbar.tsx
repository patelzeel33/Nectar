"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  const navbarVariants: Variants = {
    hidden: {
      y: -120,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`fixed py-1 top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] max-w-full rounded-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl border border-red-100/60 shadow-2xl shadow-red-500/10"
          : "bg-white/80 backdrop-blur-xl border border-red-50/50 shadow-lg shadow-red-500/5"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate={showNavbar ? "visible" : "hidden"}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/5 via-red-500/3 to-red-400/5 pointer-events-none" />

      <div className="relative px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="logo"
              height={75}
              width={200}
              className="h-[65px] w-[100px] py-1 md:h-[75px] md:w-[100px]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-1">

            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative group px-4 py-2 text-[16px] font-medium text-slate-700 hover:text-slate-900 transition-all duration-300"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-400/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-500 group-hover:w-6 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}

            {/* Contact Button */}
            <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-slate-200/60">
              <Link href="/contact">
                <motion.button
                  className="px-6 py-2 cursor-pointer text-[16px] font-medium text-white bg-gradient-to-r from-red-400 to-red-500 rounded-full shadow-lg shadow-red-400/25 hover:shadow-red-400/40 hover:from-red-500 hover:to-red-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.button>
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="relative p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-red-50/50 transition-all duration-300"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`absolute top-full left-0 right-0 mt-2 backdrop-blur-2xl border shadow-2xl overflow-hidden rounded-2xl ${
              scrolled
                ? "bg-white/90 border-red-100/60 shadow-red-500/10"
                : "bg-white/90 border-red-50/50 shadow-red-500/5"
            }`}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400/5 via-red-500/3 to-red-400/5 pointer-events-none" />

            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-red-400/10 hover:to-red-500/10 transition-all duration-300"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-slate-200/60 flex flex-col space-y-3">
                <Link href="/contact">
                  <motion.button
                    className="w-full cursor-pointer text-sm font-medium text-white bg-gradient-to-r from-red-400 to-red-500 px-4 py-3 rounded-xl shadow-lg shadow-red-400/25 hover:from-red-500 hover:to-red-600 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
