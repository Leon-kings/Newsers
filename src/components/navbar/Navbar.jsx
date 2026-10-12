
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";
// import axios from "axios";

// // Material-UI imports
// import BoltIcon from "@mui/icons-material/Bolt";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import SearchIcon from "@mui/icons-material/Search";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ContactSupportIcon from "@mui/icons-material/ContactSupport";
// import EmailIcon from "@mui/icons-material/Email";
// import LockIcon from "@mui/icons-material/Lock";
// import PersonIcon from "@mui/icons-material/Person";
// import SendIcon from "@mui/icons-material/Send";
// import LoginIcon from "@mui/icons-material/Login";
// import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

// // OpenWeatherMap API key (sign up at https://openweathermap.org/api to get your own)
// const WEATHER_API_KEY = "6bc580fe864033276e992601cf0c2cbb"; // Replace with your actual API key

// export const Navbar = () => {
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false);
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Weather and location state
//   const [weatherData, setWeatherData] = useState({
//     temperature: null,
//     city: "",
//     condition: "",
//     icon: "",
//   });
//   const [locationDate, setLocationDate] = useState({
//     date: "",
//     time: "",
//   });
//   const [isWeatherLoading, setIsWeatherLoading] = useState(true);

//   // Login form state
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   // Register form state
//   const [registerData, setRegisterData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // Contact form state
//   const [contactData, setContactData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   // Search state
//   const [searchQuery, setSearchQuery] = useState("");
//   // State to store search results data received from API
//   const [searchResults, setSearchResults] = useState(null);
//   const [isSearching, setIsSearching] = useState(false);

//   // Fetch weather and location data
//   useEffect(() => {
//     const fetchLocationAndWeather = () => {
//       if (!navigator.geolocation) {
//         handleFallback("Geolocation not supported");
//         return;
//       }

//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;

//           try {
//             const res = await axios.get(
//               `https://api.openweathermap.org/data/2.5/weather`,
//               {
//                 params: {
//                   lat: latitude,
//                   lon: longitude,
//                   units: "metric",
//                   appid: WEATHER_API_KEY,
//                 },
//               },
//             );

//             const data = res.data;

//             setWeatherData({
//               temperature: Math.round(data.main.temp),
//               city: data.name || "Unknown location",
//               condition: data.weather[0].description,
//               icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
//             });

//             updateLocalDateTime();
//             setIsWeatherLoading(false);
//           } catch (err) {
//             console.error("Weather fetch error:", err);
//             handleFallback("Failed to fetch weather");
//           }
//         },
//         (error) => {
//           console.error("Geolocation error:", error);
//           handleFallback("Location permission denied");
//         },
//       );
//     };

//     // ✅ Use browser time (no external API needed)
//     const updateLocalDateTime = () => {
//       const now = new Date();

//       setLocationDate({
//         date: now.toLocaleDateString(undefined, {
//           weekday: "long",
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         }),
//         time: now.toLocaleTimeString(undefined, {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       });
//     };

//     const handleFallback = (message) => {
//       setWeatherData({
//         temperature: "--",
//         city: "Kigali", // fallback based on your location
//         condition: "Unavailable",
//         icon: "",
//       });

//       updateLocalDateTime();
//       setIsWeatherLoading(false);
//       toast.warning(message);
//     };

//     fetchLocationAndWeather();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       fetchUserData(token);
//     }
//   }, []);

//   const fetchUserData = async (token) => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/auth/me", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUser(response.data.user);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       localStorage.removeItem("token");
//     }
//   };

//   const navLinks = [
//     { path: "/", label: "Home", requiresAuth: false },
//     { path: "/about", label: "About", requiresAuth: false },
//     { path: "/features", label: "Features", requiresAuth: false },
//     { path: "/news", label: "News", requiresAuth: false },
//     { path: "/featured-news", label: "Brief", requiresAuth: false },
//   ];

//   const getDashboardRoute = () => {
//     if (!user) return null;
//     if (user.role === "admin") {
//       return "/dashboard";
//     } else if (user.role === "user") {
//       return "/user/dashboard";
//     }
//     return null;
//   };

//   const handleDashboardClick = () => {
//     const dashboardRoute = getDashboardRoute();
//     if (dashboardRoute) {
//       navigate(dashboardRoute);
//     } else {
//       toast.error("Please login to access dashboard");
//       setIsLoginModalOpen(true);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         loginData,
//       );
//       const { token, user } = response.data;
//       localStorage.setItem("token", token);
//       setUser(user);
//       toast.success("Login successful!");
//       setIsLoginModalOpen(false);
//       setLoginData({ email: "", password: "" });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (registerData.password !== registerData.confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         {
//           name: registerData.name,
//           email: registerData.email,
//           password: registerData.password,
//         },
//       );
//       const { token, user } = response.data;
//       localStorage.setItem("token", token);
//       setUser(user);
//       toast.success("Registration successful!");
//       setIsRegisterModalOpen(false);
//       setRegisterData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleContact = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await axios.post("http://localhost:5000/api/contact", contactData);
//       toast.success("Message sent successfully!");
//       setIsContactModalOpen(false);
//       setContactData({ name: "", email: "", message: "" });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send message");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Updated handleSearch: fetches data from API and displays in modal
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       setIsSearching(true);
//       setSearchResults(null);
//       try {
//         // Simulating API call - replace with your actual search endpoint
//         // For demonstration, we're using a news API or mock data
//         // You can replace this with your actual backend endpoint
//         const response = await axios.get(
//           `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&apiKey=YOUR_NEWS_API_KEY`,
//           // If you don't have a real API key, you can use a mock endpoint or your backend
//           // For now, we'll simulate a successful response with mock data
//         );
//         setSearchResults(response.data);
//         toast.success(`Found ${response.data.articles?.length || 0} results`);
//       } catch (error) {
//         console.error("Search error:", error);
//         // If API fails, show mock data to demonstrate the feature
//         // This is just for demonstration - remove in production
//         setSearchResults({
//           articles: [
//             {
//               title: `Results for "${searchQuery}"`,
//               description: "This is a sample result. Replace with actual API integration.",
//               url: "#",
//               source: { name: "Newsers Demo" },
//               publishedAt: new Date().toISOString(),
//             },
//             {
//               title: `More about ${searchQuery}`,
//               description: "Second sample result showing how data appears in the modal.",
//               url: "#",
//               source: { name: "Newsers Demo" },
//               publishedAt: new Date().toISOString(),
//             },
//           ],
//           totalResults: 2,
//         });
//         toast.warning("Using demo data - integrate with real search API");
//       } finally {
//         setIsSearching(false);
//       }
//       // Do NOT close modal immediately - keep it open to show results
//       // setIsSearchModalOpen(false); // Removed this line
//       // setSearchQuery(""); // Don't clear yet
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     toast.success("Logged out successfully");
//     navigate("/");
//   };

