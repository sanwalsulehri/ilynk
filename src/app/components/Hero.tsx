"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(198,221,253,0.08) 8%, rgba(198,221,253,0.18) 14%, rgba(198,221,253,0.32) 18%, rgba(198,221,253,0.70) 22%, rgba(198,221,253,0.70) 58%, rgba(198,221,253,0.32) 70%, rgba(198,221,253,0.18) 80%, rgba(198,221,253,0.08) 90%, rgba(255,255,255,1) 98%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4  py-16 lg:py-16">
        <motion.div
          className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Left: Heading and Paragraph */}
          <motion.div
            className="lg:basis-1/2"
            variants={{ hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }}
            transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.75, delay: 0.1 }}
          >
            <motion.h1
              className="font-bold tracking-relaxed text-black text-[32px] lg:text-[45px]"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.8, delay: 0.1 }}
            >
              CONNECTING{" "}
              <span className="text-[#A02A42] inline-block">INTELLIGENCE</span>
              <br /> INTO YOUR BUSINESS
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-black text-[16px] lg:text-[20px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.75, delay: 0.25 }}
            >
              At iLynk Limited UK, we believe in "Linking Intelligence Into Your
              Business" by integrating smart, scalable solutions that drive growth
              and cost efficiency. Our mission is to help businesses streamline
              operations, optimize resources, and achieve sustainable expansion
              through cutting-edge technology.
            </motion.p>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            className="flex xl:-mt-10 lg:basis-1/2 justify-center lg:justify-end w-full"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.75, delay: 0.35 }}
          >
            <Image
              src="/Black and White  X Letter Digital Company Logo.png"
              width={450}
              height={450}
              alt="hero"
              className="ocject-cover h-[450px]  rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Flagship IIOT Systems Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 pb-16 lg:pb-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-8">
          <h1 className="font-bold leading-tight uppercase text-black text-[32px] lg:text-[45px]">
            our flagship{" "}
            <span className="text-[#A02A42] inline-block">iiot systems</span>
          </h1>

          <motion.div
            className="flex flex-col-reverse mt-10 lg:justify-start lg:flex-row justify-center gap-8 items-center lg:items-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } } }}
          >
            <motion.div
              className="w-full  lg:basis-[30%] max-w-[400px] lg:max-w-[355px] lg:aspect-square  rounded-xl"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.6, delay: 0.15 }}
            >
              <img
                src="/Black and White  X Letter Digital Company Logo (3).svg"
                alt="IIoT illustration"
                className="block h-full lg:h-[450px] w-full mx-auto lg:mx-0 lg:max-w-[355px] object-cover"
              />
            </motion.div>

            <motion.div
              className="w-full lg:basis-[70%]"
              variants={{ hidden: { opacity: 0, y: -24 }, show: { opacity: 1, y: 0 } }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.7, delay: 0.2 }}
            >
              <motion.h3
                className="font-bold text-[#143E70] text-[22px] lg:text-[28px] leading-snug"
                initial={false}
                variants={{}}
              >
                Fork Link – Smart Fleet & Operator Management
              </motion.h3>
              <motion.p className="my-8 text-[#000] text-[16px] lg:text-[20px] max-w-4xl" initial={false} variants={{}}>
                ForkLink provides real-time insights through its intelligent
                hardware and cloud-based software.
              </motion.p>
              <motion.ul
                className="lg:ml-6 space-y-3 text-[#000] text-[16px] lg:text-[20px] list-disc pl-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
              >
                <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Live Task Assignment & Optimization</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Operator Behavior & Safety Enforcement</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Real-Time Equipment Insights</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Cost of Operations On A Click</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Digital Incident & Compliance Management</motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      {/* Energy Link Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 pb-16 lg:pb-24"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <div className="flex flex-col gap-8">
          <motion.div
                        className="flex flex-col mt-10 justify-center lg:justify-start lg:flex-row gap-8 items-center lg:items-start"

            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              className="w-full lg:basis-[70%]"
              variants={{ hidden: { opacity: 0, y: -24 }, show: { opacity: 1, y: 0 } }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.7, delay: 0.15 }}
            >
              <motion.h3 className="font-bold text-[#143E70] text-[22px] lg:text-[28px] leading-snug" initial={false} variants={{}}>
                Energy Link – Smart Energy Management System
              </motion.h3>
              <motion.p className="my-8 text-[#000] text-[16px] lg:text-[20px] max-w-4xl" initial={false} variants={{}}>
                PowerLink is an intelligent Energy Management System (EMS).
                Built with IoT-based metering and AI-powered analytics,
                PowerLink optimizes Industrial Energy Consumption.
              </motion.p>
              <motion.ul
                className="lg:ml-6 space-y-3 text-[#000] text-[16px] lg:text-[20px] list-disc pl-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
              >
                <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Real-Time Energy Monitoring</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Automated Cost Optimization</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Load Balancing & Predictive Demand Forecasting</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>Carbon Footprint & Sustainability Tracking</motion.li>
              </motion.ul>
            </motion.div>
            <motion.div
              className="w-full lg:basis-[30%] max-w-[400px] lg:max-w-[355px] lg:aspect-square rounded-xl "
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.6, delay: 0.15 }}
            >
              <img
                src="/Black and White  X Letter Digital Company Logo (4).svg"
                alt="Energy management illustration"
                className="block h-full lg:h-[450px] mx-auto lg:mx-0 w-full lg:max-w-[355px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


