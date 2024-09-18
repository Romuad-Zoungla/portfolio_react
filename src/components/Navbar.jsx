import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; 
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/logo.png";
const Navbar = () => {
    return (
       <nav className="flex items-center justify-between  py-6 ">
        <div className="flex flex-shrink-0 items-center ">
            <a href="/" className="" aria-label="Home">
            <img src={logo} alt="Logo" className="mx-2" width={50} height={33}/>
            </a>
        </div>
        <div className="m-8 flex items-center justity-center gap-4 text-2xl">
            <a href="http://linkedin.com/in/romuald-missimahou-zoungla-5100a4228" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"  >  
            <FaLinkedin/>
           </a>
           <a href="https://github.com/Romuad-Zoungla" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"  >   
            <FaGithub/>
           </a>
           <a href="http://lnstagram.com/in/romuald-missimahou-zoungla-5100a4228" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"  >  
            <FaInstagram/>
           </a>
           <a href="http://twitter.com/in/romuald-missimahou-zoungla-5100a4228" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"  >  
            <BsTwitterX color="white"/>
           </a>
        </div>

       </nav>
      );
}
 
export default Navbar;