//   // Open contact modal from anywhere
//   const openContactModal = () => {
//     setIsContactModalOpen(true);
//   };

//   // Function to close search modal and reset
//   const closeSearchModal = () => {
//     setIsSearchModalOpen(false);
//     setSearchQuery("");
//     setSearchResults(null);
//     setIsSearching(false);
//   };

//   return (
//     <>
//       {/* Navbar Container - sticky and higher z-index to stay above other content */}
//       <div className="sticky top-0 z-50">
//         {/* Top Bar with Black Background */}
//         <div className="bg-black hidden lg:block border-b border-gray-800">
//           <div className="container mx-auto px-4">
//             <div className="flex justify-between items-center py-2">
//               {/* Trending Section with Marquee */}
//               <div className="flex items-center flex-1">
//                 <div className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 w-8 h-8 flex items-center justify-center me-2">
//                   <BoltIcon
//                     className="text-white text-sm"
//                     style={{ fontSize: "16px" }}
//                   />
//                 </div>
//                 <div className="pe-2 me-3 border-r border-gray-700">
//                   <p className="mb-0 text-gray-300 text-sm font-normal">
//                     Trending
//                   </p>
//                 </div>
//                 <div className="overflow-hidden flex-1 bg-black max-w-[735px]">
//                   <div className="flex items-center space-x-2">
//                     <img
//                       src="https://i.abcnewsfe.com/a/e274162d-2de0-4937-a82c-32aaa82001de/abc_news_live-abc-ml-250210_1739199021469_hpMain_16x9.jpg"
//                       className="rounded-full border-2 border-blue-500 bg-black w-8 h-8 object-cover"
//                       alt="trending"
//                     />
//                     <div className="relative overflow-hidden w-full">
//                       <motion.div
//                         className="whitespace-nowrap inline-block"
//                         animate={{ x: ["0%", "-50%"] }}
//                         transition={{
//                           repeat: Infinity,
//                           duration: 20,
//                           ease: "linear",
//                         }}
//                       >
//                         <span className="text-gray-300 mx-4">
//                           Breaking: Major tech conference announces new AI innovations
//                         </span>
//                         <span className="text-gray-300 mx-4">
//                           • Global markets show positive trend after economic report
//                         </span>
//                         <span className="text-gray-300 mx-4">
//                           • Sports: Championship finals set for this weekend
//                         </span>
//                         <span className="text-gray-300 mx-4">
//                           • Weather update: Clear skies expected across the region
//                         </span>
//                         <span className="text-gray-300 mx-4">
//                           • Entertainment: New movie breaks box office records
//                         </span>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Links */}
//               <div className="flex items-center space-x-2">
//                 <div className="flex items-center text-gray-300 border-r border-gray-700 pr-2 mr-2">
//                   <CalendarTodayIcon
//                     className="text-gray-400 text-sm mr-1"
//                     style={{ fontSize: "14px" }}
//                   />
//                   <span className="text-sm">{locationDate.date}</span>
//                 </div>
//                 <p className="mb-0 text-gray-300 mr-2 text-sm">Follow Us:</p>
//                 <div className="flex space-x-2">
//                   <Link
//                     to="#"
//                     className="text-gray-400 hover:text-blue-400 transition-colors"
//                   >
//                     <FacebookIcon style={{ fontSize: "16px" }} />
//                   </Link>
//                   <Link
//                     to="#"
//                     className="text-gray-400 hover:text-blue-400 transition-colors"
//                   >
//                     <TwitterIcon style={{ fontSize: "16px" }} />
//                   </Link>
//                   <Link
//                     to="#"
//                     className="text-gray-400 hover:text-blue-400 transition-colors"
//                   >
//                     <InstagramIcon style={{ fontSize: "16px" }} />
//                   </Link>
//                   <Link
//                     to="#"
//                     className="text-gray-400 hover:text-blue-400 transition-colors"
//                   >
//                     <YouTubeIcon style={{ fontSize: "16px" }} />
//                   </Link>
//                   <Link
//                     to="#"
//                     className="text-gray-400 hover:text-blue-400 transition-colors"
//                   >
//                     <LinkedInIcon style={{ fontSize: "16px" }} />
//                   </Link>
//                   <Link
//                     to="#"
//                     className="text-gray-400 hover:text-blue-400 transition-colors"
//                   >
//                     <PinterestIcon style={{ fontSize: "16px" }} />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Navbar with Black Background */}
//         <div
//           className={`bg-black transition-all duration-300 ${scrolled ? "shadow-2xl" : ""} border-b border-gray-800`}
//         >
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <nav className="py-3 md:py-4">
//               <div className="flex justify-between items-center">
//                 {/* Logo */}
//                 <Link to="/" className="flex flex-col">
//                   <p className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl mb-0 leading-none font-bold">
//                     Newsers
//                   </p>
//                   <small className="text-gray-100 text-xs tracking-[8px] sm:tracking-[12px] pl-1">
//                     Newspaper
//                   </small>
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <div className="hidden xl:flex items-center space-x-6">
//                   <div className="flex space-x-6">
//                     {navLinks.map((link) => (
//                       <Link
//                         key={link.path}
//                         to={link.path}
//                         className={`nav-link relative ${
//                           location.pathname === link.path
//                             ? "text-blue-500"
//                             : "text-gray-300 hover:text-blue-400"
//                         } transition-colors font-medium`}
//                       >
//                         {link.label}
//                         {location.pathname === link.path && (
//                           <motion.div
//                             layoutId="activeNav"
//                             className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
//                             initial={false}
//                             transition={{
//                               type: "spring",
//                               stiffness: 380,
//                               damping: 30,
//                             }}
//                           />
//                         )}
//                       </Link>
//                     ))}

//                     {/* Contact Button that opens modal */}
//                     <button
//                       onClick={openContactModal}
//                       className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
//                     >
//                       Contact
//                     </button>
//                   </div>

//                   {/* Dashboard Button - Gradient based on role */}
//                   {user && getDashboardRoute() && (
//                     <button
//                       onClick={handleDashboardClick}
//                       className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
//                         user.role === "admin"
//                           ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
//                           : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
//                       } text-white shadow-lg`}
//                     >
//                       <DashboardIcon style={{ fontSize: "18px" }} />
//                       <span>Dashboard</span>
//                     </button>
//                   )}

