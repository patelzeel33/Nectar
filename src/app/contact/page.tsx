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

type Status = "idle" | "loading" | "success" | "error";

const certifications = [
  { Icon: FileText, label: "ISPM-15" },
  { Icon: Shield, label: "AQIS" },
  { Icon: Globe, label: "NPQS" },
  { Icon: CheckCircle, label: "IPPC" },
];

export interface StatusMessage {
  type: Status;
  message: string;
}

type IconInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ElementType;
};

export const IconInput = ({ icon: Icon, ...props }: IconInputProps) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <Icon className="w-5 h-5 text-gray-400" />
    </div>
    <input
      {...props}
      className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 placeholder-gray-500 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none"
    />
  </div>
);

const ContactSectionCreative: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    serviceNeeded: "Export Fumigation",
    message: "",
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
    hover: { y: -5, scale: 1.02 },
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [status, setStatus] = useState<StatusMessage>({
    type: "idle",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus({ type: "success", message: "Message sent successfully!" });

      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        contactNumber: "",
        serviceNeeded: "Export Fumigation",
        message: "",
      });
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-100">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HERO */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full border border-red-200 mb-6"
            variants={containerVariants}
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">Let’s Build the Future Together</span>
          </motion.div>

          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight">
            Ready to Connect?
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full my-4" />

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Partner with Nectar Engineering India Pvt. Ltd. for reliable & high-quality industrial solutions.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white p-6 flex flex-col items-center rounded-xl border shadow-sm"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <Link href="tel:+919662512685" className="text-red-600 font-medium">
              +91 96625 12685
            </Link>
          </motion.div>

          <motion.div
            className="bg-white p-6 flex flex-col items-center rounded-xl border shadow-sm"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold">Email Us</h3>
            <Link
              href="mailto:Info@nectarengg.com"
              className="text-red-600 font-medium"
            >
              Info@nectarengg.com
            </Link>
          </motion.div>

          <motion.div
            className="bg-white p-6 flex flex-col items-center rounded-xl border shadow-sm"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold">Head Office</h3>
            <Link
              href="https://maps.app.goo.gl/baVSdJwea6eQPG6F6"
              target="_blank"
              className="text-red-600 font-medium"
            >
              Pan-India Network
            </Link>
          </motion.div>
        </motion.div>

        {/* MAP */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-center text-3xl font-bold text-red-700 mb-8">
            Our Location
          </h2>

          <div className="rounded-2xl overflow-hidden border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117472.41152595561!2d72.3863411!3d23.0599901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e835f49184001%3A0x4291a2024b562813!2sElite%20Magnum%2C%20806%2C%20Bhuyangdev%20Cross%20Rd%2C%20nr.%20Solarish%20Business%20Hub%2C%20Vardhmannagar%20Society%2C%20C.P.%20Nagar-1%2C%20Parul%20Nagar%20Society%2C%20Ahmedabad%2C%20Gujarat%20380061!5e0!3m2!1sen!2sin!4v1764493169993!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* CENTERED FORM */}
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border max-w-xl w-full">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-red-700 mb-2"
            >
              Send us a message
            </motion.h2>

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
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                />
              </div>

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                required
                className="w-full px-4 py-3 bg-gray-100 rounded-lg"
              />

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 text-white font-bold px-6 py-3.5 rounded-lg bg-gradient-to-r from-red-500 to-red-600 disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>

            <AnimatePresence>
              {status.type !== "idle" && status.type !== "loading" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`mt-4 p-3 rounded-lg flex items-center gap-3 text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
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
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSectionCreative;
