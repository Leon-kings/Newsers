// /* eslint-disable react-hooks/immutability */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   CalendarToday,
//   Person,
//   Visibility,
//   Close,
//   ArrowForward,
// } from "@mui/icons-material";

// // Material-UI icons
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import PersonIcon from "@mui/icons-material/Person";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import CloseIcon from "@mui/icons-material/Close";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import ShareIcon from "@mui/icons-material/Share";

// export const LatestNewsCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [itemsPerSlide, setItemsPerSlide] = useState(4);
//   const [isAllNewsModalOpen, setIsAllNewsModalOpen] = useState(false);
//   const [isNewsDetailModalOpen, setIsNewsDetailModalOpen] = useState(false);
//   const [selectedNews, setSelectedNews] = useState(null);
//   const autoPlayRef = useRef(null);
//   const containerRef = useRef(null);

//   // Sample news data - replace with your actual data from API
//   const newsItems = [
//     {
//       id: 1,
//       title: "Lorem Ipsum is simply dummy text of the printing industry",
//       author: "Willum Skeem",
//       date: "Dec 9, 2024",
//       image: "https://picsum.photos/id/1/800/500",
//       thumbnail: "https://picsum.photos/id/1/400/300",
//       category: "Technology",
//       description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//       content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
//       views: 1245,
//       comments: 89
//     },
//     {
//       id: 2,
//       title: "The standard chunk of Lorem Ipsum used since the 1500s",
//       author: "Sarah Johnson",
//       date: "Dec 8, 2024",
//       image: "https://picsum.photos/id/2/800/500",
//       thumbnail: "https://picsum.photos/id/2/400/300",
//       category: "Business",
//       description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
//       content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
//       views: 987,
//       comments: 45
//     },
//     {
//       id: 3,
//       title: "Contrary to popular belief, Lorem Ipsum is not simply random text",
//       author: "Michael Chen",
//       date: "Dec 8, 2024",
//       image: "https://picsum.photos/id/3/800/500",
//       thumbnail: "https://picsum.photos/id/3/400/300",
//       category: "Politics",
//       description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//       content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
//       views: 2341,
//       comments: 156
//     },
//     {
//       id: 4,
//       title: "There are many variations of passages of Lorem Ipsum available",
//       author: "Emily Rodriguez",
//       date: "Dec 7, 2024",
//       image: "https://picsum.photos/id/4/800/500",
//       thumbnail: "https://picsum.photos/id/4/400/300",
//       category: "Sports",
//       description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
//       content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
//       views: 567,
//       comments: 34
//     },
//     {
//       id: 5,
//       title: "It is a long established fact that a reader will be distracted",
//       author: "David Kim",
//       date: "Dec 7, 2024",
//       image: "https://picsum.photos/id/5/800/500",
//       thumbnail: "https://picsum.photos/id/5/400/300",
//       category: "Entertainment",
//       description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
//       content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
//       views: 1843,
//       comments: 112
//     },
//     {
//       id: 6,
//       title: "Lorem Ipsum has been the industry's standard dummy text",
//       author: "Lisa Wang",
//       date: "Dec 6, 2024",
//       image: "https://picsum.photos/id/6/800/500",
//       thumbnail: "https://picsum.photos/id/6/400/300",
//       category: "Technology",
//       description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
//       content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//       views: 765,
//       comments: 56
//     },
//     {
//       id: 7,
//       title: "Various versions have evolved over the years, sometimes by accident",
//       author: "James Wilson",
//       date: "Dec 6, 2024",
//       image: "https://picsum.photos/id/7/800/500",
//       thumbnail: "https://picsum.photos/id/7/400/300",
//       category: "Health",
//       description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
//       content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//       views: 432,
//       comments: 23
//     },
//     {
//       id: 8,
//       title: "The generated Lorem Ipsum is therefore always free from repetition",
//       author: "Amanda Lee",
//       date: "Dec 5, 2024",
//       image: "https://picsum.photos/id/8/800/500",
//       thumbnail: "https://picsum.photos/id/8/400/300",
//       category: "Science",
//       description: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
//       content: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain. But because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
//       views: 678,
//       comments: 45
//     },
//     {
//       id: 9,
//       title: "Many desktop publishing packages and web page editors now use",
//       author: "Robert Taylor",
//       date: "Dec 5, 2024",
//       image: "https://picsum.photos/id/9/800/500",
//       thumbnail: "https://picsum.photos/id/9/400/300",
//       category: "Business",
//       description: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
//       content: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
//       views: 892,
//       comments: 67
//     },
//     {
//       id: 10,
//       title: "All the Lorem Ipsum generators on the Internet tend to repeat",
//       author: "Maria Garcia",
//       date: "Dec 4, 2024",
//       image: "https://picsum.photos/id/10/800/500",
//       thumbnail: "https://picsum.photos/id/10/400/300",
//       category: "Technology",
//       description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
//       content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
//       views: 1543,
//       comments: 98
//     }
//   ];

