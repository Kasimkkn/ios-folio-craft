import { Github, Linkedin, MapPin, Mail, Phone } from "lucide-react";
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
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 flex items-center justify-center shadow-xl">
          <span className="text-5xl font-bold text-white">KK</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-foreground">Kasim Kadiwala</h2>
          <p className="text-lg text-muted-foreground">Frontend Developer</p>
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
          Frontend Developer with 1.7+ years of experience specializing in React.js, React Native, and modern JavaScript frameworks. 
          Proven track record of building scalable web applications, improving performance by 30%+, and delivering user-centric 
          solutions for 500+ active users. Expertise in responsive design, component architecture, and cross-platform mobile development.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-card rounded-2xl p-4 text-center shadow-lg">
          <div className="text-3xl font-bold text-primary">1.7+</div>
          <div className="text-sm text-muted-foreground">Years Exp</div>
        </div>
        <div className="bg-card rounded-2xl p-4 text-center shadow-lg">
          <div className="text-3xl font-bold text-primary">10</div>
          <div className="text-sm text-muted-foreground">Projects</div>
        </div>
        <div className="bg-card rounded-2xl p-4 text-center shadow-lg">
          <div className="text-3xl font-bold text-primary">3</div>
          <div className="text-sm text-muted-foreground">Companies</div>
        </div>
        <div className="bg-card rounded-2xl p-4 text-center shadow-lg">
          <div className="text-3xl font-bold text-primary">500+</div>
          <div className="text-sm text-muted-foreground">Users Served</div>
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
          <a 
            href="mailto:kasimkkn15@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm">kasimkkn15@gmail.com</span>
          </a>
          <a 
            href="tel:+918459258801"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm">+91 8459258801</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm">Ahmedabad, Gujarat, India</span>
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
        <motion.a
          href="https://github.com/[your-username]"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <Github className="w-6 h-6 text-white" />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/[your-profile]"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <Linkedin className="w-6 h-6 text-white" />
        </motion.a>
      </motion.div>
    </div>
  );
};
