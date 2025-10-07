import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack online store with payment integration",
    tech: ["React", "Node.js", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
    stars: 234,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool",
    tech: ["React", "Firebase", "Tailwind"],
    gradient: "from-purple-500 to-pink-500",
    stars: 156,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather tracking with beautiful UI",
    tech: ["React", "OpenWeather API", "Charts"],
    gradient: "from-orange-500 to-red-500",
    stars: 89,
  },
  {
    id: 4,
    title: "Social Media Clone",
    description: "Instagram-like social platform",
    tech: ["React", "Supabase", "TypeScript"],
    gradient: "from-green-500 to-teal-500",
    stars: 312,
  },
];

export const ProjectsApp = () => {
  return (
    <div className="p-6 space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-2xl font-bold text-foreground mb-2">Featured Projects</h2>
        <p className="text-muted-foreground">Showcasing my best work</p>
      </motion.div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-card rounded-3xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`h-32 rounded-2xl bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}>
              <span className="text-4xl">🚀</span>
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
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <motion.button
                  className="flex-1 py-2 px-4 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </motion.button>
                <motion.button
                  className="flex-1 py-2 px-4 bg-secondary text-secondary-foreground rounded-xl font-medium flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Source
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
