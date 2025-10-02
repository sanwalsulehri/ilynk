"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Home'},
  { href: '/about', label: 'About Us' },
  { href: '/iiot', label: 'IIoT Systems' },
  { href: '/saas', label: 'SaaS' },
  { href: '/vr-simulation', label: 'VR Simulation' },
  { href: '/ai-agents', label: 'AI Agents' },
]

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen((prev) => !prev)
  const closeMenu = () => setOpen(false)

  return (
    <header className="w-full relative py-8 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          {/* Placeholder logo circle. Replace with <Image> if you have a file. */}
          <span className="inline-block h-9 w-9 rounded-full bg-[#153F74]" aria-hidden />
          <span className="text-2xl font-bold text-[#153F74]">iLynk</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 px-0 py-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-lg font-semibold text-[#153F74] transition-colors hover:text-[#0f2e56]"
                >
                 
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggleMenu}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#153F74] text-[#153F74]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} lg:hidden overflow-hidden transition-all duration-300`}
      >
        <nav className="px-4 pb-4 ">
          <ul className="flex flex-col gap-2 rounded-2xl bg-white p-3 border border-[#153F74]/30 shadow-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-[#153F74] hover:bg-[#153F74]/5"
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar