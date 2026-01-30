"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hello, World! I am Michael Chen — a Senior AI/ML and Full-Stack Engineer
          with 16+ years of experience designing and delivering large-scale machine learning platforms,
          LLM-powered search systems, and recommendation infrastructures at Meta and Yahoo.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I specialize in architecting end-to-end AI solutions, including data pipelines, model training,
          inference services, and product-grade APIs for Ads, Search, and Recommendation systems serving
          hundreds of millions of users.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I hold a PhD in Computer Science from the University of Maryland and am passionate about
          deploying RAG pipelines, transformer-based NLP models, real-time inference platforms, and
          scalable MLOps workflows with a strong focus on performance, reliability, and cost efficiency.
        </p>
      </div>
    </motion.section>
  );
}
