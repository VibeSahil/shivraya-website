"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/water.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔹 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          BeNew
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-200 mt-4"
        >
          Be Safe. Be New.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-xl text-gray-300 mt-4"
        >
          Pure water from nature. Premium packaged drinking water you can trust.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 mt-6"
        >
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white">
            Explore BeNew
          </button>

          <button className="border border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-black">
            View Products
          </button>
        </motion.div>

        {/* 🔹 Bottle Image */}
        <motion.img
          src="/bottle.png"
          alt="Bottle"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="w-40 md:w-56 mt-10"
        />
      </div>
    </section>
  );
}