// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import axios from "axios";

// // Material Icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import SendIcon from "@mui/icons-material/Send";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// export const Footer = () => {
//   const [newsletterEmail, setNewsletterEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const quickLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Contact Us", path: "/contact" },
//     { name: "Privacy Policy", path: "/privacy" },
//     { name: "Terms of Service", path: "/terms" },
//     { name: "Advertise", path: "/advertise" },
//     { name: "Careers", path: "/careers" }
//   ];

//   const categories = [
//     { name: "Sports", path: "/category/sports" },
//     { name: "Technology", path: "/category/technology" },
//     { name: "Fashion", path: "/category/fashion" },
//     { name: "Politics", path: "/category/politics" },
//     { name: "Lifestyle", path: "/category/lifestyle" },
//     { name: "Business", path: "/category/business" }
//   ];

//   const recentPosts = [
//     {
//       id: 1,
//       title: "10 Tips for Better Journalism",
//       date: "Dec 15, 2024",
//       image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&h=100&fit=crop"
//     },
//     {
//       id: 2,
//       title: "The Future of Digital News",
//       date: "Dec 14, 2024",
//       image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=100&h=100&fit=crop"
//     },
//     {
//       id: 3,
//       title: "Why Local News Matters",
//       date: "Dec 13, 2024",
//       image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=100&h=100&fit=crop"
//     }
//   ];

//   const socialLinks = [
//     { icon: FacebookIcon, url: "https://facebook.com", color: "hover:bg-[#1877f2]" },
//     { icon: TwitterIcon, url: "https://twitter.com", color: "hover:bg-[#1da1f2]" },
//     { icon: InstagramIcon, url: "https://instagram.com", color: "hover:bg-[#e4405f]" },
//     { icon: YouTubeIcon, url: "https://youtube.com", color: "hover:bg-[#ff0000]" },
//     { icon: LinkedInIcon, url: "https://linkedin.com", color: "hover:bg-[#0077b5]" },
//     { icon: PinterestIcon, url: "https://pinterest.com", color: "hover:bg-[#bd081c]" }
//   ];

//   const handleNewsletterSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!newsletterEmail) {
//       toast.error("Please enter your email address");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(newsletterEmail)) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       // Replace with your actual API endpoint
//       // await axios.post("http://localhost:5000/api/subscribe", { email: newsletterEmail });
      
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       toast.success("Successfully subscribed to newsletter!");
//       setNewsletterEmail("");
//     } catch (error) {
//       console.error("Error subscribing:", error);
//       toast.error("Failed to subscribe. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     toast.info("Scrolled to top!");
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       {/* Main Footer */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
//         >
//           {/* About Section */}
//           <motion.div variants={itemVariants}>
//             <div className="flex items-center gap-2 mb-4">
//               <NewspaperIcon className="text-blue-500 text-2xl" />
//               <h3 className="text-xl font-bold text-white">Newsers</h3>
//             </div>
//             <p className="text-gray-400 mb-4 leading-relaxed">
//               Delivering truth, inspiring change, and connecting communities through quality journalism since 2014.
//             </p>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2 text-sm">
//                 <LocationOnIcon className="text-blue-500 text-sm" />
//                 <span>123 News Street, Media City, NY 10001</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm">
//                 <PhoneIcon className="text-blue-500 text-sm" />
//                 <span>+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm">
//                 <EmailIcon className="text-blue-500 text-sm" />
//                 <span>contact@newsers.com</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm">
//                 <AccessTimeIcon className="text-blue-500 text-sm" />
//                 <span>24/7 News Desk - Always Open</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     to={link.path}
//                     className="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center gap-2 group"
//                   >
//                     <ChevronRightIcon className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
//                     <span className="group-hover:translate-x-1 transition-transform duration-300">
//                       {link.name}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Categories */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
//             <ul className="space-y-2">
//               {categories.map((category, index) => (
//                 <li key={index}>
//                   <Link
//                     to={category.path}
//                     className="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex items-center gap-2 group"
//                   >
//                     <ChevronRightIcon className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
//                     <span className="group-hover:translate-x-1 transition-transform duration-300">
//                       {category.name}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Newsletter Section */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
//             <p className="text-gray-400 mb-3 text-sm">
//               Subscribe to get the latest news delivered to your inbox.
//             </p>
//             <form onSubmit={handleNewsletterSubmit} className="mb-4">
//               <div className="relative">
//                 <input
//                   type="email"
//                   value={newsletterEmail}
//                   onChange={(e) => setNewsletterEmail(e.target.value)}
//                   placeholder="Your email address"
//                   className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
//                 />
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-1.5 transition-all duration-300 disabled:opacity-50"
//                 >
//                   {isSubmitting ? (
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                   ) : (
//                     <SendIcon className="text-sm" />
//                   )}
//                 </button>
//               </div>
//             </form>
//             <div className="flex items-center gap-2 text-xs text-gray-400">
//               <CheckCircleIcon className="text-green-500 text-xs" />
//               <span>No spam, unsubscribe anytime</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Recent Posts Section */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="mt-12 pt-8 border-t border-gray-800"
//         >
//           <h3 className="text-lg font-bold text-white mb-4">Recent Posts</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {recentPosts.map((post, index) => (
//               <motion.div
//                 key={post.id}
//                 variants={itemVariants}
//                 className="flex gap-3 group cursor-pointer"
//                 onClick={() => toast.info(`Reading: ${post.title}`)}
//               >
//                 <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-semibold text-white group-hover:text-blue-500 transition-colors line-clamp-2">
//                     {post.title}
//                   </h4>
//                   <p className="text-xs text-gray-500 mt-1">{post.date}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Social Links */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="mt-8 pt-8 border-t border-gray-800"
//         >
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="flex gap-3">
//               {socialLinks.map((social, index) => {
//                 const Icon = social.icon;
//                 return (
//                   <motion.a
//                     key={index}
//                     variants={itemVariants}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
//                     whileHover={{ y: -3, scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Icon className="text-sm" />
//                   </motion.a>
//                 );
//               })}
//             </div>
            
//             <button
//               onClick={scrollToTop}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 group"
//             >
//               <KeyboardArrowUpIcon className="text-sm group-hover:-translate-y-1 transition-transform duration-300" />
//               <span className="text-sm">Back to Top</span>
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Copyright Bar */}
//       <div className="border-t border-gray-800 py-6">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
//             <p className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Newsers. All rights reserved. | Designed with ❤️ for quality journalism
//             </p>
//             <div className="flex gap-4 text-sm">
//               <Link to="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors">
//                 Privacy Policy
//               </Link>
//               <span className="text-gray-600">|</span>
//               <Link to="/terms" className="text-gray-400 hover:text-blue-500 transition-colors">
//                 Terms of Use
//               </Link>
//               <span className="text-gray-600">|</span>
//               <Link to="/sitemap" className="text-gray-400 hover:text-blue-500 transition-colors">
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };






