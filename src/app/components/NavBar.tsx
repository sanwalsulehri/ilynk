"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '/', label: '', withIcon: true },
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
        <nav className="hidden absolute right-0 lg:block">
          <ul className="flex items-center gap-8 rounded-l-full bg-[#153F74] px-10 py-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-2xl font-bold text-white transition-opacity hover:opacity-80"
                >
                  {item.withIcon && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="currentColor"
                      className="h-10 inline-block shrink-0 w-10"
                      aria-hidden
                    >
                      <path d="M12 3.172 2.293 12.88a1 1 0 0 0 1.414 1.414L5 13.001V20a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-6.999l1.293 1.293a1 1 0 0 0 1.414-1.414L12 3.172z" />
                    </svg>
                  )}
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
          <ul className="flex flex-col gap-3 rounded-2xl bg-[#153F74] p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-2xl font-bold text-white hover:bg-white/10"
                >
                  {item.withIcon && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden
                    >
                      <path d="M12 3.172 2.293 12.88a1 1 0 0 0 1.414 1.414L5 13.001V20a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-6.999l1.293 1.293a1 1 0 0 0 1.414-1.414L12 3.172z" />
                    </svg>
                  )}
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