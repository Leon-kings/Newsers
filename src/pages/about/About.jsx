/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

// Material Icons
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HistoryIcon from "@mui/icons-material/History";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SpeedIcon from "@mui/icons-material/Speed";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArticleIcon from "@mui/icons-material/Article";
import CampaignIcon from "@mui/icons-material/Campaign";
import PsychologyIcon from "@mui/icons-material/Psychology";
import DevicesIcon from "@mui/icons-material/Devices";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export const About = () => {
  const stats = [
    {
      number: "10+",
      label: "Years of Excellence",
      icon: HistoryIcon,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "1M+",
      label: "Daily Readers",
      icon: VisibilityIcon,
      color: "from-green-500 to-green-600",
    },
    {
      number: "24/7",
      label: "News Coverage",
      icon: SpeedIcon,
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "50+",
      label: "Expert Journalists",
      icon: PeopleIcon,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const values = [
    {
      title: "Truth & Accuracy",
      description:
        "We are committed to delivering factual, verified information with the highest standards of journalistic integrity.",
      icon: VerifiedIcon,
      color: "text-blue-500",
    },
    {
      title: "Independence",
      description:
        "Our reporting is free from political or commercial influence, ensuring unbiased news coverage.",
      icon: TrendingUpIcon,
      color: "text-green-500",
    },
    {
      title: "Accountability",
      description:
        "We take responsibility for our reporting and are transparent about our sources and methods.",
      icon: SecurityIcon,
      color: "text-purple-500",
    },
    {
      title: "Innovation",
      description:
        "Embracing cutting-edge technology to deliver news in the most accessible and engaging ways.",
      icon: DevicesIcon,
      color: "text-orange-500",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Editor-in-Chief",
      bio: "20+ years of journalism experience, former NY Times correspondent",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      expertise: "Investigative Journalism",
    },
    {
      name: "Michael Chen",
      role: "Technology Editor",
      bio: "Tech enthusiast covering AI, blockchain, and digital innovation",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      expertise: "Tech & Innovation",
    },
    {
      name: "Emma Rodriguez",
      role: "Senior Reporter",
      bio: "Award-winning journalist specializing in political analysis",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      expertise: "Politics & Policy",
    },
    {
      name: "David Kim",
      role: "Creative Director",
      bio: "Visual storytelling expert with 15 years in media design",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      expertise: "Visual Media",
    },
  ];

  const milestones = [
    {
      year: "2014",
      event: "Founded with a mission to deliver quality journalism",
      icon: HistoryIcon,
    },
    {
      year: "2016",
      event: "Reached 100,000 daily readers",
      icon: TrendingUpIcon,
    },
    {
      year: "2018",
      event: "Launched mobile app and digital platform",
      icon: DevicesIcon,
    },
    {
      year: "2020",
      event: "Expanded to 50+ expert journalists",
      icon: PeopleIcon,
    },
    {
      year: "2022",
      event: "Winner of Best Digital News Platform Award",
      icon: EmojiEventsIcon,
    },
    {
      year: "2024",
      event: "10 years of trusted journalism",
      icon: VerifiedIcon,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-24 overflow-hidden">
        <div className="absolute inset-0  opacity-30"></div>
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px]"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <NewspaperIcon className="text-6xl md:text-7xl" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About The Daily Chronicle
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Delivering truth, inspiring change, and connecting communities
            through quality journalism since 2014
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Founded in 2014, The Daily Chronicle emerged from a simple yet
                powerful idea: to create a news platform that prioritizes truth,
                accuracy, and the human stories that shape our world. What
                started as a small team of passionate journalists has grown into
                one of the most trusted news sources globally.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Our journey has been defined by our commitment to independent
                journalism and our dedication to serving our readers with
                integrity. We believe that quality journalism is essential for a
                functioning democracy and an informed society.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we reach millions of readers worldwide, delivering
                breaking news, in-depth analysis, and compelling stories that
                matter. Our team of award-winning journalists works tirelessly
                to uncover the truth and present it with clarity and context.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop"
                  alt="Newsroom"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-0 bg-white rounded-xl shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <FormatQuoteIcon className="text-blue-500 text-xl" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      Trusted by
                    </p>
                    <p className="text-xl font-bold text-blue-500">
                      1M+ Readers
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={statsVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} mb-4`}
                >
                  <Icon className="text-white text-3xl" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              The principles that guide our journalism and define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <Icon className={`${value.color} text-5xl mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
