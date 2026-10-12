// /* eslint-disable react-hooks/purity */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";

// // Material-UI Icons
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import HomeIcon from "@mui/icons-material/Home";
// import ArticleIcon from "@mui/icons-material/Article";
// import SearchIcon from "@mui/icons-material/Search";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";

// export const NotFound = () => {
//   // Animated numbers for 404 effect
//   const numbers = [4, 0, 4];

//   return (
//     <>
//       <Helmet>
//         <title>404 - Page Not Found | Newsers</title>
//         <meta name="description" content="Oops! The page you're looking for doesn't exist. Return to Newsers homepage for the latest news and updates." />
//       </Helmet>

//       <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-4 py-20 relative overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Floating Particles */}
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
//               initial={{
//                 x: Math.random() * window.innerWidth,
//                 y: Math.random() * window.innerHeight,
//                 scale: 0,
//               }}
//               animate={{
//                 y: [null, -100, -200],
//                 opacity: [0, 0.5, 0],
//                 scale: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//                 ease: "easeOut",
//               }}
//             />
//           ))}
          
//           {/* Animated Grid Pattern */}
//           <svg className="absolute inset-0 w-full h-full opacity-10">
//             <defs>
//               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//           </svg>
//         </div>

//         {/* Main Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative z-10 text-center max-w-3xl mx-auto"
//         >
//           {/* Animated 404 Numbers */}
//           <div className="flex justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
//             {numbers.map((num, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={{ scale: 1, rotate: 0 }}
//                 transition={{
//                   delay: index * 0.2,
//                   type: "spring",
//                   stiffness: 260,
//                   damping: 20,
//                 }}
//                 className="relative"
//               >
//                 <div className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
//                   {num}
//                 </div>
//                 {/* Glow Effect */}
//                 <motion.div
//                   className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full opacity-50"
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     opacity: [0.3, 0.6, 0.3],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </motion.div>
//             ))}
//           </div>

//           {/* Error Icon with Animation */}
//           <motion.div
//             initial={{ scale: 0, rotate: -90 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
//             className="mb-6"
//           >
//             <ErrorOutlineIcon className="text-blue-500 text-5xl sm:text-6xl md:text-7xl" />
//           </motion.div>

//           {/* Error Message */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
//           >
//             Oops! Page Not Found
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto"
//           >
//             The page you're looking for seems to have vanished into thin air. 
//             Don't worry, let's get you back on track!
//           </motion.p>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//             className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
//           >
//             <Link
//               to="/"
//               className="group relative px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
//             >
//               <span className="flex items-center gap-2">
//                 <HomeIcon className="text-lg" />
//                 Back to Home
//               </span>
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
//             </Link>

//             <Link
//               to="/news"
//               className="group relative px-6 sm:px-8 py-3 rounded-full border border-blue-500/50 text-blue-400 font-semibold transition-all duration-300 hover:bg-blue-500/10 hover:scale-105"
//             >
//               <span className="flex items-center gap-2">
//                 <ArticleIcon className="text-lg" />
//                 Browse Articles
//               </span>
//             </Link>

//             <button
//               onClick={() => window.history.back()}
//               className="group relative px-6 sm:px-8 py-3 rounded-full border border-gray-700 text-gray-300 font-semibold transition-all duration-300 hover:bg-gray-800/50 hover:scale-105"
//             >
//               <span className="flex items-center gap-2">
//                 <ArrowBackIcon className="text-lg" />
//                 Go Back
//               </span>
//             </button>
//           </motion.div>

//           {/* Search Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//             className="mt-12 sm:mt-16"
//           >
//             <p className="text-gray-500 text-sm mb-4">Or search for what you're looking for:</p>
//             <div className="max-w-md mx-auto">
//               <form action="/search" method="get" className="relative">
//                 <input
//                   type="text"
//                   name="q"
//                   placeholder="Search news, articles, topics..."
//                   className="w-full px-5 py-3 pl-12 bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
//                 />
//                 <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
//                 <button
//                   type="submit"
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm rounded-full hover:scale-105 transition-all duration-300"
//                 >
//                   Search
//                 </button>
//               </form>
//             </div>
//           </motion.div>

