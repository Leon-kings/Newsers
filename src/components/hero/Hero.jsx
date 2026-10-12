// /* eslint-disable react-hooks/immutability */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";
// import axios from "axios";

// // Material Icons
// import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
// import ComputerIcon from "@mui/icons-material/Computer";
// import CheckroomIcon from "@mui/icons-material/Checkroom";
// import SpaIcon from "@mui/icons-material/Spa";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import CloseIcon from "@mui/icons-material/Close";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import PersonIcon from "@mui/icons-material/Person";
// import NewspaperIcon from "@mui/icons-material/Newspaper";

// export const Hero = () => {
//   const [stories, setStories] = useState([]);
//   const [selectedStory, setSelectedStory] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Stories data matching your design
//   const getSampleStories = () => [
//     {
//       id: 1,
//       title: "Get the best speak market, news.",
//       category: "SPORTS",
//       date: "December 9, 2024",
//       image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
//       author: "James Wilson",
//       readTime: "5 min read",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nThis exciting sports news brings you the latest updates from the world of athletics. Teams are preparing for the upcoming championship season with intense training sessions and strategic planning. Fans are eagerly anticipating the matches that will determine this year's champions.\n\nThe underdog team has shown remarkable improvement this season, surprising critics and fans alike. Their dedication and teamwork have paid off, resulting in a series of impressive victories. The coach attributes their success to rigorous practice and unwavering team spirit.",
//       views: 15234,
//       likes: 2341
//     },
//     {
//       id: 2,
//       title: "Get the best speak market, news.",
//       category: "TECHNOLOGY",
//       date: "December 9, 2024",
//       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
//       author: "Sarah Chen",
//       readTime: "6 min read",
//       content: "The world of technology is evolving at an unprecedented pace. From artificial intelligence to quantum computing, innovations are reshaping our future. This article explores the latest breakthroughs that are set to change the way we live and work.\n\nArtificial Intelligence has made remarkable strides in recent months, with new models demonstrating unprecedented capabilities in understanding and generating human-like text. These advancements are being integrated into various industries, from healthcare to finance.\n\nMeanwhile, developments in renewable energy technology are providing new solutions to climate change challenges. Solar and wind power innovations are making clean energy more accessible and affordable than ever before.",
//       views: 28765,
//       likes: 5432
//     },
//     {
//       id: 3,
//       title: "Get the best speak market, news.",
//       category: "FASHION",
//       date: "December 9, 2024",
//       image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=400&fit=crop",
//       author: "Isabella Rossi",
//       readTime: "4 min read",
//       content: "Paris Fashion Week 2024 has been a spectacle of creativity and innovation. Designers are making bold statements about sustainability and inclusivity in the fashion industry.\n\nThis season's collections feature recycled materials, zero-waste designs, and diverse representation on the runway. Major houses like Chanel, Dior, and Louis Vuitton are showcasing collections that blend traditional craftsmanship with futuristic elements.\n\nThe highlight of the week was a fully sustainable show where every garment was created from upcycled materials. Fashion is evolving to become more environmentally conscious while maintaining its artistic expression.",
//       views: 18923,
//       likes: 3456
//     },
//     {
//       id: 4,
//       title: "Get the best speak market, news.",
//       category: "LIFE STYLE",
//       date: "December 9, 2024",
//       image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
//       author: "Dr. Amanda Lee",
//       readTime: "7 min read",
//       content: "In our fast-paced digital world, mindfulness and meditation have emerged as essential tools for mental wellness. More people are turning to ancient practices to find balance in modern life.\n\nStudies show that regular meditation can reduce stress, improve focus, and even boost immune function. Tech companies are incorporating mindfulness features into their products, while schools are introducing meditation programs to help students manage anxiety.\n\n'We're seeing a cultural shift toward prioritizing mental health,' says Dr. Jonathan Parker, psychologist. 'People are realizing that taking time for themselves isn't selfish—it's necessary.'",
//       views: 12456,
//       likes: 2345
//     }
//   ];

