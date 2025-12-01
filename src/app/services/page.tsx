"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Shield,
  Users,
  Globe,
  Award,
  CheckCircle,
  Clock,
  ArrowRight,
  Zap,
  Sparkles,
  Wrench,
  Building2,
  Cog,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features: string[];
  process: string[];
  badge: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: "piping",
    title: "Piping",
    description:
      "End-to-end piping solutions including fabrication, erection, hydro-testing, and commissioning for process plants, refineries, utilities, and industrial projects.",
    icon: Wrench,
    badge: "Process Piping",
    gradient: "from-red-400 via-red-500 to-red-600",
    features: [
      "CS, SS & Alloy Steel Piping",
      "Shop & Site Fabrication",
      "Hydro / Pneumatic Testing",
      "Tie-ins & Revamp Works",
    ],
    process: [
      "Isometric & material review",
      "Spool fabrication & fit-up",
      "Erection, alignment & supports",
      "Non-destructive testing & inspection",
      "Hydro-testing & system handover",
    ],
  },
  {
    id: "industrial-structure",
    title: "Industrial Structure",
    description:
      "Design-assist, fabrication and erection of industrial structures like pipe racks, platforms, pedestals, equipment foundations and heavy steel structures.",
    icon: Building2,
    badge: "Structural Works",
    gradient: "from-red-400 via-red-500 to-red-600",
    features: [
      "Pipe Racks & Platforms",
      "Access Walkways & Handrails",
      "Heavy Structural Erection",
      "Anchor Bolt & Alignment Accuracy",
    ],
    process: [
      "Drawing & site survey review",
      "Shop fabrication & surface preparation",
      "On-site erection & alignment",
      "Bolt tightening / welding & inspection",
      "Final punch list & handover",
    ],
  },
  {
    id: "equipment",
    title: "Equipment",
    description:
      "Installation, alignment and commissioning of static & rotary equipment like pumps, compressors, heat exchangers, columns and tanks.",
    icon: Cog,
    badge: "Mechanical Equipment",
    gradient: "from-red-500 via-red-500 to-red-600",
    features: [
      "Static & Rotary Equipment",
      "Precision Alignment & Grouting",
      "Nozzle & Piping Interface",
      "Assisted Commissioning Support",
    ],
    process: [
      "Foundation readiness & level checking",
      "Equipment placement & rough alignment",
      "Grouting, final alignment & bolt tightening",
      "Hook-up with piping & accessories",
      "Commissioning assistance & performance checks",
    ],
  },
  {
    id: "turnaround-shutdown",
    title: "Plant Turnaround / Shutdown",
    description:
      "Complete shutdown and turnaround support including planning, execution and commissioning for refineries, chemical, power, and process plants.",
    icon: RefreshCw,
    badge: "Shutdown & TA",
    gradient: "from-red-500 via-red-600 to-red-700",
    features: [
      "End-to-End Turnaround Execution",
      "Multi-Discipline Coordination",
      "Strict Safety & Permit Compliance",
      "On-Time Startup Commitment",
    ],
    process: [
      "Scope definition & job listing",
      "Detailed planning & resource mobilization",
      "Safe isolation & dismantling",
      "Repair, replacement & reassembly",
      "Pre-commissioning, testing & startup support",
    ],
  },
];

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

// Simple scroll reveal component
const ScrollReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: delay * 0.1,
                ease: "easeOut",
              },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-100 relative">
      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-200/20 to-red-300/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-red-200/20 to-red-300/10 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <ScrollReveal>
          <div className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full border border-red-200 mb-6"
              variants={badgeVariants}
              whileHover="hover"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                Comprehensive Engineering Solutions
              </span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight">
                Our Services
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full" />
            </div>

            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Trusted engineering partner since 2015, delivering piping,
              structural, equipment and turnaround solutions for process plants,
              refineries and industrial projects with safety, quality and
              on-time completion.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal delay={2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Users, label: "Clients Served", value: "100+" },
              { icon: Globe, label: "Years Experience", value: "10+" },
              { icon: Award, label: "Projects Delivered", value: "250+" },
              { icon: Clock, label: "Support", value: "24/7" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl mb-4">
                  <stat.icon className="w-7 h-7 text-red-600" />
                </div>

                <div className="text-3xl font-bold text-slate-800">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index}>
              <motion.div
                className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 overflow-hidden group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Card Header */}
                <div
                  className={`bg-gradient-to-br ${service.gradient} p-8 text-white relative overflow-hidden`}
                >
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex-1">
                      <div className="inline-flex items-center space-x-2 bg-white/25 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                        <Zap className="w-4 h-4" />
                        <span className="font-medium">{service.badge}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <motion.div
                      className="ml-6 p-3 bg-white/20 backdrop-blur-sm rounded-2xl"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Simple decorative elements */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full opacity-50" />
                  <div className="absolute -right-16 -bottom-8 w-40 h-40 bg-white/5 rounded-full" />
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center text-lg">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-slate-600"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-red-500 rounded-full mr-4 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center text-lg">
                      <ArrowRight className="w-5 h-5 text-red-500 mr-3" />
                      Our Process
                    </h4>
                    <div className="space-y-2">
                      {service.process.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-slate-600"
                        >
                          <div className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-red-100 to-red-100 text-red-600 text-sm font-bold rounded-lg mr-4 flex-shrink-0 border border-red-200">
                            {idx + 1}
                          </div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/services/${service.id}`}
                    className="block no-underline"
                  >
                    <motion.div
                      className={`w-full bg-gradient-to-r cursor-pointer ${service.gradient} text-white font-semibold py-4 rounded-2xl shadow-lg text-center`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn More & Get Quote
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <ScrollReveal delay={1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <motion.div
            className="bg-gradient-to-br from-red-600 via-red-600 to-red-700 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Simple background decorations */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />

            <div className="relative z-10 space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-red-100 text-lg leading-relaxed max-w-3xl mx-auto">
                  Talk to us for piping, structural, equipment and turnaround
                  solutions tailored to your plant. We focus on safe execution,
                  quality workmanship and timely completion.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="bg-white text-red-600 font-semibold px-10 py-4 rounded-2xl hover:bg-red-50 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="flex items-center justify-center">
                    Get Instant Quote
                    <Sparkles className="w-5 h-5 ml-2" />
                  </span>
                </motion.button>

                <motion.button
                  className="bg-red-500/20 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-2xl hover:bg-red-400/30 transition-colors border border-white/20"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="flex items-center justify-center">
                    Call 24/7 Support
                    <Clock className="w-5 h-5 ml-2" />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ServicesPage;
