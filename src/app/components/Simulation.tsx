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
    <motion.section
      className="relative w-full"
      style={{ backgroundColor: "rgba(41,88,156,0.06)" }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <motion.h2
          className="font-bold tracking-tight text-[#143E70] text-[32px] lg:text-[45px]"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          VR Simulation <span className="text-[#A02A42]">Development</span>
        </motion.h2>

        <motion.div
          className="mt-14 flex flex-col lg:flex-row gap-4 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } } }}
        >
          <motion.div
            className="rounded-3xl border border-[#3E5F88] bg-[#F4F4F4] px-6 py-8 lg:px-10 lg:py-14 lg:basis-[55%]"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <motion.p
              className="text-[#000] font-bold text-[16px] lg:text-[20px] leading-snug"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            >
              We can transform the way people experience, train, and interact with
              your business.
            </motion.p>

            <motion.p
              className="mt-8 text-[#000] text-[16px] lg:text-[20px]  leading-snug"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            >
              We design custom VR solutions that bring real-world scenarios into
              immersive virtual environments, enabling safer training, better
              visualization, and more engaging customer experiences. Our VR
              development empowers businesses to reduce costs, minimize risks,
              and unlock new sales opportunities.
            </motion.p>

            <motion.ul
              className="mt-6 space-y-3 list-disc text-[#000] text-[16px] lg:text-[20px] pl-10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
            >
              <motion.li variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Industrial Equipment Training</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Safety & Compliance Drills</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Product & Process Visualization</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Virtual Property Tours</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, y: -10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Demonstrations & Presentations</motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="flex justify-center lg:mx-0 mx-auto  h-full lg:basis-[45%]"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <motion.img
              src="/Black and White  X Letter Digital Company Logo.png"
              alt="VR simulation illustration"
              className="w-full max-w-[520px] lg:mx-0 mx-auto h-full object-cover select-none"
              loading="lazy"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </div>



      <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <motion.div
          className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between lg:h-[560px] xl:h-[607px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Left: VR.svg 70% width, full height */}
          <motion.div
            className="order-1 overflow-visible lg:order-none w-full lg:basis-[60%] lg:h-full"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delayChildren: 0.1 } } }}
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
                className="w-[100%] lg:mx-0 mx-auto max-w-[751px] h-full object-cover"
                loading="lazy"
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              />
            </div>
          </motion.div>

          {/* Right: 30% width column with two equal-height images */}
          <motion.div
            className="order-2 lg:basis-[30%] flex flex-col gap-4 lg:gap-6 lg:h-full min-h-0"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.12 } } }}
          >
            <div className="flex-1 min-h-0">
              <motion.img
                src="/Black and White  X Letter Digital Company Logo (5).svg"
                alt="VR preview one"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            <div className="flex-1 min-h-0">
              <motion.img
                src="/Black and White  X Letter Digital Company Logo (6).svg"
                alt="VR preview two"
                className="w-full h-full object-cover select-none"
                loading="lazy"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
