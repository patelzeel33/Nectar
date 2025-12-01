"use client";
import React, { useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Services = [
  { Link: "/services/Pipng", data: "Piping" },
  { Link: "/services/Industrial Structure", data: "Industrial Structure" },
  { Link: "/services/Equipment", data: "Equipment" },
  { Link: "/services/Plant Turnaround / Shutdown", data: "Plant Turnaround / Shutdown" },
];

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <footer
      className="bg-white border-t border-gray-200 py-12 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
          {/* Left Side - Logo */}
          <div className="flex items-center p-0 m-0 leading-none shrink-0">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={120}
              className="block p-0 m-0 object-contain leading-none"
            />
          </div>

          {/* Center - Quick Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-slate-600 hover:text-red-600 transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-slate-600 hover:text-red-600 transition-colors text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-red-600 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section - Contact Info & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800 text-sm">Contact Info</h4>
              <div className="space-y-2">
                <Link
                  href="tel:+919662512685"
                  className="flex items-center space-x-2 text-slate-600 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 96625 12685</span>
                </Link>
                <a
                  href="mailto:Info@nectarengg.com"
                  className="flex items-center space-x-2 text-slate-600 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Info@nectarengg.com</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800 text-sm">Address</h4>
              <Link
                target="_blank"
                href={"https://maps.app.goo.gl/NsjesoSvodnHyZLo9"}
                className="flex items-start space-x-2 text-slate-600 text-sm"
              >
                <MapPin className="w-10 h-10 mt-0.5" />
                <span>
                  508 Elite Mangnum, Opp Solaris Business Hub, Near Bhuyangdev
                  Cross Road, Ahmedabad
                </span>
              </Link>
            </div>

            {/* Hours */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800 text-sm">Hours</h4>
              <div className="flex items-center space-x-2 text-slate-600 text-sm">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 10:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800 text-sm">Services</h4>
              <div className="space-y-1 grid grid-cols-1">
                {Services.map((service) => (
                  <Link
                    key={service.data}
                    href={service.Link}
                    className="block mx-1 text-slate-600 hover:text-red-600 transition-colors text-sm"
                  >
                    {service.data}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-gray-100">
            <p className="text-slate-500 text-sm">
              © 2025 Nectar Engineering Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;