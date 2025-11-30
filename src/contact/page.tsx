"use client";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Globe,
  Package,
  Truck,
  FileText,
  User,
  Briefcase,
  Building,
  Loader,
  Send,
  AlertCircle,
} from "lucide-react";

import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";

// Define the structure for the submission status
type Status = "idle" | "loading" | "success" | "error";
const certifications = [
  {
    Icon: FileText,
    label: "ISPM-15",
  },
  {
    Icon: Shield,
    label: "AQIS",
  },
  {
    Icon: Globe,
    label: "NPQS",
  },
  {
    Icon: CheckCircle,
    label: "IPPC",
  },
];

export interface StatusMessage {
  type: Status;
  message: string;
}

// Define props for the IconInput component to avoid using `any`
type IconInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ElementType;
};

// Reusable input with icon
export const IconInput = ({ icon: Icon, ...props }: IconInputProps) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <Icon className="w-5 h-5 text-gray-400" />
    </div>
    <input
      {...props}
      className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 placeholder-gray-500 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none"
    />
  </div>
);

const ContactSectionCreative: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    serviceNeeded: "Export Treatment",
    message: "",
  });

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
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        // Assuming your API route is at /api/contact
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status: ${res.status}`);
      }

      const result = await res.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent!",
        });
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          contactNumber: "",
          serviceNeeded: "Export Fumigation",
          message: "",
        });
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      setStatus({
        type: "error",
        message: `Something went wrong. Please try again. ${errorMessage}`,
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    }
  };

  const [status, setStatus] = useState<StatusMessage>({
    type: "idle",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100">
      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 mb-6"
            variants={badgeVariants}
            whileHover="hover"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">
              Let{"'"}s Connect & Keep Your Cargo Compliant
            </span>
          </motion.div>

          <div className="space-y-4 mb-7">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight">
              Ready to Connect?
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full" />
          </div>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            At Harbourfume Compliance India Inc., we believe communication
            should be as smooth as your exports. Whether you need compliance
            treatments, ISPM-15 treatment, phytosanitary certification, or
            urgent cargo compliance, our experts are just one call away —
            anytime, anywhere.
          </p>
        </motion.div>
        {/* Contact Cards Grid */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white p-6 flex flex-col items-center  rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              24/7 Support
            </h3>
            <p className="text-slate-600 text-sm mb-3">
              Call or WhatsApp anytime
            </p>
            <Link href="tel:+917878937373" className="text-sky-600 font-medium">
              +91 78789 37373
            </Link>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl flex flex-col items-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Email Us
            </h3>
            <p className="text-slate-600 text-sm mb-3">
              Quick response guaranteed
            </p>
            <Link
              href="mailto:info@harbourfume.com"
              className="text-sky-600 font-medium"
            >
              info@harbourfume.com
            </Link>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl flex flex-col items-center  border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Head Office
            </h3>
            <p className="text-slate-600 text-sm mb-3">Gujarat, India</p>
            <Link
              href={"https://maps.app.goo.gl/RKg5ajdUmky28FDw8"}
              target="_blank"
              className="text-sky-600 font-medium"
            >
              Pan-India Network
            </Link>
          </motion.div>
        </motion.div>
        {/* Custom Map Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-sky-400 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight mb-8">
            Our Location
          </h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.0732716536763!2d73.1207156!3d22.3130685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc90067aa74dd%3A0x2fa55a0e77e575fd!2sBroadway%20Signature%20Complex%20Sevasi%20Canal%20Road!5e0!3m2!1sen!2sin!4v1762181274930!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location in Shela, Gujarat"
            ></iframe>
          </div>
        </motion.div>
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-200/80">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight mb-2"
            >
              Send us a message
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 mb-8">
              We{"'"}ll get back to you within one business day.
            </motion.p>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <IconInput
                  icon={User}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                />
                <IconInput
                  icon={Building}
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <IconInput
                  icon={Mail}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                />
                <IconInput
                  icon={Phone}
                  name="contactNumber"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Briefcase className="w-5 h-5 text-gray-400" />
                  </div>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none appearance-none"
                  >
                    <option>Export Fumigation</option>
                    <option>ISPM-15 Treatment</option>
                    <option>Phytosanitary Certification</option>
                    <option>Warehouse Fumigation</option>
                  </select>
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 placeholder-gray-500 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 outline-none resize-y"
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 text-white font-bold px-6 py-3.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 disabled:from-sky-300 disabled:to-indigo-400 disabled:cursor-not-allowed"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 1 }}
                >
                  {isLoading ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                </motion.button>
              </div>
            </motion.form>

            <AnimatePresence>
              {status.type !== "idle" && status.type !== "loading" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`mt-4 p-3 rounded-lg flex items-center gap-3 text-sm font-medium
                        ${
                          status.type === "success"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }
                      `}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Why Choose Us */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Harbourfume for Compliance Support?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Lightning Response
                    </h3>
                    <p className="text-slate-600 text-sm">
                      We reply faster than industry standard
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Globally Accepted Certifications
                    </h3>
                    <p className="text-slate-600 text-sm">
                      ISPM-15, NPQS, AQIS, IPPC
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Zero Rejection Guarantee
                    </h3>
                    <p className="text-slate-600 text-sm">
                      500+ exporters trust us since 2019
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Truck className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Pan-India Service Network
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Ports, ICDs, CFSs & warehouses
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Package className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Dedicated Relationship Managers
                    </h3>
                    <p className="text-slate-600 text-sm">
                      One point of contact for your business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgent Help Section */}
            <motion.div
              className="bg-red-50 border border-red-200 rounded-2xl p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-red-800">
                  Need Urgent Help?
                </h3>
              </div>
              <p className="text-red-700 mb-4">🚨 Shipment stuck at port?</p>
              <Link href="tel:+917878937373">
                <motion.button
                  className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 w-full"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Call us now: +91 78789 37373
                </motion.button>
              </Link>

              <p className="text-red-600 text-sm mt-2 text-center">
                We are available 24/7 — even on holidays.
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* Trust Badges */}
        <motion.div
          className="mt-16 flex flex-col items-center text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible" // or use whileInView="visible" for scroll animations
        >
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Certified & Trusted
          </h3>

          {/* 2. Use flexbox for a responsive, wrapping layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-70">
            {/* 3. Map over the array to render each badge */}
            {certifications.map(({ Icon, label }) => (
              <div
                key={label} // Add a unique key for each item in the list
                className="flex w-full justify-center items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200"
              >
                <Icon className="w-5 h-5 text-slate-600 shrink-0" />
                <span className="text-sm font-medium text-slate-700">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSectionCreative;
