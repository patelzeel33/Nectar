"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "motion/react";
import { Leaf, CheckCircle, Clock, Shield } from "lucide-react";

interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const WhyChooseUsSection: React.FC = () => {
  const whyUsRef = useRef(null);

  const isWhyUsInView = useInView(whyUsRef, { once: true, margin: "-50px" });

  const whyChooseUsItems: WhyChooseUsItem[] = [
    {
      id: 1,
      title: "Eco-Friendly Chemicals",
      description: "Low-toxicity options that meet environmental standards.",
      icon: Leaf,
    },
    {
      id: 2,
      title: "Certified Staff",
      description: "Trained technicians with verified credentials.",
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Timely Service",
      description: "Scheduling that works with your operations.",
      icon: Clock,
    },
    {
      id: 4,
      title: "Guaranteed Safety",
      description: "Protocols and PPE for assured site safety.",
      icon: Shield,
    },
  ];

  const containerVariants = {
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

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Why Choose Us Section */}
      <motion.div
        ref={whyUsRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        initial="hidden"
        animate={isWhyUsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-lg text-slate-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Built on safety, science, and service.
          </motion.p>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="text-center group cursor-pointer"
              variants={itemVariants}
              custom={index}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;