//           {/* Popular Links Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9 }}
//             className="mt-12 pt-8 border-t border-gray-800"
//           >
//             <p className="text-gray-500 text-sm mb-4">Popular Pages:</p>
//             <div className="flex flex-wrap gap-2 justify-center">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "Latest News", path: "/news" },
//                 { name: "Featured Stories", path: "/featured-news" },
//                 { name: "About Us", path: "/about" },
//                 { name: "Features", path: "/features" },
//                 { name: "Contact", path: "/contact" },
//               ].map((link, index) => (
//                 <Link
//                   key={index}
//                   to={link.path}
//                   className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-gray-400 text-sm hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="mt-12 flex justify-center gap-4"
//           >
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
//             >
//               <TwitterIcon className="text-lg" />
//             </a>
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
//             >
//               <FacebookIcon className="text-lg" />
//             </a>
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
//             >
//               <GitHubIcon className="text-lg" />
//             </a>
//           </motion.div>

//           {/* Fun Fact */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.1 }}
//             className="mt-8 text-gray-600 text-xs"
//           >
//             ⚡ Fun Fact: This 404 page is 100% cooler than the page you were looking for!
//           </motion.p>
//         </motion.div>
//       </div>
//     </>
//   );
// };





/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Material-UI Icons
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export const NotFound = () => {
  // Animated numbers for 404 effect
  const numbers = [4, 0, 4];

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Newsers</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist. Return to Newsers homepage for the latest news and updates." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black grid place-items-center px-4 py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                y: [null, -100, -200],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Animated Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center w-full mx-auto"
        >
          {/* Animated 404 Numbers */}
          <div className="grid grid-flow-col auto-cols-max justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {numbers.map((num, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="relative"
              >
                <div className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  {num}
                </div>
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Error Icon with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="mb-6"
          >
            <ErrorOutlineIcon className="text-blue-500 text-5xl sm:text-6xl md:text-7xl" />
          </motion.div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 w-full mx-auto"
          >
            The page you're looking for seems to have vanished into thin air. 
            Don't worry, let's get you back on track!
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="group relative px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <span className="grid grid-flow-col auto-cols-max items-center gap-2">
                <HomeIcon className="text-lg" />
                Back to Home
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </Link>

            <Link
              to="/news"
              className="group relative px-6 sm:px-8 py-3 rounded-full border border-blue-500/50 text-blue-400 font-semibold transition-all duration-300 hover:bg-blue-500/10 hover:scale-105"
            >
              <span className="grid grid-flow-col auto-cols-max items-center gap-2">
                <ArticleIcon className="text-lg" />
                Browse Articles
              </span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group relative px-6 sm:px-8 py-3 rounded-full border border-gray-700 text-gray-300 font-semibold transition-all duration-300 hover:bg-gray-800/50 hover:scale-105"
            >
              <span className="grid grid-flow-col auto-cols-max items-center gap-2">
                <ArrowBackIcon className="text-lg" />
                Go Back
              </span>
            </button>
          </motion.div>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 sm:mt-16"
          >
            <p className="text-gray-500 text-sm mb-4">Or search for what you're looking for:</p>
            <div className="w-full mx-auto">
              <form action="/search" method="get" className="relative">
                <input
                  type="text"
                  name="q"
                  placeholder="Search news, articles, topics..."
                  className="w-full px-5 py-3 pl-12 bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm rounded-full hover:scale-105 transition-all duration-300"
                >
                  Search
                </button>
              </form>
            </div>
          </motion.div>

          {/* Popular Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500 text-sm mb-4">Popular Pages:</p>
            <div className="grid grid-flow-col auto-cols-max flex-wrap gap-2 justify-center">
              {[
                { name: "Home", path: "/" },
                { name: "Latest News", path: "/news" },
                { name: "Featured Stories", path: "/featured-news" },
                { name: "About Us", path: "/about" },
                { name: "Features", path: "/features" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-gray-400 text-sm hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 grid grid-flow-col auto-cols-max justify-center gap-4"
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
            >
              <TwitterIcon className="text-lg" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
            >
              <FacebookIcon className="text-lg" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
            >
              <GitHubIcon className="text-lg" />
            </a>
          </motion.div>

          {/* Fun Fact */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-8 text-gray-600 text-xs"
          >
            ⚡ Fun Fact: This 404 page is 100% cooler than the page you were looking for!
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};