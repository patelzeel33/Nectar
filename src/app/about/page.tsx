"use client";

import React from "react";
import {
  Shield,
  Award,
  Users,
  Globe,
  CheckCircle,
  Target,
  Eye,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// ----------------------
// Animation Variants
// ----------------------
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.58, 1] },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0, 0, 0.58, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0, 0, 0.58, 1] },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.2, ease: [0, 0, 0.58, 1] },
  },
};

const badgeVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: [0, 0, 0.58, 1] },
  },
};

// ----------------------
// Stats & Clients Data
// ----------------------
const stats = [
  { icon: Award, value: "2015", label: "Founded" },
  { icon: Users, value: "100+", label: "Trusted Clients" },
  { icon: CheckCircle, value: "100%", label: "Success Rate" },
  { icon: Globe, value: "24/7", label: "Support Available" },
];

const clients = [
  { imgSrc: "/clients/Picture1.png", title: "RELIANCE INDUSTRIES LTD." },
  { imgSrc: "/clients/Picture2.png", title: "AAARTI INDUSTRIES" },
  { imgSrc: "/clients/Picture3.png", title: "ADANI" },
  { imgSrc: "/clients/Picture4.png", title: "INDORAMA INDIA PVT. LTD." },
  { imgSrc: "/clients/Picture5.png", title: "EKCP" },
  { imgSrc: "/clients/Picture6.png", title: "NAYARA ENERGY" },
];

// ----------------------
// Page Component
// ----------------------
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-50 via-red-100 to-red-100">

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        
        {/* Badge */}
        <motion.div
          variants={badgeVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full border border-red-200 mb-6"
        >
          <Shield className="w-4 h-4" />
          <span className="text-sm font-medium">Your Trusted Partner Since 2015</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight"
        >
          About Nectar
        </motion.h1>

        <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full my-4" />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
        >
          Partner with Nectar Engineering India Pvt. Ltd. for safe, reliable, and 
          high-quality industrial solutions.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="text-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</h3>
              <p className="text-slate-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent mb-6">
              Who We Are
            </h2>

            <p className="text-lg text-slate-600 mb-6">
              Founded in 2015 and incorporated in 2020, Nectar Engineering India Pvt. Ltd. 
              specializes in Construction, O&M, Shutdown Services, and Industrial Fabrication.
            </p>

            <p className="text-lg text-slate-600">
              We work with major industries like Oil & Gas, Power, Steel, Petrochemicals, 
              and Cement—delivering safe, reliable, and high-quality project execution.
            </p>
          </motion.div>

          {/* Mission/Vision */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="space-y-8">

              {/* Mission */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Our Mission</h3>
                  <p className="text-slate-600">
                    Provide safe, high-quality, and timely industrial services with complete 
                    customer satisfaction.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Our Vision</h3>
                  <p className="text-slate-600">
                    To become India’s most reliable & efficient engineering service provider.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* CLIENTS */}
      <div className="bg-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4">

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent mb-6">
              Clients
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Years of expertise, proven results, and commitment to compliance.
            </p>
          </motion.div>

          {/* Clients Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center"
              >
                <div className="w-full h-[150px] bg-red-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-40 h-40 object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
