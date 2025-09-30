"use client"
import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

const TalktoUs = () => {
  return (
    <motion.section
      className="relative w-full overflow-hidden rounded-[12px] bg-white"
      aria-labelledby="talk-to-us-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="mx-auto grid max-w-[1200px] grid-cols-1 lg:grid-cols-2" variants={stagger}>
        {/* Left: real map image from the internet */}
        <motion.div className="relative h-[220px] w-full overflow-hidden bg-neutral-100 sm:h-[280px] lg:h-full" variants={fadeUp}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World map"
            className="h-full w-full object-contain p-5 lg:p-8"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Right: content */}
        <motion.div className="relative flex flex-col gap-6 px-5 py-8 lg:px-8 lg:py-16" variants={stagger}>
          <motion.h2
            id="talk-to-us-heading"
            className="text-[32px] font-extrabold tracking-[2px] text-black lg:text-[48px] lg:text-[66px] [text-shadow:0_3px_0_rgba(0,0,0,0.15)]"
            variants={fadeUp}
          >
            TALK TO US
          </motion.h2>

          <dl className="grid gap-3">
            <motion.div className="grid lg:text-[19px] grid-cols-[120px_1fr] items-start gap-3" variants={fadeUp}>
              <dt className="font-bold tracking-[0.5px] text-neutral-900">ADDRESS:</dt>
              <dd className="m-0 text-neutral-800">71-75 Shelton St, London WC2H 9JQ</dd>
            </motion.div>
            <motion.div className="grid lg:text-[19px] grid-cols-[120px_1fr] items-start gap-3" variants={fadeUp}>
              <dt className="font-bold tracking-[0.5px] text-neutral-900">OFFICE:</dt>
              <dd className="m-0 text-neutral-800">(04) 298 3985 2092</dd>
            </motion.div>
            <motion.div className="grid  lg:text-[19px] grid-cols-[120px_1fr] items-start gap-3" variants={fadeUp}>
              <dt className="font-bold tracking-[0.5px] text-neutral-900">WHATSAAP:</dt>
              <dd className="m-0 text-neutral-800">+447441396995</dd>
            </motion.div>
            <motion.div className="grid  lg:text-[19px] grid-cols-[120px_1fr] items-start gap-3" variants={fadeUp}>
              <dt className="font-bold tracking-[0.5px] text-neutral-900">EMAIL:</dt>
              <dd className="m-0 text-neutral-800">info@ilynk.co</dd>
            </motion.div>
          </dl>

          <motion.div className="mt-2 flex gap-8" variants={fadeUp}>
            <a
              className=""
              href="#"
            
            >
                <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 ' width="128" height="128" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>
             
            </a>

            <a
              className=""
              href="#"
            
            >
              
              <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-[#0866FF] ' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
            </a>

            <a
              className=""
              href="#"
            
            >
              <svg xmlns="http://www.w3.org/2000/svg"  className='w-10 text-[#E9333D] h-10 ' width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"/></g></svg>
            </a>
           
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default TalktoUs