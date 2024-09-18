import {RiReactjsLine}  from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {DiRedis} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import {motion} from "framer-motion";

const iconVariants = (duration) =>(
    {
        initial: { 
                   y: -10  
                },
        animate: {  
                    y:[10, -10],
        transition: {  
            duration: duration, 
            ease: "linear",
            repeat: Infinity,
            repeatType:"reverse",
            
         }
        }
    }
)
const Technologies = () => {
    return (  
    <div className="pb-8 md:pb-12">
        <motion.h2
         initial={{ opacity: 0, y: -100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.5 }}
         viewport={{ once: true, amount: 0.5 }}
         className="py-6 md:my-12 text-center text-4xl ">
            Mes Technologies 
        </motion.h2> 

       <motion.div 
          initial={{ opacity: 0, x:-100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
       
       className="flex flex-wrap items-center justify-center gap-4 ">
           <motion.div  initial="initial" 
           animate="animate"
           variants={iconVariants(2.5)}>
           <RiTailwindCssFill className="text-7xl text-cyan-600 "/>
           </motion.div >
           <motion.div   initial="initial" 
           animate="animate"
           variants={iconVariants(3)}
           className="p-2">
              <RiReactjsLine className="text-7xl text-cyan-400"/>
           </motion.div>
           <motion.div    initial="initial" 
           animate="animate"
           variants={iconVariants(2.5)}
           className="p-2">
              <TbBrandNextjs className="text-7xl "/>
           </motion.div>

           <motion.div  initial="initial" 
           animate="animate"
           variants={iconVariants(3)} className="p-2">
              <SiMongodb className="text-7xl text-cyan-500 "/>
           </motion.div>
           <motion.div  initial="initial" 
           animate="animate"
           variants={iconVariants(2.5)} className="p-2">
              <DiRedis className="text-7xl text-red-700 "/>
           </motion.div>

           <motion.div  initial="initial" 
           animate="animate"
           variants={iconVariants(2.5)}  className="p-2">
              <FaNodeJs className="text-7xl text-green-500 "/>
           </motion.div>
           <motion.div 
            initial="initial" 
            animate="animate"
            variants={iconVariants(2.5)}  className="p-2">
              <BiLogoPostgresql className="text-7xl text-sky-500 "/>
           </motion.div>
    
       </motion.div>
    </div>
     );
}
 
export default Technologies;