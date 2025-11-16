"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Loader,
  Building,
  User,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

// Define the structure for form data
interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  contactNumber: string;
  serviceNeeded: string;
  message: string;
}

// Define the structure for the submission status
type Status = "idle" | "loading" | "success" | "error";

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
      className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 placeholder-gray-500 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none"
    />
  </div>
);

const ContactSectionCreative: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // State management
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    contactNumber: "",
    serviceNeeded: "Export Fumigation",
    message: "",
  });
  const [status, setStatus] = useState<StatusMessage>({
    type: "idle",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full min-h-screen py-20 lg:py-24 bg-gray-100 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorative pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20%2020.5%20L0%200M40%200L20%2020.5M0%2040L20%2020.5M40%2040L20%2020.5%22%20stroke%3D%22%23e2e8f0%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%221%204%22%2F%3E%3C%2Fsvg%3E')] opacity-50"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl shadow-gray-200/50 overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            {/* Left Side: Information */}
            <div className="lg:col-span-2 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-bold mb-3"
                >
                  Contact Information
                </motion.h2>
                <motion.p variants={itemVariants} className="text-red-100 mb-8">
                  Find us at our office or feel free to reach out via phone or
                  email.
                </motion.p>
                <motion.div variants={itemVariants} className="space-y-6">
                  <Link
                    href={"https://maps.app.goo.gl/RKg5ajdUmky28FDw8"}
                    target="_blank"
                    className="flex items-start gap-4 group"
                  >
                    <MapPin className="w-6 h-6 text-red-200 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold group-hover:text-white transition-colors">
                        Our Office
                      </h3>
                      <p className="text-red-200">
                        501, Broadway Signature, Opp. Sevasi-Bhayli Canal Ring
                        Road, Vadodara-391101
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="tel:+917878937373"
                    className="flex items-start gap-4 group"
                  >
                    <Phone className="w-6 h-6 text-red-200 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold group-hover:text-white transition-colors">
                        Call Us
                      </h3>
                      <p className="text-red-200">+91 98765 43210</p>
                    </div>
                  </Link>
                  <Link
                    href="mailto:sales@harbourfume.com"
                    className="flex items-start gap-4 group"
                  >
                    <Mail className="w-6 h-6 text-red-200 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold group-hover:text-white transition-colors">
                        Email Us
                      </h3>
                      <p className="text-red-200">sales@harbourfume.com</p>
                    </div>
                  </Link>
                </motion.div>
              </div>
              <motion.div variants={itemVariants} className="mt-10">
                <Sparkles className="w-10 h-10 text-red-300 opacity-50" />
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-gray-800 mb-2"
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
                    className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg text-gray-800 placeholder-gray-500 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 outline-none resize-y"
                  ></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-3 text-white font-bold px-6 py-3.5 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 disabled:from-red-300 disabled:to-red-400 disabled:cursor-not-allowed"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSectionCreative;
