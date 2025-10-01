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
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.ul
            className="list-disc pl-6 lg:pl-[10%] space-y-3 text-black text-[18px] lg:text-[27px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Contract Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Equipment Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Employee Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Technical Job Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Quotation Management</motion.li>
          </motion.ul>
          <motion.ul
            className="list-disc pl-6  space-y-3 text-black text-[18px] lg:text-[27px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } }}
          >
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Order Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Parts &amp; Inventory Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Digital Order Processing</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Accounts Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Logistics &amp; Operations Management</motion.li>
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
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.ul
            className="list-disc pl-6 lg:pl-[10%] space-y-3 text-black text-[18px] lg:text-[27px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Design-to-Product Workflow</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Centralized Order Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Customer Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Unified Web &amp; Social Management</motion.li>
          </motion.ul>
          {/* Right list aligned with the left list on all breakpoints */}
          <motion.ul
            className="list-disc pl-6  space-y-3 text-black text-[18px] lg:text-[27px]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } }}
          >
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Employee &amp; Vendor Management</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Inventory &amp; POS Integration</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Store Performance Dashboards</motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default IndustrySpecific