//                   {/* Weather and Search */}
//                   <div className="flex items-center space-x-4">
//                     <div className="flex items-center">
//                       {weatherData.icon ? (
//                         <img
//                           src={weatherData.icon}
//                           alt={weatherData.condition}
//                           className="w-8 h-8"
//                         />
//                       ) : (
//                         <WbSunnyIcon
//                           className="text-blue-500"
//                           style={{ fontSize: "24px" }}
//                         />
//                       )}
//                       <div className="flex items-center ml-2">
//                         <strong className="text-2xl text-white">
//                           {isWeatherLoading
//                             ? "..."
//                             : `${weatherData.temperature}°C`}
//                         </strong>
//                         <div className="flex flex-col ml-2">
//                           <span className="text-gray-400 text-sm">
//                             {weatherData.city || "Loading..."}
//                           </span>
//                           <small className="text-gray-500 text-xs">
//                             {locationDate.time}
//                           </small>
//                         </div>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => setIsSearchModalOpen(true)}
//                       className="w-10 h-10 rounded-full border border-blue-500 bg-transparent flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 group"
//                     >
//                       <SearchIcon
//                         className="text-blue-500 group-hover:text-white"
//                         style={{ fontSize: "18px" }}
//                       />
//                     </button>
//                   </div>

//                   {/* Auth Buttons */}
//                   <div className="flex items-center space-x-3">
//                     {user ? (
//                       <button
//                         onClick={handleLogout}
//                         className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
//                       >
//                         Logout
//                       </button>
//                     ) : (
//                       <div className="flex space-x-2">
//                         <button
//                           onClick={() => setIsLoginModalOpen(true)}
//                           className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-1"
//                         >
//                           <LoginIcon style={{ fontSize: "18px" }} />
//                           <span>Login</span>
//                         </button>
//                         <button
//                           onClick={() => setIsRegisterModalOpen(true)}
//                           className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-1"
//                         >
//                           <AppRegistrationIcon style={{ fontSize: "18px" }} />
//                           <span>Register</span>
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="xl:hidden flex items-center space-x-3">
//                   <button
//                     onClick={() => setIsSearchModalOpen(true)}
//                     className="w-8 h-8 rounded-full border border-blue-500 bg-transparent flex items-center justify-center"
//                   >
//                     <SearchIcon
//                       className="text-blue-500"
//                       style={{ fontSize: "16px" }}
//                     />
//                   </button>
//                   <button
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     className="text-blue-500 focus:outline-none"
//                   >
//                     {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
//                   </button>
//                 </div>
//               </div>

//               {/* Mobile Menu */}
//               <AnimatePresence>
//                 {isMenuOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="xl:hidden mt-4 overflow-hidden"
//                   >
//                     <div className="flex flex-col space-y-3 pb-4">
//                       {navLinks.map((link) => (
//                         <Link
//                           key={link.path}
//                           to={link.path}
//                           onClick={() => setIsMenuOpen(false)}
//                           className={`${
//                             location.pathname === link.path
//                               ? "text-blue-500"
//                               : "text-gray-300"
//                           } hover:text-blue-400 transition-colors py-2`}
//                         >
//                           {link.label}
//                         </Link>
//                       ))}
//                       <button
//                         onClick={() => {
//                           openContactModal();
//                           setIsMenuOpen(false);
//                         }}
//                         className="text-gray-300 hover:text-blue-400 transition-colors py-2 text-left"
//                       >
//                         Contact Us
//                       </button>

//                       {user && getDashboardRoute() && (
//                         <button
//                           onClick={() => {
//                             handleDashboardClick();
//                             setIsMenuOpen(false);
//                           }}
//                           className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
//                             user.role === "admin"
//                               ? "bg-gradient-to-r from-red-500 to-red-600"
//                               : "bg-gradient-to-r from-green-500 to-green-600"
//                           } text-white`}
//                         >
//                           <DashboardIcon style={{ fontSize: "18px" }} />
//                           <span>Dashboard</span>
//                         </button>
//                       )}

//                       <div className="pt-2 flex flex-col space-y-2">
//                         {user ? (
//                           <button
//                             onClick={() => {
//                               handleLogout();
//                               setIsMenuOpen(false);
//                             }}
//                             className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg"
//                           >
//                             Logout
//                           </button>
//                         ) : (
//                           <>
//                             <button
//                               onClick={() => {
//                                 setIsLoginModalOpen(true);
//                                 setIsMenuOpen(false);
//                               }}
//                               className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
//                             >
//                               <LoginIcon style={{ fontSize: "18px" }} />
//                               <span>Login</span>
//                             </button>
//                             <button
//                               onClick={() => {
//                                 setIsRegisterModalOpen(true);
//                                 setIsMenuOpen(false);
//                               }}
//                               className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
//                             >
//                               <AppRegistrationIcon
//                                 style={{ fontSize: "18px" }}
//                               />
//                               <span>Register</span>
//                             </button>
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Login Modal */}
//       <AnimatePresence>
//         {isLoginModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
//               onClick={() => setIsLoginModalOpen(false)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="bg-black border border-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="flex flex-col md:flex-row">
//                   {/* Left Side - Image */}
//                   <div className="md:w-1/2 bg-gradient-to-br from-blue-900 to-indigo-900 p-8 flex items-center justify-center">
//                     <div className="text-center">
//                       <AccountCircleIcon
//                         className="text-white"
//                         style={{ fontSize: "64px" }}
//                       />
//                       <h3 className="text-white text-2xl font-bold mb-2 mt-4">
//                         Welcome Back!
//                       </h3>
//                       <p className="text-gray-300">
//                         Login to access your account and stay updated with the
//                         latest news
//                       </p>
//                     </div>
//                   </div>

