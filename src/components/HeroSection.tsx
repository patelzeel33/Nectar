"use client";
import { Shield } from "lucide-react";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const leftContentVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const rightContentVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      y: 0,
    },
  };

  const decorativeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1.2,
      },
    },
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Right Image */}
        <motion.div className="relative" variants={rightContentVariants}>
          <motion.div
            className="rounded-2xl hidden md:block overflow-hidden shadow-xl bg-gray-50"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/hero.jpg"
              alt="Aerial view of shipping port with cargo containers and logistics hub"
              className="w-full h-[400px] object-cover"
              width={1000}
              height={500}
            />
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full opacity-20"
            variants={decorativeVariants}
            animate={["visible", "float"]}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-100 rounded-full opacity-30"
            variants={decorativeVariants}
            animate={["visible", "float"]}
            style={{ animationDelay: "3s" }}
          />
        </motion.div>

        {/* Left Content */}
        <motion.div
          className="text-center md:text-start space-y-8"
          variants={leftContentVariants}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full border border-red-200 cursor-pointer"
            variants={badgeVariants}
            whileHover="hover"
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-medium">
              Safe, Certified, and Professional
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            Nectar Engineering India Private Limited
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg text-slate-600 leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            Nectar Engineering India Pvt. Ltd., founded in 2015, delivers specialized Construction, O&M, and Turnaround Services.
We handle fabrication, erection, commissioning, and maintenance with skilled manpower and modern equipment.
Trusted across major industries, we ensure safe, high-quality, and timely project execution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button
              className="bg-red-400 cursor-pointer hover:bg-red-500 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href={"/contact"}>Contact Now</Link>
            </motion.button>
            {/* <motion.button
              className="bg-white cursor-pointer hover:bg-gray-50 text-slate-700 font-medium px-8 py-3 rounded-lg border border-gray-200 transition-colors duration-200"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href={"/contact"}>Get a Quote</Link>
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
