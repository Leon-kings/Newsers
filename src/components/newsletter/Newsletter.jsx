/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

// Material Icons
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      // const response = await axios.post("http://localhost:5000/api/subscribe", { email });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Successfully subscribed to our newsletter!");
      setIsSubmitted(true);
      setEmail("");
      
      // Reset submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const stats = [
    { icon: PeopleIcon, value: "10,000+", label: "Active Readers", color: "text-blue-600" },
    { icon: TrendingUpIcon, value: "Weekly", label: "News Updates", color: "text-green-600" },
    { icon: AutoAwesomeIcon, value: "24/7", label: "Support", color: "text-purple-600" }
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-20 my-8 sm:my-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#CACBB9] via-[#D4D5C4] to-[#BFC0AD]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Animated Dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-white/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
            {/* Logo/Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <NewspaperIcon className="text-blue-800" />
              <span className="text-blue-900 font-semibold text-sm">Newsers Weekly</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Newsers
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get Every Weekly Updates
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <Icon className={`${stat.color} text-sm`} />
                    <div>
                      <span className="font-bold text-gray-800">{stat.value}</span>
                      <span className="text-gray-600 text-sm ml-1">{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Subscription Form */}
            <motion.form
              onSubmit={handleSubscribe}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative max-w-md mx-auto lg:mx-0"
            >
              <div className="relative">
                <EmailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Business Email"
                  disabled={isSubmitting}
                  className="w-full py-3 pl-12 pr-32 rounded-full border-2 border-white/30 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircleIcon className="text-sm" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <SendIcon className="text-sm" />
                      <span>Subscribe Now</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-3 text-center lg:text-left">
                <span className="inline-flex items-center gap-1">
                  <CheckCircleIcon className="text-xs text-green-600" />
                  No spam, unsubscribe anytime
                </span>
              </p>
            </motion.form>
            
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6"
            >
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <span>100% Privacy Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <span>Weekly Newsletter</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <span>Premium Content</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Decorative Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=500&fit=crop"
                  alt="Newsletter"
                  className="w-full max-w-md lg:max-w-full h-auto rounded-2xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-gray-700">Live Updates</span>
                  </div>
                </motion.div>
                
                {/* Floating Card */}
                <motion.div
                  initial={{ x: -20, y: 20, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 rounded-full p-1">
                      <CheckCircleIcon className="text-green-600 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">5,000+ Subscribers</p>
                      <p className="text-[10px] text-gray-500">Joined this week</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Animated Pulse Ring */}
              <div className="absolute -inset-4 border-2 border-white/20 rounded-2xl animate-pulse pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};