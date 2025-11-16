import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/Services";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import IndustriesSection from "@/components/IndustriesSection";

export default function SkyShieldHero() {
  return (
    <div
      className=" min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-100"
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Hero Section */}
      <HeroSection />
      {/* About Us Section */}
      <AboutUsSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Why Choose Us */}
      <WhyChooseUsSection />
      {/* Industries We Serve Section */}
      <IndustriesSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
