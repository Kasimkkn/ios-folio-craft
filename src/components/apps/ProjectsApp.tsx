import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, X, ArrowLeft } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  gradient: string;
  stars: number;
  emoji: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Website Builder",
    description: "No-code builder with drag-and-drop interface",
    fullDescription: "No-code builder with drag-and-drop, 100+ components, exports production-ready React code. Features intelligent component suggestions and real-time preview.",
    tech: ["React.js", "Tailwind", "OpenAI"],
    gradient: "from-blue-500 to-cyan-500",
    stars: 342,
    emoji: "🎨",
  },
  {
    id: 2,
    title: "LinkedIn AI Automation",
    description: "Creates LinkedIn posts in minutes",
    fullDescription: "Creates LinkedIn posts in minutes with trend discovery, voice matching, and scheduling. AI-powered content generation with analytics.",
    tech: ["React.js", "TypeScript", "Supabase", "Groq API"],
    gradient: "from-blue-600 to-indigo-600",
    stars: 287,
    emoji: "🤖",
  },
  {
    id: 3,
    title: "Enterprise Component Library",
    description: "200+ React components library",
    fullDescription: "200+ React components with multi-theme support and WCAG 2.1 accessibility. Production-ready components for enterprise applications.",
    tech: ["React.js", "TypeScript", "shadcn/ui"],
    gradient: "from-purple-500 to-pink-500",
    stars: 456,
    emoji: "📦",
  },
  {
    id: 4,
    title: "Creative Portfolio Showcase",
    description: "20+ unique portfolio sites",
    fullDescription: "20+ unique portfolio sites with 3D effects, particles, and scroll animations. WebGL-powered interactive experiences.",
    tech: ["React.js", "Three.js", "GSAP", "WebGL"],
    gradient: "from-pink-500 to-rose-500",
    stars: 523,
    emoji: "✨",
  },
  {
    id: 5,
    title: "AI Diet Planner",
    description: "Personalized diet plans SaaS",
    fullDescription: "SaaS platform generating personalized diet plans serving 500+ users. AI-powered meal recommendations with nutrition tracking.",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI"],
    gradient: "from-green-500 to-emerald-500",
    stars: 389,
    emoji: "🥗",
  },
  {
    id: 6,
    title: "AI Travel Itinerary",
    description: "Automated trip planner",
    fullDescription: "Automated trip planner with responsive UI and group travel features. Smart recommendations based on preferences and budget.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    gradient: "from-orange-500 to-amber-500",
    stars: 298,
    emoji: "✈️",
  },
  {
    id: 7,
    title: "AI Image Colorization",
    description: "Professional colorization tool",
    fullDescription: "Professional colorization tool with intelligent masking and blending. Advanced canvas manipulation with AI-powered color suggestions.",
    tech: ["React.js", "Fabric.js", "Canvas API"],
    gradient: "from-teal-500 to-cyan-500",
    stars: 267,
    emoji: "🎨",
  },
  {
    id: 8,
    title: "Invoice Generator",
    description: "Complete invoicing solution",
    fullDescription: "Complete invoicing with multi-currency, branding, and PDF templates. Professional invoice generation with tax calculations.",
    tech: ["React.js", "jsPDF"],
    gradient: "from-indigo-500 to-violet-500",
    stars: 234,
    emoji: "📄",
  },
  {
    id: 9,
    title: "VC-ME Video Conference",
    description: "Real-time video calls platform",
    fullDescription: "Real-time video calls with screen sharing and recording. Enterprise-grade video conferencing with chat and breakout rooms.",
    tech: ["Next.js", "Tailwind", "Stream API"],
    gradient: "from-red-500 to-pink-500",
    stars: 412,
    emoji: "📹",
  },
  {
    id: 10,
    title: "Employee Attendance System",
    description: "QR & geolocation attendance",
    fullDescription: "QR & geolocation attendance with leave management and analytics. Comprehensive employee tracking with reporting dashboard.",
    tech: ["React.js", "Node.js", "Tailwind"],
    gradient: "from-yellow-500 to-orange-500",
    stars: 178,
    emoji: "📊",
  },
];

export const ProjectsApp = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="p-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">Featured Projects</h2>
          <p className="text-muted-foreground">10 Production-Ready Applications</p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              className="w-full bg-card rounded-3xl p-6 shadow-lg text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`h-32 rounded-2xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}>
                <span className="text-5xl">{project.emoji}</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full bg-background rounded-t-[32px] p-6 max-h-[85vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Handle Bar */}
              <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-6" />

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className={`w-20 h-20 rounded-[22%] bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-4xl mb-4 shadow-lg`}>
                    {selectedProject.emoji}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-2 text-yellow-500 mb-4">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-semibold">{selectedProject.stars}</span>
                    <span className="text-muted-foreground text-sm ml-1">stars</span>
                  </div>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-secondary"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">About</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  className="flex-1 py-3 px-6 bg-primary text-primary-foreground rounded-2xl font-semibold flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live
                </motion.button>
                <motion.button
                  className="flex-1 py-3 px-6 bg-secondary text-secondary-foreground rounded-2xl font-semibold flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
