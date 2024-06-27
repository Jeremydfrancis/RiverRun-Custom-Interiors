import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

      const items = [
            { id: 1, title: "Home", path: "/" },
            { id: 2, title: "About Us", path: "/about" },
            { id: 3, title: "Services", path: "/services" },
            { id: 4, title: "Contact", path: "/contact" }
          ];
      return (
            <>
            <footer className="bg-bgThird ">
    <div className="mx-auto w-full">
      <div className="grid grid-cols-2 px-6  py-6 lg:py-8 md:grid-cols-3 text-center  ">
        <div>
            <h2 className="mb-6 text-sm  text-black font-black uppercase ">Navigation</h2>
            <ul className="text-black font-medium">
            {items.map((item) => (
            <li className='mb-4 ' key={item.id}>
              <Link onClick={scrollToTop} className="hover:underline underline-offset-4 font-serif" to={item.path}>{item.title}</Link>
              
            </li>
          ))}
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-black text-black uppercase ">Contact Info</h2>
            <ul className="text-black font-medium">
                <li className="mb-4">
                    <a href="mailto:Nathan@riverruninteriors.com" className="hover:underline underline-offset-4 font-serif">Email Us</a>
                </li>
                <li className="mb-4">
                    <a href="tel:304-761-8004"  >Call Us: <span className="hover:underline underline-offset-4 font-serif">304-761-8004</span></a>
                </li>
                <li className="mb-4">
                    Mon-Fri: 7 AM - 7 PM
                </li>
            </ul>
        </div>
        <div>
            <h2 className="my-6 md:mt-0 md:mb-4 text-sm font-black text-Black uppercase  ">Legal</h2>
            <ul className="text-black  font-medium">
                <li className="mb-4">
                    <a href="#" target='_blank' className="hover:underline underline-offset-4 font-serif ">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" target='_blank' className="hover:underline underline-offset-4 font-serif">Site Map</a>
                </li>
                
            </ul>
        </div>
        
    </div>
    <div className="px-4 py-4 bg-backgroundSecondary md:flex md:items-center md:justify-between">
        <span className="text-sm text-backgroundMain/70 sm:text-center">© 2024 <a href="#">River Run Custom Interiors LLC™</a>. All Rights Reserved.
        </span>
       
      </div>
    </div>
</footer>
            </>
      );
};

export default Footer;