//                   {/* Right Side - Form */}
//                   <div className="md:w-1/2 p-8">
//                     <h3 className="text-white text-2xl font-bold mb-6">
//                       Login
//                     </h3>
//                     <form onSubmit={handleLogin}>
//                       <div className="mb-4">
//                         <label className="block text-gray-300 mb-2">
//                           Email Address
//                         </label>
//                         <div className="relative">
//                           <EmailIcon
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                             style={{ fontSize: "20px" }}
//                           />
//                           <input
//                             type="email"
//                             value={loginData.email}
//                             onChange={(e) =>
//                               setLoginData({
//                                 ...loginData,
//                                 email: e.target.value,
//                               })
//                             }
//                             className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
//                             placeholder="Enter your email"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="mb-6">
//                         <label className="block text-gray-300 mb-2">
//                           Password
//                         </label>
//                         <div className="relative">
//                           <LockIcon
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                             style={{ fontSize: "20px" }}
//                           />
//                           <input
//                             type="password"
//                             value={loginData.password}
//                             onChange={(e) =>
//                               setLoginData({
//                                 ...loginData,
//                                 password: e.target.value,
//                               })
//                             }
//                             className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
//                             placeholder="Enter your password"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2"
//                       >
//                         {loading ? (
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                         ) : (
//                           <>
//                             <LoginIcon style={{ fontSize: "20px" }} />
//                             <span>Login</span>
//                           </>
//                         )}
//                       </button>
//                       <p className="text-gray-400 text-center mt-4">
//                         Don't have an account?{" "}
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setIsLoginModalOpen(false);
//                             setIsRegisterModalOpen(true);
//                           }}
//                           className="text-blue-500 hover:text-blue-400"
//                         >
//                           Register here
//                         </button>
//                       </p>
//                     </form>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Register Modal */}
//       <AnimatePresence>
//         {isRegisterModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
//               onClick={() => setIsRegisterModalOpen(false)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="bg-black border border-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="flex flex-col md:flex-row">
//                   {/* Left Side - Image */}
//                   <div className="md:w-1/2 bg-gradient-to-br from-green-900 to-green-700 p-8 flex items-center justify-center">
//                     <div className="text-center">
//                       <AppRegistrationIcon
//                         className="text-white"
//                         style={{ fontSize: "64px" }}
//                       />
//                       <h3 className="text-white text-2xl font-bold mb-2 mt-4">
//                         Join Us Today!
//                       </h3>
//                       <p className="text-gray-200">
//                         Create an account to get personalized news and updates
//                       </p>
//                     </div>
//                   </div>

//                   {/* Right Side - Form */}
//                   <div className="md:w-1/2 p-8">
//                     <h3 className="text-white text-2xl font-bold mb-6">
//                       Register
//                     </h3>
//                     <form onSubmit={handleRegister}>
//                       <div className="mb-4">
//                         <label className="block text-gray-300 mb-2">
//                           Full Name
//                         </label>
//                         <div className="relative">
//                           <PersonIcon
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                             style={{ fontSize: "20px" }}
//                           />
//                           <input
//                             type="text"
//                             value={registerData.name}
//                             onChange={(e) =>
//                               setRegisterData({
//                                 ...registerData,
//                                 name: e.target.value,
//                               })
//                             }
//                             className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
//                             placeholder="Enter your name"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="mb-4">
//                         <label className="block text-gray-300 mb-2">
//                           Email Address
//                         </label>
//                         <div className="relative">
//                           <EmailIcon
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                             style={{ fontSize: "20px" }}
//                           />
//                           <input
//                             type="email"
//                             value={registerData.email}
//                             onChange={(e) =>
//                               setRegisterData({
//                                 ...registerData,
//                                 email: e.target.value,
//                               })
//                             }
//                             className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
//                             placeholder="Enter your email"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="mb-4">
//                         <label className="block text-gray-300 mb-2">
//                           Password
//                         </label>
//                         <div className="relative">
//                           <LockIcon
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                             style={{ fontSize: "20px" }}
//                           />
//                           <input
//                             type="password"
//                             value={registerData.password}
//                             onChange={(e) =>
//                               setRegisterData({
//                                 ...registerData,
//                                 password: e.target.value,
//                               })
//                             }
//                             className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
//                             placeholder="Create a password"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="mb-6">
//                         <label className="block text-gray-300 mb-2">
//                           Confirm Password
//                         </label>
//                         <div className="relative">
//                           <LockIcon
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                             style={{ fontSize: "20px" }}
//                           />
//                           <input
//                             type="password"
//                             value={registerData.confirmPassword}
//                             onChange={(e) =>
//                               setRegisterData({
//                                 ...registerData,
//                                 confirmPassword: e.target.value,
//                               })
//                             }
//                             className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
//                             placeholder="Confirm your password"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
//                       >
//                         {loading ? (
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                         ) : (
//                           <>
//                             <AppRegistrationIcon style={{ fontSize: "20px" }} />
//                             <span>Register</span>
//                           </>
//                         )}
//                       </button>
//                       <p className="text-gray-400 text-center mt-4">
//                         Already have an account?{" "}
//                         <button
//                           type="button"
//                           onClick={() => {
//                             setIsRegisterModalOpen(false);
//                             setIsLoginModalOpen(true);
//                           }}
//                           className="text-green-500 hover:text-green-400"
//                         >
//                           Login here
//                         </button>
//                       </p>
//                     </form>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Contact Modal */}
//       <AnimatePresence>
//         {isContactModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
//               onClick={() => setIsContactModalOpen(false)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="bg-black border border-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="flex flex-col md:flex-row">
//                   {/* Left Side - Image */}
//                   <div className="md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex items-center justify-center">
//                     <div className="text-center">
//                       <ContactSupportIcon
//                         className="text-white"
//                         style={{ fontSize: "64px" }}
//                       />
//                       <h3 className="text-white text-2xl font-bold mb-2 mt-4">
//                         Get in Touch
//                       </h3>
//                       <p className="text-white">
//                         We'd love to hear from you! Send us a message and we'll
//                         respond as soon as possible.
//                       </p>
//                     </div>
//                   </div>

//                   {/* Right Side - Form */}
//                   <div className="md:w-1/2 p-8">
//                     <h3 className="text-white text-2xl font-bold mb-6">
//                       Contact Us
//                     </h3>
//                     <form onSubmit={handleContact}>
//                       <div className="mb-4">
//                         <label className="block text-gray-300 mb-2">
//                           Your Name
//                         </label>
//                         <div className="relative">
//                           <PersonIcon
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                             style={{ fontSize: "20px" }}
//                           />
//                           <input
//                             type="text"
//                             value={contactData.name}
//                             onChange={(e) =>
//                               setContactData({
//                                 ...contactData,
//                                 name: e.target.value,
//                               })
//                             }
//                             className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
//                             placeholder="Your name"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="mb-4">
//                         <label className="block text-gray-300 mb-2">
//                           Email Address
//                         </label>
//                         <div className="relative">
//                           <EmailIcon
//                             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                             style={{ fontSize: "20px" }}
//                           />
//                           <input
//                             type="email"
//                             value={contactData.email}
//                             onChange={(e) =>
//                               setContactData({
//                                 ...contactData,
//                                 email: e.target.value,
//                               })
//                             }
//                             className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
//                             placeholder="Your email"
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="mb-6">
//                         <label className="block text-gray-300 mb-2">
//                           Message
//                         </label>
//                         <textarea
//                           rows="4"
//                           value={contactData.message}
//                           onChange={(e) =>
//                             setContactData({
//                               ...contactData,
//                               message: e.target.value,
//                             })
//                           }
//                           className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
//                           placeholder="Your message"
//                           required
//                         ></textarea>
//                       </div>
//                       <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
//                       >
//                         {loading ? (
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                         ) : (
//                           <>
//                             <SendIcon style={{ fontSize: "20px" }} />
//                             <span>Send Message</span>
//                           </>
//                         )}
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Search Modal with Data Display */}
//       <AnimatePresence>
//         {isSearchModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 overflow-y-auto"
//               onClick={closeSearchModal}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0, y: -50 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.9, opacity: 0, y: -50 }}
//                 className="bg-black border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="sticky top-0 bg-black z-10 p-6 pb-4 border-b border-gray-800">
//                   <div className="flex justify-between items-center">
//                     <h3 className="text-white text-2xl font-bold">
//                       Search Articles
//                     </h3>
//                     <button
//                       onClick={closeSearchModal}
//                       className="text-gray-400 hover:text-white transition-colors"
//                     >
//                       <CloseIcon />
//                     </button>
//                   </div>

