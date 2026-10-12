// /* eslint-disable react-hooks/immutability */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";
// import axios from "axios";

// // Material Icons
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import CommentIcon from "@mui/icons-material/Comment";
// import ShareIcon from "@mui/icons-material/Share";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import PersonIcon from "@mui/icons-material/Person";
// import CloseIcon from "@mui/icons-material/Close";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import SendIcon from "@mui/icons-material/Send";
// import DeleteIcon from "@mui/icons-material/Delete";
// import ReplyIcon from "@mui/icons-material/Reply";

// export const FeaturedNews = () => {
//   const [featuredNews, setFeaturedNews] = useState(null);
//   const [topStories, setTopStories] = useState([]);
//   const [sideNews, setSideNews] = useState([]);
//   const [selectedNews, setSelectedNews] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [likedArticles, setLikedArticles] = useState({});
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [commentModalOpen, setCommentModalOpen] = useState(false);
//   const [currentCommentArticle, setCurrentCommentArticle] = useState(null);
//   const [newComment, setNewComment] = useState("");
//   const [userName, setUserName] = useState("");
//   const [comments, setComments] = useState({});

//   // Initialize comments for each article
//   useEffect(() => {
//     const initialComments = {};
//     const allArticles = [];
//     const data = getSampleData();
//     if (data.featured) allArticles.push(data.featured);
//     if (data.topStory) allArticles.push(data.topStory);
//     if (data.sideNews) allArticles.push(...data.sideNews);

//     allArticles.forEach((article) => {
//       initialComments[article.id] = [
//         {
//           id: 1,
//           userName: "John Doe",
//           text: "Great article! Very informative and well-written.",
//           date: "2024-12-15T10:30:00",
//           likes: 5,
//           replies: [
//             {
//               id: 11,
//               userName: "Jane Smith",
//               text: "I agree! Thanks for sharing this.",
//               date: "2024-12-15T11:00:00",
//               likes: 2,
//             },
//           ],
//         },
//         {
//           id: 2,
//           userName: "Sarah Johnson",
//           text: "This is exactly what I was looking for. Thanks for the insights!",
//           date: "2024-12-15T09:15:00",
//           likes: 3,
//           replies: [],
//         },
//       ];
//     });
//     setComments(initialComments);
//   }, []);

