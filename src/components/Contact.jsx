import { CONTACT } from "../constants";
const Contact = () => {
    return ( 
        <div className="border-t border-stone-900 pb-20">
   <h2 className="my-6 text-center text-4xl">Entrer en Contact</h2>
  <div className="text-center tracking-tighter">
   <p className="my-4">
    {CONTACT.address}
   </p>
   <p className="my-4">
    {CONTACT.phoneNo}
   </p>
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