//   const totalSlides = Math.ceil(newsItems.length / itemsPerSlide);

//   // Update itemsPerSlide based on screen size
//   useEffect(() => {
//     const updateItemsPerSlide = () => {
//       if (window.innerWidth >= 1200) {
//         setItemsPerSlide(4);
//       } else if (window.innerWidth >= 768) {
//         setItemsPerSlide(2);
//       } else {
//         setItemsPerSlide(1);
//       }
//     };

//     updateItemsPerSlide();
//     window.addEventListener("resize", updateItemsPerSlide);
//     return () => window.removeEventListener("resize", updateItemsPerSlide);
//   }, []);

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlaying) {
//       autoPlayRef.current = setInterval(() => {
//         handleNext();
//       }, 5000);
//     }
//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, [currentIndex, isAutoPlaying, totalSlides]);

//   const handlePrev = () => {
//     setIsAutoPlaying(false);
//     setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index) => {
//     setIsAutoPlaying(false);
//     setCurrentIndex(index);
//     setTimeout(() => setIsAutoPlaying(true), 10000);
//   };

//   const openAllNewsModal = () => {
//     setIsAllNewsModalOpen(true);
//   };

//   const openNewsDetailModal = (news) => {
//     setSelectedNews(news);
//     setIsNewsDetailModalOpen(true);
//   };

//   const closeAllNewsModal = () => {
//     setIsAllNewsModalOpen(false);
//   };

//   const closeNewsDetailModal = () => {
//     setIsNewsDetailModalOpen(false);
//     setSelectedNews(null);
//   };

//   // Get current visible items
//   const getVisibleItems = () => {
//     const start = currentIndex * itemsPerSlide;
//     const end = start + itemsPerSlide;
//     return newsItems.slice(start, end);
//   };

//   return (
//     <>
//       <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header Section */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
//             <div>
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 relative inline-block">
//                 Latest News
//                 <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
//               </h2>
//               <p className="text-gray-600 mt-3 text-sm md:text-base">
//                 Stay updated with the most recent articles and stories
//               </p>
//             </div>

//             {/* Navigation Controls */}
//             <div className="flex items-center space-x-3">
//               <button
//                 onClick={handlePrev}
//                 className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 hover:border-blue-500 transition-all duration-300 group"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeftIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 hover:border-blue-500 transition-all duration-300 group"
//                 aria-label="Next slide"
//               >
//                 <ChevronRightIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
//               </button>
//             </div>
//           </div>

//           {/* Carousel Container */}
//           <div className="relative overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8"
//                 ref={containerRef}
//               >
//                 {getVisibleItems().map((item, idx) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: idx * 0.1 }}
//                     className="group cursor-pointer"
//                     onClick={() => openNewsDetailModal(item)}
//                   >
//                     <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                       {/* Image Container */}
//                       <div className="relative overflow-hidden aspect-[4/3]">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                         />
//                         {/* Category Badge */}
//                         <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                           {item.category}
//                         </span>
//                         {/* Views Badge */}
//                         <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
//                           <VisibilityIcon style={{ fontSize: "12px" }} />
//                           {item.views}
//                         </span>
//                       </div>

//                       {/* Content */}
//                       <div className="p-4 md:p-5">
//                         <h3 className="text-gray-900 font-bold text-base md:text-lg lg:text-xl hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-3">
//                           {item.title}
//                         </h3>

//                         <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//                           <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
//                             <PersonIcon style={{ fontSize: "14px" }} />
//                             <span>{item.author}</span>
//                           </div>
//                           <div className="flex items-center gap-1 text-xs md:text-sm text-gray-400">
//                             <CalendarTodayIcon style={{ fontSize: "12px" }} />
//                             <span>{item.date}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Dots Indicator */}
//           {totalSlides > 1 && (
//             <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
//               {Array.from({ length: totalSlides }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`transition-all duration-300 rounded-full ${
//                     currentIndex === index
//                       ? "w-8 h-2 bg-gradient-to-r from-blue-500 to-indigo-500"
//                       : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}

//           {/* View All Button */}
//           <div className="text-center mt-8 md:mt-10">
//             <button
//               onClick={openAllNewsModal}
//               className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md"
//             >
//               View All News
//               <ArrowForwardIcon style={{ fontSize: "18px" }} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* All News Modal */}
//       <AnimatePresence>
//         {isAllNewsModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
//             onClick={closeAllNewsModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 50 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 50 }}
//               className="bg-black border border-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-center p-6 border-b border-gray-800">
//                 <h2 className="text-2xl font-bold text-white">All News Articles</h2>
//                 <button
//                   onClick={closeAllNewsModal}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <CloseIcon />
//                 </button>
//               </div>
//               <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {newsItems.map((item) => (
//                     <div
//                       key={item.id}
//                       className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
//                       onClick={() => {
//                         closeAllNewsModal();
//                         openNewsDetailModal(item);
//                       }}
//                     >
//                       <div className="relative overflow-hidden aspect-[4/3]">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                         />
//                         <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                           {item.category}
//                         </span>
//                       </div>
//                       <div className="p-4">
//                         <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
//                           {item.title}
//                         </h3>
//                         <div className="flex justify-between items-center text-gray-400 text-sm">
//                           <div className="flex items-center gap-1">
//                             <PersonIcon style={{ fontSize: "14px" }} />
//                             <span>{item.author}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <CalendarTodayIcon style={{ fontSize: "12px" }} />
//                             <span>{item.date}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* News Detail Modal */}
//       <AnimatePresence>
//         {isNewsDetailModalOpen && selectedNews && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
//             onClick={closeNewsDetailModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-black border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="sticky top-0 bg-black z-10 flex justify-between items-center p-6 border-b border-gray-800">
//                 <h2 className="text-2xl font-bold text-white">{selectedNews.title}</h2>
//                 <button
//                   onClick={closeNewsDetailModal}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <CloseIcon />
//                 </button>
//               </div>

//               <div className="p-6">
//                 {/* Featured Image */}
//                 <div className="relative rounded-xl overflow-hidden mb-6">
//                   <img
//                     src={selectedNews.image}
//                     alt={selectedNews.title}
//                     className="w-full h-auto object-cover"
//                   />
//                   <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
//                     {selectedNews.category}
//                   </span>
//                 </div>

//                 {/* Meta Information */}
//                 <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pb-4 border-b border-gray-800">
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-2 text-gray-400">
//                       <PersonIcon style={{ fontSize: "18px" }} />
//                       <span className="text-white font-medium">{selectedNews.author}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-400">
//                       <CalendarTodayIcon style={{ fontSize: "16px" }} />
//                       <span>{selectedNews.date}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-400">
//                       <VisibilityIcon style={{ fontSize: "16px" }} />
//                       <span>{selectedNews.views} views</span>
//                     </div>
//                   </div>
                  
//                   {/* Share Buttons */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-400 text-sm">Share:</span>
//                     <button className="p-1.5 rounded-full bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors">
//                       <FacebookIcon style={{ fontSize: "16px" }} />
//                     </button>
//                     <button className="p-1.5 rounded-full bg-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white transition-colors">
//                       <TwitterIcon style={{ fontSize: "16px" }} />
//                     </button>
//                     <button className="p-1.5 rounded-full bg-blue-700/20 text-blue-500 hover:bg-blue-700 hover:text-white transition-colors">
//                       <LinkedInIcon style={{ fontSize: "16px" }} />
//                     </button>
//                     <button className="p-1.5 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white transition-colors">
//                       <WhatsAppIcon style={{ fontSize: "16px" }} />
//                     </button>
//                     <button className="p-1.5 rounded-full bg-gray-600/20 text-gray-400 hover:bg-gray-600 hover:text-white transition-colors">
//                       <BookmarkBorderIcon style={{ fontSize: "16px" }} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Article Content */}
//                 <div className="prose prose-invert max-w-none">
//                   <p className="text-gray-300 text-lg leading-relaxed mb-4">
//                     {selectedNews.description}
//                   </p>
//                   <p className="text-gray-400 leading-relaxed mb-4">
//                     {selectedNews.content}
//                   </p>
//                   <p className="text-gray-400 leading-relaxed">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                   </p>
//                 </div>

//                 {/* Comments Section */}
//                 <div className="mt-8 pt-6 border-t border-gray-800">
//                   <h3 className="text-white text-xl font-bold mb-4">Comments ({selectedNews.comments})</h3>
//                   <div className="space-y-4">
//                     <div className="bg-gray-900 rounded-lg p-4">
//                       <div className="flex items-center gap-3 mb-2">
//                         <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold">
//                           JD
//                         </div>
//                         <div>
//                           <p className="text-white font-semibold">John Doe</p>
//                           <p className="text-gray-500 text-xs">2 hours ago</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-300 text-sm">Great article! Very informative and well written.</p>
//                     </div>
//                     <div className="bg-gray-900 rounded-lg p-4">
//                       <div className="flex items-center gap-3 mb-2">
//                         <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
//                           JS
//                         </div>
//                         <div>
//                           <p className="text-white font-semibold">Jane Smith</p>
//                           <p className="text-gray-500 text-xs">5 hours ago</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-300 text-sm">Thanks for sharing this. Looking forward to more content like this.</p>
//                     </div>
//                   </div>
                  
//                   {/* Add Comment */}
//                   <div className="mt-6">
//                     <textarea
//                       placeholder="Add a comment..."
//                       className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
//                       rows="3"
//                     ></textarea>
//                     <button className="mt-3 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
//                       Post Comment
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Custom CSS for line-clamp */}
//       <style jsx>{`
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </>
//   );
// };








