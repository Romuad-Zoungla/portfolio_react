import { EDUCATION } from "../constants";
import {motion} from "framer-motion";
const Educations = () => {
    return ( 
    <div className="pb-4 " >
      <motion.h2     initial={{ opacity: 0, y: 100 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 1.5 }}
      className="my-8 lg:my-16 text-center text-4xl">
        Mes Formations</motion.h2>
      
   <div>
     {EDUCATION.map((education, index) => (
       <div key={index} className="mb-6 flex flex-wrap lg:justify-center" >
        <motion.div  initial={{ opacity: 0, x: 100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 1.5 }} className="w-full lg:w-1/4">
         <p className="mb-2 text-sm text-stone-400">{education.year}</p>
         </motion.div>

         <motion.div  initial={{ opacity: 0, x: -100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 1.2 }}
                           className="w-full max-w-xl lg:w-3/4">
         <h3 className="mb-2 font-semibold ">
            {education.degree} - {" "}
            <span className="text-sm text-stone-500">{education.institution}</span>
            </h3>
         <p className="mb-4 text-stone-400">{education.description}</p>
         
       {education.technologies.map((tech, index) =>(
        <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300" 
        key={index}> {tech}
        </span>
       ))
       }
      
       </motion.div>
       </div>
     ))}
   </div>
    </div>
         
     );
}
 
export default Educations;