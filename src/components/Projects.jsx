import {PROJECTS} from "../constants";
import {motion}  from "framer-motion";

const Projects = () => {
    return ( 
        <div className="pb-4">
            
          <motion.h2  
            initial={{ opacity: 0, y: -100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7 }}
           className="my-12 lg:my-16 text-center text-4xl ">
                 Mes Projets
          </motion.h2>
          <div>
            {
                PROJECTS.map((project, index)=>(
                    <div key={index} className="mb-4 flex flex-wrap lg:justify-center">
                        <motion.div
                           initial={{ opacity: 0, x: -100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 1 }}
                         className="w-full lg:w-1/4">
                            <img src={project.image} 
                            width={200} height={200}
                           alt= {project.title} 
                            className="mb-4 object-cover rounded" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                        className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold text-2xl">
                                <a href="/" className="">{project.title} </a>
                            </h3>
                            <p className="mb-4 text-stone-500">
                               {project.description}
                            </p> 
                              {
                                project.technologies && (
                                    <div className="flex flex-wrap  items-center gap-x-2">
                                        {project.technologies.map((tech, index)=>(
                                            <span key={index} className=" mb-4 mr-2 rounded-sm bg-stone-900 p-2 lg:p-4 text-stone-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )
                              }
                        </motion.div>
                    </div>
                ))
            }
          </div>
        </div>


    );
}
 
export default Projects;