/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

// Material Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Advertise", path: "/advertise" },
    { name: "Careers", path: "/careers" }
  ];

  const categories = [
    { name: "Sports", path: "/category/sports" },
    { name: "Technology", path: "/category/technology" },
    { name: "Fashion", path: "/category/fashion" },
    { name: "Politics", path: "/category/politics" },
    { name: "Lifestyle", path: "/category/lifestyle" },
    { name: "Business", path: "/category/business" }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "10 Tips for Better Journalism",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      title: "The Future of Digital News",
      date: "Dec 14, 2024",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "Why Local News Matters",
      date: "Dec 13, 2024",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=100&h=100&fit=crop"
    }
  ];

  const socialLinks = [
    { icon: FacebookIcon, url: "https://facebook.com", color: "hover:bg-[#1877f2]" },
    { icon: TwitterIcon, url: "https://twitter.com", color: "hover:bg-[#1da1f2]" },
    { icon: InstagramIcon, url: "https://instagram.com", color: "hover:bg-[#e4405f]" },
    { icon: YouTubeIcon, url: "https://youtube.com", color: "hover:bg-[#ff0000]" },
    { icon: LinkedInIcon, url: "https://linkedin.com", color: "hover:bg-[#0077b5]" },
    { icon: PinterestIcon, url: "https://pinterest.com", color: "hover:bg-[#bd081c]" }
  ];

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!newsletterEmail) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      // await axios.post("http://localhost:5000/api/subscribe", { email: newsletterEmail });

      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success("Successfully subscribed to newsletter!");
      setNewsletterEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast.info("Scrolled to top!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-flow-col auto-cols-max items-center gap-2 mb-4">
              <NewspaperIcon className="text-blue-500 text-2xl" />
              <h3 className="text-xl font-bold text-white">Newsers</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Delivering truth, inspiring change, and connecting communities through quality journalism since 2014.
            </p>
            <div className="grid grid-cols-1 gap-2">
              <div className="grid grid-flow-col auto-cols-max items-center gap-2 text-sm">
                <LocationOnIcon className="text-blue-500 text-sm" />
                <span>123 News Street, Media City, NY 10001</span>
              </div>
              <div className="grid grid-flow-col auto-cols-max items-center gap-2 text-sm">
                <PhoneIcon className="text-blue-500 text-sm" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="grid grid-flow-col auto-cols-max items-center gap-2 text-sm">
                <EmailIcon className="text-blue-500 text-sm" />
                <span>contact@newsers.com</span>
              </div>
              <div className="grid grid-flow-col auto-cols-max items-center gap-2 text-sm">
                <AccessTimeIcon className="text-blue-500 text-sm" />
                <span>24/7 News Desk - Always Open</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300 grid grid-flow-col auto-cols-max items-center gap-2 group"
                  >
                    <ChevronRightIcon className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
            <ul className="grid grid-cols-1 gap-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.path}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300 grid grid-flow-col auto-cols-max items-center gap-2 group"
                  >
                    <ChevronRightIcon className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-3 text-sm">
              Subscribe to get the latest news delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-1.5 transition-all duration-300 disabled:opacity-50 grid place-items-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <SendIcon className="text-sm" />
                  )}
                </button>
              </div>
            </form>
            <div className="grid grid-flow-col auto-cols-max items-center gap-2 text-xs text-gray-400">
              <CheckCircleIcon className="text-green-500 text-xs" />
              <span>No spam, unsubscribe anytime</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Recent Posts Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <h3 className="text-lg font-bold text-white mb-4">Recent Posts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="grid grid-cols-[auto_1fr] gap-3 group cursor-pointer"
                onClick={() => toast.info(`Reading: ${post.title}`)}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-500 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-4">
            <div className="grid grid-flow-col auto-cols-max gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-gray-800 grid place-items-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-sm" />
                  </motion.a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="grid grid-flow-col auto-cols-max items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 group"
            >
              <KeyboardArrowUpIcon className="text-sm group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-3 text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Newsers. All rights reserved. | Designed with ❤️ for quality journalism
            </p>
            <div className="grid grid-flow-col auto-cols-max gap-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms" className="text-gray-400 hover:text-blue-500 transition-colors">
                Terms of Use
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/sitemap" className="text-gray-400 hover:text-blue-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};