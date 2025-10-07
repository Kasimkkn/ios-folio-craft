import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Briefcase, Code2, Mail, FileText, 
  Award, BookOpen, Folder, Sparkles, Settings 
} from "lucide-react";
import { StatusBar } from "@/components/StatusBar";
import { AppIcon } from "@/components/AppIcon";
import { Dock } from "@/components/Dock";
import { AppView } from "@/components/AppView";
import { AboutApp } from "@/components/apps/AboutApp";
import { ProjectsApp } from "@/components/apps/ProjectsApp";
import { ExperienceApp } from "@/components/apps/ExperienceApp";
import { SkillsApp } from "@/components/apps/SkillsApp";
import { ContactApp } from "@/components/apps/ContactApp";

const Index = () => {
  const [openApp, setOpenApp] = useState<string | null>(null);

  const apps = [
    { id: "about", icon: User, label: "About", gradient: "bg-gradient-to-br from-blue-500 to-blue-600" },
    { id: "experience", icon: Briefcase, label: "Experience", gradient: "bg-gradient-to-br from-purple-500 to-purple-600", badge: "NEW" },
    { id: "projects", icon: Code2, label: "Projects", gradient: "bg-gradient-to-br from-green-500 to-green-600", badge: 10 },
    { id: "skills", icon: Sparkles, label: "Skills", gradient: "bg-gradient-to-br from-pink-500 to-rose-600" },
    { id: "blog", icon: BookOpen, label: "Blog", gradient: "bg-gradient-to-br from-orange-500 to-amber-600", badge: 3 },
    { id: "contact", icon: Mail, label: "Contact", gradient: "bg-gradient-to-br from-red-500 to-red-600" },
    { id: "resume", icon: FileText, label: "Resume", gradient: "bg-gradient-to-br from-teal-500 to-cyan-600" },
    { id: "work", icon: Folder, label: "Work", gradient: "bg-gradient-to-br from-indigo-500 to-violet-600" },
    { id: "awards", icon: Award, label: "Awards", gradient: "bg-gradient-to-br from-yellow-500 to-orange-500" },
    { id: "settings", icon: Settings, label: "Settings", gradient: "bg-gradient-to-br from-gray-600 to-gray-700" },
  ];

  const getAppContent = (appId: string) => {
    switch (appId) {
      case "about":
        return <AboutApp />;
      case "projects":
        return <ProjectsApp />;
      case "experience":
        return <ExperienceApp />;
      case "skills":
        return <SkillsApp />;
      case "contact":
        return <ContactApp />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4">
              <div className="text-6xl">🚧</div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">This app is under development</p>
              </div>
            </div>
          </div>
        );
    }
  };

  const getAppTitle = (appId: string) => {
    const app = apps.find((a) => a.id === appId);
    return app?.label || "App";
  };

  const getAppGradient = (appId: string) => {
    const app = apps.find((a) => a.id === appId);
    return app?.gradient || "bg-gradient-to-br from-blue-500 to-blue-600";
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Wallpaper Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[hsl(var(--wallpaper-from))] via-[hsl(var(--wallpaper-via))] to-[hsl(var(--wallpaper-to))]" />
      
      {/* Status Bar */}
      <StatusBar />

      {/* Home Screen */}
      <div className="relative z-10 pt-16 pb-32 px-8">
        <motion.div
          className="grid grid-cols-4 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <AppIcon
                icon={app.icon}
                label={app.label}
                gradient={app.gradient}
                onClick={() => setOpenApp(app.id)}
                badge={app.badge}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dock */}
      <Dock onAppOpen={setOpenApp} />

      {/* App Views */}
      <AnimatePresence>
        {openApp && (
          <AppView
            title={getAppTitle(openApp)}
            onClose={() => setOpenApp(null)}
            gradient={getAppGradient(openApp)}
          >
            {getAppContent(openApp)}
          </AppView>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