//   useEffect(() => {
//     const fetchStories = async () => {
//       try {
//         setLoading(true);
//         // Replace with your actual API endpoint
//         // const response = await axios.get("http://localhost:5000/api/stories");
//         // setStories(response.data);
        
//         setTimeout(() => {
//           setStories(getSampleStories());
//           setLoading(false);
//         }, 500);
//       } catch (error) {
//         console.error("Error fetching stories:", error);
//         toast.error("Failed to load stories");
//         setStories(getSampleStories());
//         setLoading(false);
//       }
//     };

//     fetchStories();
//   }, []);

//   const openStoryModal = (story) => {
//     setSelectedStory(story);
//     document.body.style.overflow = "hidden";
//   };

//   const closeStoryModal = () => {
//     setSelectedStory(null);
//     document.body.style.overflow = "auto";
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
//         stiffness: 300
//       }
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.95,
//       y: 30,
//       transition: { duration: 0.2 }
//     }
//   };

//   // Category icons mapping
//   const getCategoryIcon = (category) => {
//     switch(category.toLowerCase()) {
//       case 'sports':
//         return <SportsBasketballIcon className="text-red-500 text-3xl" />;
//       case 'technology':
//         return <ComputerIcon className="text-blue-500 text-3xl" />;
//       case 'fashion':
//         return <CheckroomIcon className="text-pink-500 text-3xl" />;
//       case 'life style':
//         return <SpaIcon className="text-green-500 text-3xl" />;
//       default:
//         return <NewspaperIcon className="text-gray-500 text-3xl" />;
//     }
//   };

//   const getCategoryColor = (category) => {
//     switch(category.toLowerCase()) {
//       case 'sports':
//         return "text-red-500";
//       case 'technology':
//         return "text-blue-500";
//       case 'fashion':
//         return "text-pink-500";
//       case 'life style':
//         return "text-green-500";
//       default:
//         return "text-gray-500";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-96">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Hero Section - Exactly matching the screenshot design */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stories.map((story, index) => (
//             <motion.div
//               key={story.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -8, transition: { duration: 0.2 } }}
//               className="group cursor-pointer"
//               onClick={() => openStoryModal(story)}
//             >
//               <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
//                 {/* Image Section */}
//                 <div className="relative overflow-hidden h-48">
//                   <img
//                     src={story.image}
//                     alt={story.category}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       openStoryModal(story);
//                     }}
//                     className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
//                   >
//                     <VisibilityIcon className="text-gray-700 text-sm" />
//                   </button>
//                 </div>

//                 {/* Content Section - Exactly matching your design */}
//                 <div className="p-5">
//                   {/* Category with Icon */}
//                   <div className="flex items-center gap-2 mb-3">
//                     {getCategoryIcon(story.category)}
//                     <p className={`text-sm font-bold uppercase ${getCategoryColor(story.category)}`}>
//                       {story.category}
//                     </p>
//                   </div>

//                   {/* Title */}
//                   <h6 className="text-gray-800 dark:text-gray-200 font-semibold text-base mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                     {story.title}
//                   </h6>

//                   {/* Date with Calendar Icon */}
//                   <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
//                     <CalendarTodayIcon className="text-xs" />
//                     <span>{story.date}</span>
//                   </div>

//                   {/* View Button */}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       openStoryModal(story);
//                     }}
//                     className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
//                   >
//                     <VisibilityIcon className="text-sm" />
//                     View Story
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* View Modal - Newspaper Style */}
//       <AnimatePresence>
//         {selectedStory && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
//             onClick={closeStoryModal}
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="relative max-w-4xl w-full max-h-[90vh] bg-[#FFF9F0] dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Newspaper Header */}
//               <div className="sticky top-0 z-20 bg-[#FFF9F0] dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-700">
//                 <div className="flex justify-between items-center p-4">
//                   <div className="flex items-center gap-3">
//                     <NewspaperIcon className="text-gray-800 dark:text-gray-200 text-2xl" />
//                     <div>
//                       <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
//                         The Daily Chronicle
//                       </p>
//                       <p className="text-[10px] font-serif text-gray-500 dark:text-gray-500">
//                         Established 1924
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={closeStoryModal}
//                     className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
//                   >
//                     <CloseIcon />
//                   </button>
//                 </div>
//               </div>

