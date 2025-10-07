import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  logoLetter: string;
  logoGradient: string;
  achievements: string[];
}

export const ExperienceApp = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      company: "BigShorts",
      role: "Web Developer",
      period: "Aug 2024 – Present",
      current: true,
      logoLetter: "B",
      logoGradient: "from-blue-500 to-purple-600",
      achievements: [
        "Led frontend architecture using Next.js & Tailwind CSS",
        "Achieved 30% faster load times for thousands of users",
        "Integrated FFmpeg for video processing",
        "Optimized with lazy loading and infinite scroll",
        "Collaborated in Agile sprints with CI/CD pipelines",
      ],
    },
    {
      company: "DivineDevHub",
      role: "Full Stack Developer",
      period: "Oct 2024 – May 2025",
      current: false,
      logoLetter: "D",
      logoGradient: "from-purple-500 to-pink-600",
      achievements: [
        "Built AI-powered SaaS applications for 500+ users",
        "Developed AR Enterprise PWA managing 1000+ products",
        "Engineered Employee Management System with QR attendance",
        "Reduced server response time by 40%",
        "Implemented Docker and GitHub workflows",
      ],
    },
    {
      company: "InspireSoftwareCo.in",
      role: "Software Developer",
      period: "Jan 2024 – Sep 2024",
      current: false,
      logoLetter: "I",
      logoGradient: "from-orange-500 to-red-600",
      achievements: [
        "Enhanced restaurant POS system reducing billing time by 25%",
        "Developed Hotel Management Platform",
        "Implemented RBAC reducing vulnerabilities by 50%",
        "95%+ feature completion rate in Agile environment",
      ],
    },
  ];

  return (
    <div className="p-6 pb-8 max-w-2xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[23px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/10" />

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot/logo */}
              <div className="absolute left-0 top-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.logoGradient} flex items-center justify-center shadow-lg border-4 border-background`}>
                  <span className="text-white font-bold text-lg">{exp.logoLetter}</span>
                </div>
                {exp.current && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Content card */}
              <div className="ml-20">
                <motion.div
                  className="glass rounded-2xl p-5 shadow-lg cursor-pointer"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setExpandedId(expandedId === index ? null : index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground">{exp.company}</h3>
                      <p className="text-[#007AFF] font-medium">{exp.role}</p>
                      <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {expandedId === index ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </motion.div>
                  </div>

                  {/* Achievements */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedId === index ? "auto" : 0,
                      opacity: expandedId === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#007AFF] mt-1">•</span>
                          <p className="text-sm text-foreground/80 flex-1">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* End marker */}
        <div className="relative ml-20 mt-6">
          <div className="absolute left-[-68px] top-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center shadow-lg border-4 border-background">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <p className="text-muted-foreground text-sm">Journey Started</p>
            <p className="font-medium text-foreground">January 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};
