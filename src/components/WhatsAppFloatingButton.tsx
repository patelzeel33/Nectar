"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

interface ContactOption {
  id: string;
  icon: React.ElementType;
  color: string;
  hover: string;
  action: () => void;
  label: string;
}

const WhatsAppAlternatives: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "7878937373";
    const message = "Hello! I'd like to get in touch.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+917878937373";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:sales@harbourfume.com";
  };

  const contactOptions: ContactOption[] = [
    {
      id: "email",
      icon: Mail,
      color: "bg-orange-500",
      hover: "hover:bg-orange-600",
      action: handleEmailClick,
      label: "Email us",
    },
    {
      id: "call",
      icon: Phone,
      color: "bg-blue-500",
      hover: "hover:bg-blue-600",
      action: handleCallClick,
      label: "Call us",
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      color: "bg-green-500",
      hover: "hover:bg-green-600",
      action: handleWhatsAppClick,
      label: "WhatsApp",
    },
  ];

  const ContactButton: React.FC<{
    option: ContactOption;
    delay: number;
  }> = ({ option, delay }) => (
    <motion.button
      key={option.id}
      onClick={option.action}
      aria-label={option.label}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.25, delay }}
      className={`flex items-center justify-center w-12 h-12 ${option.color} ${option.hover} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <option.icon className="w-5 h-5" />
    </motion.button>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center space-x-3">
        <AnimatePresence>
          {isExpanded &&
            contactOptions.map((option, idx) => (
              <ContactButton
                key={option.id}
                option={option}
                delay={idx * 0.1}
              />
            ))}
        </AnimatePresence>

        {/* Main toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle contact options"
          className="flex cursor-pointer items-center justify-center w-16 h-16 
                     bg-gradient-to-br from-red-400 via-red-500 to-red-500
                     hover:from-red-500 hover:via-red-600 hover:to-red-600 
                     text-white rounded-full shadow-lg hover:shadow-xl 
                     transform hover:scale-105 transition-all duration-300"
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppAlternatives;
