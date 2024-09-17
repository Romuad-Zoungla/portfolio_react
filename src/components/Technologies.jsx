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
        initial:{ 
                   y:-10  
                },
        animate: {
                    y:[10, -10],
        transition: { 
            duration: duration,
            ease: "linear",
            repeat:Infinity,
            repeatType:"reverse",
            
         },
        }
    }
)


const Technologies = () => {
    return ( 
    <div className="pb-8 md:pb-12">
        <motion.h2
        whileIn
         className="py-6 md:my-12 text-center text-4xl ">Mes Technologies Web

        </motion.h2>
       <div className="flex flex-wrap items-center justify-center gap-4 ">
           <div >
           <RiTailwindCssFill className="text-7xl text-cyan-600 "/>
           </div>
           <div className="p-2">
              <RiReactjsLine className="text-7xl text-cyan-400"/>
           </div>
           <div className="p-2">
              <TbBrandNextjs className="text-7xl "/>
           </div>
           <div className="p-2">
              <SiMongodb className="text-7xl text-cyan-500 "/>
           </div>
           <div className="p-2">
              <DiRedis className="text-7xl text-red-700 "/>
           </div>
           <div className="p-2">
              <FaNodeJs className="text-7xl text-green-500 "/>
           </div>
           <div className="p-2">
              <BiLogoPostgresql className="text-7xl text-sky-500 "/>
           </div>
    
       </div>
    </div>
     );
}
 
export default Technologies;