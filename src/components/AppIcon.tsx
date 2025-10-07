import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AppIconProps {
  icon: LucideIcon;
  label: string;
  gradient: string;
  onClick: () => void;
  badge?: number | string;
}

export const AppIcon = ({ icon: Icon, label, gradient, onClick, badge }: AppIconProps) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <motion.div
        className={`relative w-16 h-16 rounded-[22%] ${gradient} shadow-lg flex items-center justify-center`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
        {badge && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.2 }}
            className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-[#FF3B30] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
          >
            {typeof badge === "number" && badge > 9 ? "9+" : badge}
          </motion.div>
        )}
      </motion.div>
      <span className="text-xs font-medium text-foreground drop-shadow-sm max-w-[70px] text-center truncate">
        {label}
      </span>
    </motion.div>
  );
};
