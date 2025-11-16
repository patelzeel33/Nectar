"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "motion/react";

interface Industry {
  id: number;
  title: string;
  image: string;
  alt: string;
}

function IndustriesSection() {
  const industriesRef = useRef(null);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, delay: index * 0.15, ease: "easeOut" },
    }),
  };
  const isIndustriesInView = useInView(industriesRef, {
    once: true,
    margin: "-50px",
  });
  const industries: Industry[] = [
    {
      id: 1,
      title: "Warehouses",
      image: "/warehouses.png",
      alt: "Large warehouse interior with high ceilings and storage systems",
    },
    {
      id: 2,
      title: "Logistics Hubs",
      image: "/logistics.png",
      alt: "Blue shipping containers in organized rows at logistics facility",
    },
    {
      id: 3,
      title: "Cargo Empty Containers",
      image: "/cargo.png",
      alt: "Empty blue cargo containers stacked and ready for fumigation",
    },
    {
      id: 4,
      title: "Shipping Containers",
      image: "/Shipping.png",
      alt: "Blue shipping containers at port facility",
    },
  ];

  return (
    <div className="py-20">
      {/* Industries Section */}
      <motion.div
        ref={industriesRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isIndustriesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isIndustriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            className="text-lg text-slate-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isIndustriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Specialized fumigation for complex operations.
          </motion.p>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              className="group cursor-pointer"
              variants={itemVariants}
              custom={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">
                    {industry.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IndustriesSection;
