"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// AUTO-GENERATE 62 IMAGES
const galleryImages = Array.from({ length: 62 }, (_, i) => {
  const num = String(i + 1).padStart(3, "0"); // image001.jpg → image062.jpg
  return {
    src: `/gallery/image${num}.jpg`,
    alt: `Image ${i + 1}`,
  };
});

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
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export default function GalleryPage() {
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
            Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of our work, achievements, and memorable moments.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* WIDE IMAGES (2550×1131 optimized) */}
              <div className="w-full h-[280px] sm:h-[340px] bg-red-100 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={2550}
                  height={1131}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
