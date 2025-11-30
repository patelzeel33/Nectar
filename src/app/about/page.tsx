"use client";
import {
  Shield,
  Award,
  Users,
  Globe,
  CheckCircle,
  Target,
  Eye,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const AboutPage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-50 via-red-100 to-red-100">

      {/* HERO SECTION */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full border border-red-200 mb-6"
            variants={badgeVariants}
            whileHover="hover"
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">
              Your Trusted Partner Since 2015
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight">
            About Nectar
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full my-4" />

          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Partner with Nectar Engineering India Pvt. Ltd. for safe,
            reliable, and high-quality industrial solutions.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
        >
          {[
            { icon: Award, value: "2015", label: "Founded" },
            { icon: Users, value: "100+", label: "Trusted Clients" },
            { icon: CheckCircle, value: "100%", label: "Success Rate" },
            { icon: Globe, value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">
                {stat.value}
              </h3>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* WHO WE ARE */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={slideInLeftVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight mb-6">
                Who We Are
              </h2>

              <p className="text-lg text-slate-600 mb-6">
                Founded in 2015 and incorporated in 2020, Nectar Engineering
                India Pvt. Ltd. specializes in Construction, O&M, Shutdown
                Services, and Industrial Fabrication.
              </p>

              <p className="text-lg text-slate-600 mb-8">
                We work with major industries like Oil & Gas, Power, Steel,
                Petrochemicals, and Cement—delivering safe, reliable, and
                high-quality project execution.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
              variants={slideInRightVariants}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      Our Mission
                    </h3>
                    <p className="text-slate-600">
                      Provide safe, high-quality, and timely industrial
                      services with complete customer satisfaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      Our Vision
                    </h3>
                    <p className="text-slate-600">
                      To become India’s most reliable & efficient engineering
                      service provider.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CLIENTS (PHOTO BASED) */}
      <div className="bg-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight mb-6">
              Clients
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Years of expertise, proven results, and commitment to compliance.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                imgSrc: "/clients/Picture1.png",
                title: "RELIANCE INDUSTRIES LTD.",
              },
              {
                imgSrc: "/clients/Picture2.png",
                title: "AAARTI INDUSTRIES",
              },
              {
                imgSrc: "/clients/Picture3.png",
                title: "ADANI",
              },
              {
                imgSrc: "/clients/Picture4.png",
                title: "INDORAMA INDIA PVT. LTD.",
              },
              {
                imgSrc: "/clients/Picture5.png",
                title: "EKCP",
              },
              {
                imgSrc: "/clients/Picture6.png",
                title: "NAYARA ENERGY",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white text-center p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center justify-center mx-auto">
                  <div className="w-full h-[150px] bg-red-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