//                   <form onSubmit={handleSearch} className="mt-4">
//                     <div className="relative">
//                       <SearchIcon
//                         className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
//                         style={{ fontSize: "24px" }}
//                       />
//                       <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white text-lg focus:outline-none focus:border-blue-500"
//                         placeholder="Search for news, articles, topics..."
//                       />
//                     </div>

//                     <div className="mt-4 flex justify-end">
//                       <button
//                         type="submit"
//                         disabled={isSearching || !searchQuery.trim()}
//                         className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         {isSearching ? (
//                           <div className="flex items-center space-x-2">
//                             <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                             <span>Searching...</span>
//                           </div>
//                         ) : (
//                           "Search"
//                         )}
//                       </button>
//                     </div>
//                   </form>

//                   <div className="mt-3">
//                     <p className="text-gray-400 text-sm">Popular searches:</p>
//                     <div className="flex flex-wrap gap-2 mt-2">
//                       {[
//                         "Technology",
//                         "Politics",
//                         "Sports",
//                         "Entertainment",
//                         "Business",
//                         "Health",
//                       ].map((tag) => (
//                         <button
//                           key={tag}
//                           type="button"
//                           onClick={() => {
//                             setSearchQuery(tag);
//                             // Auto-trigger search after setting query
//                             setTimeout(() => {
//                               const fakeEvent = { preventDefault: () => {} };
//                               handleSearch(fakeEvent);
//                             }, 100);
//                           }}
//                           className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-gray-300 text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition-all duration-300"
//                         >
//                           {tag}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Search Results Display Section */}
//                 <div className="p-6 pt-4">
//                   {isSearching ? (
//                     <div className="flex justify-center items-center py-12">
//                       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//                     </div>
//                   ) : searchResults ? (
//                     <div>
//                       <div className="flex justify-between items-center mb-4">
//                         <h4 className="text-white text-xl font-semibold">
//                           Search Results
//                         </h4>
//                         <span className="text-gray-400 text-sm">
//                           {searchResults.totalResults || searchResults.articles?.length || 0} results found
//                         </span>
//                       </div>
//                       <div className="space-y-4">
//                         {(searchResults.articles || searchResults.results || []).map((item, index) => (
//                           <div
//                             key={index}
//                             className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-all duration-300"
//                           >
//                             <h5 className="text-white font-semibold text-lg mb-2">
//                               {item.title || item.headline || `Result ${index + 1}`}
//                             </h5>
//                             <p className="text-gray-400 text-sm mb-2">
//                               {item.description || item.summary || "No description available"}
//                             </p>
//                             <div className="flex justify-between items-center">
//                               <span className="text-gray-500 text-xs">
//                                 {item.source?.name || item.author || "Newsers"}
//                               </span>
//                               <span className="text-gray-500 text-xs">
//                                 {item.publishedAt
//                                   ? new Date(item.publishedAt).toLocaleDateString()
//                                   : new Date().toLocaleDateString()}
//                               </span>
//                             </div>
//                             {item.url && (
//                               <a
//                                 href={item.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-block mt-3 text-blue-400 hover:text-blue-300 text-sm"
//                               >
//                                 Read more →
//                               </a>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ) : searchQuery && !isSearching ? (
//                     <div className="text-center py-12">
//                       <p className="text-gray-400">
//                         Enter a search term above to find articles
//                       </p>
//                     </div>
//                   ) : (
//                     <div className="text-center py-12">
//                       <p className="text-gray-400">
//                         Search for news, articles, and more
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };











/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

// Material-UI imports
import BoltIcon from "@mui/icons-material/Bolt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

// OpenWeatherMap API key (sign up at https://openweathermap.org/api to get your own)
const WEATHER_API_KEY = "6bc580fe864033276e992601cf0c2cbb"; // Replace with your actual API key

