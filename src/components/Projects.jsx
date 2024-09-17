import {PROJECTS} from "../constants";

const Projects = () => {
    return ( 
        <div className="pb-4">
          <h2 className="my-12 lg:my-16 text-center text-4xl ">
                 Mes Projets
          </h2>
          <div>
            {
                PROJECTS.map((project, index)=>(
                    <div key={index} className="mb-4 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img src={project.image} 
                            width={200} height={200}
                           alt= {project.title}
                            className="mb-4 object-cover rounded" />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold text-2xl">
                                <a href="/" className="">{project.title} </a>
                            </h3>
                            <p className="mb-4 text-stone-500">
                               {project.description}
                            </p> 
                              {
                                project.technologies && (
                                    <div className="flex items-center gap-x-2">
                                        {project.technologies.map((tech, index)=>(
                                            <span key={index} className="mr-2 rounded-sm bg-stone-900 p-2 text-stone-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )
                              }
                        </div>
                    </div>
                ))
            }
          </div>
        </div>


    );
}
 
export default Projects;