//   // Sample data with high-quality images
//   const getSampleData = () => {
//     return {
//       featured: {
//         id: 1,
//         title: "Lorem Ipsum is simply dummy text of the printing",
//         image:
//           "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
//           "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&h=600&fit=crop",
//           "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&h=600&fit=crop",
//         ],
//         readTime: "06 minute read",
//         views: "3.5k",
//         comments: "05",
//         shares: "1.5k",
//         content:
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//         author: "John Smith",
//         date: "December 15, 2024",
//         category: "Breaking News",
//       },
//       topStory: {
//         id: 2,
//         title:
//           "Stoneman Clandestine Ukrainian claims successes against Russian forces in major offensive",
//         image:
//           "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&h=500&fit=crop",
//         images: [
//           "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&h=500&fit=crop",
//           "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
//           "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=800&h=500&fit=crop",
//         ],
//         readTime: "06 minute read",
//         views: "3.5k",
//         content:
//           "In a significant development, Ukrainian forces have reported major successes in their ongoing counteroffensive against Russian positions. Military analysts suggest this could mark a turning point in the conflict. The operation, which began early yesterday morning, has reportedly resulted in the liberation of several key territories. International observers are closely monitoring the situation as it unfolds.",
//         author: "Sarah Johnson",
//         date: "December 15, 2024",
//       },
//       sideNews: [
//         {
//           id: 3,
//           title: "Get the best speak market, news for investors and traders",
//           image:
//             "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
//           images: [
//             "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
//           ],
//           readTime: "06 minute read",
//           views: "3.5k",
//           content:
//             "Market analysts predict a bullish trend as economic indicators show positive growth across multiple sectors. The stock market has seen unprecedented gains this quarter, with tech stocks leading the charge. Experts advise investors to diversify their portfolios and consider emerging markets for long-term growth.",
//           category: "Business",
//         },
//         {
//           id: 4,
//           title:
//             "Revolutionary AI breakthrough promises to transform healthcare industry worldwide",
//           image:
//             "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
//           images: [
//             "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop",
//           ],
//           readTime: "08 minute read",
//           views: "4.2k",
//           content:
//             "Scientists have developed a new AI system that can diagnose diseases with unprecedented accuracy. The system, trained on millions of medical images, can detect early signs of cancer, heart disease, and neurological conditions with 95% accuracy. This breakthrough could revolutionize healthcare delivery in developing countries.",
//           category: "Technology",
//         },
//         {
//           id: 5,
//           title:
//             "Climate change summit yields historic agreement for future generations",
//           image:
//             "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
//           images: [
//             "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
//           ],
//           readTime: "07 minute read",
//           views: "2.8k",
//           content:
//             "World leaders have reached a landmark agreement to reduce carbon emissions by 50% by 2030. The historic pact, signed by 150 countries, includes provisions for renewable energy investment and conservation efforts. Environmental groups have praised the agreement but warn that implementation will be key.",
//           category: "Environment",
//         },
//         {
//           id: 6,
//           title: "Get the best speak market, news for investors and traders",
//           image:
//             "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
//           images: [
//             "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
//           ],
//           readTime: "06 minute read",
//           views: "3.5k",
//           content:
//             "Market analysts predict a bullish trend as economic indicators show positive growth across multiple sectors. The stock market has seen unprecedented gains this quarter, with tech stocks leading the charge. Experts advise investors to diversify their portfolios and consider emerging markets for long-term growth.",
//           category: "Business",
//         },
//         {
//           id: 7,
//           title: "Get the best speak market, news for investors and traders",
//           image:
//             "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
//           images: [
//             "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
//           ],
//           readTime: "06 minute read",
//           views: "3.5k",
//           content:
//             "Market analysts predict a bullish trend as economic indicators show positive growth across multiple sectors. The stock market has seen unprecedented gains this quarter, with tech stocks leading the charge. Experts advise investors to diversify their portfolios and consider emerging markets for long-term growth.",
//           category: "Business",
//         },
//       ],
//     };
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setTimeout(() => {
//           const data = getSampleData();
//           setFeaturedNews(data.featured);
//           setTopStories([data.topStory]);
//           setSideNews(data.sideNews);
//           setLoading(false);
//         }, 800);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//         toast.error("Failed to load news. Please try again later.");
//         const data = getSampleData();
//         setFeaturedNews(data.featured);
//         setTopStories([data.topStory]);
//         setSideNews(data.sideNews);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleLike = (id, e) => {
//     e.stopPropagation();
//     setLikedArticles((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//     if (!likedArticles[id]) {
//       toast.success("Thanks for liking this article!");
//     } else {
//       toast.info("You unliked this article");
//     }
//   };

//   const handleShare = (article, e) => {
//     e.stopPropagation();
//     toast.success(`Sharing "${article.title.substring(0, 50)}..."`);
//     if (navigator.share) {
//       navigator
//         .share({
//           title: article.title,
//           text: article.content.substring(0, 100),
//           url: window.location.href,
//         })
//         .catch(() => {
//           toast.info("Share cancelled");
//         });
//     } else {
//       navigator.clipboard.writeText(window.location.href);
//       toast.info("Link copied to clipboard!");
//     }
//   };

//   const handleReadMore = (article) => {
//     setSelectedNews(article);
//     setCurrentImageIndex(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setSelectedNews(null);
//     document.body.style.overflow = "auto";
//   };

//   const openCommentModal = (article, e) => {
//     e.stopPropagation();
//     setCurrentCommentArticle(article);
//     setCommentModalOpen(true);
//   };

//   const closeCommentModal = () => {
//     setCommentModalOpen(false);
//     setCurrentCommentArticle(null);
//     setNewComment("");
//     setUserName("");
//   };

//   const handleAddComment = () => {
//     if (!userName.trim()) {
//       toast.error("Please enter your name");
//       return;
//     }
//     if (!newComment.trim()) {
//       toast.error("Please enter your comment");
//       return;
//     }

//     const newCommentObj = {
//       id: Date.now(),
//       userName: userName.trim(),
//       text: newComment.trim(),
//       date: new Date().toISOString(),
//       likes: 0,
//       replies: [],
//     };

//     setComments((prev) => ({
//       ...prev,
//       [currentCommentArticle.id]: [
//         ...(prev[currentCommentArticle.id] || []),
//         newCommentObj,
//       ],
//     }));

//     toast.success("Comment added successfully!");
//     setNewComment("");
//     setUserName("");
//     closeCommentModal();
//   };

//   const handleDeleteComment = (articleId, commentId, e) => {
//     e.stopPropagation();
//     setComments((prev) => ({
//       ...prev,
//       [articleId]: prev[articleId].filter(
//         (comment) => comment.id !== commentId,
//       ),
//     }));
//     toast.info("Comment deleted");
//   };

//   const nextImage = (e) => {
//     e.stopPropagation();
//     if (selectedNews?.images) {
//       setCurrentImageIndex((prev) => (prev + 1) % selectedNews.images.length);
//     }
//   };

//   const prevImage = (e) => {
//     e.stopPropagation();
//     if (selectedNews?.images) {
//       setCurrentImageIndex(
//         (prev) =>
//           (prev - 1 + selectedNews.images.length) % selectedNews.images.length,
//       );
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: 30 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 25,
//         stiffness: 300,
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.95,
//       y: 30,
//       transition: { duration: 0.2 },
//     },
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-20 min-h-[400px]">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="flex flex-col lg:flex-row gap-6 lg:gap-8"
//         >
//           {/* Left Column - Featured News */}
//           <motion.div
//             variants={itemVariants}
//             className="w-full lg:w-7/12 xl:w-8/12"
//           >
//             {/* Main Featured Article */}
//             <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
//               <div
//                 className="relative overflow-hidden group cursor-pointer"
//                 onClick={() => handleReadMore(featuredNews)}
//               >
//                 <img
//                   src={featuredNews?.image}
//                   alt={featuredNews?.title}
//                   className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
//                   <div className="flex flex-wrap gap-2 sm:gap-3 text-white text-xs sm:text-sm">
//                     <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
//                       <AccessTimeIcon className="text-xs sm:text-sm" />
//                       {featuredNews?.readTime}
//                     </span>
//                     <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
//                       <VisibilityIcon className="text-xs sm:text-sm" />
//                       {featuredNews?.views} Views
//                     </span>
//                     <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
//                       <CommentIcon className="text-xs sm:text-sm" />
//                       {featuredNews?.comments} Comments
//                     </span>
//                     <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
//                       <ArrowUpwardIcon className="text-xs sm:text-sm" />
//                       {featuredNews?.shares} Shares
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
//                 <h2
//                   className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
//                   onClick={() => handleReadMore(featuredNews)}
//                 >
//                   {featuredNews?.title}
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">
//                   {featuredNews?.content.substring(0, 200)}...
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <button
//                     onClick={() => handleReadMore(featuredNews)}
//                     className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm sm:text-base"
//                   >
//                     Read More
//                   </button>
//                   <button
//                     onClick={(e) => openCommentModal(featuredNews, e)}
//                     className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
//                   >
//                     <CommentIcon className="text-sm" />
//                     Add Comment
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Top Story Section */}
//             {topStories.map((story, idx) => (
//               <motion.div
//                 key={story.id}
//                 variants={itemVariants}
//                 className="mt-6 sm:mt-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6"
//               >
//                 <div className="flex items-center gap-2 mb-3 sm:mb-4">
//                   <TrendingUpIcon className="text-red-500 text-lg sm:text-xl" />
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
//                     Top Story
//                   </h3>
//                 </div>
//                 <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
//                   <div
//                     className="w-full md:w-1/2 overflow-hidden rounded-lg group cursor-pointer"
//                     onClick={() => handleReadMore(story)}
//                   >
//                     <img
//                       src={story.image}
//                       alt={story.title}
//                       className="w-full h-48 sm:h-56 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="flex-1 flex flex-col">
//                     <h3
//                       className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-3"
//                       onClick={() => handleReadMore(story)}
//                     >
//                       {story.title}
//                     </h3>
//                     <div className="flex flex-col gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
//                       <span className="flex items-center gap-2">
//                         <AccessTimeIcon className="text-sm" />
//                         {story.readTime}
//                       </span>
//                       <span className="flex items-center gap-2">
//                         <VisibilityIcon className="text-sm" />
//                         {story.views} Views
//                       </span>
//                     </div>
//                     <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
//                       <button
//                         onClick={() => handleReadMore(story)}
//                         className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm"
//                       >
//                         Read Full Story
//                       </button>
//                       <button
//                         onClick={(e) => openCommentModal(story, e)}
//                         className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm flex items-center gap-1"
//                       >
//                         <CommentIcon className="text-sm" />
//                         Comment
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right Column - Side News */}
//           <motion.div
//             variants={itemVariants}
//             className="w-full lg:w-5/12 xl:w-4/12"
//           >
//             <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6">
//               <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
//                 <NewspaperIcon className="text-blue-500" />
//                 Latest News
//               </h3>

