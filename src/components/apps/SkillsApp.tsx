import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Palette, Database, Sparkles, Server, Wrench, Search } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
  color: string;
}

export const SkillsApp = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories: SkillCategory[] = [
    {
      title: "Frontend Technologies",
      icon: Code2,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "React.js", level: 95, description: "Expert in building scalable React applications" },
        { name: "React Native", level: 90, description: "Cross-platform mobile development" },
        { name: "Next.js", level: 85, description: "Server-side rendering and static generation" },
        { name: "TypeScript", level: 85, description: "Type-safe development" },
        { name: "JavaScript ES6+", level: 95, description: "Modern JavaScript expert" },
        { name: "HTML5 & CSS3", level: 95, description: "Semantic markup and advanced styling" },
      ],
    },
    {
      title: "Styling & UI",
      icon: Palette,
      color: "from-pink-500 to-rose-600",
      skills: [
        { name: "Tailwind CSS", level: 95, description: "Utility-first CSS framework" },
        { name: "Material UI", level: 80, description: "React component library" },
        { name: "ShadCN UI", level: 85, description: "Modern accessible components" },
        { name: "Radix UI", level: 70, description: "Headless UI primitives" },
        { name: "Bootstrap", level: 80, description: "Responsive framework" },
        { name: "SCSS & CSS Modules", level: 80, description: "Advanced CSS preprocessing" },
      ],
    },
    {
      title: "State & Data",
      icon: Database,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Redux", level: 85, description: "Predictable state management" },
        { name: "Zustand", level: 80, description: "Lightweight state solution" },
        { name: "Context API", level: 90, description: "React built-in state" },
        { name: "React Query", level: 75, description: "Server state management" },
      ],
    },
    {
      title: "Animation & Graphics",
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "GSAP", level: 85, description: "Advanced animation library" },
        { name: "Three.js", level: 70, description: "3D graphics and WebGL" },
        { name: "Framer Motion", level: 85, description: "React animation library" },
        { name: "Canvas API", level: 80, description: "2D graphics rendering" },
        { name: "Fabric.js", level: 70, description: "Canvas manipulation" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "REST APIs", level: 85, description: "RESTful architecture" },
        { name: "GraphQL", level: 70, description: "Query language for APIs" },
        { name: "Node.js", level: 75, description: "Server-side JavaScript" },
        { name: "MongoDB", level: 75, description: "NoSQL database" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "from-gray-600 to-gray-700",
      skills: [
        { name: "Git & GitHub", level: 95, description: "Version control expert" },
        { name: "Webpack & Vite", level: 80, description: "Build tools and bundlers" },
        { name: "Docker", level: 50, description: "Containerization learning" },
        { name: "AWS", level: 40, description: "Cloud services learning" },
        { name: "Vercel & Netlify", level: 90, description: "Deployment platforms" },
        { name: "ESLint & Prettier", level: 85, description: "Code quality tools" },
      ],
    },
  ];

  const filters = ["All", "Frontend", "Styling", "State", "Animation", "Backend", "Tools"];

  const getFilteredCategories = () => {
    let filtered = categories;

    if (selectedCategory !== "All") {
      const categoryMap: { [key: string]: string } = {
        Frontend: "Frontend Technologies",
        Styling: "Styling & UI",
        State: "State & Data",
        Animation: "Animation & Graphics",
        Backend: "Backend & APIs",
        Tools: "Tools & DevOps",
      };
      filtered = categories.filter((cat) => cat.title === categoryMap[selectedCategory]);
    }

    if (searchQuery) {
      filtered = filtered.map((cat) => ({
        ...cat,
        skills: cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((cat) => cat.skills.length > 0);
    }

    return filtered;
  };

  const CircularProgress = ({ percentage, size = 60 }: { percentage: number; size?: number }) => {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-muted/20"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-[#007AFF]"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-foreground">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 pb-8">
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass border-0 focus:ring-2 focus:ring-[#007AFF] outline-none text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 hide-scrollbar">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedCategory(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === filter
                ? "bg-[#007AFF] text-white shadow-lg"
                : "glass text-foreground hover:bg-accent"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {getFilteredCategories().map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="glass rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <CircularProgress percentage={skill.level} size={56} />
                      <p className="text-sm font-medium text-foreground text-center">{skill.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="glass rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-4">
              <CircularProgress percentage={selectedSkill.level} size={100} />
              <h3 className="text-xl font-bold text-foreground">{selectedSkill.name}</h3>
              <p className="text-muted-foreground text-center">{selectedSkill.description}</p>
              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-2 px-6 py-2 rounded-full bg-[#007AFF] text-white font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
