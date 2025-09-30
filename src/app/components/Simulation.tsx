"use client"
import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Simulation = () => {
  const vrContainerRef = useRef<HTMLDivElement | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 140, damping: 16, mass: 0.25 })
  const springY = useSpring(mouseY, { stiffness: 140, damping: 16, mass: 0.25 })

  const handleParallaxMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = vrContainerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(relX * 14)
    mouseY.set(relY * 10)
  }

  const resetParallax = () => {
    mouseX.set(0)
    mouseY.set(0)
  }
  return (
    <>
    <section
      className="relative w-full"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 70%, rgba(220,234,253,0.5) 85%, #DCEAFD 100%)",
      }}
    >
    </section>

    <motion.section
      className="relative w-full"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(220,234,253,0) 0%, rgba(220,234,253,0.25) 35%, #DCEAFD 50%, #29589C 75%, #29589C 100%)",
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.h2
          className="font-bold tracking-tight text-[#143E70] text-[36px] md:text-[60px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          VR Simulation <span className="text-[#A02A42]">Development</span>
        </motion.h2>

        <motion.div
          className="mt-14 flex flex-col md:flex-row gap-4 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            className="rounded-3xl border border-[#3E5F88] bg-[#F4F4F4]  px-6 py-8 md:px-10 md:py-14 md:basis-[55%]"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            <p className="text-[#000] font-bold text-[18px] md:text-[27px] leading-snug">
              We can transform the way people experience, train, and interact with
              your business.
            </p>

            <p className="mt-8 text-[#000] text-[18px] md:text-[27px]  leading-snug">
              We design custom VR solutions that bring real-world scenarios into
              immersive virtual environments, enabling safer training, better
              visualization, and more engaging customer experiences. Our VR
              development empowers businesses to reduce costs, minimize risks,
              and unlock new sales opportunities.
            </p>

           
            <ul className="mt-6 space-y-3 list-disc text-[#000] text-[18px] md:text-[27px] pl-10">
              <li>Industrial Equipment Training</li>
              <li>Safety & Compliance Drills</li>
              <li>Product & Process Visualization</li>
              <li>Virtual Property Tours</li>
              <li>Demonstrations & Presentations</li>
            </ul>
          </motion.div>

          <motion.div
            className="flex justify-center h-full md:basis-[45%]"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <motion.img
              src="/Black and White  X Letter Digital Company Logo (1).svg"
              alt="VR simulation illustration"
              className="w-full max-w-[520px]  h-full object-cover select-none"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>



      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between md:h-[560px] lg:h-[607px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Left: VR.svg 70% width, full height */}
          <motion.div
            className="order-1 overflow-visible md:order-none w-full md:basis-[60%] md:h-full"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            <div
              className="w-full h-full overflow-visible"
              ref={vrContainerRef}
              onMouseMove={handleParallaxMove}
              onMouseLeave={resetParallax}
            >
              <motion.img
                src="/VR.svg"
                alt="VR graphic"
                className="w-[100%] max-w-[751px] h-full object-cover"
                loading="lazy"
                style={{ x: springX, y: springY }}
              />
            </div>
          </motion.div>

          {/* Right: 30% width column with two equal-height images */}
          <motion.div
            className="order-2 md:basis-[30%] flex flex-col gap-4 md:gap-6 md:h-full min-h-0"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            <div className="flex-1 min-h-0">
              <motion.img
                src="/Black and White  X Letter Digital Company Logo (5).svg"
                alt="VR preview one"
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>

            <div className="flex-1 min-h-0">
              <motion.img
                src="/Black and White  X Letter Digital Company Logo (6).svg"
                alt="VR preview two"
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>


      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <motion.h2
            className="font-bold tracking-tight text-[#000] text-[36px] md:text-[60px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            CUSTOMISED <span className="text-[#A02A42]">AI AGENTS</span>
          </motion.h2>

          <motion.div
            className="mt-14 flex flex-col md:flex-row gap-4 items-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Left Content Card */}
            <motion.div
              className="rounded-3xl  bg-white px-6 py-8 md:px-10 md:py-14 md:basis-[45%]"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <p className="text-[#000] font-bold text-[18px] md:text-[27px] leading-snug">
                Empowering businesses with intelligent, autonomous digital agents.
              </p>

              <p className="mt-8 text-[#000] text-[18px] md:text-[27px] leading-snug">
                We specialize in creating Agentic AI solutions that go beyond
                traditional automation. Our AI agents are designed to think,
                decide, and act independently, helping businesses streamline
                operations, reduce manual workload, and make data-driven
                decisions in real time.
              </p>

              <p className="mt-6 text-[#000] text-[18px] md:text-[27px] leading-snug">
                AI agents adapt, learn, and evolve with your business processes,
                bringing true intelligence and scalability to your digital
                ecosystem.
              </p>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              className="flex justify-center h-full md:basis-[55%]"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <motion.img
                src="/Black and White  X Letter Digital Company Logo (2).svg"
                alt="AI agents illustration"
                className="w-full max-w-[720px] h-full object-cover select-none"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3: Contact with deepening blue and fade at end */}
      <motion.section
        className="relative w-full"
        style={{
          backgroundColor: "#29589C",
        }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mx-auto 2xl:max-w-7xl pl-4 pr-4 md:pl-4 lg:pr-4 lg:pl-0 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
          {/* Left black statement panel */}
            <div className="bg-black text-white rounded-r-[28px] md:rounded-r-[40px] px-6 py-10 md:px-10 md:py-14 md:basis-[45%]">
             <motion.div
               className="flex flex-col gap-6 md:gap-10"
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.2 }}
               variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
             >
               <motion.h3 className=" leading-[1.1] tracking-tight text-[40px] md:text-[64px]" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>WE CAN</motion.h3>
               <motion.h3 className=" leading-[1.1] tracking-tight text-[40px] md:text-[64px]" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>MAKE YOUR</motion.h3>
               <motion.h3 className=" leading-[1.1] tracking-tight text-[40px] md:text-[64px]" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>VISION TURN</motion.h3>
               <motion.h3 className=" leading-[1.1] tracking-tight text-[40px] md:text-[64px]" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>INTO REALITY</motion.h3>
             </motion.div>
          </div>

          {/* Right form area */}
            <div className="md:basis-[55%] w-full">
             <motion.form
               className="flex flex-col gap-6 text-white"
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.2 }}
               variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
             >
              {/* Name */}
               <motion.div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <label className="md:w-[280px] text-[23px] font-semibold leading-tight">Name</label>
                <input className="flex-1 w-full rounded-[10px] bg-white text-[#0F2E57] placeholder:text-[#6B7A90] px-4 pl-4 py-3 text-[18px] md:text-[20px] outline-none" placeholder="Your name" />
               </motion.div>

              {/* Work Email */}
               <motion.div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <label className="md:w-[280px] text-[23px] font-semibold leading-tight">Work Email</label>
                <input className="flex-1 w-full rounded-[10px] bg-white text-[#0F2E57] placeholder:text-[#6B7A90] px-4 pl-4 py-3 text-[18px] md:text-[20px] outline-none" placeholder="name@company.com" />
               </motion.div>

              {/* Contact Number */}
               <motion.div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <label className="md:w-[280px] text-[23px] font-semibold leading-tight">Contact Number</label>
                <input className="flex-1 w-full rounded-[10px] bg-white text-[#0F2E57] placeholder:text-[#6B7A90] px-4 pl-4 py-3 text-[18px] md:text-[20px] outline-none" placeholder="+1 555 000 0000" />
               </motion.div>

              {/* Country */}
               <motion.div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <label className="md:w-[280px] text-[23px] font-semibold leading-tight">Country</label>
                <input className="flex-1 w-full rounded-[10px] bg-white text-[#0F2E57] placeholder:text-[#6B7A90] px-4 pl-4 py-3 text-[18px] md:text-[20px] outline-none" placeholder="Country" />
               </motion.div>

              {/* Focused Solution */}
               <motion.div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <label className="md:w-[280px] text-[23px] font-semibold leading-tight">Focused Solution</label>
                <input className="flex-1 w-full rounded-[10px] bg-white text-[#0F2E57] placeholder:text-[#6B7A90] px-4 pl-4 py-3 text-[18px] md:text-[20px] outline-none" placeholder="e.g., VR Simulation, AI Agent" />
               </motion.div>

              {/* Brief */}
               <motion.div className="flex flex-col gap-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <label className="text-[23px] font-semibold leading-tight">Give Us A Brief About Your Idea</label>
                <textarea rows={6} className="w-full rounded-[10px] bg-white text-[#0F2E57] placeholder:text-[#6B7A90] px-4 py-3 md:py-4 text-[18px] md:text-[20px] outline-none" placeholder="Tell us a little about your project" />
               </motion.div>

               <motion.div className="flex flex-col sm:flex-row gap-4 sm:justify-end pt-4" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
                <button type="reset" className="px-8 md:px-12 h-[52px] md:h-[56px] rounded-full text-[22px] md:text-[28px] font-semibold uppercase tracking-[0.2em] text-[#143E70] bg-gradient-to-b from-[#F3F6FA] to-[#CAD6E4] shadow-[0_14px_28px_rgba(0,0,0,0.3)] border border-[#9FB3CA]">
                  CLEAR
                </button>
                <button type="submit" className="px-8 md:px-12 h-[52px] md:h-[56px] rounded-full text-[22px] md:text-[28px] font-semibold uppercase tracking-[0.2em] text-[#143E70] bg-gradient-to-b from-[#F3F6FA] to-[#CAD6E4] shadow-[0_14px_28px_rgba(0,0,0,0.3)] border border-[#9FB3CA]">
                  SUBMIT
                </button>
               </motion.div>
             </motion.form>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-24 lg:h-20"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(41,88,156,0) 0%, rgba(255,255,255,0.7) 60%, #FFFFFF 100%)",
        }}
      />
      </motion.section>

    

  
    </>
  )
}

export default Simulation