//               <div className="space-y-4 sm:space-y-6">
//                 {sideNews.map((news, idx) => (
//                   <motion.div
//                     key={news.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: idx * 0.05 }}
//                     className="group cursor-pointer"
//                     onClick={() => handleReadMore(news)}
//                   >
//                     <div className="flex gap-3 sm:gap-4">
//                       <div
//                         className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-lg cursor-pointer"
//                         onClick={() => handleReadMore(news)}
//                       >
//                         <img
//                           src={news.image}
//                           alt={news.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base line-clamp-2">
//                           {news.title}
//                         </h4>
//                         <div className="flex flex-col gap-1 text-xs text-gray-500 dark:text-gray-400">
//                           <span className="flex items-center gap-1">
//                             <AccessTimeIcon className="text-xs" />
//                             {news.readTime}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <VisibilityIcon className="text-xs" />
//                             {news.views} Views
//                           </span>
//                         </div>
//                         <div className="flex gap-2 mt-2">
//                           <button
//                             onClick={(e) => handleLike(news.id, e)}
//                             className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-500 transition-colors"
//                           >
//                             <ThumbUpIcon className="text-xs" />
//                             {likedArticles[news.id] ? "Liked" : "Like"}
//                           </button>
//                           <button
//                             onClick={(e) => openCommentModal(news, e)}
//                             className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-500 transition-colors"
//                           >
//                             <CommentIcon className="text-xs" />
//                             Comment
//                           </button>
//                           <button
//                             onClick={(e) => handleShare(news, e)}
//                             className="flex items-center gap-1 text-xs text-gray-500 hover:text-yellow-500 transition-colors"
//                           >
//                             <ShareIcon className="text-xs" />
//                             Share
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     {idx < sideNews.length - 1 && (
//                       <div className="border-b border-gray-200 dark:border-gray-700 my-3 sm:my-4"></div>
//                     )}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Read News Modal with Comments Section */}
//       <AnimatePresence>
//         {selectedNews && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md"
//             onClick={closeModal}
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Header */}
//               <div className="sticky top-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
//                 <div className="flex justify-between items-center p-3 sm:p-4">
//                   <div className="flex items-center gap-2">
//                     <NewspaperIcon className="text-blue-500 text-lg sm:text-xl" />
//                     <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
//                       Full Story
//                     </span>
//                   </div>
//                   <button
//                     onClick={closeModal}
//                     className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
//                   >
//                     <CloseIcon className="text-lg sm:text-xl" />
//                   </button>
//                 </div>
//               </div>

//               {/* Modal Content */}
//               <div className="overflow-y-auto max-h-[calc(95vh-60px)] sm:max-h-[calc(90vh-70px)]">
//                 {/* Image Gallery Section */}
//                 <div className="relative group">
//                   <img
//                     src={
//                       selectedNews.images
//                         ? selectedNews.images[currentImageIndex]
//                         : selectedNews.image
//                     }
//                     alt={selectedNews.title}
//                     className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover cursor-pointer"
//                     onClick={() => {
//                       if (
//                         selectedNews.images &&
//                         selectedNews.images.length > 1
//                       ) {
//                         nextImage({ stopPropagation: () => {} });
//                       }
//                     }}
//                   />

//                   {selectedNews.images && selectedNews.images.length > 1 && (
//                     <>
//                       <button
//                         onClick={prevImage}
//                         className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
//                       >
//                         <KeyboardArrowLeftIcon className="text-lg sm:text-2xl" />
//                       </button>
//                       <button
//                         onClick={nextImage}
//                         className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
//                       >
//                         <KeyboardArrowRightIcon className="text-lg sm:text-2xl" />
//                       </button>

//                       <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
//                         {selectedNews.images.map((_, idx) => (
//                           <button
//                             key={idx}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               setCurrentImageIndex(idx);
//                             }}
//                             className={`h-1.5 sm:h-2 rounded-full transition-all ${
//                               currentImageIndex === idx
//                                 ? "w-4 sm:w-6 bg-white"
//                                 : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/75"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 <div className="p-4 sm:p-6 md:p-8">
//                   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
//                     {selectedNews.title}
//                   </h2>

//                   <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
//                     <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                       <PersonIcon className="text-sm" />
//                       {selectedNews.author || "Staff Writer"}
//                     </span>
//                     <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                       <CalendarTodayIcon className="text-sm" />
//                       {selectedNews.date || "December 15, 2024"}
//                     </span>
//                     <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                       <AccessTimeIcon className="text-sm" />
//                       {selectedNews.readTime}
//                     </span>
//                     <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                       <VisibilityIcon className="text-sm" />
//                       {selectedNews.views} Views
//                     </span>
//                   </div>

//                   <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none mb-8">
//                     <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1 first-letter:text-blue-600">
//                       {selectedNews.content}
//                     </p>
//                   </div>

//                   {/* Comments Section */}
//                   <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
//                     <div className="flex items-center justify-between mb-6">
//                       <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
//                         <CommentIcon className="text-green-500" />
//                         Comments ({comments[selectedNews.id]?.length || 0})
//                       </h3>
//                       <button
//                         onClick={(e) => openCommentModal(selectedNews, e)}
//                         className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
//                       >
//                         <SendIcon className="text-sm" />
//                         Add Comment
//                       </button>
//                     </div>

//                     <div className="space-y-4">
//                       {comments[selectedNews.id]?.map((comment) => (
//                         <motion.div
//                           key={comment.id}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
//                         >
//                           <div className="flex items-start justify-between mb-2">
//                             <div className="flex items-center gap-2">
//                               <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
//                                 {comment.userName[0].toUpperCase()}
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
//                                   {comment.userName}
//                                 </p>
//                                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                                   {new Date(comment.date).toLocaleDateString()}{" "}
//                                   at{" "}
//                                   {new Date(comment.date).toLocaleTimeString()}
//                                 </p>
//                               </div>
//                             </div>
//                             <button
//                               onClick={(e) =>
//                                 handleDeleteComment(
//                                   selectedNews.id,
//                                   comment.id,
//                                   e,
//                                 )
//                               }
//                               className="text-red-500 hover:text-red-600 transition-colors"
//                             >
//                               <DeleteIcon className="text-sm" />
//                             </button>
//                           </div>
//                           <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base ml-10">
//                             {comment.text}
//                           </p>
//                           <div className="flex items-center gap-4 mt-2 ml-10">
//                             <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-500 transition-colors">
//                               <ThumbUpIcon className="text-xs" />
//                               {comment.likes} Likes
//                             </button>
//                             <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-500 transition-colors">
//                               <ReplyIcon className="text-xs" />
//                               Reply
//                             </button>
//                           </div>

//                           {/* Replies */}
//                           {comment.replies && comment.replies.length > 0 && (
//                             <div className="mt-3 ml-8 space-y-3">
//                               {comment.replies.map((reply) => (
//                                 <div
//                                   key={reply.id}
//                                   className="bg-white dark:bg-gray-700 rounded-lg p-3"
//                                 >
//                                   <div className="flex items-center gap-2 mb-1">
//                                     <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
//                                       {reply.userName[0].toUpperCase()}
//                                     </div>
//                                     <div>
//                                       <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
//                                         {reply.userName}
//                                       </p>
//                                       <p className="text-xs text-gray-500 dark:text-gray-400">
//                                         {new Date(
//                                           reply.date,
//                                         ).toLocaleDateString()}
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm ml-8">
//                                     {reply.text}
//                                   </p>
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Add Comment Modal */}
//       <AnimatePresence>
//         {commentModalOpen && currentCommentArticle && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
//             onClick={closeCommentModal}
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="bg-gradient-to-t from-blue-500 to-blue-600 p-4">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-white text-lg font-bold flex items-center gap-2">
//                     <CommentIcon />
//                     Add Comment
//                   </h3>
//                   <button
//                     onClick={closeCommentModal}
//                     className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
//                   >
//                     <CloseIcon />
//                   </button>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="mb-4">
//                   <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-semibold">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     value={userName}
//                     onChange={(e) => setUserName(e.target.value)}
//                     placeholder="Enter your name"
//                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-semibold">
//                     Your Comment
//                   </label>
//                   <textarea
//                     value={newComment}
//                     onChange={(e) => setNewComment(e.target.value)}
//                     placeholder="Write your comment here..."
//                     rows="4"
//                     className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white resize-none"
//                   />
//                 </div>

