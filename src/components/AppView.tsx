import { motion } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

interface AppViewProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  gradient: string;
}

export const AppView = ({ title, children, onClose, gradient }: AppViewProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) {
          onClose();
        }
      }}
    >
      {/* Header */}
      <div className={`${gradient} pt-11 pb-4 px-6 shadow-lg`}>
        <div className="flex items-center justify-between">
          <motion.button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </motion.button>
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <motion.button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm"
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-80px)] overflow-y-auto">
        {children}
      </div>
    </motion.div>
  );
};