//               {/* Scrollable Content */}
//               <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
//                 {/* Hero Image */}
//                 <div className="relative h-64 md:h-80">
//                   <img
//                     src={selectedStory.image}
//                     alt={selectedStory.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${
//                         selectedStory.category === "SPORTS" ? "bg-red-500" :
//                         selectedStory.category === "TECHNOLOGY" ? "bg-blue-500" :
//                         selectedStory.category === "FASHION" ? "bg-pink-500" :
//                         "bg-green-500"
//                       }`}>
//                         {selectedStory.category}
//                       </span>
//                     </div>
//                     <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
//                       {selectedStory.title}
//                     </h2>
//                   </div>
//                 </div>

//                 {/* Article Content */}
//                 <div className="p-6 md:p-8">
//                   {/* Meta Information */}
//                   <div className="flex flex-wrap items-center gap-4 mb-6 pb-4 border-b border-gray-300 dark:border-gray-700">
//                     <div className="flex items-center gap-2">
//                       <PersonIcon className="text-sm text-gray-600 dark:text-gray-400" />
//                       <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
//                         {selectedStory.author}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <CalendarTodayIcon className="text-sm text-gray-600 dark:text-gray-400" />
//                       <span className="text-sm text-gray-700 dark:text-gray-300">
//                         {selectedStory.date}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <AccessTimeIcon className="text-sm text-gray-600 dark:text-gray-400" />
//                       <span className="text-sm text-gray-700 dark:text-gray-300">
//                         {selectedStory.readTime}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <VisibilityIcon className="text-sm text-gray-600 dark:text-gray-400" />
//                       <span className="text-sm text-gray-700 dark:text-gray-300">
//                         {selectedStory.views.toLocaleString()} views
//                       </span>
//                     </div>
//                   </div>

//                   {/* Article Body - Newspaper Style */}
//                   <div className="prose prose-lg dark:prose-invert max-w-none">
//                     {selectedStory.content.split('\n\n').map((paragraph, idx) => (
//                       <p 
//                         key={idx} 
//                         className={`text-gray-800 dark:text-gray-200 leading-relaxed mb-4 ${
//                           idx === 0 ? 'first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-blue-600 dark:first-letter:text-blue-400' : ''
//                         }`}
//                       >
//                         {paragraph}
//                       </p>
//                     ))}
//                   </div>

//                   {/* Pull Quote - Newspaper Style */}
//                   <div className="my-8 py-4 px-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
//                     <p className="text-lg md:text-xl font-serif italic text-gray-700 dark:text-gray-300">
//                       "Quality journalism is the cornerstone of an informed society. Every story matters."
//                     </p>
//                     <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                       — Editorial Team
//                     </p>
//                   </div>

//                   {/* Engagement Footer */}
//                   <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <div className="flex items-center gap-1">
//                           <span className="text-sm text-gray-600 dark:text-gray-400">
//                             {selectedStory.likes.toLocaleString()} likes
//                           </span>
//                         </div>
//                       </div>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">
//                         © {new Date().getFullYear()} The Daily Chronicle
//                       </p>
//                     </div>
//                   </div>
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
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import ComputerIcon from "@mui/icons-material/Computer";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import SpaIcon from "@mui/icons-material/Spa";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import NewspaperIcon from "@mui/icons-material/Newspaper";