/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CalendarToday,
  Person,
  Visibility,
  Close,
  ArrowForward,
} from "@mui/icons-material";

// Material-UI icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

export const LatestNewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isAllNewsModalOpen, setIsAllNewsModalOpen] = useState(false);
  const [isNewsDetailModalOpen, setIsNewsDetailModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  // Sample news data - replace with your actual data from API
  const newsItems = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the printing industry",
      author: "Willum Skeem",
      date: "Dec 9, 2024",
      image: "https://picsum.photos/id/1/800/500",
      thumbnail: "https://picsum.photos/id/1/400/300",
      category: "Technology",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      views: 1245,
      comments: 89
    },
    {
      id: 2,
      title: "The standard chunk of Lorem Ipsum used since the 1500s",
      author: "Sarah Johnson",
      date: "Dec 8, 2024",
      image: "https://picsum.photos/id/2/800/500",
      thumbnail: "https://picsum.photos/id/2/400/300",
      category: "Business",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      views: 987,
      comments: 45
    },
    {
      id: 3,
      title: "Contrary to popular belief, Lorem Ipsum is not simply random text",
      author: "Michael Chen",
      date: "Dec 8, 2024",
      image: "https://picsum.photos/id/3/800/500",
      thumbnail: "https://picsum.photos/id/3/400/300",
      category: "Politics",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      views: 2341,
      comments: 156
    },
    {
      id: 4,
      title: "There are many variations of passages of Lorem Ipsum available",
      author: "Emily Rodriguez",
      date: "Dec 7, 2024",
      image: "https://picsum.photos/id/4/800/500",
      thumbnail: "https://picsum.photos/id/4/400/300",
      category: "Sports",
      description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
      content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      views: 567,
      comments: 34
    },
    {
      id: 5,
      title: "It is a long established fact that a reader will be distracted",
      author: "David Kim",
      date: "Dec 7, 2024",
      image: "https://picsum.photos/id/5/800/500",
      thumbnail: "https://picsum.photos/id/5/400/300",
      category: "Entertainment",
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
      views: 1843,
      comments: 112
    },
    {
      id: 6,
      title: "Lorem Ipsum has been the industry's standard dummy text",
      author: "Lisa Wang",
      date: "Dec 6, 2024",
      image: "https://picsum.photos/id/6/800/500",
      thumbnail: "https://picsum.photos/id/6/400/300",
      category: "Technology",
      description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      content: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      views: 765,
      comments: 56
    },
    {
      id: 7,
      title: "Various versions have evolved over the years, sometimes by accident",
      author: "James Wilson",
      date: "Dec 6, 2024",
      image: "https://picsum.photos/id/7/800/500",
      thumbnail: "https://picsum.photos/id/7/400/300",
      category: "Health",
      description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.",
      content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
      views: 432,
      comments: 23
    },
    {
      id: 8,
      title: "The generated Lorem Ipsum is therefore always free from repetition",
      author: "Amanda Lee",
      date: "Dec 5, 2024",
      image: "https://picsum.photos/id/8/800/500",
      thumbnail: "https://picsum.photos/id/8/400/300",
      category: "Science",
      description: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
      content: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain. But because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
      views: 678,
      comments: 45
    },
    {
      id: 9,
      title: "Many desktop publishing packages and web page editors now use",
      author: "Robert Taylor",
      date: "Dec 5, 2024",
      image: "https://picsum.photos/id/9/800/500",
      thumbnail: "https://picsum.photos/id/9/400/300",
      category: "Business",
      description: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
      content: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      views: 892,
      comments: 67
    },
    {
      id: 10,
      title: "All the Lorem Ipsum generators on the Internet tend to repeat",
      author: "Maria Garcia",
      date: "Dec 4, 2024",
      image: "https://picsum.photos/id/10/800/500",
      thumbnail: "https://picsum.photos/id/10/400/300",
      category: "Technology",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
      views: 1543,
      comments: 98
    }
  ];

  const totalSlides = Math.ceil(newsItems.length / itemsPerSlide);

  // Update itemsPerSlide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerSlide(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, totalSlides]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const openAllNewsModal = () => {
    setIsAllNewsModalOpen(true);
  };

  const openNewsDetailModal = (news) => {
    setSelectedNews(news);
    setIsNewsDetailModalOpen(true);
  };

  const closeAllNewsModal = () => {
    setIsAllNewsModalOpen(false);
  };

  const closeNewsDetailModal = () => {
    setIsNewsDetailModalOpen(false);
    setSelectedNews(null);
  };

  // Get current visible items
  const getVisibleItems = () => {
    const start = currentIndex * itemsPerSlide;
    const end = start + itemsPerSlide;
    return newsItems.slice(start, end);
  };

  return (
    <>
      <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 relative inline-block">
                Latest News
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
              </h2>
              <p className="text-gray-600 mt-3 text-sm md:text-base">
                Stay updated with the most recent articles and stories
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="grid grid-flow-col auto-cols-max items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 hover:border-blue-500 transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 hover:border-blue-500 transition-all duration-300 group"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8"
                ref={containerRef}
              >
                {getVisibleItems().map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => openNewsDetailModal(item)}
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* Image Container */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Category Badge */}
                        <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        {/* Views Badge */}
                        <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full grid grid-flow-col auto-cols-max items-center gap-1">
                          <VisibilityIcon style={{ fontSize: "12px" }} />
                          {item.views}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-4 md:p-5">
                        <h3 className="text-gray-900 font-bold text-base md:text-lg lg:text-xl hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-3">
                          {item.title}
                        </h3>

                        <div className="grid grid-cols-[1fr_auto] justify-between items-center pt-2 border-t border-gray-100">
                          <div className="grid grid-flow-col auto-cols-max items-center gap-1 text-xs md:text-sm text-gray-500">
                            <PersonIcon style={{ fontSize: "14px" }} />
                            <span>{item.author}</span>
                          </div>
                          <div className="grid grid-flow-col auto-cols-max items-center gap-1 text-xs md:text-sm text-gray-400">
                            <CalendarTodayIcon style={{ fontSize: "12px" }} />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="grid grid-flow-col auto-cols-max justify-center items-center gap-2 mt-8 md:mt-10">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? "w-8 h-2 bg-gradient-to-r from-blue-500 to-indigo-500"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* View All Button */}
          <div className="text-center mt-8 md:mt-10">
            <button
              onClick={openAllNewsModal}
              className="inline-grid grid-flow-col auto-cols-max items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              View All News
              <ArrowForwardIcon style={{ fontSize: "18px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* All News Modal */}
      <AnimatePresence>
        {isAllNewsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 grid place-items-center p-4"
            onClick={closeAllNewsModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-black border border-gray-800 rounded-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-[1fr_auto] justify-between items-center p-6 border-b border-gray-800">
                <h2 className="text-2xl font-bold text-white">All News Articles</h2>
                <button
                  onClick={closeAllNewsModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                      onClick={() => {
                        closeAllNewsModal();
                        openNewsDetailModal(item);
                      }}
                    >
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <div className="grid grid-cols-[1fr_auto] justify-between items-center text-gray-400 text-sm">
                          <div className="grid grid-flow-col auto-cols-max items-center gap-1">
                            <PersonIcon style={{ fontSize: "14px" }} />
                            <span>{item.author}</span>
                          </div>
                          <div className="grid grid-flow-col auto-cols-max items-center gap-1">
                            <CalendarTodayIcon style={{ fontSize: "12px" }} />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* News Detail Modal */}
      <AnimatePresence>
        {isNewsDetailModalOpen && selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 grid place-items-center p-4"
            onClick={closeNewsDetailModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border border-gray-800 rounded-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-black z-10 grid grid-cols-[1fr_auto] justify-between items-center p-6 border-b border-gray-800">
                <h2 className="text-2xl font-bold text-white">{selectedNews.title}</h2>
                <button
                  onClick={closeNewsDetailModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="p-6">
                {/* Featured Image */}
                <div className="relative rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-auto object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {selectedNews.category}
                  </span>
                </div>

                {/* Meta Information */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] justify-between items-center gap-4 mb-6 pb-4 border-b border-gray-800">
                  <div className="grid grid-flow-col auto-cols-max flex-wrap items-center gap-4">
                    <div className="grid grid-flow-col auto-cols-max items-center gap-2 text-gray-400">
                      <PersonIcon style={{ fontSize: "18px" }} />
                      <span className="text-white font-medium">{selectedNews.author}</span>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max items-center gap-2 text-gray-400">
                      <CalendarTodayIcon style={{ fontSize: "16px" }} />
                      <span>{selectedNews.date}</span>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max items-center gap-2 text-gray-400">
                      <VisibilityIcon style={{ fontSize: "16px" }} />
                      <span>{selectedNews.views} views</span>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="grid grid-flow-col auto-cols-max items-center gap-2">
                    <span className="text-gray-400 text-sm">Share:</span>
                    <button className="p-1.5 rounded-full bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors">
                      <FacebookIcon style={{ fontSize: "16px" }} />
                    </button>
                    <button className="p-1.5 rounded-full bg-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white transition-colors">
                      <TwitterIcon style={{ fontSize: "16px" }} />
                    </button>
                    <button className="p-1.5 rounded-full bg-blue-700/20 text-blue-500 hover:bg-blue-700 hover:text-white transition-colors">
                      <LinkedInIcon style={{ fontSize: "16px" }} />
                    </button>
                    <button className="p-1.5 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white transition-colors">
                      <WhatsAppIcon style={{ fontSize: "16px" }} />
                    </button>
                    <button className="p-1.5 rounded-full bg-gray-600/20 text-gray-400 hover:bg-gray-600 hover:text-white transition-colors">
                      <BookmarkBorderIcon style={{ fontSize: "16px" }} />
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    {selectedNews.description}
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {selectedNews.content}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>

                {/* Comments Section */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="text-white text-xl font-bold mb-4">Comments ({selectedNews.comments})</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="grid grid-flow-col auto-cols-max items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 grid place-items-center text-white text-sm font-bold">
                          JD
                        </div>
                        <div>
                          <p className="text-white font-semibold">John Doe</p>
                          <p className="text-gray-500 text-xs">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">Great article! Very informative and well written.</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="grid grid-flow-col auto-cols-max items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 grid place-items-center text-white text-sm font-bold">
                          JS
                        </div>
                        <div>
                          <p className="text-white font-semibold">Jane Smith</p>
                          <p className="text-gray-500 text-xs">5 hours ago</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">Thanks for sharing this. Looking forward to more content like this.</p>
                    </div>
                  </div>

                  {/* Add Comment */}
                  <div className="mt-6">
                    <textarea
                      placeholder="Add a comment..."
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                      rows="3"
                    ></textarea>
                    <button className="mt-3 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS for line-clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};