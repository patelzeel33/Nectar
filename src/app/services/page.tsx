"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Shield,
  Container,
  Warehouse,
  MapPin,
  Package,
  Leaf,
  FileCheck,
  CheckCircle,
  Clock,
  Globe,
  Users,
  Award,
  ArrowRight,
  Zap,
  Sparkles,
  ShieldCheck,
  Ship,
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

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      id: "container",
      title: "Export & Import Container Treatment",
      description:
        "Certified & compliant treatments for global trade ensuring zero rejections and smooth customs clearance.",
      icon: Container,
      badge: "Global Trade",
      gradient: "from-sky-400 via-sky-500 to-blue-600",
      features: [
        "ISPM-15, AQIS, NPQS Compliant",
        "Zero Rejection Guarantee",
        "Complete Documentation",
        "24/7 Service Availability",
      ],
      process: [
        "Container & cargo inspection",
        "Secure sealing process",
        "Controlled sanitization treatment",
        "Defined exposure period",
        "Safe aeration & certification",
      ],
    },
    {
      id: "warehouse",
      title: "Warehouse & Storage Sanitization",
      description:
        "Protecting stored goods with safe, compliant & effective sanitization solutions for all storage facilities.",
      icon: Warehouse,
      badge: "Storage Protection",
      gradient: "from-cyan-400 via-sky-500 to-indigo-600",
      features: [
        "Prevents Contamination",
        "Export Compliance Certified",
        "Protects All Inventory Types",
        "Maintains Facility Hygiene",
      ],
      process: [
        "Site inspection & assessment",
        "Sealing & preparation",
        "Controlled treatment application",
        "Adequate exposure period",
        "Aeration & safety clearance",
      ],
    },
    {
      id: "onsite",
      title: "On-Site Cargo Treatment",
      description:
        "Flexible, certified & hassle-free treatment at your location with fast turnaround times.",
      icon: MapPin,
      badge: "On-Location",
      gradient: "from-blue-400 via-cyan-500 to-sky-600",
      features: [
        "No Transportation Hassles",
        "Export-Ready Certificates",
        "Fast & Flexible Service",
        "Compliance Assured",
      ],
      process: [
        "Site survey & inspection",
        "Cargo sealing preparation",
        "Treatment application",
        "Controlled exposure period",
        "Aeration & certification",
      ],
    },
    {
      id: "ispm15",
      title: "ISPM-15 Wood Packaging Treatment",
      description:
        "Certified sanitization & heat treatment for global export compliance of wood packaging materials.",
      icon: Package,
      badge: "International Standard",
      gradient: "from-sky-500 via-blue-500 to-indigo-600",
      features: [
        "Global Requirement Compliance",
        "Risk Prevention Certified",
        "Official ISPM-15 Marking",
        "Heat & Treatment Options",
      ],
      process: [
        "Wood packaging inspection",
        "Treatment method selection",
        "Controlled treatment application",
        "Quality verification",
        "Official marking & certification",
      ],
    },
    {
      id: "agricultural",
      title: "Agricultural Commodity Treatment",
      description:
        "Comprehensive risk management for agricultural commodities ensuring export readiness.",
      icon: Leaf,
      badge: "Agri Protection",
      gradient: "from-cyan-500 via-sky-500 to-blue-600",
      features: [
        "Bulk Commodity Treatment",
        "Quarantine Compliance",
        "Preventive Programs",
        "In-Transit Solutions",
      ],
      process: [
        "Risk assessment & inspection",
        "Treatment method selection",
        "Scientific application",
        "Quality monitoring",
        "Certification & documentation",
      ],
    },
    {
      id: "phytosanitary",
      title: "Phytosanitary Certificate Support",
      description:
        "End-to-end support for obtaining phytosanitary certificates ensuring compliant agricultural exports.",
      icon: FileCheck,
      badge: "Documentation",
      gradient: "from-blue-500 via-sky-500 to-cyan-600",
      features: [
        "Global Export Requirement",
        "Customs Clearance Guarantee",
        "IPPC Compliance",
        "End-to-End Support",
      ],
      process: [
        "Sanitization & treatment",
        "Inspection assistance",
        "Application documentation",
        "Government coordination",
        "Certificate delivery",
      ],
    },
    {
      id: "vessel",
      title: "Vessel Sanitization",
      description:
        "Specialized sanitization services for ships, cargo holds, and vessels ensuring compliant maritime operations and export readiness.",
      icon: Ship,
      badge: "Maritime",
      gradient: "from-sky-500 via-blue-600 to-indigo-700",
      features: [
        "Cargo Hold & Ship Treatment",
        "Safe for Crew & Equipment",
        "Complies with IMO & AQIS Standards",
        "Effective Against Stored Product Contaminants",
      ],
      process: [
        "Vessel inspection & risk analysis",
        "Cargo area sealing",
        "Treatment application under controlled conditions",
        "Monitored exposure period",
        "Aeration & safety clearance certification",
      ],
    },
    {
      id: "preventive",
      title: "Preventive Treatments",
      description:
        "Routine preventive treatment programs designed to stop contamination before it occurs, ensuring long-term protection and hygiene.",
      icon: ShieldCheck,
      badge: "Preventive Care",
      gradient: "from-sky-500 via-blue-600 to-indigo-700",
      features: [
        "Scheduled Preventive Treatments",
        "Environmentally Safe Methods",
        "Customized Programs for Facilities",
        "Reduces Contamination Risks",
      ],
      process: [
        "Site assessment & risk analysis",
        "Planning of treatment intervals",
        "Preventive treatment or barrier application",
        "Monitoring & documentation",
        "Ongoing maintenance & reporting",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100">
      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-sky-200/20 to-blue-300/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-sky-300/10 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <ScrollReveal>
          <div className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 mb-6"
              variants={badgeVariants}
              whileHover="hover"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                Comprehensive Compliance Solutions
              </span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight">
                Our Services
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full" />
            </div>

            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Trusted compliance partner since 2019, serving 500+ exporters with
              zero rejection guarantee. Complete compliance solutions for
              seamless global trade operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal delay={2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Users, label: "Clients Served", value: "500+" },
              { icon: Globe, label: "Years Experience", value: "5+" },
              { icon: Award, label: "Success Rate", value: "100%" },
              { icon: Clock, label: "Service Availability", value: "24/7" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl mb-4">
                  <stat.icon className="w-7 h-7 text-sky-600" />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid  lg:grid-cols-2 gap-8">
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
                      <CheckCircle className="w-5 h-5 text-sky-500 mr-3" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-slate-600"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mr-4 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center text-lg">
                      <ArrowRight className="w-5 h-5 text-blue-500 mr-3" />
                      Our Process
                    </h4>
                    <div className="space-y-2">
                      {service.process.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-slate-600"
                        >
                          <div className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-sky-100 to-blue-100 text-sky-600 text-sm font-bold rounded-lg mr-4 flex-shrink-0 border border-sky-200">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl"
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
                <p className="text-blue-100 text-lg leading-relaxed max-w-3xl mx-auto">
                  Contact us today for certified compliance solutions that
                  ensure your cargo meets international standards and passes
                  customs clearance worldwide with zero rejections.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="bg-white text-sky-600 font-semibold px-10 py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg"
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
                  className="bg-blue-500/20 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-2xl hover:bg-blue-400/30 transition-colors border border-white/20"
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
