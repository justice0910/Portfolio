"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

type CredentialType = "Education" | "Certification" | "Achievement";

type Credential = {
  title: string;
  institution: string;
  type: CredentialType;
  year: string;
  description: string;
  icon: string;
  color: string;
};

const credentials: Credential[] = [
  // Education
  {
    title: "Doctor of Philosophy (PhD) in Computer Science",
    institution: "University of Maryland",
    type: "Education",
    year: "2009 - 2013",
    description: "Advanced research in machine learning, AI systems, and computer science theory",
    icon: "solar:square-academic-cap-bold",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Master of Science in Computer Science",
    institution: "University of Maryland",
    type: "Education",
    year: "2007 - 2009",
    description: "Graduate studies in computer science with focus on ML and systems",
    icon: "solar:diploma-bold",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Bachelor of Science in Computer Science",
    institution: "University of Maryland",
    type: "Education",
    year: "2003 - 2007",
    description: "Undergraduate degree in computer science fundamentals",
    icon: "solar:diploma-bold",
    color: "from-green-500 to-emerald-600"
  },
  // Certifications
  {
    title: "AI Infrastructure and Operations Fundamentals",
    institution: "NVIDIA",
    type: "Certification",
    year: "2025",
    description: "Comprehensive training on AI infrastructure, operations, and deployment best practices",
    icon: "simple-icons:nvidia",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Getting Started with Google BERT",
    institution: "Educative",
    type: "Certification",
    year: "2025",
    description: "Deep dive into BERT architecture, fine-tuning, and NLP applications",
    icon: "simple-icons:educative",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Deep Learning with PyTorch Step-by-Step: Part I - Fundamentals",
    institution: "Educative",
    type: "Certification",
    year: "2025",
    description: "Comprehensive PyTorch training covering deep learning fundamentals and implementations",
    icon: "logos:pytorch-icon",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Grokking the Generative AI System Design",
    institution: "Educative",
    type: "Certification",
    year: "2025",
    description: "System design patterns for building production-grade generative AI applications",
    icon: "solar:cpu-bolt-bold",
    color: "from-violet-500 to-purple-700"
  },
  {
    title: "Machine Learning System Design",
    institution: "Educative",
    type: "Certification",
    year: "2025",
    description: "End-to-end ML system design including data pipelines, model serving, and MLOps",
    icon: "solar:graph-up-bold",
    color: "from-cyan-500 to-teal-600"
  },
  // Achievements
  {
    title: "MIT CSAIL Research",
    institution: "MIT Computer Science and Artificial Intelligence Laboratory",
    type: "Achievement",
    year: "2010 - 2011",
    description: "Advanced ML research implementing prototype systems with PhD researchers",
    icon: "simple-icons:mit",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Large-Scale ML Systems at Meta",
    institution: "Meta (Facebook)",
    type: "Achievement",
    year: "2016 - 2024",
    description: "8+ years building ML ranking and recommendation systems serving billions",
    icon: "logos:meta-icon",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "LLM Research Scientist",
    institution: "Yahoo",
    type: "Achievement",
    year: "2025 - Present",
    description: "Leading LLM-augmented search and RAG pipeline development",
    icon: "logos:yahoo",
    color: "from-purple-500 to-purple-700"
  }
];

export default function CertificationsSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.section
        id="certifications"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "3s" }}
            className="absolute bottom-16 left-16 w-48 h-48 bg-gradient-to-br from-green-400/25 to-cyan-400/25 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "6s" }}
            className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-xl"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <SectionHeader
            tagText="Education & Certifications"
            tagIcon="solar:verified-check-bold"
            heading="Credentials"
            description="Academic background, professional certifications, and career achievements in AI/ML"
            showUnderline={false}
            centered={true}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
          >
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group h-full"
              >
                <div className="h-full bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">

                  {/* Header with gradient */}
                  <div className={`h-20 flex items-center justify-between bg-gradient-to-r ${cred.color} px-6 relative overflow-hidden`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon icon={cred.icon} className="text-white" width={28} height={28} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cred.type === 'Education' 
                          ? 'bg-white/20 text-white' 
                          : cred.type === 'Certification'
                          ? 'bg-green-400/30 text-green-100'
                          : 'bg-yellow-400/30 text-yellow-100'
                      }`}>
                        {cred.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    {/* Subtle decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-500"></div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors">
                      {cred.title}
                    </h3>

                    {/* Institution & Year */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon icon="solar:buildings-2-bold" className="text-blue-500" width={16} height={16} />
                        <span className="font-semibold text-gray-700 dark:text-gray-300">{cred.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon icon="solar:calendar-bold" className="text-green-500" width={16} height={16} />
                        <span className="text-gray-600 dark:text-gray-400">{cred.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16 px-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-6 px-6 md:px-8 py-4 bg-gradient-to-r from-blue-50/90 to-purple-50/90 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300/70 dark:hover:border-blue-600/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
                  <Icon icon="solar:square-academic-cap-bold" className="text-white" width={18} height={18} />
                </div>
                <span className="text-blue-700 dark:text-blue-300 text-sm md:text-base font-semibold">
                  PhD in Computer Science
                </span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gradient-to-b from-blue-300/50 via-purple-300/50 to-blue-300/50"></div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl shadow-md">
                  <Icon icon="solar:verified-check-bold" className="text-white" width={18} height={18} />
                </div>
                <span className="text-green-700 dark:text-green-300 text-sm md:text-base font-semibold">
                  5 AI/ML Certifications
                </span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gradient-to-b from-blue-300/50 via-purple-300/50 to-blue-300/50"></div>
              <div className="flex items-center gap-3">
                <Icon icon="solar:star-bold" className="text-yellow-500" width={22} height={22} />
                <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium">
                  16+ Years Experience
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