export const Hero = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [loading, setLoading] = useState(true);

  // Stories data matching your design
  const getSampleStories = () => [
    {
      id: 1,
      title: "Get the best speak market, news.",
      category: "SPORTS",
      date: "December 9, 2024",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
      author: "James Wilson",
      readTime: "5 min read",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nThis exciting sports news brings you the latest updates from the world of athletics. Teams are preparing for the upcoming championship season with intense training sessions and strategic planning. Fans are eagerly anticipating the matches that will determine this year's champions.\n\nThe underdog team has shown remarkable improvement this season, surprising critics and fans alike. Their dedication and teamwork have paid off, resulting in a series of impressive victories. The coach attributes their success to rigorous practice and unwavering team spirit.",
      views: 15234,
      likes: 2341
    },
    {
      id: 2,
      title: "Get the best speak market, news.",
      category: "TECHNOLOGY",
      date: "December 9, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      author: "Sarah Chen",
      readTime: "6 min read",
      content: "The world of technology is evolving at an unprecedented pace. From artificial intelligence to quantum computing, innovations are reshaping our future. This article explores the latest breakthroughs that are set to change the way we live and work.\n\nArtificial Intelligence has made remarkable strides in recent months, with new models demonstrating unprecedented capabilities in understanding and generating human-like text. These advancements are being integrated into various industries, from healthcare to finance.\n\nMeanwhile, developments in renewable energy technology are providing new solutions to climate change challenges. Solar and wind power innovations are making clean energy more accessible and affordable than ever before.",
      views: 28765,
      likes: 5432
    },
    {
      id: 3,
      title: "Get the best speak market, news.",
      category: "FASHION",
      date: "December 9, 2024",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=400&fit=crop",
      author: "Isabella Rossi",
      readTime: "4 min read",
      content: "Paris Fashion Week 2024 has been a spectacle of creativity and innovation. Designers are making bold statements about sustainability and inclusivity in the fashion industry.\n\nThis season's collections feature recycled materials, zero-waste designs, and diverse representation on the runway. Major houses like Chanel, Dior, and Louis Vuitton are showcasing collections that blend traditional craftsmanship with futuristic elements.\n\nThe highlight of the week was a fully sustainable show where every garment was created from upcycled materials. Fashion is evolving to become more environmentally conscious while maintaining its artistic expression.",
      views: 18923,
      likes: 3456
    },
    {
      id: 4,
      title: "Get the best speak market, news.",
      category: "LIFE STYLE",
      date: "December 9, 2024",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      author: "Dr. Amanda Lee",
      readTime: "7 min read",
      content: "In our fast-paced digital world, mindfulness and meditation have emerged as essential tools for mental wellness. More people are turning to ancient practices to find balance in modern life.\n\nStudies show that regular meditation can reduce stress, improve focus, and even boost immune function. Tech companies are incorporating mindfulness features into their products, while schools are introducing meditation programs to help students manage anxiety.\n\n'We're seeing a cultural shift toward prioritizing mental health,' says Dr. Jonathan Parker, psychologist. 'People are realizing that taking time for themselves isn't selfish—it's necessary.'",
      views: 12456,
      likes: 2345
    }
  ];

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        // const response = await axios.get("http://localhost:5000/api/stories");
        // setStories(response.data);

        setTimeout(() => {
          setStories(getSampleStories());
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching stories:", error);
        toast.error("Failed to load stories");
        setStories(getSampleStories());
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const openStoryModal = (story) => {
    setSelectedStory(story);
    document.body.style.overflow = "hidden";
  };

  const closeStoryModal = () => {
    setSelectedStory(null);
    document.body.style.overflow = "auto";
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

  // Category icons mapping
  const getCategoryIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'sports':
        return <SportsBasketballIcon className="text-red-500 text-3xl" />;
      case 'technology':
        return <ComputerIcon className="text-blue-500 text-3xl" />;
      case 'fashion':
        return <CheckroomIcon className="text-pink-500 text-3xl" />;
      case 'life style':
        return <SpaIcon className="text-green-500 text-3xl" />;
      default:
        return <NewspaperIcon className="text-gray-500 text-3xl" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category.toLowerCase()) {
      case 'sports':
        return "text-red-500";
      case 'technology':
        return "text-blue-500";
      case 'fashion':
        return "text-pink-500";
      case 'life style':
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  if (loading) {
    return (
      <div className="grid place-items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section - Exactly matching the screenshot design */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
              onClick={() => openStoryModal(story)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={story.image}
                    alt={story.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openStoryModal(story);
                    }}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                  >
                    <VisibilityIcon className="text-gray-700 text-sm" />
                  </button>
                </div>

                {/* Content Section - Exactly matching your design */}
                <div className="p-5">
                  {/* Category with Icon */}
                  <div className="grid grid-flow-col auto-cols-max items-center gap-2 mb-3">
                    {getCategoryIcon(story.category)}
                    <p className={`text-sm font-bold uppercase ${getCategoryColor(story.category)}`}>
                      {story.category}
                    </p>
                  </div>

                  {/* Title */}
                  <h6 className="text-gray-800 dark:text-gray-200 font-semibold text-base mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {story.title}
                  </h6>

                  {/* Date with Calendar Icon */}
                  <div className="grid grid-flow-col auto-cols-max items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <CalendarTodayIcon className="text-xs" />
                    <span>{story.date}</span>
                  </div>

                  {/* View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openStoryModal(story);
                    }}
                    className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white rounded-lg transition-all duration-300 grid grid-cols-[auto_1fr] items-center justify-center gap-2 text-sm font-medium"
                  >
                    <VisibilityIcon className="text-sm" />
                    View Story
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View Modal - Newspaper Style */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/95 backdrop-blur-md"
            onClick={closeStoryModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-h-[90vh] bg-[#FFF9F0] dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Newspaper Header */}
              <div className="sticky top-0 z-20 bg-[#FFF9F0] dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-700">
                <div className="grid grid-cols-[1fr_auto] items-center justify-between p-4">
                  <div className="grid grid-flow-col auto-cols-max items-center gap-3">
                    <NewspaperIcon className="text-gray-800 dark:text-gray-200 text-2xl" />
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                        The Daily Chronicle
                      </p>
                      <p className="text-[10px] font-serif text-gray-500 dark:text-gray-500">
                        Established 1924
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeStoryModal}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                {/* Hero Image */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-flow-col auto-cols-max items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${
                        selectedStory.category === "SPORTS" ? "bg-red-500" :
                        selectedStory.category === "TECHNOLOGY" ? "bg-blue-500" :
                        selectedStory.category === "FASHION" ? "bg-pink-500" :
                        "bg-green-500"
                      }`}>
                        {selectedStory.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {selectedStory.title}
                    </h2>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 md:p-8">
                  {/* Meta Information */}
                  <div className="grid grid-flow-col auto-cols-max flex-wrap items-center gap-4 mb-6 pb-4 border-b border-gray-300 dark:border-gray-700">
                    <div className="grid grid-flow-col auto-cols-max items-center gap-2">
                      <PersonIcon className="text-sm text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {selectedStory.author}
                      </span>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max items-center gap-2">
                      <CalendarTodayIcon className="text-sm text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {selectedStory.date}
                      </span>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max items-center gap-2">
                      <AccessTimeIcon className="text-sm text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {selectedStory.readTime}
                      </span>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max items-center gap-2">
                      <VisibilityIcon className="text-sm text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {selectedStory.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>

                  {/* Article Body - Newspaper Style */}
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {selectedStory.content.split('\n\n').map((paragraph, idx) => (
                      <p
                        key={idx}
                        className={`text-gray-800 dark:text-gray-200 leading-relaxed mb-4 ${
                          idx === 0 ? 'first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-blue-600 dark:first-letter:text-blue-400' : ''
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Pull Quote - Newspaper Style */}
                  <div className="my-8 py-4 px-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
                    <p className="text-lg md:text-xl font-serif italic text-gray-700 dark:text-gray-300">
                      "Quality journalism is the cornerstone of an informed society. Every story matters."
                    </p>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      — Editorial Team
                    </p>
                  </div>

                  {/* Engagement Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
                    <div className="grid grid-cols-[1fr_auto] items-center justify-between">
                      <div className="grid grid-flow-col auto-cols-max items-center gap-4">
                        <div className="grid grid-flow-col auto-cols-max items-center gap-1">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {selectedStory.likes.toLocaleString()} likes
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} The Daily Chronicle
                      </p>
                    </div>
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