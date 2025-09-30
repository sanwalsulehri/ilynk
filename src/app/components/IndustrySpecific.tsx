"use client"
import React from 'react'
import { motion } from 'framer-motion'

const IndustrySpecific = () => {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        {/* Main Heading */}
        <motion.h2
          className="font-bold tracking-tight uppercase text-black text-[36px] lg:text-[60px] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          industry specific <span className="text-[#A02A42]">saas</span>
        </motion.h2>

        {/* Sub Heading */}
        <motion.h3
          className="mt-8 font-bold text-[#143E70] text-[24px] lg:text-[32px] leading-snug "
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Maintainer – Complete B2B Equipment Service Business Management
        </motion.h3>

        {/* Description */}
        <motion.p
          className="mt-6 text-black text-[18px] lg:text-[27px] "
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Maintainer is a complete B2B equipment service management solution designed for
          companies managing PMC contracts, SLA-driven services, complaints, and equipment
          maintenance. It streamlines the entire service and parts supply process, from contract
          creation to technical job completion and financial reconciliation.
        </motion.p>

        {/* Feature Lists */}
        <motion.div
          className="mt-8 grid gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.ul
            className="list-disc pl-6 lg:pl-8 space-y-3 text-black text-[18px] lg:text-[27px]"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <li>Contract Management</li>
            <li>Equipment Management</li>
            <li>Employee Management</li>
            <li>Technical Job Management</li>
            <li>Quotation Management</li>
          </motion.ul>
          <motion.ul
            className="list-disc pl-6 lg:pl-8 space-y-3 text-black text-[18px] lg:text-[27px]"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <li>Order Management</li>
            <li>Parts &amp; Inventory Management</li>
            <li>Digital Order Processing</li>
            <li>Accounts Management</li>
            <li>Logistics &amp; Operations Management</li>
          </motion.ul>
        </motion.div>

        {/* Moda Flow Section (copied styling, new content) */}
        <motion.h3
          className="mt-16 font-bold text-[#143E70] text-[24px] lg:text-[32px] leading-snug "
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          MODA FLOW – Complete Fashion Business Management Solution
        </motion.h3>
        <motion.p
          className="mt-6 text-black text-[18px] lg:text-[27px] "
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          ModaFlow is a complete fashion business management solution designed for fashion brands and
          retailers. From concept to customer, ModaFlow streamlines design, production, sales, and
          store operations in one unified platform. Some of the features:
        </motion.p>

        <motion.div
          className="mt-8 grid gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.ul
            className="list-disc pl-6 lg:pl-8 space-y-3 text-black text-[18px] lg:text-[27px]"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <li>Design-to-Product Workflow</li>
            <li>Centralized Order Management</li>
            <li>Customer Management</li>
            <li>Unified Web &amp; Social Management</li>
          </motion.ul>
          {/* Right list aligned with the left list on all breakpoints */}
          <motion.ul
            className="list-disc pl-6 lg:pl-8 space-y-3 text-black text-[18px] lg:text-[27px]"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <li>Employee &amp; Vendor Management</li>
            <li>Inventory &amp; POS Integration</li>
            <li>Store Performance Dashboards</li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default IndustrySpecific