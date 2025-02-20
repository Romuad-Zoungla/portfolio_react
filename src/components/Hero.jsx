/* eslint-disable react/no-unknown-property */
import profilePic from "../assets/romuald.jpg";
import {HERO_CONTENT} from "../constants";
import {motion}  from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text } from "@react-three/drei";
import { useEffect, useState } from "react";



{/*Apprendre à utiliser framer-motion */}
const containerVariants={
hidden: { opacity: 0, x: -100},
  visible: { 
    opacity: 1,
     x: 0,
    transition: {
         duration: 0.5,
         staggerChildren: 0.5,

         }
  }
}

const childVariants = {
    hidden: { opacity: 0, x: -100},
    visible: { 
        opacity: 1, 
        x: 0, 
        transition:  { 
            duration: 0.5
         } 
    }
}
 

const Hero = () => {

  const [textIndex, setTextIndex] = useState(0);
  const words = ["Développeur Full Stack", "Passionné de Web", "Créateur d’expériences digitales"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);



    return ( 
        <div className="pb-4 lg:mb-16  py-32">
              <div className="flex flex-wrap lg:flex-row-reverse gap-4 ">

                <div className="w-full md:w-[45%] flex items-center ">
                <div className="flex justify-center  lg:p-8">
                    <motion.img src={profilePic} alt="Romuald ZOUNGLA"
                     className="w-full border border-stone-900 rounded-3xl" 
                     width={650}
                     height={650}
                     initial={{ rotateY: 180, opacity: 0 }}
                       animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                     />
                </div>
                </div>
                <div className="w-full md:w-1/2  ">
                <motion.div variants={containerVariants} 
                initial="hidden" 
                animate="visible" 
                exit="hidden"
                 className="flex flex-col items-center lg:items-start mt-10">
                   
                   <motion.h2 
                    variants={childVariants}
                   className="pb-2 text-4xl tracking-tighter lg:text-7xl "> Godson Romuald

                   </motion.h2>
    
                   <motion.span
          className="text-2xl font-semibold bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent"
          key={textIndex}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.5 }}
        >
          {words[textIndex]}
        </motion.span>
                  <motion.p variants={childVariants} className="my-2 max-w-lg py-2 text-xl leading-relaxed tracking-tighter">  {HERO_CONTENT}</motion.p>
                  <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="relative inline-block p-4 text-sm md:text-md text-stone-800 bg-white rounded-full mb-10"
              whileHover={{
                boxShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,1)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{  duration: 1.5 }} 
            >
              Télécharger CV
            </motion.a>
                </motion.div>
                </div>
              </div>
        </div>
     );
}
 
export default Hero;