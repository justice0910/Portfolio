"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface TechItem {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Expert";
  category: string;
  description: string;
  yearsUsed?: number;
}

const techStackData: Record<string, TechItem[]> = {
  "Machine Learning": [
    {
      name: "PyTorch",
      icon: "logos:pytorch-icon",
      level: "Expert",
      category: "Machine Learning",
      description: "Deep learning framework for model training and inference",
      yearsUsed: 8
    },
    {
      name: "TensorFlow",
      icon: "logos:tensorflow",
      level: "Expert",
      category: "Machine Learning",
      description: "End-to-end ML platform",
      yearsUsed: 8
    },
    {
      name: "Hugging Face",
      icon: "noto:hugging-face",
      level: "Expert",
      category: "Machine Learning",
      description: "Transformers and NLP models",
      yearsUsed: 5
    },
    {
      name: "LangChain",
      icon: "simple-icons:langchain",
      level: "Expert",
      category: "Machine Learning",
      description: "LLM application framework",
      yearsUsed: 3
    },
    {
      name: "Scikit-learn",
      icon: "simple-icons:scikitlearn",
      level: "Expert",
      category: "Machine Learning",
      description: "Classical ML algorithms",
      yearsUsed: 10
    },
    {
      name: "ONNX Runtime",
      icon: "simple-icons:onnx",
      level: "Expert",
      category: "Machine Learning",
      description: "Cross-platform inference",
      yearsUsed: 4
    },
  ],
  "Backend & APIs": [
    {
      name: "Python",
      icon: "devicon:python",
      level: "Expert",
      category: "Backend",
      description: "Primary language for ML and backend",
      yearsUsed: 14
    },
    {
      name: "Go",
      icon: "skill-icons:golang",
      level: "Expert",
      category: "Backend",
      description: "High-performance microservices",
      yearsUsed: 6
    },
    {
      name: "FastAPI",
      icon: "simple-icons:fastapi",
      level: "Expert",
      category: "Backend",
      description: "Modern Python web framework",
      yearsUsed: 4
    },
    {
      name: "Node.js",
      icon: "devicon:nodejs",
      level: "Expert",
      category: "Backend",
      description: "JavaScript runtime for APIs",
      yearsUsed: 8
    },
    {
      name: "GraphQL",
      icon: "logos:graphql",
      level: "Expert",
      category: "Backend",
      description: "Query language for APIs",
      yearsUsed: 5
    },
    {
      name: "gRPC",
      icon: "logos:grpc",
      level: "Expert",
      category: "Backend",
      description: "High-performance RPC framework",
      yearsUsed: 5
    },
  ],
  "Frontend": [
    {
      name: "React",
      icon: "skill-icons:react-dark",
      level: "Expert",
      category: "Frontend",
      description: "Component-based UI development",
      yearsUsed: 7
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript",
      level: "Expert",
      category: "Frontend",
      description: "Type-safe JavaScript",
      yearsUsed: 6
    },
    {
      name: "Next.js",
      icon: "devicon:nextjs",
      level: "Expert",
      category: "Frontend",
      description: "React framework for production",
      yearsUsed: 4
    },
    {
      name: "Redux",
      icon: "skill-icons:redux",
      level: "Expert",
      category: "Frontend",
      description: "State management for React",
      yearsUsed: 6
    },
    {
      name: "Angular",
      icon: "devicon:angular",
      level: "Intermediate",
      category: "Frontend",
      description: "Enterprise web framework",
      yearsUsed: 3
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      level: "Expert",
      category: "Frontend",
      description: "Utility-first CSS framework",
      yearsUsed: 4
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      icon: "skill-icons:aws-light",
      level: "Expert",
      category: "Cloud & DevOps",
      description: "SageMaker, Bedrock, EC2, S3",
      yearsUsed: 10
    },
    {
      name: "GCP",
      icon: "skill-icons:gcp-light",
      level: "Expert",
      category: "Cloud & DevOps",
      description: "BigQuery, Vertex AI, GKE",
      yearsUsed: 8
    },
    {
      name: "Kubernetes",
      icon: "logos:kubernetes",
      level: "Expert",
      category: "Cloud & DevOps",
      description: "Container orchestration",
      yearsUsed: 7
    },
    {
      name: "Docker",
      icon: "devicon:docker",
      level: "Expert",
      category: "Cloud & DevOps",
      description: "Containerization platform",
      yearsUsed: 8
    },
    {
      name: "GitHub Actions",
      icon: "skill-icons:githubactions-dark",
      level: "Expert",
      category: "Cloud & DevOps",
      description: "CI/CD automation",
      yearsUsed: 5
    },
    {
      name: "Prometheus",
      icon: "logos:prometheus",
      level: "Expert",
      category: "Cloud & DevOps",
      description: "Monitoring and alerting",
      yearsUsed: 6
    },
  ],
  "Data & Databases": [
    {
      name: "PostgreSQL",
      icon: "logos:postgresql",
      level: "Expert",
      category: "Database",
      description: "Relational database",
      yearsUsed: 12
    },
    {
      name: "MongoDB",
      icon: "devicon:mongodb",
      level: "Expert",
      category: "Database",
      description: "Document database",
      yearsUsed: 8
    },
    {
      name: "Redis",
      icon: "devicon:redis",
      level: "Expert",
      category: "Database",
      description: "In-memory data store",
      yearsUsed: 8
    },
    {
      name: "BigQuery",
      icon: "simple-icons:googlebigquery",
      level: "Expert",
      category: "Database",
      description: "Cloud data warehouse",
      yearsUsed: 6
    },
    {
      name: "Kafka",
      icon: "logos:kafka-icon",
      level: "Expert",
      category: "Database",
      description: "Event streaming platform",
      yearsUsed: 7
    },
    {
      name: "Spark",
      icon: "devicon:apachespark",
      level: "Expert",
      category: "Database",
      description: "Distributed data processing",
      yearsUsed: 8
    },
  ],
  "Vector Databases": [
    {
      name: "FAISS",
      icon: "simple-icons:meta",
      level: "Expert",
      category: "Vector DB",
      description: "Facebook AI similarity search",
      yearsUsed: 4
    },
    {
      name: "Milvus",
      icon: "simple-icons:milvus",
      level: "Expert",
      category: "Vector DB",
      description: "Open-source vector database",
      yearsUsed: 3
    },
    {
      name: "Pinecone",
      icon: "simple-icons:pinecone",
      level: "Expert",
      category: "Vector DB",
      description: "Managed vector database",
      yearsUsed: 2
    },
    {
      name: "Weaviate",
      icon: "simple-icons:weaviate",
      level: "Intermediate",
      category: "Vector DB",
      description: "AI-native vector database",
      yearsUsed: 2
    },
  ],
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Object.keys(techStackData)];

  const filteredTech = activeCategory === "All"
    ? Object.values(techStackData).flat()
    : techStackData[activeCategory] || [];

  return (
    <motion.section
      id="stack"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <SectionHeader
        tagText="Tech Arsenal"
        tagIcon="solar:settings-bold"
        heading="Technology Stack"
        description="Technologies powering large-scale ML systems and production applications"
        showUnderline={false}
        centered={true}
      />
      <div className="mb-8">

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {activeCategory === "All" ? (
        // Categorized view
        <div className="space-y-8">
          {Object.entries(techStackData).map(([categoryName, techs]) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {categoryName}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {techs.map((tech, index) => (
                  <TechCard
                    key={tech.name}
                    tech={tech}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // Filtered view
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredTech.map((tech, index) => (
            <TechCard
              key={tech.name}
              tech={tech}
              index={index}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
}

function TechCard({
  tech,
  index
}: {
  tech: TechItem;
  index: number;
}) {
  const getLevelGradient = (level: string) => {
    switch (level) {
      case "Expert":
        return "from-emerald-500 to-teal-600";
      case "Intermediate":
        return "from-blue-500 to-indigo-600";
      case "Beginner":
        return "from-amber-500 to-orange-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getLevelBadgeStyle = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
      case "Intermediate":
        return "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800";
      case "Beginner":
        return "bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getExperienceColor = (years: number) => {
    if (years >= 8) return "text-emerald-600 dark:text-emerald-400";
    if (years >= 4) return "text-blue-600 dark:text-blue-400";
    return "text-amber-600 dark:text-amber-400";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Card Background with Gradient Border */}
      <div className="relative">
        {/* Subtle Gradient Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getLevelGradient(tech.level)} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-105`} />

        {/* Main Card */}
        <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 group-hover:border-gray-300/80 dark:group-hover:border-gray-600/80 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-black/5 dark:group-hover:shadow-black/40 overflow-hidden">

          {/* Subtle Top Accent - Much More Refined */}
          <div className="relative h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent">
            <div className={`absolute inset-0 bg-gradient-to-r ${getLevelGradient(tech.level)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          </div>

          {/* Floating Particles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-4 right-4 w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-8 left-6 w-0.5 h-0.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-6 right-8 w-0.5 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="p-4 relative">
            {/* Icon Container with Enhanced Design */}
            <div className="flex justify-center mb-3">
              <div className="relative group/icon">
                {/* Icon Background with Subtle Pattern */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-3 rounded-xl border border-gray-200/50 dark:border-gray-600/50 group-hover:border-gray-300/70 dark:group-hover:border-gray-500/70 transition-all duration-300">
                  <Icon
                    icon={tech.icon}
                    className="group-hover/icon:scale-110 group-hover/icon:rotate-3 transition-all duration-300"
                    width={36}
                    height={36}
                  />

                  {/* Subtle Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getLevelGradient(tech.level)} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>
              </div>
            </div>

            {/* Technology Name with Better Typography */}
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-center mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors tracking-tight">
              {tech.name}
            </h3>

            {/* Skill Level Badge */}
            <div className="flex justify-center mb-2">
              <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border ${getLevelBadgeStyle(tech.level)} transition-all duration-300`}>
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getLevelGradient(tech.level)} mr-1.5`} />
                {tech.level}
              </span>
            </div>

            {/* Experience Years with Enhanced Styling */}
            {tech.yearsUsed && (
              <div className="text-center">
                <div className="inline-flex items-center gap-1">
                  <div className={`w-1 h-1 rounded-full ${getExperienceColor(tech.yearsUsed).replace('text-', 'bg-')}`} />
                  <span className={`text-xs font-medium ${getExperienceColor(tech.yearsUsed)}`}>
                    {tech.yearsUsed} year{tech.yearsUsed > 1 ? 's' : ''} exp
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Subtle Mesh Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
