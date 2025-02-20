import { FaLinkedin, FaGithub } from "react-icons/fa"; 
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "" },
  { name: "Projets", href: "" },
  { name: "Expériences", href: "" },
  { name: "Formations", href: "" },
  { name: "Contact", href: "" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
          <div className="fixed top-0 left-0 w-full h-16 bg-gradient-to-b from-purple-500/10 to-transparent backdrop-blur-[100px] pointer-events-none z-10">
      {/* Blurry Effect Below Header */}
  
      </div>
      
    <header
      className={`fixed top-3 left-0 right-0 mx-auto w-[85%] md:w-[90%] max-w-7xl z-50 rounded-full lg:border lg:border-slate-500/10 flex-none shadow-sm transition-colors duration-500 lg:z-50 dark:border-slate-50/[0.06] bg-slate-50/5 backdrop-blur-2xl supports-backdrop-blur:bg-white/10 dark:bg-slate-900/5 -mb-20 ${
        scrolled ? "shadow-md backdrop-blur-2xl supports-backdrop-blur:bg-white/10" : "bg-transparent backdrop-blur-2xl supports-backdrop-blur:bg-white/10"
      }`}
    > 
  
      <div className="  mx-auto flex items-center justify-between px-4">
          <a href="#" className={`text-xl lg:text-2xl font-bold ${scrolled ? "dark:text-white" : "dark:text-white"}`}>
            <img src={logo} alt="Logo" className="mx-2" width={50} height={33} />
          </a>
          <nav className="hidden lg:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                className="text-lg lg:text-[18px] 2xl:text-[20px] font-semibold dark:text-white text-gray-700 hover:text-indigo-600 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {/* DarkModeSwitcher can go here */}
            <div className="m-4 flex items-center justify-center gap-4 text-2xl">
              <a href="http://linkedin.com/in/romuald-missimahou-zoungla-5100a4228" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Romuad-Zoungla" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="http://twitter.com/in/romuald-missimahou-zoungla-5100a4228" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <BsTwitterX color="white" />
              </a>
            </div>
            <button className="hidden lg:block bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.575-2.025 2.138-3.4T11 4.075v8.075l-.9-.875Q9.825 11 9.413 11t-.713.3q-.275.275-.275.7t.275.7l2.6 2.6q.3.3.7.3t.7-.3l2.6-2.6q.275-.275.287-.687T15.3 11.3q-.275-.275-.687-.288t-.713.263l-.9.875V4.075q2.575.35 4.288 2.313T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20z" />
                </svg>
                CV
              </div>
            </button>
            <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu size={28} className={`text-lg ${scrolled ? "dark:text-white" : "dark:text-white"}`} />
            </button>
          </div>
        </div>

    </header>


    {isMenuOpen && (
      <>
        {/* Overlay */}
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Menu */}
        <motion.div
          className="fixed left-0 top-0 backdrop-blur-none translate-x-0 h-full w-[50%] bg-[#0b1727] text-white p-6 z-[100] shadow-lg"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">MyMarket</h3>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} className="text-white hover:text-gray-400" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.575-2.025 2.138-3.4T11 4.075v8.075l-.9-.875Q9.825 11 9.413 11t-.713.3q-.275.275-.275.7t.275.7l2.6 2.6q.3.3.7.3t.7-.3l2.6-2.6q.275-.275.287-.687T15.3 11.3q-.275-.275-.687-.288t-.713.263l-.9.875V4.075q2.575.35 4.288 2.313T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20z" />
                  </svg>
                  CV
                </div>
              </button>
            </div>
          </nav>
        </motion.div>
      </>
    )}
  
  </>
  );
};

export default Navbar;
