import profilePic from "../assets/raviKumarProfile.webp";
import {HERO_CONTENT} from "../constants";
import {motion}  from "framer-motion";

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
    return ( 
        <div className="pb-4 lg:mb-16">
              <div className="flex flex-wrap lg:flex-row-reverse ">

                <div className="w-full md:w-1/2  ">
                <div className="flex justify-center lg:p-8">
                    <motion.img src={profilePic} alt="Romuald ZOUNGLA"
                     className="w-full border border-stone-900 rounded-3xl" 
                     width={650}
                     height={650}
                     initial={{ x:100, opacity:0 }}
                     animate={{ x:0, opacity:1 }}
                     transition={{ duration:1, delay: 1.5}}
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
                   variants={childVariants}
                   className="text-xl lg:text-2xl font-semibold bg-gradient-to-r  from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent">
                            Développeur  Full Stack   
                   </motion.span> 
                  <motion.p variants={childVariants} className="my-2 max-w-lg py-2 text-xl leading-relaxed tracking-tighter">  {HERO_CONTENT}</motion.p>
                  <motion.a variants={childVariants} href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                   download className="bg-white rounded-full p-4 text-sm md:text-md text-stone-800 mb-10" >
                    Télécharger CV
                   </motion.a>
                </motion.div>
                </div>
              </div>
        </div>
     );
}
 
export default Hero;