"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Shield,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Clock,
  Wrench,
  Building2,
  Cog,
  RefreshCw,
} from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  gradient: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features: string[];
  process: string[];
  benefits: string[];
}

const services: Record<string, ServiceDetail> = {
  piping: {
    id: "piping",
    title: "Piping",
    subtitle: "Process, utility and revamp piping solutions",
    badge: "Process Piping",
    gradient: "from-red-400 via-red-500 to-red-600",
    description:
      "We provide complete piping solutions for process plants, refineries, utilities and industrial projects – covering fabrication, erection, testing and commissioning with a strong focus on safety and quality.",
    icon: Wrench,
    features: [
      "CS, SS & alloy steel piping",
      "Shop & site fabrication capability",
      "Tie-ins during shutdown & hot jobs",
      "Spool management & traceability",
    ],
    process: [
      "Review of isometrics, P&IDs and material specs",
      "Spool fabrication, fit-up and weld completion",
      "On-site erection, alignment and support installation",
      "NDT, inspection and punch point compliance",
      "Hydro / pneumatic testing & system handover",
    ],
    benefits: [
      "Reduced rework with controlled fabrication",
      "Predictable shutdown and tie-in windows",
      "Compliance with client and code requirements",
      "Safe and leak-free startup of systems",
    ],
  },
  "industrial-structure": {
    id: "industrial-structure",
    title: "Industrial Structure",
    subtitle: "Structural steel solutions for heavy industry",
    badge: "Structural Works",
    gradient: "from-red-400 via-red-500 to-red-600",
    description:
      "From pipe racks and platforms to heavy structural supports, we execute structural fabrication and erection with precision alignment, safe lifting and reliable quality control.",
    icon: Building2,
    features: [
      "Pipe racks, access platforms & walkways",
      "Equipment supporting structures & pedestals",
      "Handrails, ladders & safety access systems",
      "Blasting, painting & surface protection",
    ],
    process: [
      "Drawing review & site survey correlation",
      "Shop fabrication & surface treatment",
      "Marking, staging & lifting planning",
      "On-site erection, alignment & bolting/welding",
      "Final inspection, touch-up & handover",
    ],
    benefits: [
      "Safe access for operation & maintenance",
      "Improved plant reliability & layout utilization",
      "Code-compliant structural integrity",
      "Optimized construction sequence and schedule",
    ],
  },
  equipment: {
    id: "equipment",
    title: "Equipment",
    subtitle: "Static & rotary equipment installation",
    badge: "Mechanical Equipment",
    gradient: "from-red-500 via-red-500 to-red-600",
    description:
      "We install and align static and rotary equipment such as pumps, compressors, exchangers, columns and tanks with high precision, ensuring trouble-free operation.",
    icon: Cog,
    features: [
      "Static & rotary equipment handling",
      "Precision leveling & alignment",
      "Grouting & foundation coordination",
      "Nozzle orientation & piping hook-up",
    ],
    process: [
      "Foundation readiness check (levels, bolt layout)",
      "Equipment placement & rough alignment",
      "Grouting and final precision alignment",
      "Piping, utility & accessory hook-ups",
      "Cold checks, run-in support & commissioning assistance",
    ],
    benefits: [
      "Longer equipment life and reliability",
      "Reduced vibration and misalignment issues",
      "Smooth commissioning and performance testing",
      "Better coordination between civil, mechanical & piping",
    ],
  },
  "turnaround-shutdown": {
    id: "turnaround-shutdown",
    title: "Plant Turnaround / Shutdown",
    subtitle: "End-to-end shutdown & turnaround execution",
    badge: "Shutdown & TA",
    gradient: "from-red-500 via-red-600 to-red-700",
    description:
      "We plan and execute multi-discipline shutdowns and turnarounds with clear scope control, tight scheduling and strong safety practices to minimize downtime.",
    icon: RefreshCw,
    features: [
      "Multi-discipline shutdown management",
      "Critical path activity planning",
      "Work-front and permit coordination",
      "24/7 execution teams for tight windows",
    ],
    process: [
      "Scope definition, job cards & work packs",
      "Detailed micro-planning & resource loading",
      "Safe isolation, dismantling & inspection",
      "Repair / replacement & reassembly by discipline",
      "Pre-commissioning, testing & startup support",
    ],
    benefits: [
      "Reduced overall shutdown duration",
      "Predictable execution with clear progress tracking",
      "Improved safety and permit compliance",
      "Reliable startup with minimal post-shutdown issues",
    ],
  },
};

// simple motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type PageProps = {
  params: { id: string };
};

const ServiceDetailPage: React.FC<PageProps> = ({ params }) => {
  const service = services[params.id];

  if (!service) {
    // fallback for wrong id
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
        <div className="max-w-md w-full text-center bg-white shadow-lg rounded-2xl p-8 border border-red-100">
          <h1 className="text-2xl font-bold text-red-700 mb-2">
            Service Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            The service you&apos;re looking for doesn&apos;t exist or the link
            is incorrect.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-100">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back link */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex items-center justify-between"
        >
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-red-700 hover:text-red-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </motion.div>

        {/* Header card */}
        <motion.div
          variants={itemVariants}
          className={`relative rounded-3xl p-8 md:p-10 text-white overflow-hidden bg-gradient-to-br ${service.gradient} shadow-xl mb-10`}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 text-sm">
                <Shield className="w-4 h-4" />
                <span className="font-medium">{service.badge}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {service.title}
              </h1>
              <p className="text-base md:text-lg text-white/90">
                {service.subtitle}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <div className="flex items-center text-sm text-white/80">
                <Sparkles className="w-4 h-4 mr-1" />
                <span>Specialized execution team</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Description + Benefits */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-red-100/60 p-6 md:p-8 space-y-6"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                Overview
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <Sparkles className="w-5 h-5 text-red-500 mr-2" />
                Why Clients Choose This Service
              </h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-slate-700 text-sm md:text-base"
                  >
                    <span className="mt-1 mr-3 inline-block w-2 h-2 rounded-full bg-red-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Quick Facts */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md border border-red-100/60 p-6 md:p-7 flex flex-col gap-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">
                Typical Engagement
              </span>
              <Clock className="w-4 h-4 text-red-500" />
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p>• Scope-based planning and resource mobilization</p>
              <p>• Clear coordination with client operations & safety</p>
              <p>• Documentation, inspection and final handover pack</p>
            </div>

            <div className="border-t border-slate-200 pt-4 mt-2 space-y-3">
              <p className="text-sm text-slate-600">
                Want to discuss your specific requirement for{" "}
                <span className="font-semibold text-slate-800">
                  {service.title}
                </span>
                ?
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get a Custom Proposal
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-red-200 text-red-700 text-sm font-semibold bg-red-50 hover:bg-red-100 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features & Process section */}
        <motion.div
          variants={itemVariants}
          className="mt-10 grid lg:grid-cols-2 gap-8"
        >
          {/* Features */}
          <div className="bg-white rounded-2xl shadow-md border border-red-100/60 p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-red-500 mr-2" />
              Key Capabilities
            </h3>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-slate-700 text-sm md:text-base"
                >
                  <span className="mt-1 mr-3 inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-400 to-red-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className="bg-white rounded-2xl shadow-md border border-red-100/60 p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 flex items-center">
              <ArrowRight className="w-5 h-5 text-red-500 mr-2" />
              Execution Approach
            </h3>
            <ol className="space-y-3">
              {service.process.map((step, idx) => (
                <li key={idx} className="flex items-start text-slate-700">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-50 border border-red-200 text-xs font-bold text-red-600 mr-3 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-sm md:text-base">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceDetailPage;
