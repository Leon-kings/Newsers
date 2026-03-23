/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/immutability */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";
// import axios from "axios";

// // Material Icons
// import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
// import ComputerIcon from "@mui/icons-material/Computer";
// import FashionIcon from "@mui/icons-material/Checkroom";
// import SpaIcon from "@mui/icons-material/Spa";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import CloseIcon from "@mui/icons-material/Close";
// import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import PersonIcon from "@mui/icons-material/Person";
// import ShareIcon from "@mui/icons-material/Share";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
// import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EmailIcon from "@mui/icons-material/Email";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// export const Hero = () => {
//   const [stories, setStories] = useState([]);
//   const [selectedStory, setSelectedStory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const modalRef = useRef(null);

//   // Comprehensive stories data with rich content
//   const getSampleStories = () => [
//     {
//       id: 1,
//       title: "Historic Victory: Local Team Wins Championship After 50 Years",
//       category: "Sports",
//       subcategory: "Football",
//       date: "March 15, 2024",
//       readTime: "8 min read",
//       image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop",
//       author: {
//         name: "James Wilson",
//         avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//         role: "Senior Sports Reporter"
//       },
//       content: "In a thrilling finale that kept fans on the edge of their seats, the local team secured their first championship title in five decades. The match, played at the National Stadium, saw unprecedented levels of excitement as the underdogs defied all odds to claim victory. The winning goal came in the 89th minute, sending the crowd into a frenzy of celebration. This historic moment marks a turning point for the team, which has struggled in recent years. Coach Michael Rodriguez expressed his pride in the team's performance, highlighting their dedication and teamwork throughout the season. 'This victory belongs to everyone who believed in us,' he said in the post-match conference. The team's captain, David Thompson, was awarded the Player of the Match title for his exceptional leadership and crucial assist. The celebration continued well into the night, with thousands of fans gathering in the city center to welcome their heroes home.",
//       location: "National Stadium, City Center",
//       views: 15234,
//       likes: 2341,
//       comments: 567,
//       trending: true
//     },
//     {
//       id: 2,
//       title: "AI Revolution: How Artificial Intelligence is Reshaping Industries",
//       category: "Technology",
//       subcategory: "Artificial Intelligence",
//       date: "March 14, 2024",
//       readTime: "12 min read",
//       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
//       author: {
//         name: "Sarah Chen",
//         avatar: "https://randomuser.me/api/portraits/women/2.jpg",
//         role: "Tech Correspondent"
//       },
//       content: "Artificial Intelligence is no longer a futuristic concept—it's here and transforming every sector imaginable. From healthcare diagnostics to autonomous vehicles, AI technologies are pushing the boundaries of what's possible. Recent breakthroughs in machine learning have enabled computers to understand context and nuance in ways previously thought impossible. Major tech companies are investing billions into AI research, with applications ranging from climate change solutions to personalized medicine. However, experts also warn about the ethical implications and the need for proper regulation. 'We stand at a crossroads,' says Dr. Elena Martinez, AI Ethics Researcher. 'The decisions we make today about AI development will shape humanity's future for generations.' The article explores both the promises and challenges of this technological revolution.",
//       location: "Global Tech Summit, San Francisco",
//       views: 28765,
//       likes: 5432,
//       comments: 1234,
//       trending: true
//     },
//     {
//       id: 3,
//       title: "Paris Fashion Week: Bold Statements and Sustainable Trends",
//       category: "Fashion",
//       subcategory: "Runway",
//       date: "March 13, 2024",
//       readTime: "6 min read",
//       image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=500&fit=crop",
//       author: {
//         name: "Isabella Rossi",
//         avatar: "https://randomuser.me/api/portraits/women/3.jpg",
//         role: "Fashion Editor"
//       },
//       content: "Paris Fashion Week 2024 has been a spectacle of creativity and innovation, with designers making bold statements about sustainability and inclusivity. This season's collections featured recycled materials, zero-waste designs, and diverse representation on the runway. Major houses like Chanel, Dior, and Louis Vuitton showcased collections that blend traditional craftsmanship with futuristic elements. The highlight of the week was a fully sustainable show where every garment was created from upcycled materials. 'Fashion must evolve with the times,' said renowned designer Stella McCartney. 'We have a responsibility to create beautiful things that don't harm our planet.' The event also saw increased focus on size inclusivity, with models of all body types walking the runway. Street style enthusiasts brought their A-game, turning the city into a living fashion gallery.",
//       location: "Grand Palais, Paris",
//       views: 18923,
//       likes: 3456,
//       comments: 789,
//       trending: true
//     },
//     {
//       id: 4,
//       title: "Mindfulness Revolution: How Meditation is Transforming Modern Life",
//       category: "Lifestyle",
//       subcategory: "Wellness",
//       date: "March 12, 2024",
//       readTime: "10 min read",
//       image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
//       author: {
//         name: "Dr. Amanda Lee",
//         avatar: "https://randomuser.me/api/portraits/women/4.jpg",
//         role: "Wellness Expert"
//       },
//       content: "In our fast-paced digital world, mindfulness and meditation have emerged as essential tools for mental wellness. More people are turning to ancient practices to find balance in modern life. Studies show that regular meditation can reduce stress, improve focus, and even boost immune function. Tech companies are incorporating mindfulness features into their products, while schools are introducing meditation programs to help students manage anxiety. 'We're seeing a cultural shift toward prioritizing mental health,' says Dr. Jonathan Parker, psychologist. 'People are realizing that taking time for themselves isn't selfish—it's necessary.' This article explores various meditation techniques, from traditional Zen practices to modern apps, and shares stories of individuals whose lives were transformed by incorporating mindfulness into their daily routines.",
//       location: "Mindfulness Center, California",
//       views: 12456,
//       likes: 2345,
//       comments: 456,
//       trending: false
//     },
//     {
//       id: 5,
//       title: "Space Exploration: Mars Mission Achieves Major Milestone",
//       category: "Technology",
//       subcategory: "Space",
//       date: "March 11, 2024",
//       readTime: "9 min read",
//       image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop",
//       author: {
//         name: "Robert Armstrong",
//         avatar: "https://randomuser.me/api/portraits/men/5.jpg",
//         role: "Science Editor"
//       },
//       content: "NASA's latest Mars rover has successfully collected samples that could provide evidence of ancient microbial life. The mission, which began two years ago, has achieved all its primary objectives and is now entering an extended phase of exploration. The samples will be returned to Earth by a future mission for detailed analysis. 'This is a historic moment for space exploration,' says Dr. Emily Watson, lead scientist on the project. 'The data we're collecting will help us understand Mars' past and prepare for future human missions.' The rover has traveled over 20 kilometers across the Martian surface, analyzing rock formations and atmospheric conditions. Private companies like SpaceX are also making progress toward their own Mars ambitions, with planned missions in the coming decade.",
//       location: "NASA Jet Propulsion Laboratory",
//       views: 32456,
//       likes: 6789,
//       comments: 1234,
//       trending: true
//     },
//     {
//       id: 6,
//       title: "Sustainable Living: Zero-Waste Communities on the Rise",
//       category: "Lifestyle",
//       subcategory: "Environment",
//       date: "March 10, 2024",
//       readTime: "7 min read",
//       image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
//       author: {
//         name: "Emma Green",
//         avatar: "https://randomuser.me/api/portraits/women/6.jpg",
//         role: "Environmental Journalist"
//       },
//       content: "Across the globe, communities are embracing zero-waste lifestyles, drastically reducing their environmental impact. From packaging-free grocery stores to community composting programs, innovative solutions are emerging to tackle the waste crisis. A small town in Japan has achieved 80% waste diversion through a comprehensive recycling program and community education. 'It's about changing our mindset,' says local resident and activist Yuki Tanaka. 'Every item we use has an environmental cost. By being mindful consumers, we can make a real difference.' The article profiles several families who have reduced their household waste to a single jar per year, sharing practical tips for others looking to start their own sustainability journey.",
//       location: "Global Sustainable Communities Network",
//       views: 9876,
//       likes: 1876,
//       comments: 345,
//       trending: false
//     },
//     {
//       id: 7,
//       title: "Champions League: Underdogs Make Historic Run to Semi-Finals",
//       category: "Sports",
//       subcategory: "Soccer",
//       date: "March 9, 2024",
//       readTime: "6 min read",
//       image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=500&fit=crop",
//       author: {
//         name: "Carlos Mendez",
//         avatar: "https://randomuser.me/api/portraits/men/7.jpg",
//         role: "Sports Analyst"
//       },
//       content: "In one of the biggest upsets in Champions League history, a relatively unknown team has advanced to the semi-finals, defeating three former champions along the way. The team, with one of the smallest budgets in the competition, has captured hearts worldwide with their never-say-die attitude. Their success is being hailed as a victory for grassroots football and a reminder that passion can overcome financial disparity. The coach attributes their success to team unity and tactical discipline. 'We may not have the biggest stars, but we have the biggest hearts,' he said after their quarter-final victory. The semi-final matchup promises to be another test of their remarkable journey.",
//       location: "European Stadium Tour",
//       views: 22345,
//       likes: 4567,
//       comments: 890,
//       trending: true
//     },
//     {
//       id: 8,
//       title: "Digital Art: NFTs Continue to Evolve Beyond Hype",
//       category: "Technology",
//       subcategory: "Digital Art",
//       date: "March 8, 2024",
//       readTime: "8 min read",
//       image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=500&fit=crop",
//       author: {
//         name: "Alex Rivera",
//         avatar: "https://randomuser.me/api/portraits/men/8.jpg",
//         role: "Tech & Culture Writer"
//       },
//       content: "While NFT speculation has cooled, the technology is finding meaningful applications in digital art, ticketing, and identity verification. Artists are using blockchain to protect their work and create new revenue streams. Museums are beginning to collect digital art, and traditional galleries are hosting hybrid exhibitions. 'We're moving beyond the hype to understand the real value of this technology,' says digital artist Beeple, whose work helped popularize the medium. The article explores how NFTs are being used to support artists, combat ticket scalping, and create verifiable digital identities.",
//       location: "Digital Art Museum, New York",
//       views: 15678,
//       likes: 2987,
//       comments: 543,
//       trending: false
//     }
//   ];