export const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Weather and location state
  const [weatherData, setWeatherData] = useState({
    temperature: null,
    city: "",
    condition: "",
    icon: "",
  });
  const [locationDate, setLocationDate] = useState({
    date: "",
    time: "",
  });
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Register form state
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Contact form state
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  // State to store search results data received from API
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Fetch weather and location data
  useEffect(() => {
    const fetchLocationAndWeather = () => {
      if (!navigator.geolocation) {
        handleFallback("Geolocation not supported");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const res = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather`,
              {
                params: {
                  lat: latitude,
                  lon: longitude,
                  units: "metric",
                  appid: WEATHER_API_KEY,
                },
              },
            );

            const data = res.data;

            setWeatherData({
              temperature: Math.round(data.main.temp),
              city: data.name || "Unknown location",
              condition: data.weather[0].description,
              icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            });

            updateLocalDateTime();
            setIsWeatherLoading(false);
          } catch (err) {
            console.error("Weather fetch error:", err);
            handleFallback("Failed to fetch weather");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          handleFallback("Location permission denied");
        },
      );
    };

    // ✅ Use browser time (no external API needed)
    const updateLocalDateTime = () => {
      const now = new Date();

      setLocationDate({
        date: now.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: now.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    };

    const handleFallback = (message) => {
      setWeatherData({
        temperature: "--",
        city: "Kigali", // fallback based on your location
        condition: "Unavailable",
        icon: "",
      });

      updateLocalDateTime();
      setIsWeatherLoading(false);
      toast.warning(message);
    };

    fetchLocationAndWeather();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("token");
    }
  };

  const navLinks = [
    { path: "/", label: "Home", requiresAuth: false },
    { path: "/about", label: "About", requiresAuth: false },
    { path: "/features", label: "Features", requiresAuth: false },
    { path: "/news", label: "News", requiresAuth: false },
    { path: "/featured-news", label: "Brief", requiresAuth: false },
  ];

  const getDashboardRoute = () => {
    if (!user) return null;
    if (user.role === "admin") {
      return "/dashboard";
    } else if (user.role === "user") {
      return "/user/dashboard";
    }
    return null;
  };

  const handleDashboardClick = () => {
    const dashboardRoute = getDashboardRoute();
    if (dashboardRoute) {
      navigate(dashboardRoute);
    } else {
      toast.error("Please login to access dashboard");
      setIsLoginModalOpen(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData,
      );
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      toast.success("Login successful!");
      setIsLoginModalOpen(false);
      setLoginData({ email: "", password: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
        },
      );
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUser(user);
      toast.success("Registration successful!");
      setIsRegisterModalOpen(false);
      setRegisterData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/contact", contactData);
      toast.success("Message sent successfully!");
      setIsContactModalOpen(false);
      setContactData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  // Updated handleSearch: fetches data from API and displays in modal
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      setSearchResults(null);
      try {
        // Simulating API call - replace with your actual search endpoint
        // For demonstration, we're using a news API or mock data
        // You can replace this with your actual backend endpoint
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&apiKey=YOUR_NEWS_API_KEY`,
          // If you don't have a real API key, you can use a mock endpoint or your backend
          // For now, we'll simulate a successful response with mock data
        );
        setSearchResults(response.data);
        toast.success(`Found ${response.data.articles?.length || 0} results`);
      } catch (error) {
        console.error("Search error:", error);
        // If API fails, show mock data to demonstrate the feature
        // This is just for demonstration - remove in production
        setSearchResults({
          articles: [
            {
              title: `Results for "${searchQuery}"`,
              description: "This is a sample result. Replace with actual API integration.",
              url: "#",
              source: { name: "Newsers Demo" },
              publishedAt: new Date().toISOString(),
            },
            {
              title: `More about ${searchQuery}`,
              description: "Second sample result showing how data appears in the modal.",
              url: "#",
              source: { name: "Newsers Demo" },
              publishedAt: new Date().toISOString(),
            },
          ],
          totalResults: 2,
        });
        toast.warning("Using demo data - integrate with real search API");
      } finally {
        setIsSearching(false);
      }
      // Do NOT close modal immediately - keep it open to show results
      // setIsSearchModalOpen(false); // Removed this line
      // setSearchQuery(""); // Don't clear yet
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  // Open contact modal from anywhere
  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  // Function to close search modal and reset
  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
    setSearchQuery("");
    setSearchResults(null);
    setIsSearching(false);
  };

  return (
    <>
      {/* Navbar Container - sticky and higher z-index to stay above other content */}
      <div className="sticky top-0 z-50">
        {/* Top Bar with Black Background */}
        <div className="bg-black hidden lg:block border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-[1fr_auto] items-center py-2">
              {/* Trending Section with Marquee */}
              <div className="grid grid-cols-[auto_auto_1fr] items-center">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 w-8 h-8 grid place-items-center me-2">
                  <BoltIcon
                    className="text-white text-sm"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <div className="pe-2 me-3 border-r border-gray-700">
                  <p className="mb-0 text-gray-300 text-sm font-normal">
                    Trending
                  </p>
                </div>
                <div className="overflow-hidden bg-black w-full">
                  <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                    <img
                      src="https://i.abcnewsfe.com/a/e274162d-2de0-4937-a82c-32aaa82001de/abc_news_live-abc-ml-250210_1739199021469_hpMain_16x9.jpg"
                      className="rounded-full border-2 border-blue-500 bg-black w-8 h-8 object-cover"
                      alt="trending"
                    />
                    <div className="relative overflow-hidden w-full">
                      <motion.div
                        className="whitespace-nowrap inline-block"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 20,
                          ease: "linear",
                        }}
                      >
                        <span className="text-gray-300 mx-4">
                          Breaking: Major tech conference announces new AI innovations
                        </span>
                        <span className="text-gray-300 mx-4">
                          • Global markets show positive trend after economic report
                        </span>
                        <span className="text-gray-300 mx-4">
                          • Sports: Championship finals set for this weekend
                        </span>
                        <span className="text-gray-300 mx-4">
                          • Weather update: Clear skies expected across the region
                        </span>
                        <span className="text-gray-300 mx-4">
                          • Entertainment: New movie breaks box office records
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-flow-col auto-cols-max items-center gap-2">
                <div className="grid grid-cols-[auto_auto] items-center text-gray-300 border-r border-gray-700 pr-2 mr-2">
                  <CalendarTodayIcon
                    className="text-gray-400 text-sm mr-1"
                    style={{ fontSize: "14px" }}
                  />
                  <span className="text-sm">{locationDate.date}</span>
                </div>
                <p className="mb-0 text-gray-300 mr-2 text-sm">Follow Us:</p>
                <div className="grid grid-flow-col auto-cols-max gap-2">
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FacebookIcon style={{ fontSize: "16px" }} />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <TwitterIcon style={{ fontSize: "16px" }} />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <InstagramIcon style={{ fontSize: "16px" }} />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <YouTubeIcon style={{ fontSize: "16px" }} />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <LinkedInIcon style={{ fontSize: "16px" }} />
                  </Link>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <PinterestIcon style={{ fontSize: "16px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar with Black Background */}
        <div
          className={`bg-black transition-all duration-300 ${scrolled ? "shadow-2xl" : ""} border-b border-gray-800`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="py-3 md:py-4">
              <div className="grid grid-cols-[auto_1fr] items-center">
                {/* Logo */}
                <Link to="/" className="grid grid-cols-1">
                  <p className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl mb-0 leading-none font-bold">
                    Newsers
                  </p>
                  <small className="text-gray-100 text-xs tracking-[8px] sm:tracking-[12px] pl-1">
                    Newspaper
                  </small>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden xl:grid grid-flow-col auto-cols-max items-center gap-6 justify-end">
                  <div className="grid grid-flow-col auto-cols-max gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`nav-link relative ${
                          location.pathname === link.path
                            ? "text-blue-500"
                            : "text-gray-300 hover:text-blue-400"
                        } transition-colors font-medium`}
                      >
                        {link.label}
                        {location.pathname === link.path && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    ))}

                    {/* Contact Button that opens modal */}
                    <button
                      onClick={openContactModal}
                      className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                    >
                      Contact
                    </button>
                  </div>

                  {/* Dashboard Button - Gradient based on role */}
                  {user && getDashboardRoute() && (
                    <button
                      onClick={handleDashboardClick}
                      className={`grid grid-cols-[auto_1fr] items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                        user.role === "admin"
                          ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                          : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      } text-white shadow-lg`}
                    >
                      <DashboardIcon style={{ fontSize: "18px" }} />
                      <span>Dashboard</span>
                    </button>
                  )}

                  {/* Weather and Search */}
                  <div className="grid grid-flow-col auto-cols-max items-center gap-4">
                    <div className="grid grid-flow-col auto-cols-max items-center">
                      {weatherData.icon ? (
                        <img
                          src={weatherData.icon}
                          alt={weatherData.condition}
                          className="w-8 h-8"
                        />
                      ) : (
                        <WbSunnyIcon
                          className="text-blue-500"
                          style={{ fontSize: "24px" }}
                        />
                      )}
                      <div className="grid grid-flow-col auto-cols-max items-center ml-2">
                        <strong className="text-2xl text-white">
                          {isWeatherLoading
                            ? "..."
                            : `${weatherData.temperature}°C`}
                        </strong>
                        <div className="grid grid-cols-1 ml-2">
                          <span className="text-gray-400 text-sm">
                            {weatherData.city || "Loading..."}
                          </span>
                          <small className="text-gray-500 text-xs">
                            {locationDate.time}
                          </small>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsSearchModalOpen(true)}
                      className="w-10 h-10 rounded-full border border-blue-500 bg-transparent grid place-items-center hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                    >
                      <SearchIcon
                        className="text-blue-500 group-hover:text-white"
                        style={{ fontSize: "18px" }}
                      />
                    </button>
                  </div>

                  {/* Auth Buttons */}
                  <div className="grid grid-flow-col auto-cols-max items-center gap-3">
                    {user ? (
                      <button
                        onClick={handleLogout}
                        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Logout
                      </button>
                    ) : (
                      <div className="grid grid-flow-col auto-cols-max gap-2">
                        <button
                          onClick={() => setIsLoginModalOpen(true)}
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg grid grid-cols-[auto_1fr] items-center gap-1"
                        >
                          <LoginIcon style={{ fontSize: "18px" }} />
                          <span>Login</span>
                        </button>
                        <button
                          onClick={() => setIsRegisterModalOpen(true)}
                          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg grid grid-cols-[auto_1fr] items-center gap-1"
                        >
                          <AppRegistrationIcon style={{ fontSize: "18px" }} />
                          <span>Register</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="xl:hidden grid grid-flow-col auto-cols-max items-center gap-3">
                  <button
                    onClick={() => setIsSearchModalOpen(true)}
                    className="w-8 h-8 rounded-full border border-blue-500 bg-transparent grid place-items-center"
                  >
                    <SearchIcon
                      className="text-blue-500"
                      style={{ fontSize: "16px" }}
                    />
                  </button>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-blue-500 focus:outline-none"
                  >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="xl:hidden mt-4 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-3 pb-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`${
                            location.pathname === link.path
                              ? "text-blue-500"
                              : "text-gray-300"
                          } hover:text-blue-400 transition-colors py-2`}
                        >
                          {link.label}
                        </Link>
                      ))}
                      <button
                        onClick={() => {
                          openContactModal();
                          setIsMenuOpen(false);
                        }}
                        className="text-gray-300 hover:text-blue-400 transition-colors py-2 text-left"
                      >
                        Contact Us
                      </button>

                      {user && getDashboardRoute() && (
                        <button
                          onClick={() => {
                            handleDashboardClick();
                            setIsMenuOpen(false);
                          }}
                          className={`grid grid-cols-[auto_1fr] items-center gap-2 px-4 py-2 rounded-lg ${
                            user.role === "admin"
                              ? "bg-gradient-to-r from-red-500 to-red-600"
                              : "bg-gradient-to-r from-green-500 to-green-600"
                          } text-white`}
                        >
                          <DashboardIcon style={{ fontSize: "18px" }} />
                          <span>Dashboard</span>
                        </button>
                      )}

                      <div className="pt-2 grid grid-cols-1 gap-2">
                        {user ? (
                          <button
                            onClick={() => {
                              handleLogout();
                              setIsMenuOpen(false);
                            }}
                            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg"
                          >
                            Logout
                          </button>
                        ) : (
                          <>
                            <button
                              onClick={() => {
                                setIsLoginModalOpen(true);
                                setIsMenuOpen(false);
                              }}
                              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg grid grid-cols-[auto_1fr] items-center justify-center gap-2"
                            >
                              <LoginIcon style={{ fontSize: "18px" }} />
                              <span>Login</span>
                            </button>
                            <button
                              onClick={() => {
                                setIsRegisterModalOpen(true);
                                setIsMenuOpen(false);
                              }}
                              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg grid grid-cols-[auto_1fr] items-center justify-center gap-2"
                            >
                              <AppRegistrationIcon
                                style={{ fontSize: "18px" }}
                              />
                              <span>Register</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 grid place-items-center p-4"
              onClick={() => setIsLoginModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-black border border-gray-800 rounded-2xl w-full overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Side - Image */}
                  <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-8 grid place-items-center">
                    <div className="text-center">
                      <AccountCircleIcon
                        className="text-white"
                        style={{ fontSize: "64px" }}
                      />
                      <h3 className="text-white text-2xl font-bold mb-2 mt-4">
                        Welcome Back!
                      </h3>
                      <p className="text-gray-300">
                        Login to access your account and stay updated with the
                        latest news
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-bold mb-6">
                      Login
                    </h3>
                    <form onSubmit={handleLogin}>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <EmailIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "20px" }}
                          />
                          <input
                            type="email"
                            value={loginData.email}
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                email: e.target.value,
                              })
                            }
                            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-300 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <LockIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "20px" }}
                          />
                          <input
                            type="password"
                            value={loginData.password}
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                password: e.target.value,
                              })
                            }
                            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 grid grid-cols-[auto_1fr] items-center justify-center gap-2"
                      >
                        {loading ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        ) : (
                          <>
                            <LoginIcon style={{ fontSize: "20px" }} />
                            <span>Login</span>
                          </>
                        )}
                      </button>
                      <p className="text-gray-400 text-center mt-4">
                        Don't have an account?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setIsLoginModalOpen(false);
                            setIsRegisterModalOpen(true);
                          }}
                          className="text-blue-500 hover:text-blue-400"
                        >
                          Register here
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Register Modal */}
      <AnimatePresence>
        {isRegisterModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 grid place-items-center p-4"
              onClick={() => setIsRegisterModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-black border border-gray-800 rounded-2xl w-full overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Side - Image */}
                  <div className="bg-gradient-to-br from-green-900 to-green-700 p-8 grid place-items-center">
                    <div className="text-center">
                      <AppRegistrationIcon
                        className="text-white"
                        style={{ fontSize: "64px" }}
                      />
                      <h3 className="text-white text-2xl font-bold mb-2 mt-4">
                        Join Us Today!
                      </h3>
                      <p className="text-gray-200">
                        Create an account to get personalized news and updates
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-bold mb-6">
                      Register
                    </h3>
                    <form onSubmit={handleRegister}>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <PersonIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "20px" }}
                          />
                          <input
                            type="text"
                            value={registerData.name}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                name: e.target.value,
                              })
                            }
                            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <EmailIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "20px" }}
                          />
                          <input
                            type="email"
                            value={registerData.email}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                email: e.target.value,
                              })
                            }
                            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <LockIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "20px" }}
                          />
                          <input
                            type="password"
                            value={registerData.password}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                password: e.target.value,
                              })
                            }
                            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                            placeholder="Create a password"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-300 mb-2">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <LockIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "20px" }}
                          />
                          <input
                            type="password"
                            value={registerData.confirmPassword}
                            onChange={(e) =>
                              setRegisterData({
                                ...registerData,
                                confirmPassword: e.target.value,
                              })
                            }
                            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
                            placeholder="Confirm your password"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 grid grid-cols-[auto_1fr] items-center justify-center gap-2"
                      >
                        {loading ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        ) : (
                          <>
                            <AppRegistrationIcon style={{ fontSize: "20px" }} />
                            <span>Register</span>
                          </>
                        )}
                      </button>
                      <p className="text-gray-400 text-center mt-4">
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setIsRegisterModalOpen(false);
                            setIsLoginModalOpen(true);
                          }}
                          className="text-green-500 hover:text-green-400"
                        >
                          Login here
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 grid place-items-center p-4"
              onClick={() => setIsContactModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-black border border-gray-800 rounded-2xl w-full overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Side - Image */}
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 grid place-items-center">
                    <div className="text-center">
                      <ContactSupportIcon
                        className="text-white"
                        style={{ fontSize: "64px" }}
                      />
                      <h3 className="text-white text-2xl font-bold mb-2 mt-4">
                        Get in Touch
                      </h3>
                      <p className="text-white">
                        We'd love to hear from you! Send us a message and we'll
                        respond as soon as possible.
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-bold mb-6">
                      Contact Us
                    </h3>
                    <form onSubmit={handleContact}>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <PersonIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "20px" }}
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
                            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                            placeholder="Your name"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <EmailIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            style={{ fontSize: "20px" }}
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
                            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                            placeholder="Your email"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-300 mb-2">
                          Message
                        </label>
                        <textarea
                          rows="4"
                          value={contactData.message}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              message: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                          placeholder="Your message"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 grid grid-cols-[auto_1fr] items-center justify-center gap-2"
                      >
                        {loading ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        ) : (
                          <>
                            <SendIcon style={{ fontSize: "20px" }} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Modal with Data Display */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-95 z-50 grid place-items-center p-4 overflow-y-auto"
              onClick={closeSearchModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: -50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: -50 }}
                className="bg-black border border-gray-800 rounded-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-black z-10 p-6 pb-4 border-b border-gray-800">
                  <div className="grid grid-cols-[1fr_auto] items-center justify-between">
                    <h3 className="text-white text-2xl font-bold">
                      Search Articles
                    </h3>
                    <button
                      onClick={closeSearchModal}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <CloseIcon />
                    </button>
                  </div>

                  <form onSubmit={handleSearch} className="mt-4">
                    <div className="relative">
                      <SearchIcon
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                        style={{ fontSize: "24px" }}
                      />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white text-lg focus:outline-none focus:border-blue-500"
                        placeholder="Search for news, articles, topics..."
                      />
                    </div>

                    <div className="mt-4 grid justify-end">
                      <button
                        type="submit"
                        disabled={isSearching || !searchQuery.trim()}
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSearching ? (
                          <div className="grid grid-flow-col auto-cols-max items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Searching...</span>
                          </div>
                        ) : (
                          "Search"
                        )}
                      </button>
                    </div>
                  </form>

                  <div className="mt-3">
                    <p className="text-gray-400 text-sm">Popular searches:</p>
                    <div className="grid grid-flow-col auto-cols-max flex-wrap gap-2 mt-2">
                      {[
                        "Technology",
                        "Politics",
                        "Sports",
                        "Entertainment",
                        "Business",
                        "Health",
                      ].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            setSearchQuery(tag);
                            // Auto-trigger search after setting query
                            setTimeout(() => {
                              const fakeEvent = { preventDefault: () => {} };
                              handleSearch(fakeEvent);
                            }, 100);
                          }}
                          className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-gray-300 text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Search Results Display Section */}
                <div className="p-6 pt-4">
                  {isSearching ? (
                    <div className="grid place-items-center py-12">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    </div>
                  ) : searchResults ? (
                    <div>
                      <div className="grid grid-cols-[1fr_auto] items-center justify-between mb-4">
                        <h4 className="text-white text-xl font-semibold">
                          Search Results
                        </h4>
                        <span className="text-gray-400 text-sm">
                          {searchResults.totalResults || searchResults.articles?.length || 0} results found
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {(searchResults.articles || searchResults.results || []).map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-blue-500 transition-all duration-300"
                          >
                            <h5 className="text-white font-semibold text-lg mb-2">
                              {item.title || item.headline || `Result ${index + 1}`}
                            </h5>
                            <p className="text-gray-400 text-sm mb-2">
                              {item.description || item.summary || "No description available"}
                            </p>
                            <div className="grid grid-cols-[1fr_auto] items-center justify-between">
                              <span className="text-gray-500 text-xs">
                                {item.source?.name || item.author || "Newsers"}
                              </span>
                              <span className="text-gray-500 text-xs">
                                {item.publishedAt
                                  ? new Date(item.publishedAt).toLocaleDateString()
                                  : new Date().toLocaleDateString()}
                              </span>
                            </div>
                            {item.url && (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-blue-400 hover:text-blue-300 text-sm"
                              >
                                Read more →
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : searchQuery && !isSearching ? (
                    <div className="text-center py-12">
                      <p className="text-gray-400">
                        Enter a search term above to find articles
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-400">
                        Search for news, articles, and more
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};