/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

// Material Icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloudIcon from "@mui/icons-material/Cloud";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export const News = () => {
  const [activeTab, setActiveTab] = useState("Sports");
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likedArticles, setLikedArticles] = useState({});

  const tabs = ["Sports", "Magazine", "Politics", "Technology", "Fashion"];

  // Sample data for each category
  const categoryData = {
    Sports: {
      main: {
        id: 1,
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop",
        readTime: "06 minute read",
        views: "3.5k",
        comments: "05",
        shares: "1.5k",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: "John Smith",
        date: "December 9, 2024"
      },
      side: [
        { id: 2, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 3, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 4, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 5, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=400&h=300&fit=crop", date: "Dec 9, 2024" }
      ]
    },
    Magazine: {
      main: {
        id: 6,
        title: "The Future of Digital Publishing: Trends to Watch in 2024",
        image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=500&fit=crop",
        readTime: "08 minute read",
        views: "4.2k",
        comments: "12",
        shares: "2.1k",
        content: "Digital publishing is evolving rapidly with new technologies and changing reader preferences. From interactive content to AI-powered recommendations, discover the trends shaping the future of how we consume news and information.",
        author: "Emma Watson",
        date: "December 9, 2024"
      },
      side: [
        { id: 7, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e3?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 8, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 9, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 10, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=400&h=300&fit=crop", date: "Dec 9, 2024" }
      ]
    },
    Politics: {
      main: {
        id: 11,
        title: "Global Political Landscape: Key Elections to Watch in 2024",
        image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=500&fit=crop",
        readTime: "10 minute read",
        views: "5.8k",
        comments: "23",
        shares: "3.2k",
        content: "With major elections scheduled across the globe, 2024 promises to be a pivotal year for democracy. From presidential races to parliamentary votes, the outcomes will shape international relations and domestic policies for years to come.",
        author: "Michael Brown",
        date: "December 9, 2024"
      },
      side: [
        { id: 12, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 13, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1529101091764-c3526daf3a2c?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 14, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1611273426858-450e6b3f6a7c?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 15, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400&h=300&fit=crop", date: "Dec 9, 2024" }
      ]
    },
    Technology: {
      main: {
        id: 16,
        title: "AI Revolution: How Artificial Intelligence is Reshaping Our World",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
        readTime: "12 minute read",
        views: "7.2k",
        comments: "45",
        shares: "5.6k",
        content: "Artificial intelligence is no longer a futuristic concept—it's here and transforming every sector imaginable. From healthcare to transportation, discover how AI is changing the way we live, work, and interact with technology.",
        author: "Sarah Chen",
        date: "December 9, 2024"
      },
      side: [
        { id: 17, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 18, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 19, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 20, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop", date: "Dec 9, 2024" }
      ]
    },
    Fashion: {
      main: {
        id: 21,
        title: "Fashion Week 2024: Bold Statements and Sustainable Trends",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=500&fit=crop",
        readTime: "07 minute read",
        views: "4.5k",
        comments: "18",
        shares: "2.3k",
        content: "Paris Fashion Week 2024 has been a spectacle of creativity and innovation, with designers making bold statements about sustainability and inclusivity. Discover the trends that are defining this year's fashion landscape.",
        author: "Isabella Rossi",
        date: "December 9, 2024"
      },
      side: [
        { id: 22, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 23, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 24, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop", date: "Dec 9, 2024" },
        { id: 25, title: "Get the best speak market, news.", image: "https://images.unsplash.com/photo-1487222477894-8243a5091fa5?w=400&h=300&fit=crop", date: "Dec 9, 2024" }
      ]
    }
  };

  const mostViewedNews = [
    { id: 30, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" },
    { id: 31, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&h=400&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" },
    { id: 32, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" },
    { id: 33, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=400&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" },
    { id: 34, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" }
  ];

  const lifestyleStories = [
    { id: 35, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" },
    { id: 36, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" },
     { id: 35, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" },
    { id: 36, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" },
     { id: 35, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" },
    { id: 36, title: "There are many variations of passages of Lorem Ipsum available", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop", author: "Willium Smith", date: "Dec 9, 2024" }
  ];

  const popularNews = [
    { id: 37, title: "Get the best speak market, news.", category: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=150&h=150&fit=crop", date: "December 9, 2024", count: 3 },
    { id: 38, title: "Get the best speak market, news.", category: "Technology", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop", date: "December 9, 2024", count: 3 },
    { id: 39, title: "Get the best speak market, news.", category: "Fashion", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=150&h=150&fit=crop", date: "December 9, 2024", count: 3 },
    { id: 40, title: "Get the best speak market, news.", category: "Life Style", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=150&h=150&fit=crop", date: "December 9, 2024", count: 3 }
  ];

  const trendingTags = ["Lifestyle", "Sports", "Politics", "Magazine", "Game", "Movie", "Travel", "World"];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikedArticles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    if (!likedArticles[id]) {
      toast.success("Thanks for liking this article!");
    } else {
      toast.info("You unliked this article");
    }
  };

  const handleShare = (article, e) => {
    e.stopPropagation();
    toast.success(`Sharing "${article.title.substring(0, 50)}..."`);
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.content?.substring(0, 100) || "Check out this article",
        url: window.location.href,
      }).catch(() => toast.info("Share cancelled"));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.info("Link copied to clipboard!");
    }
  };

  const handleReadMore = (article) => {
    setSelectedNews(article);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = "auto";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 30,
      transition: { duration: 0.2 }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const currentData = categoryData[activeTab];

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 dark:border-gray-700 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-0">
              What's New
            </h1>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"
            >
              {/* Left Column - Main Content */}
              <div className="lg:col-span-8 xl:col-span-9">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Article */}
                  <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden group cursor-pointer" onClick={() => handleReadMore(currentData.main)}>
                        <img
                          src={currentData.main.image}
                          alt={currentData.main.title}
                          className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {activeTab}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 
                          className="text-xl font-bold text-gray-900 dark:text-white mb-3 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          onClick={() => handleReadMore(currentData.main)}
                        >
                          {currentData.main.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <AccessTimeIcon className="text-sm" />
                            {currentData.main.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <VisibilityIcon className="text-sm" />
                            {currentData.main.views} Views
                          </span>
                          <span className="flex items-center gap-1">
                            <CommentIcon className="text-sm" />
                            {currentData.main.comments} Comments
                          </span>
                          <span className="flex items-center gap-1">
                            <ArrowUpwardIcon className="text-sm" />
                            {currentData.main.shares} Shares
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                          {currentData.main.content.substring(0, 150)}...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Side Articles */}
                  <div className="space-y-4">
                    {currentData.side.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        className="group cursor-pointer bg-white dark:bg-gray-800 rounded-lg p-3 hover:shadow-lg transition-all duration-300"
                        onClick={() => handleReadMore({ ...item, content: "Lorem ipsum content...", author: "Staff Writer" })}
                      >
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase mb-1">{activeTab}</p>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <CalendarTodayIcon className="text-xs" />
                              <span>{item.date}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Most Views News Section */}
                <div className="mt-12">
                  <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Most Views News</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {mostViewedNews.map((news, idx) => (
                      <motion.div
                        key={news.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => handleReadMore(news)}
                      >
                        <div className="overflow-hidden h-40">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {news.title}
                          </h4>
                          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <PersonIcon className="text-xs" />
                              {news.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <CalendarTodayIcon className="text-xs" />
                              {news.date}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Lifestyle Section */}
                <div className="mt-12">
                  <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Life Style</h1>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {lifestyleStories.map((story, idx) => (
                      <motion.div
                        key={story.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group cursor-pointer overflow-hidden rounded-xl h-80"
                        onClick={() => handleReadMore(story)}
                      >
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                            {story.title}
                          </h3>
                          <div className="flex justify-between items-center text-sm text-gray-200">
                            <span className="flex items-center gap-1">
                              <PersonIcon className="text-sm" />
                              {story.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <CalendarTodayIcon className="text-sm" />
                              {story.date}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-4 xl:col-span-3">
                {/* Stay Connected */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Stay Connected</h4>
                  <div className="space-y-3">
                    <a href="#" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg p-3 flex items-center gap-3 transition-all duration-300">
                      <div className="bg-white rounded-full p-2">
                        <FacebookIcon className="text-blue-600" />
                      </div>
                      <span className="text-white font-semibold">13,977 Fans</span>
                    </a>
                    <a href="#" className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 rounded-lg p-3 flex items-center gap-3 transition-all duration-300">
                      <div className="bg-white rounded-full p-2">
                        <TwitterIcon className="text-sky-500" />
                      </div>
                      <span className="text-white font-semibold">21,798 Followers</span>
                    </a>
                    <a href="#" className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg p-3 flex items-center gap-3 transition-all duration-300">
                      <div className="bg-white rounded-full p-2">
                        <YouTubeIcon className="text-red-600" />
                      </div>
                      <span className="text-white font-semibold">7,999 Subscribers</span>
                    </a>
                    <a href="#" className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 rounded-lg p-3 flex items-center gap-3 transition-all duration-300">
                      <div className="bg-white rounded-full p-2">
                        <InstagramIcon className="text-pink-600" />
                      </div>
                      <span className="text-white font-semibold">19,764 Followers</span>
                    </a>
                    <a href="#" className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 rounded-lg p-3 flex items-center gap-3 transition-all duration-300">
                      <div className="bg-white rounded-full p-2">
                        <CloudIcon className="text-gray-600" />
                      </div>
                      <span className="text-white font-semibold">31,999 Subscribers</span>
                    </a>
                    <a href="#" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg p-3 flex items-center gap-3 transition-all duration-300">
                      <div className="bg-white rounded-full p-2">
                        <TrendingUpIcon className="text-orange-500" />
                      </div>
                      <span className="text-white font-semibold">37,999 Subscribers</span>
                    </a>
                  </div>
                </div>

                {/* Popular News */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Popular News</h4>
                  <div className="space-y-4">
                    {popularNews.map((news, idx) => (
                      <div key={news.id} className="group cursor-pointer" onClick={() => handleReadMore(news)}>
                        <div className="flex gap-3">
                          <div className="relative flex-shrink-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                              <img
                                src={news.image}
                                alt={news.category}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs flex items-center justify-center font-bold">
                              {news.count}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase mb-1">{news.category}</p>
                            <h5 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {news.title}
                            </h5>
                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <CalendarTodayIcon className="text-xs" />
                              <span>{news.date}</span>
                            </div>
                          </div>
                        </div>
                        {idx < popularNews.length - 1 && <div className="border-b border-gray-200 dark:border-gray-700 my-3"></div>}
                      </div>
                    ))}
                    <button className="w-full border border-blue-500 text-blue-600 dark:text-blue-400 rounded-full py-2 mt-2 hover:bg-blue-500 hover:text-white transition-all duration-300">
                      View More
                    </button>
                  </div>
                </div>

                {/* Trending Tags */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                  <div className="border-b border-gray-200 dark:border-gray-700 mb-4 pb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Trending Tags</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingTags.map((tag) => (
                      <button
                        key={tag}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Banner */}
                <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=500&fit=crop"
                    alt="Banner"
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h6 className="text-white text-sm mb-2">The Most Popular</h6>
                    <p className="text-white font-bold mb-3">News & Magazine WP Theme</p>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center gap-2">
                    <NewspaperIcon className="text-blue-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">Full Story</span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-70px)]">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedNews.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <PersonIcon className="text-sm" />
                      {selectedNews.author || "Staff Writer"}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CalendarTodayIcon className="text-sm" />
                      {selectedNews.date || "December 9, 2024"}
                    </span>
                    {selectedNews.readTime && (
                      <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <AccessTimeIcon className="text-sm" />
                        {selectedNews.readTime}
                      </span>
                    )}
                    {selectedNews.views && (
                      <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <VisibilityIcon className="text-sm" />
                        {selectedNews.views} Views
                      </span>
                    )}
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedNews.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};