//   const categories = [
//     { 
//       name: "Sports", 
//       icon: SportsBasketballIcon, 
//       gradient: "from-red-500 to-orange-500",
//       color: "red",
//       description: "Latest sports news, scores, and highlights"
//     },
//     { 
//       name: "Technology", 
//       icon: ComputerIcon, 
//       gradient: "from-cyan-500 to-blue-500",
//       color: "cyan",
//       description: "Tech innovations and digital trends"
//     },
//     { 
//       name: "Fashion", 
//       icon: FashionIcon, 
//       gradient: "from-pink-500 to-rose-500",
//       color: "pink",
//       description: "Style trends and runway highlights"
//     },
//     { 
//       name: "Lifestyle", 
//       icon: SpaIcon, 
//       gradient: "from-green-500 to-emerald-500",
//       color: "green",
//       description: "Wellness, culture, and living well"
//     }
//   ];

//   useEffect(() => {
//     const fetchStories = async () => {
//       try {
//         setLoading(true);
//         // Replace with your actual API endpoint
//         // const response = await axios.get("http://localhost:5000/api/stories");
//         // setStories(response.data);
        
//         // Using sample data for demonstration
//         setTimeout(() => {
//           setStories(getSampleStories());
//           setLoading(false);
//         }, 1000);
//       } catch (error) {
//         console.error("Error fetching stories:", error);
//         toast.error("Failed to load stories. Please try again later.");
//         setStories(getSampleStories());
//         setLoading(false);
//       }
//     };