</div>


      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
          <motion.h2
            className="font-bold tracking-tight text-[#143E70] text-[32px] lg:text-[45px]"
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            CUSTOMISED <span className="text-[#A02A42]">AI AGENTS</span>
          </motion.h2>

          <motion.div
            className="mt-14 flex flex-col lg:flex-row gap-4 items-start"
          >
            {/* Left Content Card */}
            <motion.div
              className="rounded-3xl  bg-white px-6 py-8 lg:px-10 lg:py-14 lg:basis-[45%]"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            >
              <motion.p
                className="text-[#000] font-bold text-[16px] lg:text-[25px] leading-snug"
                initial={{ opacity: 0, y: -14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                Empowering businesses with intelligent, autonomous digital agents.
              </motion.p>

              <motion.p
                className="mt-8 text-[#000] text-[16px] lg:text-[20px] leading-snug"
                initial={{ opacity: 0, y: -14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
              >
                We specialize in creating Agentic AI solutions that go beyond
                traditional automation. Our AI agents are designed to think,
                decide, and act independently, helping businesses streamline
                operations, reduce manual workload, and make data-driven
                decisions in real time.
              </motion.p>

              <motion.p
                className="mt-6 text-[#000] text-[16px] lg:text-[20px] leading-snug"
                initial={{ opacity: 0, y: -14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
              >
                AI agents adapt, learn, and evolve with your business processes,
                bringing true intelligence and scalability to your digital
                ecosystem.
              </motion.p>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              className="flex justify-center lg:mx-0 mx-auto  lg:w-auto w-fit h-full lg:basis-[55%]"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
            >
              <motion.img
                src="/Black and White  X Letter Digital Company Logo (2).svg"
                alt="AI agents illustration"
                className="w-full max-w-[470px] lg:mx-0 mx-auto  h-full object-cover select-none"
                loading="lazy"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
          {/* Left black statement panel (original text) */}
            <div className="text-white rounded-r-[28px] lg:rounded-l-none rounded-l-[28px] lg:rounded-r-[40px] flex justify-center px-6 py-10 lg:px-10 lg:py-14 lg:basis-[45%]">
             <motion.div
               className="flex flex-col "
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.2 }}
               variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
             >
               <motion.h3 className=" leading-[1.1]  font-bold text-[36px] lg:text-[56px]" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>WE CAN</motion.h3>
               <motion.h3 className=" leading-[1.1]  font-bold text-[36px] lg:text-[56px]" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>MAKE YOUR</motion.h3>
               <motion.h3 className=" leading-[1.1]  font-bold text-[36px] lg:text-[56px]" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>VISION TURN</motion.h3>
               <motion.h3 className=" leading-[1.1]  font-bold text-[36px] lg:text-[56px]" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>INTO REALITY</motion.h3>
             </motion.div>
          </div>

          {/* Right form area - minimalist underline inputs on blue bg */}
            <div className="lg:basis-[55%] w-full">
             <motion.form
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
             {/* Name */}
                <motion.div className="flex flex-col gap-1 col-span-1" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                 <label className="text-white/90 text-[15px] lg:text-[16px] font-medium leading-tight">Name</label>
                 <input type="text" placeholder="John Doe" className="w-full h-10 bg-transparent text-white placeholder:text-white/60 px-1.5 border-b border-white/40 focus:border-white focus:outline-none transition" />
              </motion.div>

             {/* Work Email */}
                <motion.div className="flex flex-col gap-1 col-span-1" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                 <label className="text-white/90 text-[15px] lg:text-[16px] font-medium leading-tight">Work Email</label>
                 <input type="email" placeholder="name@company.com" className="w-full h-10 bg-transparent text-white placeholder:text-white/60 px-1.5 border-b border-white/40 focus:border-white focus:outline-none transition" />
              </motion.div>

             {/* Contact Number */}
                <motion.div className="flex flex-col gap-1 col-span-1" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                 <label className="text-white/90 text-[15px] lg:text-[16px] font-medium leading-tight">Contact Number</label>
                 <input type="tel" placeholder="+1 555 000 1234" className="w-full h-10 bg-transparent text-white placeholder:text-white/60 px-1.5 border-b border-white/40 focus:border-white focus:outline-none transition" />
              </motion.div>

             {/* Country */}
                <motion.div className="flex flex-col gap-1 col-span-1" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                 <label className="text-white/90 text-[15px] lg:text-[16px] font-medium leading-tight">Country</label>
                 <input type="text" placeholder="United States" className="w-full h-10 bg-transparent text-white placeholder:text-white/60 px-1.5 border-b border-white/40 focus:border-white focus:outline-none transition" />
              </motion.div>

             {/* Focused Solution */}
                <motion.div className="flex flex-col gap-1 col-span-1 lg:col-span-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                 <label className="text-white/90 text-[15px] lg:text-[16px] font-medium leading-tight">Focused Solution</label>
                 <input type="text" placeholder="e.g., VR Training, AI Agent, Visualization" className="w-full h-10 bg-transparent text-white placeholder:text-white/60 px-1.5 border-b border-white/40 focus:border-white focus:outline-none transition" />
              </motion.div>

             {/* Brief */}
                <motion.div className="flex flex-col gap-1 col-span-1 lg:col-span-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                 <label className="text-white/90 text-[15px] lg:text-[16px] font-medium leading-tight">Give Us A Brief About Your Idea</label>
                 <textarea rows={3} placeholder="Tell us about your goals, timelines, and success criteria" className="w-full bg-transparent text-white placeholder:text-white/60 px-1.5 py-2 border-b border-white/40 focus:border-white focus:outline-none transition" />
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row gap-3 sm:justify-end pt-3 col-span-1 lg:col-span-2" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
               <motion.button type="reset" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} className="px-5 h-10 rounded-full text-[15px] lg:text-[16px] font-semibold tracking-wide text-[#29589C] bg-white/95 hover:bg-white transition cursor-pointer">
                  Clear
             </motion.button>
               <motion.button type="submit" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} className="px-7 h-10 rounded-full text-[15px] lg:text-[16px] font-semibold tracking-wide text-[#29589C] bg-white/95 hover:bg-white transition cursor-pointer">
                  Submit
             </motion.button>
           </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
      
      </motion.section>

    

  
    </>
  )
}

export default Simulation