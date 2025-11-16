"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Users, ShieldCheck, Heart } from "lucide-react";
import Image from "next/image";

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
const AboutUsSection = () => {
  const features = [
    {
      title: "Certified Professionals",
      icon: Users,
    },
    {
      title: "Compliance First",
      icon: ShieldCheck,
    },
    {
      title: "Customer Trust",
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-sm font-semibold text-red-600 tracking-widest uppercase">
            Our Foundation
          </h2>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight"
            variants={itemVariants}
          >
            About Us
          </motion.h1>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-red-400 to-red-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="absolute h-[300px] sm:h-[500px] md:h-[700px] lg:h-auto -inset-4 bg-gradient-to-br from-red-200 via-red-200 to-cyan-200 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative h-[300px] sm:h-[500px] md:h-[700px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl shadow-red-200/60">
              <Image
                src="/About.png"
                alt="A professional team in a modern industrial setting, focused on compliance"
                className="w-full h-[600px] object-cover aspect-[4/5]"
                width={1000}
                height={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="text-center md:text-start">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Experience-Led Solutions, Uncompromising Safety.
              </h3>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                We excel in piping/structural fabrication, erection, commissioning, and plant maintenance with skilled manpower and modern equipment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Trusted by leading industries, we deliver safe, high-quality, and timely projects comparable to global engineering standards.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-5 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-red-50/50 rounded-xl border border-red-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-red-200 shadow-sm">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="ml-5 text-lg font-semibold text-slate-700">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
