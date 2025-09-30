"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(198,221,253,0.08) 8%, rgba(198,221,253,0.18) 14%, rgba(198,221,253,0.32) 18%, rgba(198,221,253,0.70) 22%, rgba(198,221,253,0.70) 58%, rgba(198,221,253,0.32) 70%, rgba(198,221,253,0.18) 80%, rgba(198,221,253,0.08) 90%, rgba(255,255,255,1) 98%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4  py-16 md:py-16">
        <motion.h1
          className="font-bold tracking-relaxed text-black text-[36px] md:text-[58px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          CONNECTING{" "}
          <span className="text-[#A02A42] inline-block">INTELLIGENCE</span>
          <br /> INTO YOUR BUSINESS
        </motion.h1>

        <motion.div
          className="mt-6 flex flex-col md:flex-row justify-between  gap-6 md:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            className="max-w-2xl text-black text-[18px] md:text-[27px] md:basis-1/2"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            At iLynk Limited UK, we believe in “Linking Intelligence Into Your
            Business” by integrating smart, scalable solutions that drive growth
            and cost efficiency. Our mission is to help businesses streamline
            operations, optimize resources, and achieve sustainable expansion
            through cutting-edge technology.
          </motion.p>

          <motion.div
            className="flex xl:-mt-10 md:basis-1/2 justify-center md:justify-end w-full"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <video
              src="/herovid.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-auto w-full  rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Flagship IIOT Systems Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 pb-16 md:pb-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-8">
          <h1 className="font-bold leading-tight uppercase text-black text-[36px] md:text-[58px]">
            our flagship{" "}
            <span className="text-[#A02A42] inline-block">iiot systems</span>
          </h1>

          <motion.div
            className="flex flex-col mt-10 justify-start md:flex-row gap-8 items-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              className="w-full h md:basis-[30%] md:max-w-[355px] aspect-square  rounded-xl"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <img
                src="/Black and White  X Letter Digital Company Logo (3).svg"
                alt="IIoT illustration"
                className="block h-[450px] w-[355px] object-cover"
              />
            </motion.div>

            <motion.div
              className="w-full md:basis-[70%]"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <h3 className="font-bold text-[#143E70] text-[24px] md:text-[32px] leading-snug">
                Fork Link – Smart Fleet & Operator Management
              </h3>
              <p className="my-8 text-[#000] text-[18px] md:text-[27px] max-w-4xl">
                ForkLink provides real-time insights through its intelligent
                hardware and cloud-based software.
              </p>
              <ul className="lg:ml-6 space-y-3 text-[#000] text-[18px] md:text-[27px] list-disc pl-6">
                <li>Live Task Assignment & Optimization</li>
                <li>Operator Behavior & Safety Enforcement</li>
                <li>Real-Time Equipment Insights</li>
                <li>Cost of Operations On A Click</li>
                <li>Digital Incident & Compliance Management</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      {/* Energy Link Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 pb-16 md:pb-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex flex-col md:flex-row items-start gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              className="w-full md:basis-[70%]"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <h3 className="font-bold text-[#143E70] text-[24px] md:text-[32px] leading-snug">
                Energy Link – Smart Energy Management System
              </h3>
              <p className="my-8 text-[#000] text-[18px] md:text-[27px] max-w-4xl">
                PowerLink is an intelligent Energy Management System (EMS).
                Built with IoT-based metering and AI-powered analytics,
                PowerLink optimizes Industrial Energy Consumption.
              </p>
              <ul className="lg:ml-6 space-y-3 text-[#000] text-[18px] md:text-[27px] list-disc pl-6">
                <li>Real-Time Energy Monitoring</li>
                <li>Automated Cost Optimization</li>
                <li>Load Balancing & Predictive Demand Forecasting</li>
                <li>Carbon Footprint & Sustainability Tracking</li>
              </ul>
            </motion.div>
            <motion.div
              className="w-full md:basis-[30%] md:max-w-[355px] aspect-square rounded-xl "
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            >
              <img
                src="/Black and White  X Letter Digital Company Logo (4).svg"
                alt="Energy management illustration"
                className="block h-[450px] w-[355px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
