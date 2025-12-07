"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  Factory,
  Droplets,
  Beaker,
  Wrench,
} from "lucide-react";

interface ProjectDetail {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  sector: string;
  gradient: string;
  location?: string;
  year?: string;
  client: string;
  owner?: string;
  scope: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  highlights: string[];
  metrics: string[];
  phases: string[];
  image: string; // from /public
}

const projects: Record<string, ProjectDetail> = {
  "clarifier-mol-ekcp": {
    id: "clarifier-mol-ekcp",
    category: "Clarifier & MOL Tank Project",
    title: "Clarifier Tank (SS 316L)",
    subtitle: "Clarifier tank for MOL / process service",
    sector: "Tankages",
    gradient: "from-red-400 via-red-500 to-red-600",
    location: "India",
    year: "—",
    client: "EKCP",
    owner: "Reliance",
    scope:
      "Engineering, fabrication and supply of stainless steel clarifier tank in SS 316L for Reliance.",
    description:
      "This project involved the execution of a Clarifier & MOL tank package where an SS 316L clarifier tank was supplied for Reliance through client EKCP. The tank was designed for corrosion resistance, long life and reliable clarifier performance.",
    icon: Beaker,
    highlights: [
      "Use of SS 316L material for corrosion resistance",
      "Integration into existing MOL / water treatment scheme",
      "Coordinated delivery against client project schedule",
    ],
    metrics: [
      "Clarifier construction in SS 316L",
      "Delivered as part of Clarifier & MOL package",
    ],
    phases: [
      "Requirement finalization with EKCP & Reliance",
      "Engineering and detailing of clarifier tank in SS 316L",
      "Fabrication, QA/QC and inspection",
      "Dispatch, site coordination and integration",
    ],
    image: "/projects/Picture1.jpg",
  },
  "clarifier-mol-ethanol-rtf": {
    id: "clarifier-mol-ethanol-rtf",
    category: "Clarifier & MOL Tank Project",
    title: "Ethanol Tanks (2 Units)",
    subtitle: "Ethanol storage tanks under Clarifier & MOL package",
    sector: "Tankages",
    gradient: "from-amber-400 via-red-500 to-red-600",
    location: "India",
    year: "—",
    client: "RTF",
    owner: "Reliance",
    scope:
      "Engineering and supply of two ethanol storage tanks as part of the Clarifier & MOL tank project.",
    description:
      "As part of a larger Clarifier & MOL Tank project, two ethanol storage tanks were engineered and supplied through client RTF for Reliance. The tanks were designed for safe ethanol storage with due attention to venting, nozzles and safety requirements.",
    icon: Factory,
    highlights: [
      "Two dedicated ethanol tanks delivered under a single package",
      "Coordination with client RTF and owner Reliance",
      "Focus on safe storage and handling of ethanol",
    ],
    metrics: [
      "2 ethanol storage tanks",
      "Delivered under Clarifier & MOL project scope",
    ],
    phases: [
      "Process requirement understanding and basic sizing",
      "Mechanical design and detailing of ethanol tanks",
      "Fabrication, inspection and dispatch",
      "Support during site erection and hook-up",
    ],
    image: "/projects/Picture2.jpg",
  },
  "glass-fo-storage-tank": {
    id: "glass-fo-storage-tank",
    category: "Industrial Chemical & Utility Storage",
    title: "FO Storage Tank – Glass Factory",
    subtitle: "FO storage tank for New Energy – Glass Factory",
    sector: "Industrial Storage",
    gradient: "from-rose-400 via-red-500 to-red-700",
    location: "New Energy – Glass Factory",
    year: "—",
    client: "Reliance Industries Ltd.",
    owner: "Reliance",
    scope:
      "EPC of site-fabricated FO storage tank including PESO approvals and complete construction.",
    description:
      "For the New Energy Glass Factory, an FO storage tank was engineered, procured and constructed on site. The scope covered design, site fabrication, testing and PESO approval for safe fuel oil storage within the facility.",
    icon: Factory,
    highlights: [
      "EPC responsibility for FO storage tank",
      "PESO-compliant design and execution",
      "Seamless integration into New Energy glass facility",
    ],
    metrics: [
      "Site-fabricated FO storage tank",
      "PESO approval obtained post installation",
    ],
    phases: [
      "Engineering and design of FO tank meeting PESO norms",
      "Procurement of plates, nozzles and accessories",
      "Site fabrication, welding and NDT",
      "Hydro-testing, inspection and PESO approval",
    ],
    image: "/projects/Picture3.jpg",
  },
  "polysilicon-chemical-storage": {
    id: "polysilicon-chemical-storage",
    category: "Industrial Chemical & Utility Storage",
    title: "Chemical & Utility Tank Farm – Polysilicon",
    subtitle: "RO water, caustic, BCW and other chemical tanks",
    sector: "Industrial Storage",
    gradient: "from-red-500 via-red-600 to-red-700",
    location: "New Energy – Polysilicon",
    year: "—",
    client: "Reliance Industries Ltd.",
    owner: "Reliance",
    scope:
      "EPC of ten site-fabricated tanks for RO water, caustic, BCW, H2SO4, wash water and lime slurry service.",
    description:
      "At the New Energy Polysilicon facility, multiple chemical and utility storage tanks were engineered and constructed. The scope included RO water tanks (different height/diameter combinations), caustic tanks with PWHT, BCW, sulphuric acid, wash water and lime slurry storage tanks.",
    icon: Beaker,
    highlights: [
      "Execution of a multi-service chemical and utility tank farm",
      "PWHT-compliant caustic storage tanks",
      "Balanced layout to optimize plant space utilization",
    ],
    metrics: [
      "10 site-fabricated tanks in total",
      "RO water, NAOH, BCW, H2SO4, wash water, lime slurry",
    ],
    phases: [
      "Tank farm layout and service allocation",
      "Mechanical design and detailing for each tank service",
      "Site fabrication, PWHT (where applicable) and inspection",
      "Testing, documentation and final handover",
    ],
    image: "/projects/Picture4.jpg",
  },
  "glass-water-sludge-systems": {
    id: "glass-water-sludge-systems",
    category: "Water Treatment & Sludge Management Systems",
    title: "Water & Sludge Treatment Tanks – Glass Factory",
    subtitle: "Coagulation, flocculation, air flotation & sludge tanks",
    sector: "Water Treatment",
    gradient: "from-sky-400 via-red-500 to-red-600",
    location: "New Energy – Glass Factory",
    year: "—",
    client: "Reliance (New Energy)",
    owner: "Reliance",
    scope:
      "EPC of water treatment tankages for coagulation, flocculation, air flotation and sludge concentration.",
    description:
      "For the New Energy Glass Factory, water treatment and sludge management tankages were executed, including coagulation and flocculation tanks, dissolved air flotation units and sludge concentration tanks. The work included engineering, site fabrication and coordination with the overall water treatment plant.",
    icon: Droplets,
    highlights: [
      "Integrated tankage package for water and sludge treatment",
      "Optimized layout for treatment process flow",
      "Executed within tight plant development schedule",
    ],
    metrics: [
      "4 major water treatment tanks (approx. L-37, H-5, W-7)",
      "Complete EPC for tankages",
    ],
    phases: [
      "Process requirement understanding for water treatment",
      "Detail engineering of tankages and interconnections",
      "Site fabrication and erection of tanks",
      "Testing, flushing and handover to treatment system integrator",
    ],
    image: "/projects/Picture5.jpg",
  },
  "new-energy-pv-interconnection": {
    id: "new-energy-pv-interconnection",
    category: "Piping & Structural Systems",
    title: "PV Interconnection Piping – New Energy",
    subtitle:
      "PV interconnection piping between Refinery C2 unit and New Energy facilities",
    sector: "Piping Systems",
    gradient: "from-red-400 via-rose-500 to-red-700",
    location: "New Energy Facilities",
    year: "—",
    client: "Reliance (New Energy)",
    owner: "Reliance",
    scope:
      "PV interconnection piping to connect the Refinery C2 unit to New Energy facilities, covering IBR and non-IBR services.",
    description:
      "This project created a piping backbone between the Refinery C2 unit and New Energy facilities using PV interconnection piping. The work covered IBR and NIBR services like nitrogen, mild steel lines, LC, PR and HY, executed with stringent quality and coordination.",
    icon: Wrench,
    highlights: [
      "Large interconnection between refinery and new energy block",
      "Multiple service lines (NI, MS, LC, PR, HY)",
      "Work within a brownfield + new energy interface",
    ],
    metrics: [
      "≈ 2,50,000 inch-meter of piping",
      "IBR + non-IBR pipelines",
    ],
    phases: [
      "Route finalization and tie-in identification",
      "Isometrics, material planning and prefabrication",
      "Field erection, welding and NDT",
      "Testing, flushing and system commissioning",
    ],
    image: "/projects/Picture6.jpg",
  },
  "copper-unit-structures": {
    id: "copper-unit-structures",
    category: "Piping & Structural Systems",
    title: "Structural Works – Copper Unit",
    subtitle: "Kutch Copper Plant structures",
    sector: "Structural",
    gradient: "from-orange-400 via-red-500 to-red-700",
    location: "Kutch",
    year: "—",
    client: "Kutch Copper (Adani Group)",
    owner: "Adani",
    scope:
      "Assembly, erection and alignment of fabricated structures for the Kutch Copper plant.",
    description:
      "Structural works for the Copper Unit involved assembly, erection and alignment of heavy fabricated structures for the Kutch copper plant. Accuracy of alignment and safe lifting were key execution aspects.",
    icon: Factory,
    highlights: [
      "Heavy structural assemblies for copper plant",
      "Safe lifting and erection methodology",
      "Close coordination with other plant contractors",
    ],
    metrics: [
      "≈ 2200 MT of structural steel",
      "Multiple structure types across the unit",
    ],
    phases: [
      "Fabrication output review and marking",
      "Erection planning and lifting studies",
      "On-site assembly, erection and alignment",
      "Final bolt tightening / welding and punch closure",
    ],
    image: "/projects/Picture7.jpg",
  },
  "green-pvc-mundra-adani": {
    id: "green-pvc-mundra-adani",
    category: "Piping & Structural Systems",
    title: "Green PVC Plant Structures – Mundra",
    subtitle: "Structural works for Green PVC project",
    sector: "Structural",
    gradient: "from-emerald-400 via-red-500 to-red-700",
    location: "Mundra",
    year: "—",
    client: "Adani",
    owner: "Adani",
    scope:
      "Shop fabrication of various plant structures for the Green PVC project at Mundra.",
    description:
      "For the Green PVC project at Mundra, multiple plant structures were shop-fabricated and supplied. The work involved controlled fabrication, trial fit-ups where required and readiness for site erection.",
    icon: Factory,
    highlights: [
      "Diverse structural items fabricated in shop",
      "Focus on dimensional control and readiness for erection",
      "Delivered in line with project schedules",
    ],
    metrics: [
      "≈ 1850 MT of structural steel",
      "Multiple process and utility structures",
    ],
    phases: [
      "Drawing and BOQ review for structural items",
      "Shop fabrication and QC checks",
      "Surface preparation and dispatch planning",
      "Support to site team for erection planning",
    ],
    image: "/projects/Picture8.jpg",
  },
  "process-equipment-supply": {
    id: "process-equipment-supply",
    category: "Piping & Structural Systems",
    title: "Process Equipment Supply – Clarifiers & Silos",
    subtitle: "Procurement, fabrication and supply of process equipment",
    sector: "Equipment",
    gradient: "from-red-500 via-red-600 to-red-700",
    location: "India",
    year: "—",
    client: "Reliance Industries Ltd.",
    owner: "Reliance",
    scope:
      "Procurement, fabrication and supply of clarifiers and MS lime slurry storage silos for Reliance.",
    description:
      "This project involved the fabrication and supply of process equipment: SS316L clarifiers and MS lime slurry storage silos. The equipment was manufactured as per Reliance specifications and delivered ready for site installation.",
    icon: Factory,
    highlights: [
      "Combination of stainless steel clarifiers and MS silos",
      "Fabrication to stringent client specifications",
      "Equipment ready for integration into process lines",
    ],
    metrics: [
      "2 clarifiers in SS316L",
      "4 MS lime slurry storage silos",
    ],
    phases: [
      "Specification review and detailing of equipment",
      "Procurement and fabrication of clarifiers and silos",
      "Inspection, testing and painting",
      "Packing, dispatch and coordination with site",
    ],
    image: "/projects/Picture9.jpg",
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectDetailPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id as string | undefined;

  const project = id ? projects[id] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8 border border-red-100 space-y-3">
          <h1 className="text-2xl font-bold text-red-700">Project Not Found</h1>
          <p className="text-slate-600">
            The requested project does not exist or the URL is incorrect.
          </p>
          <p className="text-xs text-slate-500">
            URL id:{" "}
            <span className="font-mono text-red-700">
              {id ?? "(no id detected)"}
            </span>
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center mt-4 px-5 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-100">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back */}
        <motion.div variants={itemVariants} className="mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-red-700 hover:text-red-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          variants={itemVariants}
          className={`relative rounded-3xl p-8 md:p-10 text-white overflow-hidden bg-gradient-to-br ${project.gradient} shadow-xl mb-8`}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center bg-white/20 px-3 py-1 rounded-full border border-white/30">
                  {project.category}
                </span>
                {project.location && (
                  <span className="inline-flex items-center bg-black/20 px-3 py-1 rounded-full border border-white/20">
                    <MapPin className="w-3 h-3 mr-1" />
                    {project.location}
                  </span>
                )}
                {project.year && project.year !== "—" && (
                  <span className="inline-flex items-center bg-black/20 px-3 py-1 rounded-full border border-white/20">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.year}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {project.title}
              </h1>
              <p className="text-base md:text-lg text-white/90">
                {project.subtitle}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <div className="flex items-center text-sm text-white/80">
                <Sparkles className="w-4 h-4 mr-1" />
                <span>Executed with strong safety & quality focus</span>
              </div>
            </div>
          </div>
        </motion.div>

{/* Project Photo – auto-adapts to any image size */}
<motion.div
  variants={itemVariants}
  className="mb-10 flex justify-center"
>
  <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-xl border border-red-100/70 bg-white">
    <Image
      src={project.image}
      alt={project.title}
      width={1200}      // maximum display width
      height={0}        // height auto-calculated
      className="w-full h-auto object-contain"
      priority
    />
  </div>
</motion.div>

        {/* Overview + Client/Scope */}
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-red-100/60 p-6 md:p-8 space-y-6"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                Project Overview
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Scope of Work
              </h3>
              <p className="text-slate-700 text-sm md:text-base">
                {project.scope}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md border border-red-100/60 p-6 md:p-7 flex flex-col gap-4"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-500">
                Client & Execution
              </h3>
              <p className="text-sm text-slate-700 mt-1">
                <span className="font-medium text-slate-900">Client: </span>
                {project.client}
              </p>
              {project.owner && (
                <p className="text-sm text-slate-700 mt-1">
                  <span className="font-medium text-slate-900">Owner: </span>
                  {project.owner}
                </p>
              )}
              {project.year && project.year !== "—" && (
                <p className="text-sm text-slate-700 mt-1 flex items-center gap-1">
                  <Clock className="w-4 h-4 text-red-500" />
                  Executed in {project.year}
                </p>
              )}
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-2">
              <h4 className="text-sm font-semibold text-slate-500">
                Key Results
              </h4>
              <ul className="space-y-1 text-sm text-slate-700">
                {project.metrics.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-3">
              <p className="text-sm text-slate-600">
                Want a similar project to be executed at your facility?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Discuss Your Project
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Highlights + Phases */}
        <motion.div
          variants={itemVariants}
          className="mt-10 grid lg:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-2xl shadow-md border border-red-100/60 p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-red-500 mr-2" />
              Execution Highlights
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-red-500" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-red-100/60 p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 flex items-center">
              <ArrowRight className="w-5 h-5 text-red-500 mr-2" />
              Project Phases
            </h3>
            <ol className="space-y-3 text-sm md:text-base text-slate-700">
              {project.phases.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-red-50 border border-red-200 text-xs font-bold text-red-600 mt-0.5">
                    {i + 1}
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailPage;
