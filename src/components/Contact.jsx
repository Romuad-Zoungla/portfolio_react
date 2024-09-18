import { CONTACT } from "../constants";
import {motion} from "framer-motion";
const Contact = () => {
    return ( 
        <div className="border-t border-stone-900 pb-16 lg:pb-20">
   <motion.h2 
                           whileInView={{ opacity: 1, y: 0 }}
                           initial={{ opacity: 1, y: -100 }}
                           transition={{ duration: 0.5}}
                           viewport={{ once: true }}

   className="my-6 text-center text-4xl">Entrer en Contact</motion.h2>
  <div  
                           className="text-center tracking-tighter">
   <motion.p
                           whileInView={{ opacity: 1, x: 0 }}
                           initial={{ opacity: 0, x: -100 }}
                           transition={{ duration: 1 }} 
                          
   className="my-4">
    {CONTACT.address}
   </motion.p>
   <motion.p  whileInView={{ opacity: 1, x: 0 }}
                           initial={{ opacity: 0, x: 100 }}
                           transition={{ duration: 1 }} 
                       
   className="my-4">
    {CONTACT.phoneNo}
   </motion.p>
   <p>
       <a href= "#" className="border-b ">
        {CONTACT.email}
       </a>
   </p>
  </div>


        </div>
     );
}
 
export default Contact;