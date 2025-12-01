"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const clients = [
  { imgSrc: "/clients/Picture1.png", title: "RELIANCE INDUSTRIES LTD." },
  { imgSrc: "/clients/Picture2.png", title: "AAARTI INDUSTRIES" },
  { imgSrc: "/clients/Picture3.png", title: "ADANI" },
  { imgSrc: "/clients/Picture4.png", title: "INDORAMA INDIA PVT. LTD." },
  { imgSrc: "/clients/Picture5.png", title: "EKCP" },
  { imgSrc: "/clients/Picture6.png", title: "NAYARA ENERGY" },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export default function ClientsPage() {
  return (
    <div className="bg-red-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight mb-6">
            Clients
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Years of expertise, proven results, and commitment to compliance.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              className="bg-white text-center p-6 rounded-xl border border-gray-200 shadow-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="w-full h-[140px] bg-red-100 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                <Image
                  src={client.imgSrc}
                  alt={client.title}
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">
                {client.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