//     fetchStories();
//   }, []);

//   const openStoryModal = (story) => {
//     setSelectedStory(story);
//     setDirection(0);
//     document.body.style.overflow = "hidden";
//   };

//   const closeStoryModal = () => {
//     setSelectedStory(null);
//     document.body.style.overflow = "auto";
//   };

//   const nextStory = () => {
//     const currentIndex = stories.findIndex(s => s.id === selectedStory.id);
//     const nextIndex = (currentIndex + 1) % stories.length;
//     setDirection(1);
//     setSelectedStory(stories[nextIndex]);
//     setCurrentSlide(nextIndex);
//   };

//   const prevStory = () => {
//     const currentIndex = stories.findIndex(s => s.id === selectedStory.id);
//     const prevIndex = (currentIndex - 1 + stories.length) % stories.length;
//     setDirection(-1);
//     setSelectedStory(stories[prevIndex]);
//     setCurrentSlide(prevIndex);
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!selectedStory) return;
//       if (e.key === "ArrowRight") nextStory();
//       if (e.key === "ArrowLeft") prevStory();
//       if (e.key === "Escape") closeStoryModal();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [selectedStory, stories]);

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
//     hidden: { opacity: 0, y: 30 },
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

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
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
//       y: 20,
//       transition: { duration: 0.2 }
//     }
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 500 : -500,
//       opacity: 0,
//       scale: 0.9
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30
//       }
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 500 : -500,
//       opacity: 0,
//       scale: 0.9,
//       transition: { duration: 0.2 }
//     })
//   };

