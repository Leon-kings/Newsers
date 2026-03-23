/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { About } from "./pages/about/About";
import { FeaturedNews } from "./pages/main/FeaturedNews";
import { Featured } from "./pages/features/Features";
import { News } from "./pages/news/News";
import { Newsletter } from "./components/newsletter/Newsletter";
import { Footer } from "./components/footer/Footer";
import { LatestNewsCarousel } from "./components/slides/LatestSlides";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Dynamic page title updater
  React.useEffect(() => {
    // Set default title
    document.title = "Newsers - Your Daily News Source";

    // Update title based on route
    const handleRouteChange = () => {
      const path = window.location.pathname;
      switch (path) {
        case "/":
          document.title = "Newsers - Home | Latest News & Updates";
          break;
        case "/about":
          document.title = "Newsers - About Us | Our Mission & Story";
          break;
        case "/features":
          document.title = "Newsers - Features | What We Offer";
          break;
        case "/news":
          document.title = "Newsers - All News | Latest Articles";
          break;
        case "/featured-news":
          document.title = "Newsers - Featured News | Top Stories";
          break;
        default:
          document.title = "Newsers - Your Daily News Source";
      }
    };

    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle contact form submission
  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/contact", contactData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setIsContactModalOpen(false);
      setContactData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full relative">
      {/* Meta tags for better SEO */}
      <meta
        name="description"
        content="Newsers - Your trusted source for latest news, breaking stories, and in-depth coverage on technology, politics, business, sports, entertainment, and more."
      />
      <meta
        name="keywords"
        content="news, latest news, breaking news, technology news, politics, business, sports, entertainment, world news"
      />
      <meta name="author" content="Newsers" />
      <meta property="og:title" content="Newsers - Your Daily News Source" />
      <meta
        property="og:description"
        content="Get the latest news, breaking stories, and in-depth coverage on topics that matter to you."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero Section with Breaking News */}
              <Hero />

              {/* About Section with Introduction */}
              <section className="about-section">
                <About />
              </section>

              {/* Latest News Carousel - Auto-sliding 4 items */}
              <section className="latest-news-section">
                <LatestNewsCarousel />
              </section>

              {/* Featured News Section */}
              <section className="featured-news-section">
                <FeaturedNews />
              </section>

              {/* Featured Stories Section */}
              <section className="featured-section">
                <Featured />
              </section>

              {/* News Grid Section */}
              <section className="news-section">
                <News />
              </section>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/features"
          element={
            <>
              <Featured />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <News />
            </>
          }
        />
        <Route
          path="/featured-news"
          element={
            <>
              <FeaturedNews />
            </>
          }
        />
      </Routes>
      <Newsletter />
      <Footer />

      {/* Floating Contact Button - Bottom Left */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsContactModalOpen(true)}
        className="fixed bottom-6 left-6 z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Pulsing ring animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-ping opacity-75"></div>
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/50 flex items-center justify-center hover:shadow-xl hover:shadow-indigo-600/50 transition-all duration-300">
            <ContactSupportIcon className="text-white text-2xl" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
        </div>
        <span className="absolute left-16 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Contact Us
        </span>
      </motion.button>

      {/* Back to Top Button - Bottom Right */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50 flex items-center justify-center hover:shadow-xl hover:shadow-blue-600/50 transition-all duration-300">
                <ArrowUpwardIcon className="text-white text-xl" />
              </div>
              <span className="absolute right-14 top-1/2 transform -translate-y-1/2 whitespace-nowrap bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Back to Top
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact Modal - Same style as Navbar */}
      <AnimatePresence>
        {isContactModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
              onClick={() => setIsContactModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                className="bg-black border border-gray-800 rounded-2xl max-w-[95%] sm:max-w-[90%] md:max-w-4xl w-full overflow-hidden shadow-2xl mx-2 sm:mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Gradient with Animation - Hidden on small screens, visible from md up */}
                  <div className="hidden md:block md:w-2/5 lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 sm:p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-center relative z-10"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        <ContactSupportIcon
                          className="text-white"
                          style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
                        />
                      </motion.div>
                      <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 mt-4 sm:mt-6">
                        We're Here to Help!
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-2">
                        Have questions, feedback, or just want to say hello?
                      </p>
                      <p className="text-white/80 text-xs sm:text-sm">
                        Our team is ready to assist you 24/7. Reach out and
                        we'll get back to you within 24 hours.
                      </p>
                      <div className="mt-4 sm:mt-6 flex justify-center space-x-3 sm:space-x-4">
                        <div className="text-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                            <EmailIcon className="text-white text-sm sm:text-xl" />
                          </div>
                          <p className="text-white text-[10px] sm:text-xs">
                            support@newsers.com
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          </div>
                          <p className="text-white text-[10px] sm:text-xs">
                            +250 788 123 456
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Left Side - Simplified version for small screens */}
                  <div className="block md:hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4 sm:p-6 text-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="inline-block"
                    >
                      <ContactSupportIcon className="text-white text-4xl sm:text-5xl" />
                    </motion.div>
                    <h3 className="text-white text-lg sm:text-xl font-bold mt-2 sm:mt-3">
                      Get in Touch
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm mt-1">
                      We're here to help you 24/7
                    </p>
                  </div>

                  {/* Right Side - Form - Fully responsive */}
                  <div className="w-full md:w-3/5 lg:w-1/2 p-4 sm:p-6 md:p-8">
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <h3 className="text-white text-xl sm:text-2xl font-bold">
                        Send a Message
                      </h3>
                      <button
                        onClick={() => setIsContactModalOpen(false)}
                        className="text-gray-400 hover:text-white transition-colors p-1"
                      >
                        <CloseIcon className="text-xl sm:text-2xl" />
                      </button>
                    </div>
                    <form onSubmit={handleContact}>
                      <div className="mb-3 sm:mb-4">
                        <label className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">
                          Your Name
                        </label>
                        <div className="relative">
                          <PersonIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "clamp(16px, 4vw, 20px)" }}
                          />
                          <input
                            type="text"
                            value={contactData.name}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                name: e.target.value,
                              })
                            }
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 sm:mb-4">
                        <label className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">
                          Email Address
                        </label>
                        <div className="relative">
                          <EmailIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "clamp(16px, 4vw, 20px)" }}
                          />
                          <input
                            type="email"
                            value={contactData.email}
                            onChange={(e) =>
                              setContactData({
                                ...contactData,
                                email: e.target.value,
                              })
                            }
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4 sm:mb-6">
                        <label className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">
                          Your Message
                        </label>
                        <textarea
                          rows={4}
                          value={contactData.message}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              message: e.target.value,
                            })
                          }
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                          placeholder="Tell us how we can help you..."
                          required
                        ></textarea>
                      </div>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm sm:text-base hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25"
                      >
                        {loading ? (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <>
                            <SendIcon
                              style={{ fontSize: "clamp(16px, 4vw, 20px)" }}
                            />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                      <p className="text-gray-500 text-center text-[10px] sm:text-xs mt-3 sm:mt-4">
                        By sending this message, you agree to our{" "}
                        <a
                          href="#"
                          className="text-indigo-400 hover:text-indigo-300"
                        >
                          Privacy Policy
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
