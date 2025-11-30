"use client";
import React, { useState, useEffect } from "react";
import {
  Shield,
  Container,
  Warehouse,
  MapPin,
  Package,
  Leaf,
  FileCheck,
  CheckCircle,
  Clock,
  Award,
  ArrowRight,
  ArrowLeft,
  Zap,
  Phone,
  Mail,
  Calendar,
  FileText,
  AlertCircle,
  Target,
  TrendingUp,
  Users,
  Globe,
  Ship,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge: string;
  gradient: string;
  features: string[];
  process: { title: string; description: string }[];
  benefits: string[];
  compliance: string[];
  faqs: { question: string; answer: string }[];
  pricing: { type: string; description: string }[];
}

const ServiceDetailPage: React.FC = () => {
  const [serviceId, setServiceId] = useState<string | null>(null);

  useEffect(() => {
    const pathParts = window.location.pathname
      .split("/")
      .filter((part) => part);
    const id = pathParts.length > 0 ? pathParts[pathParts.length - 1] : null;
    setServiceId(id);
  }, []);

  const servicesData: Record<string, ServiceDetail> = {
    container: {
      id: "container",
      title: "Export & Import Container Treatment",
      description:
        "Professional container treatment services ensuring your cargo meets international standards and passes customs clearance worldwide with zero rejections.",
      icon: Container,
      badge: "Global Trade",
      gradient: "from-sky-400 via-sky-500 to-blue-600",
      features: [
        "ISPM-15, AQIS, NPQS Compliant Certification",
        "Zero Rejection Guarantee for all treated containers",
        "Complete Documentation & Phytosanitary Support",
        "24/7 Service Availability for urgent shipments",
        "Real-time tracking and status updates",
        "Emergency treatment services available",
      ],
      process: [
        {
          title: "Container & Cargo Inspection",
          description:
            "Thorough assessment of container condition, cargo type, and treatment requirements based on destination country regulations.",
        },
        {
          title: "Secure Sealing Process",
          description:
            "Professional sealing of all container openings using certified materials to ensure agent retention and treatment efficacy.",
        },
        {
          title: "Controlled Sanitization Treatment",
          description:
            "Application of approved agents at precise concentrations using calibrated equipment and safety protocols.",
        },
        {
          title: "Defined Exposure Period",
          description:
            "Monitoring and maintenance of required exposure time based on cargo type, temperature, and regulatory requirements.",
        },
        {
          title: "Safe Aeration & Certification",
          description:
            "Complete agent removal, safety clearance testing, and issuance of internationally recognized certificates.",
        },
      ],
      benefits: [
        "Eliminates all contaminants including insects, larvae, and eggs",
        "Prevents cargo rejection at destination ports",
        "Reduces insurance claims and financial losses",
        "Ensures compliance with international phytosanitary regulations",
        "Protects brand reputation and customer relationships",
        "Faster customs clearance and reduced demurrage charges",
      ],
      compliance: [
        "ISPM-15 International Standards",
        "AQIS Australia Quarantine",
        "NPQS National Plant Protection",
        "IPPC International Plant Protection Convention",
        "FDA Food Safety Requirements",
        "EU Phytosanitary Regulations",
      ],
      faqs: [
        {
          question: "How long does container treatment take?",
          answer:
            "The complete process typically takes 24-48 hours including sealing, exposure period, and aeration. Rush services are available for urgent shipments.",
        },
        {
          question: "Which agents do you use?",
          answer:
            "We use internationally approved and compliant agents based on cargo type, destination requirements, and regulatory needs.",
        },
        {
          question: "Is the cargo damaged during treatment?",
          answer:
            "No, our agents are specifically designed to eliminate contaminants without affecting product quality, appearance, or nutritional value.",
        },
        {
          question: "Do you provide certificates for export?",
          answer:
            "Yes, we provide internationally recognized treatment certificates and assist with phytosanitary certificate applications as needed.",
        },
      ],
      pricing: [
        {
          type: "Standard Container (20ft)",
          description: "Complete treatment with certification",
        },
        {
          type: "High Cube Container (40ft)",
          description: "Full treatment and documentation",
        },
        {
          type: "Refrigerated Container",
          description: "Specialized treatment with temperature control",
        },
        {
          type: "Bulk Cargo Treatment",
          description: "Custom pricing based on volume",
        },
      ],
    },
    warehouse: {
      id: "warehouse",
      title: "Warehouse & Storage Sanitization",
      description:
        "Comprehensive sanitization solutions protecting your stored inventory from contamination while maintaining facility hygiene and export compliance.",
      icon: Warehouse,
      badge: "Storage Protection",
      gradient: "from-cyan-400 via-sky-500 to-indigo-600",
      features: [
        "Complete facility treatment coverage",
        "Preventive risk management programs",
        "Export compliance certification",
        "All inventory types protected",
        "Minimal business disruption",
        "Regular monitoring and maintenance",
      ],
      process: [
        {
          title: "Site Inspection & Assessment",
          description:
            "Comprehensive evaluation of warehouse structure, inventory type, contamination risks, and treatment feasibility.",
        },
        {
          title: "Sealing & Preparation",
          description:
            "Professional sealing of the facility using gas-tight materials and safety measures for effective treatment.",
        },
        {
          title: "Controlled Agent Application",
          description:
            "Strategic agent distribution throughout the facility using specialized equipment for uniform coverage.",
        },
        {
          title: "Adequate Exposure Period",
          description:
            "Maintained agent concentration for the required duration to ensure complete contaminant elimination.",
        },
        {
          title: "Aeration & Safety Clearance",
          description:
            "Systematic ventilation, air quality testing, and safety certification before facility reopening.",
        },
      ],
      benefits: [
        "Eliminates existing contamination completely",
        "Prevents future contamination issues",
        "Protects inventory value and quality",
        "Maintains facility hygiene standards",
        "Reduces product losses and waste",
        "Ensures export readiness for stored goods",
      ],
      compliance: [
        "Food Safety Standards",
        "Export Compliance Regulations",
        "Occupational Safety Guidelines",
        "Environmental Protection Norms",
        "Industry Best Practices",
        "International Quality Standards",
      ],
      faqs: [
        {
          question: "How often should warehouses be sanitized?",
          answer:
            "We recommend quarterly treatments for prevention, or immediate action if contamination is detected. High-risk facilities may need monthly treatments.",
        },
        {
          question: "Can we operate during sanitization?",
          answer:
            "No, the facility must be evacuated during treatment and aeration. We schedule treatments to minimize business disruption, typically over weekends.",
        },
        {
          question: "What inventory types can be treated?",
          answer:
            "We can treat all types including food grains, spices, textiles, wood products, pharmaceuticals, and general merchandise.",
        },
        {
          question: "Is treatment safe for the building?",
          answer:
            "Yes, our agents are non-corrosive and leave no residue. They do not damage building materials, equipment, or stored products.",
        },
      ],
      pricing: [
        {
          type: "Small Warehouse (up to 5000 sq ft)",
          description: "Complete treatment and certification",
        },
        {
          type: "Medium Warehouse (5000-15000 sq ft)",
          description: "Full facility treatment",
        },
        {
          type: "Large Warehouse (15000+ sq ft)",
          description: "Custom solution with volume pricing",
        },
        {
          type: "Annual Maintenance Contract",
          description: "Quarterly preventive treatment program",
        },
      ],
    },
    onsite: {
      id: "onsite",
      title: "On-Site Cargo Treatment",
      description:
        "Flexible treatment services at your location eliminating transportation hassles and providing fast turnaround for export readiness.",
      icon: MapPin,
      badge: "On-Location",
      gradient: "from-blue-400 via-cyan-500 to-sky-600",
      features: [
        "No cargo transportation required",
        "Same-day service availability",
        "Export-ready certification",
        "All cargo types accepted",
        "Mobile treatment units",
        "Complete compliance assurance",
      ],
      process: [
        {
          title: "Site Survey & Inspection",
          description:
            "On-site visit to assess cargo, location suitability, and treatment requirements for effective planning.",
        },
        {
          title: "Cargo Sealing Preparation",
          description:
            "Professional setup of a treatment enclosure or container sealing at your premises using portable equipment.",
        },
        {
          title: "Agent Application",
          description:
            "Controlled release of treatment agents using calibrated mobile units ensuring proper concentration and distribution.",
        },
        {
          title: "Controlled Exposure Period",
          description:
            "Monitoring of agent levels and exposure time with on-site supervision for safety and efficacy.",
        },
        {
          title: "Aeration & Certification",
          description:
            "Safe agent removal, clearance testing, and immediate issuance of export certificates on-site.",
        },
      ],
      benefits: [
        "Eliminates cargo handling and transport costs",
        "Reduces risk of damage during movement",
        "Faster processing and turnaround time",
        "Convenient scheduling at your availability",
        "Maintains cargo chain of custody",
        "Immediate export readiness certification",
      ],
      compliance: [
        "All Export Market Requirements",
        "Safety Distance Regulations",
        "Mobile Treatment Standards",
        "On-Site Safety Protocols",
        "Emergency Response Procedures",
        "Worker Safety Guidelines",
      ],
      faqs: [
        {
          question: "What locations do you service?",
          answer:
            "We provide on-site services across all major industrial areas, ports, and cargo facilities. Contact us for specific location availability.",
        },
        {
          question: "How quickly can you arrive on-site?",
          answer:
            "For urgent requirements, we can mobilize within 4-6 hours in metro areas. Standard scheduling is available within 24 hours.",
        },
        {
          question: "What space is needed for on-site treatment?",
          answer:
            "We need a suitable area for cargo sealing and a safety perimeter. Our team will assess during the site survey and recommend the best setup.",
        },
        {
          question: "Can you provide treatment in open areas?",
          answer:
            "Yes, we use portable treatment chambers and tents for open area services when permanent structures are not available.",
        },
      ],
      pricing: [
        {
          type: "Small Cargo (up to 5 tons)",
          description: "On-site treatment with certification",
        },
        {
          type: "Medium Cargo (5-20 tons)",
          description: "Mobile unit treatment service",
        },
        {
          type: "Large Cargo (20+ tons)",
          description: "Custom on-site solution",
        },
        {
          type: "Emergency Service",
          description: "Priority same-day treatment",
        },
      ],
    },
    ispm15: {
      id: "ispm15",
      title: "ISPM-15 Wood Packaging Treatment",
      description:
        "Certified heat treatment and sanitization for wood packaging materials ensuring global export compliance and risk-free certification.",
      icon: Package,
      badge: "International Standard",
      gradient: "from-sky-500 via-blue-500 to-indigo-600",
      features: [
        "Global requirement compliance",
        "Official ISPM-15 marking",
        "Heat and chemical options",
        "Risk prevention certified",
        "All wood types treated",
        "Rapid processing available",
      ],
      process: [
        {
          title: "Wood Packaging Inspection",
          description:
            "Thorough examination of pallets, crates, and dunnage to identify wood types, treatment needs, and compliance requirements.",
        },
        {
          title: "Treatment Method Selection",
          description:
            "Choice of heat treatment or chemical sanitization based on wood type, destination country requirements, and timeline.",
        },
        {
          title: "Controlled Treatment Application",
          description:
            "Professional heat treatment (56°C for 30 min) or sanitization following strict ISPM-15 protocols.",
        },
        {
          title: "Quality Verification",
          description:
            "Post-treatment inspection and testing to confirm treatment efficacy and compliance with international standards.",
        },
        {
          title: "Official Marking & Certification",
          description:
            "Application of permanent ISPM-15 stamp and issuance of treatment certificates for export documentation.",
        },
      ],
      benefits: [
        "Prevents export shipment rejection",
        "Eliminates wood-borne contaminants and pathogens",
        "Meets requirements for 150+ countries",
        "Protects against costly returns and delays",
        "Enables smooth customs clearance",
        "Long-term risk prevention assurance",
      ],
      compliance: [
        "ISPM-15 International Standard",
        "IPPC Compliance Requirements",
        "Country-Specific Regulations",
        "Heat Treatment Standards",
        "Sanitization Protocols",
        "Official Marking Guidelines",
      ],
      faqs: [
        {
          question: "What is ISPM-15 and why is it required?",
          answer:
            "ISPM-15 is an international standard requiring treatment of wood packaging to prevent the spread of contaminants. It's mandatory for exports to most countries worldwide.",
        },
        {
          question: "Which treatment method is better?",
          answer:
            "Both are equally effective. Heat treatment is chemical-free and widely accepted. Sanitization is faster for large volumes. We recommend based on your needs.",
        },
        {
          question: "How long does the marking remain valid?",
          answer:
            "Once properly treated and marked, wood packaging remains compliant indefinitely as long as it's not modified or shows signs of new contamination.",
        },
        {
          question: "Can partially treated wood be re-certified?",
          answer:
            "No, all wood components must be treated together. Partially treated materials require complete re-treatment and new certification.",
        },
      ],
      pricing: [
        {
          type: "Standard Pallets",
          description: "Heat treatment with ISPM-15 marking",
        },
        {
          type: "Custom Crates & Boxes",
          description: "Treatment and certification per unit",
        },
        {
          type: "Bulk Wood Packaging",
          description: "Volume-based pricing available",
        },
        {
          type: "Rush Treatment",
          description: "Expedited 24-hour processing",
        },
      ],
    },
    agricultural: {
      id: "agricultural",
      title: "Agricultural Commodity Treatment",
      description:
        "Comprehensive risk management for agricultural commodities ensuring quarantine compliance and export readiness for global markets.",
      icon: Leaf,
      badge: "Agri Protection",
      gradient: "from-cyan-500 via-sky-500 to-blue-600",
      features: [
        "Bulk commodity treatment",
        "Quarantine compliance assured",
        "Preventive programs available",
        "In-transit solutions provided",
        "All crop types supported",
        "Scientific application methods",
      ],
      process: [
        {
          title: "Risk Assessment & Inspection",
          description:
            "Detailed analysis of commodity type, contamination risks, destination requirements, and treatment specifications.",
        },
        {
          title: "Treatment Method Selection",
          description:
            "Scientific selection of agent, dosage, and application technique based on commodity and regulatory needs.",
        },
        {
          title: "Scientific Application",
          description:
            "Precision treatment using approved methods ensuring contaminant elimination while maintaining product quality and safety.",
        },
        {
          title: "Quality Monitoring",
          description:
            "Continuous monitoring of treatment parameters, agent concentration, and exposure time for optimal results.",
        },
        {
          title: "Certification & Documentation",
          description:
            "Complete documentation including treatment records, test reports, and phytosanitary certificates for export.",
        },
      ],
      benefits: [
        "Eliminates quarantine-level contaminants effectively",
        "Maintains commodity quality and grade",
        "Enables access to premium export markets",
        "Reduces post-harvest losses significantly",
        "Ensures regulatory compliance globally",
        "Protects farmer and exporter investments",
      ],
      compliance: [
        "Quarantine Treatment Protocols",
        "Export Market Requirements",
        "Food Safety Standards",
        "Phytosanitary Regulations",
        "Maximum Residue Limits",
        "Organic Certification Requirements",
      ],
      faqs: [
        {
          question: "Which agricultural products do you treat?",
          answer:
            "We treat all agricultural commodities including grains, pulses, spices, nuts, dried fruits, seeds, and processed agricultural products.",
        },
        {
          question: "Does treatment affect product quality?",
          answer:
            "No, our agents are specifically selected and applied to eliminate contaminants without affecting taste, appearance, germination, or nutritional value.",
        },
        {
          question: "How long does agricultural treatment take?",
          answer:
            "Treatment duration varies from 24 hours to 7 days depending on commodity type, quantity, and destination requirements. We provide exact timelines after assessment.",
        },
        {
          question: "Can organic products be treated?",
          answer:
            "Some agents are approved for organic products. We provide alternative risk management solutions that maintain organic certification where required.",
        },
      ],
      pricing: [
        {
          type: "Grain & Pulses (per ton)",
          description: "Treatment with quality testing",
        },
        {
          type: "Spices & Condiments",
          description: "Premium treatment for high-value crops",
        },
        {
          type: "Seeds & Planting Material",
          description: "Specialized germination-safe treatment",
        },
        {
          type: "Bulk Commodity (100+ tons)",
          description: "Volume discounts available",
        },
      ],
    },
    phytosanitary: {
      id: "phytosanitary",
      title: "Phytosanitary Certificate Support",
      description:
        "Complete assistance for obtaining phytosanitary certificates ensuring your agricultural exports meet all international plant health requirements.",
      icon: FileCheck,
      badge: "Documentation",
      gradient: "from-blue-500 via-sky-500 to-cyan-600",
      features: [
        "Global export requirement fulfillment",
        "Customs clearance guarantee",
        "IPPC compliance assured",
        "End-to-end support provided",
        "Government liaison included",
        "Fast-track processing available",
      ],
      process: [
        {
          title: "Sanitization & Treatment",
          description:
            "Professional compliance treatment meeting the importing country's specific phytosanitary requirements.",
        },
        {
          title: "Inspection Assistance",
          description:
            "Coordination with government inspectors and preparation of consignment for official phytosanitary inspection.",
        },
        {
          title: "Application Documentation",
          description:
            "Preparation and submission of all required documents, declarations, and supporting evidence to authorities.",
        },
        {
          title: "Government Coordination",
          description:
            "Liaison with plant quarantine officials, follow-up on applications, and resolution of any documentation issues.",
        },
        {
          title: "Certificate Delivery",
          description:
            "Collection and delivery of official phytosanitary certificate along with all supporting treatment documents.",
        },
      ],
      benefits: [
        "Mandatory for agricultural exports worldwide",
        "Ensures smooth customs clearance",
        "Prevents shipment rejection and returns",
        "Protects against penalties and losses",
        "Establishes plant health compliance",
        "Enables access to regulated markets",
      ],
      compliance: [
        "IPPC International Standards",
        "Country-Specific Requirements",
        "Plant Quarantine Regulations",
        "Export Certification Procedures",
        "Risk Assessment Protocols",
        "Documentation Standards",
      ],
      faqs: [
        {
          question: "What is a phytosanitary certificate?",
          answer:
            "It's an official document certifying that plants and plant products have been inspected and found free from quarantine-level contaminants according to importing country requirements.",
        },
        {
          question: "How long does it take to get the certificate?",
          answer:
            "Typically 3-5 business days after treatment and inspection. Rush processing is available for urgent shipments with additional coordination.",
        },
        {
          question: "Which exports require phytosanitary certificates?",
          answer:
            "All plant materials, agricultural products, wood packaging, and many processed plant products require phytosanitary certificates for international export.",
        },
        {
          question: "What if the certificate is rejected?",
          answer:
            "We handle all corrections and resubmissions at no additional cost. Our expertise ensures minimal rejection rates and quick resolution of any issues.",
        },
      ],
      pricing: [
        {
          type: "Single Consignment",
          description: "Complete certification support",
        },
        {
          type: "Multiple Shipments",
          description: "Discounted package pricing",
        },
        {
          type: "Annual Contract",
          description: "Unlimited certificates for regular exporters",
        },
        {
          type: "Rush Processing",
          description: "Priority 24-hour certificate service",
        },
      ],
    },
    vessel: {
      id: "vessel",
      title: "Vessel Sanitization",
      description:
        "Specialized sanitization services for ships, cargo holds, and vessels ensuring compliant maritime operations and export readiness.",
      icon: Ship,
      badge: "Maritime",
      gradient: "from-sky-500 via-blue-600 to-indigo-700",
      features: [
        "Cargo Hold & Ship Treatment",
        "Safe for Crew & Equipment",
        "Complies with IMO & AQIS Standards",
        "Effective Against Stored Product Contaminants",
        "24/7 Port Service Availability",
        "Certified Maritime Documentation",
      ],
      process: [
        {
          title: "Vessel Inspection & Risk Analysis",
          description:
            "Detailed inspection of the vessel’s cargo holds, deck, and compartments to assess contamination risks and treatment scope.",
        },
        {
          title: "Cargo Area Sealing",
          description:
            "Sealing of cargo spaces or compartments to ensure safe and effective agent retention throughout the treatment process.",
        },
        {
          title: "Agent Application",
          description:
            "Controlled release of approved agents under strict maritime safety regulations.",
        },
        {
          title: "Monitored Exposure Period",
          description:
            "Continuous monitoring of gas levels, temperature, and humidity to ensure contaminant elimination and crew safety.",
        },
        {
          title: "Aeration & Safety Clearance Certification",
          description:
            "Complete aeration of treated spaces, gas testing, and issuance of safety clearance and treatment certificates.",
        },
      ],
      benefits: [
        "Ensures compliant vessel operation and safety",
        "Prevents cargo contamination and rejections",
        "Approved for bulk carriers, containers, and ship holds",
        "Minimizes downtime with fast, safe procedures",
        "Certified under international maritime standards",
        "Protects cargo value and shipping reputation",
      ],
      compliance: [
        "IMO Safety Standards",
        "AQIS Maritime Guidelines",
        "IPPC & ISPM-15 Requirements",
        "FAO International Plant Health Standards",
        "Maritime Safety Data Protocols",
      ],
      faqs: [
        {
          question: "Is treatment safe for crew members?",
          answer:
            "Yes. All treatments are performed under controlled, sealed conditions. Crew members are restricted from treated areas until full aeration and safety clearance are achieved.",
        },
        {
          question: "What types of vessels do you service?",
          answer:
            "We provide sanitization for bulk carriers, container ships, cargo holds, tankers, and general cargo vessels.",
        },
        {
          question: "Can treatment be performed while the vessel is at sea?",
          answer:
            "Yes, in-transit treatment can be performed following IMO and port authority safety regulations, ensuring no delay in voyage schedules.",
        },
        {
          question: "Do you issue compliance certificates?",
          answer:
            "Yes, we issue internationally recognized treatment and safety certificates accepted by port and quarantine authorities worldwide.",
        },
      ],
      pricing: [
        {
          type: "Cargo Hold Treatment",
          description: "Full treatment with safety certification",
        },
        {
          type: "In-Transit Treatment",
          description: "Approved in-transit treatment as per IMO guidelines",
        },
        {
          type: "Port-Side Vessel Treatment",
          description: "On-dock treatment and clearance certification",
        },
        {
          type: "Bulk Grain / Commodity Cargo",
          description: "Custom pricing based on hold capacity",
        },
      ],
    },

    preventive: {
      id: "preventive",
      title: "Preventive Treatment",
      description:
        "Routine preventive treatment programs designed to stop contamination before it occurs, ensuring long-term protection and hygiene.",
      icon: ShieldCheck,
      badge: "Preventive Care",
      gradient: "from-blue-500 via-sky-500 to-cyan-600",
      features: [
        "Scheduled Preventive Treatments",
        "Environmentally Safe Methods",
        "Customized Programs for Facilities",
        "Reduces Contamination Risks",
        "Suitable for Warehouses & Food Plants",
        "Continuous Monitoring & Reporting",
      ],
      process: [
        {
          title: "Site Assessment & Risk Analysis",
          description:
            "Comprehensive inspection to identify potential contamination sources and risk-prone areas within the facility.",
        },
        {
          title: "Planning of Treatment Intervals",
          description:
            "Creation of a customized preventive treatment schedule based on risk levels and environmental factors.",
        },
        {
          title: "Preventive Agent or Barrier Application",
          description:
            "Application of safe and effective agents or barriers to control contaminants before they can establish.",
        },
        {
          title: "Monitoring & Documentation",
          description:
            "Regular inspection, risk level monitoring, and maintenance of detailed reports for audit and compliance.",
        },
        {
          title: "Ongoing Maintenance & Reporting",
          description:
            "Quarterly reviews, performance assessments, and adjustments to treatment frequency as needed.",
        },
      ],
      benefits: [
        "Prevents contamination before it starts",
        "Protects inventory and equipment",
        "Reduces long-term treatment costs",
        "Improves facility hygiene and safety",
        "Ideal for recurring risk-sensitive sites",
        "Compliance-ready for audit inspections",
      ],
      compliance: [
        "Food Safety Standards (FSSAI, HACCP)",
        "Warehouse Hygiene Regulations",
        "Environmental Protection Norms",
        "Industrial Health & Safety Guidelines",
        "Audit & Certification Compliance",
      ],
      faqs: [
        {
          question: "How often should preventive treatment be done?",
          answer:
            "Typically quarterly or monthly, depending on your facility type, contamination risk, and product storage conditions.",
        },
        {
          question: "Is preventive treatment safe for food storage areas?",
          answer:
            "Yes, we use government-approved agents and methods that are safe for food and pharmaceutical environments when applied correctly.",
        },
        {
          question: "Can preventive treatment reduce long-term costs?",
          answer:
            "Absolutely. Preventive programs reduce contamination incidents, minimizing emergency treatment costs and product losses.",
        },
        {
          question: "Do you provide service reports for audits?",
          answer:
            "Yes, every treatment includes detailed reports, risk activity logs, and compliance documents suitable for audits.",
        },
      ],
      pricing: [
        {
          type: "Single Preventive Visit",
          description: "One-time treatment for risk control",
        },
        {
          type: "Quarterly Program",
          description: "Scheduled preventive treatment every 3 months",
        },
        {
          type: "Monthly Maintenance Plan",
          description: "Regular inspections and treatment service",
        },
        {
          type: "Annual Contract (AMC)",
          description: "Comprehensive preventive risk management plan",
        },
      ],
    },
  };

  const service = serviceId ? servicesData[serviceId] : null;

  if (!serviceId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            Service Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            The requested service does not exist.
          </p>
          <button
            onClick={() => (window.location.href = "/services")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-sky-200/20 to-blue-300/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-sky-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Back Button */}
        <div>
          <button
            onClick={() => (window.location.href = "/services")}
            className="inline-flex cursor-pointer items-center text-sky-600 font-semibold mb-8 hover:text-sky-700 transition-transform duration-150 hover:-translate-x-1"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Services
          </button>
        </div>

        {/* Hero Section */}
        <div>
          <div
            className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-12 text-white mb-12 relative overflow-hidden shadow-2xl`}
          >
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -right-24 -bottom-12 w-80 h-80 bg-white/5 rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <service.icon className="w-12 h-12" />
                </div>
                <div className="inline-flex items-center space-x-2 bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">{service.badge}</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-4xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href={"/contact"}
                  className="bg-white cursor-pointer text-sky-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transform transition-transform duration-150 hover:scale-105 hover:-translate-y-0.5"
                >
                  <span className="flex items-center">
                    Get Instant Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </Link>
                <Link
                  href={"tel:+917878937373"}
                  className="bg-white/20 cursor-pointer backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/30 transform transition-transform duration-150 hover:scale-105 hover:-translate-y-0.5"
                >
                  <span className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 shadow-xl border border-white/30">
            <div className="flex items-center mb-8">
              <CheckCircle className="w-8 h-8 text-sky-600 mr-4" />
              <h2 className="text-3xl font-bold text-slate-800">
                Key Features & Benefits
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 transform transition-transform duration-150 hover:scale-102 hover:translate-x-1"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 shadow-xl border border-white/30">
            <div className="flex items-center mb-8">
              <Target className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-slate-800">Our Process</h2>
            </div>
            <div className="space-y-6">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white to-sky-50 border border-sky-100 transform transition-transform duration-150 hover:scale-102 hover:translate-x-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 text-white text-xl font-bold rounded-xl flex-shrink-0 shadow-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 shadow-xl border border-white/30">
            <div className="flex items-center mb-8">
              <TrendingUp className="w-8 h-8 text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-slate-800">
                Benefits You{"'"}ll Experience
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 transform transition-transform duration-150 hover:scale-105 hover:-translate-y-1"
                >
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <p className="text-slate-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Standards */}
        <div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 shadow-xl border border-white/30">
            <div className="flex items-center mb-8">
              <Shield className="w-8 h-8 text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-slate-800">
                Compliance & Standards
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.compliance.map((standard, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 transform transition-transform duration-150 hover:scale-105"
                >
                  <Award className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Options */}
        <div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 shadow-xl border border-white/30">
            <div className="flex items-center mb-8">
              <FileText className="w-8 h-8 text-amber-600 mr-4" />
              <h2 className="text-3xl font-bold text-slate-800">
                Pricing Options
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {service.pricing.map((option, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 transform transition-transform duration-150 hover:scale-102 hover:-translate-y-0.5"
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {option.type}
                  </h3>
                  <p className="text-slate-600">{option.description}</p>
                  <button className="mt-4 text-amber-600 font-semibold hover:text-amber-700 transform transition-transform duration-150 hover:translate-x-1">
                    Get Quote →
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200">
              <p className="text-slate-700 font-medium text-center">
                💡 Custom pricing available for bulk orders and long-term
                contracts. Contact us for a personalized quote.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 shadow-xl border border-white/30">
            <div className="flex items-center mb-8">
              <AlertCircle className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-slate-800">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 transform transition-transform duration-150 hover:scale-101"
                >
                  <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-start">
                    <span className="text-blue-600 mr-3">Q{idx + 1}.</span>
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Users,
                label: "Happy Clients",
                value: "500+",
                gradient: "from-sky-100 to-sky-200",
              },
              {
                icon: Globe,
                label: "Countries Served",
                value: "50+",
                gradient: "from-blue-100 to-blue-200",
              },
              {
                icon: Award,
                label: "Success Rate",
                value: "100%",
                gradient: "from-cyan-100 to-cyan-200",
              },
              {
                icon: Clock,
                label: "Avg. Turnaround",
                value: "24-48h",
                gradient: "from-indigo-100 to-indigo-200",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 transform transition-transform duration-150 hover:scale-105 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4`}
                >
                  <stat.icon className="w-7 h-7 text-sky-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div>
          <div
            className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl transform transition-transform duration-200 hover:scale-102`}
          >
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />

            <div className="relative z-10 space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
                  Get your cargo export-ready with certified compliance
                  services. Zero rejections guaranteed. Contact us now for
                  immediate assistance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href={"/contact"}
                  className="bg-white text-sky-600 font-semibold px-10 py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg transform duration-150 hover:scale-105 hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Service
                  </span>
                </Link>

                <Link
                  href={"tel:+917878937373"}
                  className="bg-blue-500/20 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-2xl hover:bg-blue-400/30 transition-colors border border-white/20 transform duration-150 hover:scale-105 hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91 78789 37373
                  </span>
                </Link>

                <Link
                  href="mailto:sales@harbourfume.com"
                  className="bg-blue-500/20 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-2xl hover:bg-blue-400/30 transition-colors border border-white/20 transform duration-150 hover:scale-105 hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </span>
                </Link>
              </div>

              <div className="pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm">
                  Emergency services available • Serving 50+ countries • 100%
                  success rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