//   const handleShare = (story) => {
//     // Implement share functionality
//     toast.info("Share feature coming soon!");
//   };

//   const handleBookmark = (story) => {
//     toast.success("Story saved to bookmarks!");
//   };

//   const handleLike = (story) => {
//     toast.success("Thanks for liking this story!");
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
//       {/* Hero Section Header */}
//       <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mb-12 overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px]"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <NewspaperIcon className="text-6xl mb-4 mx-auto" />
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
//               The Daily Chronicle
//             </h1>
//             <p className="text-xl md:text-2xl text-blue-100 mb-2">
//               Your Gateway to World-Class Journalism
//             </p>
//             <p className="text-lg text-blue-200 max-w-2xl mx-auto">
//               Breaking news, in-depth analysis, and compelling stories from around the globe
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 pb-16">
//         {/* Categories Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//         >
//           {categories.map((category, index) => {
//             const Icon = category.icon;
//             const categoryStories = stories.filter(s => s.category === category.name);
//             return (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="group cursor-pointer"
//                 onClick={() => {
//                   const story = categoryStories[0];
//                   if (story) openStoryModal(story);
//                   else toast.info(`No stories available in ${category.name} yet`);
//                 }}
//               >
//                 <div className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300`}>
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
//                       <Icon className="text-white text-3xl" />
//                     </div>
//                     <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-bold">
//                       {categoryStories.length} Stories
//                     </span>
//                   </div>
//                   <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
//                   <p className="text-white/80 text-sm mb-4">{category.description}</p>
//                   <div className="flex items-center text-white/90 text-sm">
//                     <TrendingUpIcon className="text-sm mr-1" />
//                     <span>{categoryStories.filter(s => s.trending).length} trending</span>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Featured Stories Grid */}
//         <div className="mb-12">
//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                 Featured Stories
//               </h2>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Curated stories that matter most
//               </p>
//             </div>
//             <div className="hidden md:block h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
//           </div>

