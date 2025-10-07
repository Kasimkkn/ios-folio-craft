import { Github, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const AboutApp = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Profile Section */}
      <motion.div
        className="flex flex-col items-center text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
          <span className="text-5xl">👨‍💻</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-foreground">Your Name</h2>
          <p className="text-lg text-muted-foreground">Full Stack Developer</p>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        className="bg-card rounded-3xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-3 text-foreground">About Me</h3>
        <p className="text-muted-foreground leading-relaxed">
          Passionate developer with 5+ years of experience building beautiful and functional web applications. 
          Specialized in React, TypeScript, and modern web technologies. Love creating intuitive user experiences 
          and solving complex problems.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-card rounded-2xl p-4 text-center shadow-lg">
          <div className="text-3xl font-bold text-primary">5+</div>
          <div className="text-sm text-muted-foreground">Years Exp</div>
        </div>
        <div className="bg-card rounded-2xl p-4 text-center shadow-lg">
          <div className="text-3xl font-bold text-primary">50+</div>
          <div className="text-sm text-muted-foreground">Projects</div>
        </div>
        <div className="bg-card rounded-2xl p-4 text-center shadow-lg">
          <div className="text-3xl font-bold text-primary">20+</div>
          <div className="text-sm text-muted-foreground">Clients</div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="bg-card rounded-3xl p-6 space-y-4 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold mb-3 text-foreground">Get in Touch</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <span>hello@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="w-5 h-5 text-primary" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {[
          { icon: Github, color: "from-gray-700 to-gray-900" },
          { icon: Linkedin, color: "from-blue-600 to-blue-800" },
          { icon: Twitter, color: "from-sky-500 to-blue-600" },
        ].map((social, i) => (
          <motion.button
            key={i}
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <social.icon className="w-6 h-6 text-white" />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};
