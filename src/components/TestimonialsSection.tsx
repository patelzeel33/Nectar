"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  testimonial: string;
  rating: number;
  position?: string;
  company?: string;
}

export const P = "“";
const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex G.",
      avatar: "/avatar-1.webp",
      testimonial:
        "Professional team and seamless container fumigation before shipment. Highly recommend.",
      rating: 5,
      position: "Operations Manager",
      company: "Global Logistics",
    },
    {
      id: 2,
      name: "Priya S.",
      avatar: "/avatar-2.webp",
      testimonial:
        "On-time, compliant, and very thorough. Our warehouse is now fully compliant.",
      rating: 5,
      position: "Facility Manager",
      company: "Industrial Corp",
    },
    {
      id: 3,
      name: "Mohamed R.",
      avatar: "/avatar-3.webp",
      testimonial:
        "Great communication and safety protocols. They worked around our schedules easily.",
      rating: 5,
      position: "Site Supervisor",
      company: "Port Authority",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent leading-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Trusted by operations managers and facility teams.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 relative overflow-hidden hover:bg-gray-100/50 transition-colors duration-300">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-600 opacity-10" />

                {/* User Info */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-gradient-to-tr from-blue-500 to-sky-300" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-800 group-hover:text-blue-800 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  {P}
                  {testimonial.testimonial}
                  {P}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