//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
//             </div>
//           ) : (
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//             >
//               {stories.map((story, index) => (
//                 <motion.div
//                   key={story.id}
//                   variants={itemVariants}
//                   whileHover={{ y: -8 }}
//                   className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//                   onClick={() => openStoryModal(story)}
//                 >
//                   <div className="relative overflow-hidden h-48">
//                     <img
//                       src={story.image}
//                       alt={story.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     {story.trending && (
//                       <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center">
//                         <TrendingUpIcon className="text-xs mr-1" />
//                         Trending
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         openStoryModal(story);
//                       }}
//                       className="absolute bottom-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
//                     >
//                       <VisibilityIcon className="text-gray-800 text-sm" />
//                     </button>
//                   </div>
//                   <div className="p-5">
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${
//                         story.category === "Sports" ? "from-red-500 to-orange-500" :
//                         story.category === "Technology" ? "from-cyan-500 to-blue-500" :
//                         story.category === "Fashion" ? "from-pink-500 to-rose-500" :
//                         "from-green-500 to-emerald-500"
//                       } text-white`}>
//                         {story.category}
//                       </span>
//                       <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
//                         <AccessTimeIcon className="text-xs mr-1" />
//                         {story.readTime}
//                       </span>
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       {story.title}
//                     </h3>
//                     <div className="flex items-center gap-2 mt-3 text-sm text-gray-600 dark:text-gray-400">
//                       <img
//                         src={story.author.avatar}
//                         alt={story.author.name}
//                         className="w-6 h-6 rounded-full"
//                       />
//                       <span>{story.author.name}</span>
//                       <span>•</span>
//                       <CalendarTodayIcon className="text-xs" />
//                       <span>{story.date}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </div>

//         {/* Newspaper Style Modal */}
//         <AnimatePresence mode="wait">
//           {selectedStory && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
//               onClick={closeStoryModal}
//             >
//               <motion.div
//                 ref={modalRef}
//                 variants={modalVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 className="relative max-w-5xl w-full max-h-[90vh] bg-[#FFF9F0] dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Modal Header with Newspaper Style */}
//                 <div className="sticky top-0 z-20 bg-[#FFF9F0] dark:bg-gray-900 border-b-4 border-double border-gray-800 dark:border-gray-600">
//                   <div className="flex justify-between items-center p-4">
//                     <div className="flex items-center gap-2">
//                       <NewspaperIcon className="text-gray-800 dark:text-gray-200" />
//                       <div>
//                         <p className="text-xs text-gray-600 dark:text-gray-400">Est. 1924</p>
//                         <p className="text-xs font-serif text-gray-800 dark:text-gray-200">The Daily Chronicle</p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={closeStoryModal}
//                       className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
//                     >
//                       <CloseIcon />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 {stories.length > 1 && (
//                   <>
//                     <button
//                       onClick={prevStory}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black/80 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
//                     >
//                       <NavigateBeforeIcon className="text-3xl" />
//                     </button>
//                     <button
//                       onClick={nextStory}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black/80 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
//                     >
//                       <NavigateNextIcon className="text-3xl" />
//                     </button>
//                   </>
//                 )}

//                 {/* Content with Slide Animation */}
//                 <AnimatePresence mode="wait" custom={direction}>
//                   <motion.div
//                     key={selectedStory.id}
//                     custom={direction}
//                     variants={slideVariants}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                     className="overflow-y-auto max-h-[calc(90vh-80px)]"
//                   >
//                     {/* Hero Image */}
//                     <div className="relative h-64 md:h-96">
//                       <img
//                         src={selectedStory.image}
//                         alt={selectedStory.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
//                       <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
//                         <div className="flex items-center gap-2 mb-3">
//                           <span className={`px-3 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${
//                             selectedStory.category === "Sports" ? "from-red-500 to-orange-500" :
//                             selectedStory.category === "Technology" ? "from-cyan-500 to-blue-500" :
//                             selectedStory.category === "Fashion" ? "from-pink-500 to-rose-500" :
//                             "from-green-500 to-emerald-500"
//                           }`}>
//                             {selectedStory.category}
//                           </span>
//                           {selectedStory.subcategory && (
//                             <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm">
//                               {selectedStory.subcategory}
//                             </span>
//                           )}
//                         </div>
//                         <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 leading-tight">
//                           {selectedStory.title}
//                         </h2>
//                       </div>
//                     </div>

//                     {/* Article Content */}
//                     <div className="p-6 md:p-8 lg:p-10">
//                       {/* Author Info & Meta */}
//                       <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-300 dark:border-gray-700">
//                         <div className="flex items-center gap-3">
//                           <img
//                             src={selectedStory.author.avatar}
//                             alt={selectedStory.author.name}
//                             className="w-12 h-12 rounded-full ring-2 ring-blue-500"
//                           />
//                           <div>
//                             <p className="font-semibold text-gray-900 dark:text-white">
//                               {selectedStory.author.name}
//                             </p>
//                             <p className="text-sm text-gray-600 dark:text-gray-400">
//                               {selectedStory.author.role}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
//                           <div className="flex items-center gap-1">
//                             <CalendarTodayIcon className="text-sm" />
//                             <span>{selectedStory.date}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <AccessTimeIcon className="text-sm" />
//                             <span>{selectedStory.readTime}</span>
//                           </div>
//                           {selectedStory.location && (
//                             <div className="flex items-center gap-1">
//                               <LocationOnIcon className="text-sm" />
//                               <span>{selectedStory.location}</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       {/* Article Body */}
//                       <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
//                         <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:text-blue-600 dark:first-letter:text-blue-400">
//                           {selectedStory.content.split('\n')[0]}
//                         </p>
//                         {selectedStory.content.split('\n').slice(1).map((paragraph, idx) => (
//                           <p key={idx} className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
//                             {paragraph}
//                           </p>
//                         ))}
//                       </div>

//                       {/* Pull Quote */}
//                       <div className="my-10 py-6 px-8 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 rounded-r-lg">
//                         <p className="text-xl md:text-2xl font-serif italic text-gray-800 dark:text-gray-200">
//                           "In journalism, there is no greater power than the truth, and no greater responsibility than to report it accurately."
//                         </p>
//                         <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
//                           — Anonymous Journalist
//                         </p>
//                       </div>

//                       {/* Engagement Section */}
//                       <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
//                         <div className="flex items-center gap-4">
//                           <button
//                             onClick={() => handleLike(selectedStory)}
//                             className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                           >
//                             <ThumbUpAltOutlinedIcon className="text-sm" />
//                             <span>{selectedStory.likes.toLocaleString()}</span>
//                           </button>
//                           <button
//                             onClick={() => toast.info("Comments coming soon!")}
//                             className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                           >
//                             <CommentOutlinedIcon className="text-sm" />
//                             <span>{selectedStory.comments.toLocaleString()}</span>
//                           </button>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <button
//                             onClick={() => handleBookmark(selectedStory)}
//                             className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                           >
//                             <BookmarkBorderIcon />
//                           </button>
//                           <button
//                             onClick={() => handleShare(selectedStory)}
//                             className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                           >
//                             <ShareIcon />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Social Share Section */}
//                       <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
//                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Share this story:</p>
//                         <div className="flex gap-2">
//                           <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
//                             <FacebookIcon className="text-sm" />
//                           </button>
//                           <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
//                             <TwitterIcon className="text-sm" />
//                           </button>
//                           <button className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors">
//                             <LinkedInIcon className="text-sm" />
//                           </button>
//                           <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
//                             <EmailIcon className="text-sm" />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Related Stories Preview */}
//                       <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
//                         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//                           You Might Also Like
//                         </h3>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           {stories
//                             .filter(s => s.id !== selectedStory.id && s.category === selectedStory.category)
//                             .slice(0, 2)
//                             .map(relatedStory => (
//                               <div
//                                 key={relatedStory.id}
//                                 className="flex gap-3 cursor-pointer group"
//                                 onClick={() => openStoryModal(relatedStory)}
//                               >
//                                 <img
//                                   src={relatedStory.image}
//                                   alt={relatedStory.title}
//                                   className="w-20 h-20 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
//                                 />
//                                 <div>
//                                   <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
//                                     {relatedStory.title}
//                                   </h4>
//                                   <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
//                                     {relatedStory.readTime}
//                                   </p>
//                                 </div>
//                               </div>
//                             ))}
//                         </div>
//                       </div>

                  
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };














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
      <div className="flex justify-center items-center h-96">
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
                  <div className="flex items-center gap-2 mb-3">
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
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <CalendarTodayIcon className="text-xs" />
                    <span>{story.date}</span>
                  </div>

                  {/* View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openStoryModal(story);
                    }}
                    className="mt-4 w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={closeStoryModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#FFF9F0] dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Newspaper Header */}
              <div className="sticky top-0 z-20 bg-[#FFF9F0] dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-700">
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center gap-3">
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
                    <div className="flex items-center gap-2 mb-2">
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
                  <div className="flex flex-wrap items-center gap-4 mb-6 pb-4 border-b border-gray-300 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <PersonIcon className="text-sm text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {selectedStory.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarTodayIcon className="text-sm text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {selectedStory.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AccessTimeIcon className="text-sm text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {selectedStory.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
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