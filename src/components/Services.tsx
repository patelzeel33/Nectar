"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation, Variants, pipe } from "motion/react";
import {
  Package,
  ShieldCheck,
  Ship,
  FileCheck,
  Leaf,
  MapPin,
  Warehouse,
  Container,
  ArrowRight,
  Shapes,
  FactoryIcon,
  Waves,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  // We still need headerControls for the background element, but it will be simpler.
  const headerControls = useAnimation();
  const cardsControls = useAnimation();
  const backgroundControls = useAnimation();

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const onScroll = () => {
      setScrollY(window.scrollY);
      setClientHeight(window.innerHeight);
    };

    const setElementTopPosition = () => {
      if (element) {
        setElementTop(element.getBoundingClientRect().top + window.scrollY);
      }
    };

    setElementTopPosition();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setElementTopPosition);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setElementTopPosition);
    };
  }, []);

  // Calculate scroll progress (still needed for card and background effects)
  const scrollProgress = Math.max(
    0,
    Math.min(
      1,
      (scrollY - elementTop + clientHeight) /
        (clientHeight + (containerRef.current?.offsetHeight || 0))
    )
  );

  // Animate based on scroll progress
  useEffect(() => {
    // Scroll animation logic for header is REMOVED/SIMPLIFIED

    const backgroundScale = 0.95 + scrollProgress * 0.1;
    const backgroundRotate = scrollProgress * 10;

    // headerControls is now only used to prevent issues but does no visible animation
    headerControls.start({
      y: 0, // Fixed position
      opacity: 1, // Fixed opacity
      transition: { duration: 0 },
    });

    cardsControls.start({
      y: Math.max(0, 150 - scrollProgress * 375),
      transition: { duration: 0 },
    });

    backgroundControls.start({
      scale: backgroundScale,
      rotate: backgroundRotate,
      transition: { duration: 0 },
    });
  }, [scrollProgress, headerControls, cardsControls, backgroundControls]);

  const services: Service[] = [
    {
      id: 1,
      title: "Piping",
      description:
        "Fabrication, erection, and modification of all IBR/NIBR and alloy-material piping systems.",
      icon: Waves,
      color: "#ff0000",
      bgColor: "#fedbe0ff",
    },
    {
      id: 2,
      title: "Industrial Structure",
      description:
        "Fabrication and erection of heavy structures, sheds, and modular assemblies.",
      icon: Warehouse,
      color: "#ff0000",
      bgColor: "#fedbe0ff",
    },
    {
      id: 3,
      title: "Equipment",
      description:
        "Erection and alignment of static/rotating equipment, tanks, exchangers, and boilers.",
      icon: Shapes,
      color: "#ff0000",
      bgColor: "#fedbe0ff",
    },
    {
      id: 4,
      title: "Plant Turnaround / Shutdowm",
      description:
        "Complete turnaround jobs including revamps, modifications, and equipment replacement.",
      icon: FactoryIcon,
      color: "#ff0000",
      bgColor: "#fedbe0ff",
    }
  ];

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

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateY: -15,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  const iconVariants: Variants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const cardHoverVariants: Variants = {
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Button variants
  const buttonVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(30, 64, 175, 0.3)",
    },
    tap: { scale: 0.98 },
  };

  // Individual card scroll animations
  const getCardScrollAnimation = (index: number) => {
    const cardY = -20 + index * 5 - scrollProgress * (40 + index * 8);
    const cardRotateX = scrollProgress * 5;
    const cardScale =
      0.95 +
      scrollProgress * 0.05 -
      (scrollProgress > 0.7 ? (scrollProgress - 0.7) * 0.07 : 0);

    return {
      y: cardY,
      rotateX: cardRotateX,
      scale: Math.max(0.9, cardScale),
      transition: { duration: 0 },
    };
  };

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={backgroundControls}
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-200 rounded-full blur-3xl" />
      </motion.div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          // Removed animate={headerControls} to simplify control.
          // We rely solely on the isInView animation below.
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent leading-tight mb-4"
            // Rotational Spin Entrance (Initial load animation)
            initial={{ opacity: 0, y: 50, rotateX: 90 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{
              duration: 1.0,
              ease: "easeOut",
              delay: 0.1,
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
          >
            Services
          </motion.h2>
          <motion.p
            className="text-lg text-slate-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Engineering Strength. Delivering Reliability.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group cursor-pointer"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              // The card animation is still controlled by scrollProgress
              animate={getCardScrollAnimation(index)}
            >
              <motion.div
                className="bg-red-50 rounded-2xl p-8 h-full text-center border border-red-100 relative overflow-hidden"
                variants={cardHoverVariants}
              >
                <div>
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-100/50 via-transparent to-red-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon */}
                  <div className="flex justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10"
                      style={{ backgroundColor: service.bgColor }}
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <service.icon
                        className="w-8 h-8"
                        style={{ color: service.color }}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl font-bold text-slate-800 mb-4 group-hover:text-red-800 transition-colors duration-300"
                      animate={{
                        y: scrollProgress * -5,
                        transition: { duration: 0 },
                      }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
                      animate={{
                        y: scrollProgress * -3,
                        transition: { duration: 0 },
                      }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Floating particles effect on hover */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-70"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 right-8 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-50"
                    animate={{
                      y: [0, -15, 0],
                      x: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Go to Services Button */}
        <div className="mt-3 text-center">
          <motion.a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-full text-white bg-red-400 cursor-pointer hover:bg-red-500 font-semibold focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-300 ease-in-out shadow-lg"
            variants={buttonVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            Go to Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
