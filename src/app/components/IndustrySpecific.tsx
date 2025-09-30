import React from 'react'

const IndustrySpecific = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Main Heading */}
        <h2 className="font-bold tracking-tight uppercase text-black text-[36px] md:text-[60px] leading-tight">
          industry specific <span className="text-[#A02A42]">saas</span>
        </h2>

        {/* Sub Heading */}
        <h3 className="mt-8 font-bold text-[#143E70] text-[24px] md:text-[32px] leading-snug ">
          Maintainer – Complete B2B Equipment Service Business Management
        </h3>

        {/* Description */}
        <p className="mt-6 text-black text-[18px] md:text-[27px] ">
          Maintainer is a complete B2B equipment service management solution designed for
          companies managing PMC contracts, SLA-driven services, complaints, and equipment
          maintenance. It streamlines the entire service and parts supply process, from contract
          creation to technical job completion and financial reconciliation.
        </p>

        {/* Feature Lists */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ul className="list-disc pl-6 md:pl-8 space-y-3 text-black text-[18px] md:text-[27px]">
            <li>Contract Management</li>
            <li>Equipment Management</li>
            <li>Employee Management</li>
            <li>Technical Job Management</li>
            <li>Quotation Management</li>
          </ul>
          <ul className="list-disc pl-6 md:pl-8 space-y-3 text-black text-[18px] md:text-[27px]">
            <li>Order Management</li>
            <li>Parts &amp; Inventory Management</li>
            <li>Digital Order Processing</li>
            <li>Accounts Management</li>
            <li>Logistics &amp; Operations Management</li>
          </ul>
        </div>

        {/* Moda Flow Section (copied styling, new content) */}
        <h3 className="mt-16 font-bold text-[#143E70] text-[24px] md:text-[32px] leading-snug ">
          MODA FLOW – Complete Fashion Business Management Solution
        </h3>
        <p className="mt-6 text-black text-[18px] md:text-[27px] ">
          ModaFlow is a complete fashion business management solution designed for fashion brands and
          retailers. From concept to customer, ModaFlow streamlines design, production, sales, and
          store operations in one unified platform. Some of the features:
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ul className="list-disc pl-6 md:pl-8 space-y-3 text-black text-[18px] md:text-[27px]">
            <li>Design-to-Product Workflow</li>
            <li>Centralized Order Management</li>
            <li>Customer Management</li>
            <li>Unified Web &amp; Social Management</li>
          </ul>
          {/* Right list aligned with the left list on all breakpoints */}
          <ul className="list-disc pl-6 md:pl-8 space-y-3 text-black text-[18px] md:text-[27px]">
            <li>Employee &amp; Vendor Management</li>
            <li>Inventory &amp; POS Integration</li>
            <li>Store Performance Dashboards</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default IndustrySpecific