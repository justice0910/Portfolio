"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function OverviewSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="overview"
      className="mb-16 md:mb-24 lg:mb-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-10 md:top-20 right-4 md:right-16 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-blue-400/20 md:from-blue-400/30 to-purple-400/20 md:to-purple-400/30 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "3s" }}
          className="absolute bottom-8 md:bottom-16 left-4 md:left-16 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-green-400/15 md:from-green-400/20 to-cyan-400/15 md:to-cyan-400/20 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "6s" }}
          className="hidden md:block absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Section Header */}
        <SectionHeader
          tagText="Get To Know Me"
          tagIcon="solar:user-heart-bold"
          heading="About Me"
          description="Building intelligent systems that scale to hundreds of millions of users"
          showUnderline={true}
          centered={true}
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start px-4">

          {/* Main Profile Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8"
          >
            <div className="space-y-6 md:space-y-8 p-2">

              {/* Introduction Card */}
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-3 md:w-4 h-3 md:h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 md:top-6 right-10 md:right-14 w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <div className="hidden md:block absolute top-6 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white flex items-center gap-2 md:gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl">👋</span>
                      Hello, I&apos;m Michael Chen
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
                      A Senior <span className="font-bold text-blue-600 dark:text-blue-400">AI/ML Engineer</span> and
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        &nbsp;Full-Stack Engineer</span> with
                      <span className="font-bold text-green-600 dark:text-green-400"> 16+ years</span> of experience 
                      designing and delivering large-scale machine learning platforms at Meta and Yahoo.
                    </p>
                  </div>

                  {/* Expanded About Content */}
                  <div className="space-y-3 md:space-y-4 border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      I specialize in architecting end-to-end AI solutions, including LLM-powered search systems, 
                      RAG pipelines, transformer-based NLP models, real-time inference platforms, and scalable MLOps 
                      workflows for Ads, Search, and Recommendation systems serving hundreds of millions of users.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      I&apos;m passionate about productionizing research models while ensuring security, compliance, 
                      and operational excellence. I hold a PhD in Computer Science from the University of Maryland.
                    </p>
                  </div>

                  {/* Skills Highlight */}
                  <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                      <Icon icon="solar:lightning-bold" className="text-yellow-500 w-4 md:w-5 h-4 md:h-5" width={20} height={20} />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {["PyTorch", "TensorFlow", "LangChain", "Hugging Face", "React", "TypeScript", "Python", "Go", "Kubernetes", "AWS/GCP"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 text-gray-800 dark:text-gray-200 rounded-lg md:rounded-xl border border-blue-200/50 dark:border-blue-800/30 hover:shadow-lg transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>           
            </div>
          </motion.div>

          {/* Enhanced Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6 mt-6 lg:mt-0">

            {/* Achievement Highlights */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/90 to-yellow-50/90 dark:from-amber-950/30 dark:to-yellow-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon icon="solar:cup-star-bold" className="text-amber-600 w-5 h-5" width={20} height={20} />
                Achievements
              </h4>
              <div className="space-y-4">
                {[
                  { icon: "solar:star-bold", text: "PhD in Computer Science", color: "text-yellow-600" },
                  { icon: "solar:cpu-bolt-bold-duotone", text: "Meta & Yahoo Experience", color: "text-blue-600" },
                  { icon: "solar:code-square-bold", text: "100M+ Users Served", color: "text-green-600" },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.2 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-amber-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                  >
                    <Icon icon={achievement.icon} className={`${achievement.color} w-5 h-5`} width={20} height={20} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/90 to-cyan-50/90 dark:from-emerald-950/30 dark:to-cyan-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon icon="solar:square-academic-cap-bold" className="text-emerald-600 w-5 h-5" width={20} height={20} />
                Education
              </h4>
              <div className="space-y-3.5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <Icon icon="solar:diploma-bold" className="text-green-600 w-5 h-5" width={20} height={20} />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">PhD, Computer Science</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <Icon icon="solar:diploma-bold" className="text-cyan-600 w-5 h-5" width={20} height={20} />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">MS, Computer Science</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <Icon icon="solar:buildings-2-bold" className="text-blue-600 w-5 h-5" width={20} height={20} />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">University of Maryland</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
