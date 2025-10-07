import { motion } from "framer-motion";
import { User, Briefcase, Code2, Mail } from "lucide-react";

interface DockProps {
  onAppOpen: (appId: string) => void;
}

export const Dock = ({ onAppOpen }: DockProps) => {
  const dockApps = [
    { id: "about", icon: User, gradient: "bg-gradient-to-br from-blue-500 to-blue-600" },
    { id: "experience", icon: Briefcase, gradient: "bg-gradient-to-br from-purple-500 to-purple-600" },
    { id: "projects", icon: Code2, gradient: "bg-gradient-to-br from-green-500 to-green-600" },
    { id: "contact", icon: Mail, gradient: "bg-gradient-to-br from-red-500 to-red-600" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <motion.div
        className="glass rounded-[28px] px-4 py-3 flex items-center gap-4 shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      >
        {dockApps.map((app) => (
          <motion.button
            key={app.id}
            className={`w-14 h-14 rounded-[22%] ${app.gradient} shadow-lg flex items-center justify-center`}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => onAppOpen(app.id)}
          >
            <app.icon className="w-7 h-7 text-white" strokeWidth={2} />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};
