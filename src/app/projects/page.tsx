"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import {
  FolderKanban,
  ArrowRight,
  MapPin,
  Calendar,
  Factory,
  Droplets,
  Beaker,
  Wrench,
} from "lucide-react";

interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  client: string;
  owner?: string;
  location?: string;
  year?: string;
  gradient: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  summary: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "clarifier-mol-ekcp",
    category: "Clarifier & MOL Tank Project",
    title: "Clarifier Tank (SS 316L)",
    subtitle: "Clarifier & MOL tank project for Reliance",
    client: "EKCP",
    owner: "Reliance",
    location: "India",
    year: "—",
    gradient: "from-red-400 via-red-500 to-red-600",
    icon: Beaker,
    summary:
      "Design and supply of stainless steel clarifier tank in SS 316L for MOL / water clarification service.",
    tags: ["Clarifier", "SS 316L", "Tank Project"],
  },
  {
    id: "clarifier-mol-ethanol-rtf",
    category: "Clarifier & MOL Tank Project",
    title: "Ethanol Tanks (2 Units)",
    subtitle: "Ethanol storage tanks for Reliance",
    client: "RTF",
    owner: "Reliance",
    location: "India",
    year: "—",
    gradient: "from-red-400 via-red-500 to-red-600",
    icon: Factory,
    summary:
      "Supply and execution of two ethanol storage tanks as part of the Clarifier & MOL project for Reliance.",
    tags: ["Ethanol Tanks", "Storage", "Tank Project"],
  },
  {
    id: "glass-fo-storage-tank",
    category: "Industrial Chemical & Utility Storage",
    title: "FO Storage Tank – Glass Factory",
    subtitle: "New Energy – Glass Factory",
    client: "Reliance Industries Ltd.",
    owner: "Reliance",
    location: "New Energy – Glass Factory",
    year: "—",
    gradient: "from-red-400 via-red-500 to-red-700",
    icon: Factory,
    summary:
      "EPC execution of FO storage tank including site fabrication, inspection and PESO-approved installation.",
    tags: ["FO Storage", "PESO", "EPC"],
  },
  {
    id: "polysilicon-chemical-storage",
    category: "Industrial Chemical & Utility Storage",
    title: "Chemical & Utility Tank Farm – Polysilicon",
    subtitle: "New Energy – Polysilicon",
    client: "Reliance Industries Ltd.",
    owner: "Reliance",
    location: "New Energy – Polysilicon",
    year: "—",
    gradient: "from-red-500 via-red-600 to-red-700",
    icon: Beaker,
    summary:
      "EPC scope for multiple site-fabricated tanks for RO water, caustic, BCW, sulphuric acid, wash water and lime slurry.",
    tags: ["Tank Farm", "RO Water", "Chemical Storage"],
  },
  {
    id: "glass-water-sludge-systems",
    category: "Water Treatment & Sludge Management Systems",
    title: "Water & Sludge Treatment Tanks – Glass Factory",
    subtitle: "New Energy – Glass Factory",
    client: "Reliance (New Energy)",
    owner: "Reliance",
    location: "New Energy – Glass Factory",
    year: "—",
    gradient: "from-red-400 via-red-500 to-red-600",
    icon: Droplets,
    summary:
      "Site-fabricated coagulation, flocculation, air flotation and sludge concentration tanks for water treatment.",
    tags: ["Water Treatment", "Sludge Management", "Tankage"],
  },
  {
    id: "new-energy-pv-interconnection",
    category: "Piping & Structural Systems",
    title: "PV Interconnection Piping – New Energy",
    subtitle: "New Energy Project",
    client: "Reliance (New Energy)",
    owner: "Reliance",
    location: "New Energy Facilities",
    year: "—",
    gradient: "from-red-400 via-red-500 to-red-700",
    icon: Wrench,
    summary:
      "PV interconnection piping connecting Refinery C2 unit to New Energy facilities, including IBR and non-IBR services.",
    tags: ["PV Piping", "IBR/NIBR", "Interconnection"],
  },
  {
    id: "copper-unit-structures",
    category: "Piping & Structural Systems",
    title: "Structural Works – Copper Unit",
    subtitle: "Kutch Copper Plant",
    client: "Kutch Copper (Adani Group)",
    owner: "Adani",
    location: "Kutch",
    year: "—",
    gradient: "from-red-400 via-red-500 to-red-700",
    icon: Factory,
    summary:
      "Assembly, erection and alignment of heavy fabricated structures for the Kutch copper plant.",
    tags: ["Structural", "Copper Unit", "2200 MT"],
  },
  {
    id: "green-pvc-mundra-adani",
    category: "Piping & Structural Systems",
    title: "Green PVC Plant Structures – Mundra",
    subtitle: "Green PVC Project – Mundra",
    client: "Adani",
    owner: "Adani",
    location: "Mundra",
    year: "—",
    gradient: "from-red-400 via-red-500 to-red-700",
    icon: Factory,
    summary:
      "Shop fabrication of various plant structures for the Green PVC project at Mundra.",
    tags: ["Structural", "Green PVC", "1850 MT"],
  },
  {
    id: "process-equipment-supply",
    category: "Piping & Structural Systems",
    title: "Process Equipment Supply – Clarifiers & Silos",
    subtitle: "Procurement, Fabrication & Supply of Equipment",
    client: "Reliance Industries Ltd.",
    owner: "Reliance",
    location: "India",
    year: "—",
    gradient: "from-red-500 via-red-600 to-red-700",
    icon: Factory,
    summary:
      "Procurement, fabrication and supply of clarifiers and lime slurry storage silos for process applications.",
    tags: ["Clarifiers", "Lime Silos", "Equipment Supply"],
  },
];

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.15 },
  },
};

const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: delay * 0.1,
                ease: "easeOut",
              },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <ScrollReveal>
          <div className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full border border-red-200 mb-6"
              variants={badgeVariants}
              whileHover="hover"
            >
              <FolderKanban className="w-4 h-4" />
              <span className="text-sm font-medium">
                Executed Projects & References
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Our Projects
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Representative projects across tankages, piping, structural and
              utility systems for leading industrial and new energy clients.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index}>
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-br ${project.gradient} p-6 text-white`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-xs font-medium border border-white/30">
                        <project.icon className="w-4 h-4" />
                        <span>{project.category}</span>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold leading-tight">
                        {project.title}
                      </h2>

                      <p className="text-sm md:text-base text-white/90">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="text-right text-xs md:text-sm space-y-1">
                      {project.year && project.year !== "—" && (
                        <div className="inline-flex items-center gap-1 bg-black/15 px-2 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          <span>{project.year}</span>
                        </div>
                      )}
                      {project.location && (
                        <div className="flex items-center justify-end gap-1 text-white/80">
                          <MapPin className="w-3 h-3" />
                          <span>{project.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    {project.summary}
                  </p>

                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">Client:</span>{" "}
                    {project.client}
                    {project.owner && (
                      <>
                        {" "}
                        • <span className="font-semibold">Owner:</span>{" "}
                        {project.owner}
                      </>
                    )}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-red-50 text-red-700 border border-red-100 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/projects/${project.id}`} className="block mt-3">
                    <motion.div
                      className={`w-full bg-gradient-to-r ${project.gradient} text-white font-semibold py-3 rounded-2xl text-center flex items-center justify-center gap-2`}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Project Details
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