//                 <div className="flex gap-3">
//                   <button
//                     onClick={handleAddComment}
//                     className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
//                   >
//                     <SendIcon className="text-sm" />
//                     Post Comment
//                   </button>
//                   <button
//                     onClick={closeCommentModal}
//                     className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };












/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

// Material Icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplyIcon from "@mui/icons-material/Reply";

export const FeaturedNews = () => {
  const [featuredNews, setFeaturedNews] = useState(null);
  const [topStories, setTopStories] = useState([]);
  const [sideNews, setSideNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likedArticles, setLikedArticles] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [currentCommentArticle, setCurrentCommentArticle] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [comments, setComments] = useState({});

  // Initialize comments for each article
  useEffect(() => {
    const initialComments = {};
    const allArticles = [];
    const data = getSampleData();
    if (data.featured) allArticles.push(data.featured);
    if (data.topStory) allArticles.push(data.topStory);
    if (data.sideNews) allArticles.push(...data.sideNews);

    allArticles.forEach((article) => {
      initialComments[article.id] = [
        {
          id: 1,
          userName: "John Doe",
          text: "Great article! Very informative and well-written.",
          date: "2024-12-15T10:30:00",
          likes: 5,
          replies: [
            {
              id: 11,
              userName: "Jane Smith",
              text: "I agree! Thanks for sharing this.",
              date: "2024-12-15T11:00:00",
              likes: 2,
            },
          ],
        },
        {
          id: 2,
          userName: "Sarah Johnson",
          text: "This is exactly what I was looking for. Thanks for the insights!",
          date: "2024-12-15T09:15:00",
          likes: 3,
          replies: [],
        },
      ];
    });
    setComments(initialComments);
  }, []);

  // Sample data with high-quality images
  const getSampleData = () => {
    return {
      featured: {
        id: 1,
        title: "Lorem Ipsum is simply dummy text of the printing",
        image:
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&h=600&fit=crop",
          "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&h=600&fit=crop",
        ],
        readTime: "06 minute read",
        views: "3.5k",
        comments: "05",
        shares: "1.5k",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: "John Smith",
        date: "December 15, 2024",
        category: "Breaking News",
      },
      topStory: {
        id: 2,
        title:
          "Stoneman Clandestine Ukrainian claims successes against Russian forces in major offensive",
        image:
          "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&h=500&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=800&h=500&fit=crop",
        ],
        readTime: "06 minute read",
        views: "3.5k",
        content:
          "In a significant development, Ukrainian forces have reported major successes in their ongoing counteroffensive against Russian positions. Military analysts suggest this could mark a turning point in the conflict. The operation, which began early yesterday morning, has reportedly resulted in the liberation of several key territories. International observers are closely monitoring the situation as it unfolds.",
        author: "Sarah Johnson",
        date: "December 15, 2024",
      },
      sideNews: [
        {
          id: 3,
          title: "Get the best speak market, news for investors and traders",
          image:
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          ],
          readTime: "06 minute read",
          views: "3.5k",
          content:
            "Market analysts predict a bullish trend as economic indicators show positive growth across multiple sectors. The stock market has seen unprecedented gains this quarter, with tech stocks leading the charge. Experts advise investors to diversify their portfolios and consider emerging markets for long-term growth.",
          category: "Business",
        },
        {
          id: 4,
          title:
            "Revolutionary AI breakthrough promises to transform healthcare industry worldwide",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop",
          ],
          readTime: "08 minute read",
          views: "4.2k",
          content:
            "Scientists have developed a new AI system that can diagnose diseases with unprecedented accuracy. The system, trained on millions of medical images, can detect early signs of cancer, heart disease, and neurological conditions with 95% accuracy. This breakthrough could revolutionize healthcare delivery in developing countries.",
          category: "Technology",
        },
        {
          id: 5,
          title:
            "Climate change summit yields historic agreement for future generations",
          image:
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
          ],
          readTime: "07 minute read",
          views: "2.8k",
          content:
            "World leaders have reached a landmark agreement to reduce carbon emissions by 50% by 2030. The historic pact, signed by 150 countries, includes provisions for renewable energy investment and conservation efforts. Environmental groups have praised the agreement but warn that implementation will be key.",
          category: "Environment",
        },
        {
          id: 6,
          title: "Get the best speak market, news for investors and traders",
          image:
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          ],
          readTime: "06 minute read",
          views: "3.5k",
          content:
            "Market analysts predict a bullish trend as economic indicators show positive growth across multiple sectors. The stock market has seen unprecedented gains this quarter, with tech stocks leading the charge. Experts advise investors to diversify their portfolios and consider emerging markets for long-term growth.",
          category: "Business",
        },
        {
          id: 7,
          title: "Get the best speak market, news for investors and traders",
          image:
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop",
          images: [
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          ],
          readTime: "06 minute read",
          views: "3.5k",
          content:
            "Market analysts predict a bullish trend as economic indicators show positive growth across multiple sectors. The stock market has seen unprecedented gains this quarter, with tech stocks leading the charge. Experts advise investors to diversify their portfolios and consider emerging markets for long-term growth.",
          category: "Business",
        },
      ],
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          const data = getSampleData();
          setFeaturedNews(data.featured);
          setTopStories([data.topStory]);
          setSideNews(data.sideNews);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching news:", error);
        toast.error("Failed to load news. Please try again later.");
        const data = getSampleData();
        setFeaturedNews(data.featured);
        setTopStories([data.topStory]);
        setSideNews(data.sideNews);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikedArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
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
      navigator
        .share({
          title: article.title,
          text: article.content.substring(0, 100),
          url: window.location.href,
        })
        .catch(() => {
          toast.info("Share cancelled");
        });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.info("Link copied to clipboard!");
    }
  };

  const handleReadMore = (article) => {
    setSelectedNews(article);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = "auto";
  };

  const openCommentModal = (article, e) => {
    e.stopPropagation();
    setCurrentCommentArticle(article);
    setCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setCommentModalOpen(false);
    setCurrentCommentArticle(null);
    setNewComment("");
    setUserName("");
  };

  const handleAddComment = () => {
    if (!userName.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!newComment.trim()) {
      toast.error("Please enter your comment");
      return;
    }

    const newCommentObj = {
      id: Date.now(),
      userName: userName.trim(),
      text: newComment.trim(),
      date: new Date().toISOString(),
      likes: 0,
      replies: [],
    };

    setComments((prev) => ({
      ...prev,
      [currentCommentArticle.id]: [
        ...(prev[currentCommentArticle.id] || []),
        newCommentObj,
      ],
    }));

    toast.success("Comment added successfully!");
    setNewComment("");
    setUserName("");
    closeCommentModal();
  };

  const handleDeleteComment = (articleId, commentId, e) => {
    e.stopPropagation();
    setComments((prev) => ({
      ...prev,
      [articleId]: prev[articleId].filter(
        (comment) => comment.id !== commentId,
      ),
    }));
    toast.info("Comment deleted");
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedNews?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedNews.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedNews?.images) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedNews.images.length) % selectedNews.images.length,
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 30,
      transition: { duration: 0.2 },
    },
  };

  if (loading) {
    return (
      <div className="grid place-items-center py-20 min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] xl:grid-cols-[8fr_4fr] gap-6 lg:gap-8"
        >
          {/* Left Column - Featured News */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            {/* Main Featured Article */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => handleReadMore(featuredNews)}
              >
                <img
                  src={featuredNews?.image}
                  alt={featuredNews?.title}
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="grid grid-flow-col auto-cols-max flex-wrap gap-2 sm:gap-3 text-white text-xs sm:text-sm">
                    <span className="grid grid-flow-col auto-cols-max items-center gap-1 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                      <AccessTimeIcon className="text-xs sm:text-sm" />
                      {featuredNews?.readTime}
                    </span>
                    <span className="grid grid-flow-col auto-cols-max items-center gap-1 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                      <VisibilityIcon className="text-xs sm:text-sm" />
                      {featuredNews?.views} Views
                    </span>
                    <span className="grid grid-flow-col auto-cols-max items-center gap-1 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                      <CommentIcon className="text-xs sm:text-sm" />
                      {featuredNews?.comments} Comments
                    </span>
                    <span className="grid grid-flow-col auto-cols-max items-center gap-1 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                      <ArrowUpwardIcon className="text-xs sm:text-sm" />
                      {featuredNews?.shares} Shares
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
                  onClick={() => handleReadMore(featuredNews)}
                >
                  {featuredNews?.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">
                  {featuredNews?.content.substring(0, 200)}...
                </p>
                <div className="grid grid-flow-col auto-cols-max flex-wrap gap-2">
                  <button
                    onClick={() => handleReadMore(featuredNews)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm sm:text-base"
                  >
                    Read More
                  </button>
                  <button
                    onClick={(e) => openCommentModal(featuredNews, e)}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm sm:text-base grid grid-flow-col auto-cols-max items-center gap-2"
                  >
                    <CommentIcon className="text-sm" />
                    Add Comment
                  </button>
                </div>
              </div>
            </div>

            {/* Top Story Section */}
            {topStories.map((story, idx) => (
              <motion.div
                key={story.id}
                variants={itemVariants}
                className="mt-6 sm:mt-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6"
              >
                <div className="grid grid-flow-col auto-cols-max items-center gap-2 mb-3 sm:mb-4">
                  <TrendingUpIcon className="text-red-500 text-lg sm:text-xl" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Top Story
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div
                    className="w-full overflow-hidden rounded-lg group cursor-pointer"
                    onClick={() => handleReadMore(story)}
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-48 sm:h-56 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <h3
                      className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-3"
                      onClick={() => handleReadMore(story)}
                    >
                      {story.title}
                    </h3>
                    <div className="grid grid-cols-1 gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      <span className="grid grid-flow-col auto-cols-max items-center gap-2">
                        <AccessTimeIcon className="text-sm" />
                        {story.readTime}
                      </span>
                      <span className="grid grid-flow-col auto-cols-max items-center gap-2">
                        <VisibilityIcon className="text-sm" />
                        {story.views} Views
                      </span>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max flex-wrap gap-2 mt-3 sm:mt-4">
                      <button
                        onClick={() => handleReadMore(story)}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm"
                      >
                        Read Full Story
                      </button>
                      <button
                        onClick={(e) => openCommentModal(story, e)}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm grid grid-flow-col auto-cols-max items-center gap-1"
                      >
                        <CommentIcon className="text-sm" />
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Side News */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 grid grid-flow-col auto-cols-max items-center gap-2">
                <NewspaperIcon className="text-blue-500" />
                Latest News
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {sideNews.map((news, idx) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => handleReadMore(news)}
                  >
                    <div className="grid grid-cols-[auto_1fr] gap-3 sm:gap-4">
                      <div
                        className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => handleReadMore(news)}
                      >
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base line-clamp-2">
                          {news.title}
                        </h4>
                        <div className="grid grid-cols-1 gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <span className="grid grid-flow-col auto-cols-max items-center gap-1">
                            <AccessTimeIcon className="text-xs" />
                            {news.readTime}
                          </span>
                          <span className="grid grid-flow-col auto-cols-max items-center gap-1">
                            <VisibilityIcon className="text-xs" />
                            {news.views} Views
                          </span>
                        </div>
                        <div className="grid grid-flow-col auto-cols-max gap-2 mt-2">
                          <button
                            onClick={(e) => handleLike(news.id, e)}
                            className="grid grid-flow-col auto-cols-max items-center gap-1 text-xs text-gray-500 hover:text-blue-500 transition-colors"
                          >
                            <ThumbUpIcon className="text-xs" />
                            {likedArticles[news.id] ? "Liked" : "Like"}
                          </button>
                          <button
                            onClick={(e) => openCommentModal(news, e)}
                            className="grid grid-flow-col auto-cols-max items-center gap-1 text-xs text-gray-500 hover:text-green-500 transition-colors"
                          >
                            <CommentIcon className="text-xs" />
                            Comment
                          </button>
                          <button
                            onClick={(e) => handleShare(news, e)}
                            className="grid grid-flow-col auto-cols-max items-center gap-1 text-xs text-gray-500 hover:text-yellow-500 transition-colors"
                          >
                            <ShareIcon className="text-xs" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                    {idx < sideNews.length - 1 && (
                      <div className="border-b border-gray-200 dark:border-gray-700 my-3 sm:my-4"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Read News Modal with Comments Section */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center p-2 sm:p-4 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-[1fr_auto] items-center justify-between p-3 sm:p-4">
                  <div className="grid grid-flow-col auto-cols-max items-center gap-2">
                    <NewspaperIcon className="text-blue-500 text-lg sm:text-xl" />
                    <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      Full Story
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <CloseIcon className="text-lg sm:text-xl" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(95vh-60px)] sm:max-h-[calc(90vh-70px)]">
                {/* Image Gallery Section */}
                <div className="relative group">
                  <img
                    src={
                      selectedNews.images
                        ? selectedNews.images[currentImageIndex]
                        : selectedNews.image
                    }
                    alt={selectedNews.title}
                    className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover cursor-pointer"
                    onClick={() => {
                      if (
                        selectedNews.images &&
                        selectedNews.images.length > 1
                      ) {
                        nextImage({ stopPropagation: () => {} });
                      }
                    }}
                  />

                  {selectedNews.images && selectedNews.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center"
                      >
                        <KeyboardArrowLeftIcon className="text-lg sm:text-2xl" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center"
                      >
                        <KeyboardArrowRightIcon className="text-lg sm:text-2xl" />
                      </button>

                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 grid grid-flow-col auto-cols-max gap-1 sm:gap-2">
                        {selectedNews.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`h-1.5 sm:h-2 rounded-full transition-all ${
                              currentImageIndex === idx
                                ? "w-4 sm:w-6 bg-white"
                                : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/75"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {selectedNews.title}
                  </h2>

                  <div className="grid grid-flow-col auto-cols-max flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="grid grid-flow-col auto-cols-max items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <PersonIcon className="text-sm" />
                      {selectedNews.author || "Staff Writer"}
                    </span>
                    <span className="grid grid-flow-col auto-cols-max items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <CalendarTodayIcon className="text-sm" />
                      {selectedNews.date || "December 15, 2024"}
                    </span>
                    <span className="grid grid-flow-col auto-cols-max items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <AccessTimeIcon className="text-sm" />
                      {selectedNews.readTime}
                    </span>
                    <span className="grid grid-flow-col auto-cols-max items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <VisibilityIcon className="text-sm" />
                      {selectedNews.views} Views
                    </span>
                  </div>

                  <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none mb-8">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-2 sm:first-letter:mr-3 first-letter:mt-1 first-letter:text-blue-600">
                      {selectedNews.content}
                    </p>
                  </div>

                  {/* Comments Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-[1fr_auto] items-center justify-between mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white grid grid-flow-col auto-cols-max items-center gap-2">
                        <CommentIcon className="text-green-500" />
                        Comments ({comments[selectedNews.id]?.length || 0})
                      </h3>
                      <button
                        onClick={(e) => openCommentModal(selectedNews, e)}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm sm:text-base grid grid-flow-col auto-cols-max items-center gap-2"
                      >
                        <SendIcon className="text-sm" />
                        Add Comment
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {comments[selectedNews.id]?.map((comment) => (
                        <motion.div
                          key={comment.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                        >
                          <div className="grid grid-cols-[1fr_auto] items-start justify-between mb-2">
                            <div className="grid grid-flow-col auto-cols-max items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 grid place-items-center text-white font-bold">
                                {comment.userName[0].toUpperCase()}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                  {comment.userName}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {new Date(comment.date).toLocaleDateString()}{" "}
                                  at{" "}
                                  {new Date(comment.date).toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={(e) =>
                                handleDeleteComment(
                                  selectedNews.id,
                                  comment.id,
                                  e,
                                )
                              }
                              className="text-red-500 hover:text-red-600 transition-colors"
                            >
                              <DeleteIcon className="text-sm" />
                            </button>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base ml-10">
                            {comment.text}
                          </p>
                          <div className="grid grid-flow-col auto-cols-max items-center gap-4 mt-2 ml-10">
                            <button className="grid grid-flow-col auto-cols-max items-center gap-1 text-xs text-gray-500 hover:text-blue-500 transition-colors">
                              <ThumbUpIcon className="text-xs" />
                              {comment.likes} Likes
                            </button>
                            <button className="grid grid-flow-col auto-cols-max items-center gap-1 text-xs text-gray-500 hover:text-green-500 transition-colors">
                              <ReplyIcon className="text-xs" />
                              Reply
                            </button>
                          </div>

                          {/* Replies */}
                          {comment.replies && comment.replies.length > 0 && (
                            <div className="mt-3 ml-8 grid grid-cols-1 gap-3">
                              {comment.replies.map((reply) => (
                                <div
                                  key={reply.id}
                                  className="bg-white dark:bg-gray-700 rounded-lg p-3"
                                >
                                  <div className="grid grid-flow-col auto-cols-max items-center gap-2 mb-1">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 grid place-items-center text-white text-xs font-bold">
                                      {reply.userName[0].toUpperCase()}
                                    </div>
                                    <div>
                                      <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                                        {reply.userName}
                                      </p>
                                      <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {new Date(
                                          reply.date,
                                        ).toLocaleDateString()}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm ml-8">
                                    {reply.text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Comment Modal */}
      <AnimatePresence>
        {commentModalOpen && currentCommentArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closeCommentModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-t from-blue-500 to-blue-600 p-4">
                <div className="grid grid-cols-[1fr_auto] items-center justify-between">
                  <h3 className="text-white text-lg font-bold grid grid-flow-col auto-cols-max items-center gap-2">
                    <CommentIcon />
                    Add Comment
                  </h3>
                  <button
                    onClick={closeCommentModal}
                    className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-semibold">
                    Your Comment
                  </label>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment here..."
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleAddComment}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 grid grid-flow-col auto-cols-max items-center justify-center gap-2"
                  >
                    <SendIcon className="text-sm" />
                    Post Comment
                  </button>
                  <button
                    onClick={closeCommentModal}
                    className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};