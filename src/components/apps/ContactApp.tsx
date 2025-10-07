import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Twitter, Check } from "lucide-react";
import { toast } from "sonner";

export const ContactApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kasimkkn15@gmail.com", link: "mailto:kasimkkn15@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8459258801", link: "tel:+918459258801" },
    { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra, India", link: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/kasimkadiwala", color: "hover:bg-gray-700" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/kasimkadiwala", color: "hover:bg-blue-600" },
    { icon: Globe, label: "Portfolio", link: "#", color: "hover:bg-purple-600" },
    { icon: Twitter, label: "Twitter", link: "https://twitter.com/kasimkadiwala", color: "hover:bg-sky-500" },
  ];

  const subjectOptions = ["General Inquiry", "Job Opportunity", "Collaboration", "Other"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length < 10) {
      toast.error("Message must be at least 10 characters");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent successfully!");
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 pb-8 max-w-2xl mx-auto">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.a
              key={index}
              href={info.link || "#"}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-2xl p-4 flex items-center gap-4 ${
                info.link ? "cursor-pointer hover:shadow-lg" : "cursor-default"
              } transition-all`}
              whileTap={info.link ? { scale: 0.98 } : {}}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007AFF] to-blue-600 flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{info.label}</p>
                <p className="font-medium text-foreground">{info.value}</p>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-3 mb-8"
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full glass flex items-center justify-center transition-all ${social.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5 text-foreground" />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-semibold text-foreground mb-6">Send Message</h3>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 pt-6 pb-2 rounded-xl glass border-0 focus:ring-2 focus:ring-[#007AFF] outline-none text-foreground peer"
            />
            <label
              className={`absolute left-4 transition-all pointer-events-none ${
                focusedField === "name" || formData.name
                  ? "top-2 text-xs text-[#007AFF]"
                  : "top-4 text-base text-muted-foreground"
              }`}
            >
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 pt-6 pb-2 rounded-xl glass border-0 focus:ring-2 focus:ring-[#007AFF] outline-none text-foreground"
            />
            <label
              className={`absolute left-4 transition-all pointer-events-none ${
                focusedField === "email" || formData.email
                  ? "top-2 text-xs text-[#007AFF]"
                  : "top-4 text-base text-muted-foreground"
              }`}
            >
              Email
            </label>
          </div>

          {/* Subject Field */}
          <div className="relative">
            <select
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full px-4 pt-6 pb-2 rounded-xl glass border-0 focus:ring-2 focus:ring-[#007AFF] outline-none text-foreground appearance-none"
            >
              <option value="" disabled></option>
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label
              className={`absolute left-4 transition-all pointer-events-none ${
                focusedField === "subject" || formData.subject
                  ? "top-2 text-xs text-[#007AFF]"
                  : "top-4 text-base text-muted-foreground"
              }`}
            >
              Subject
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              required
              rows={5}
              className="w-full px-4 pt-6 pb-2 rounded-xl glass border-0 focus:ring-2 focus:ring-[#007AFF] outline-none text-foreground resize-none"
            />
            <label
              className={`absolute left-4 transition-all pointer-events-none ${
                focusedField === "message" || formData.message
                  ? "top-2 text-xs text-[#007AFF]"
                  : "top-4 text-base text-muted-foreground"
              }`}
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#007AFF] text-white font-semibold shadow-lg relative overflow-hidden"
            whileTap={{ scale: 0.98 }}
            disabled={submitted}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                Sent!
              </motion.div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};
