import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
      {
            id: 1,
            header: "Interior Painting",
            mainParagraph: "Transform the interior of your home or business with our professional interior painting services. Whether you're looking to refresh a single room or undertake a complete makeover, our skilled team will deliver impeccable results that exceed your expectations. Our interior painting services include:",
           
 
            subParagraphs: [
              "Wall Painting: From accent walls to entire rooms, we'll apply premium paint with precision and care, ensuring a flawless finish that enhances the beauty of your space.",
              "Trim and Crown Molding: Add elegance and sophistication to your interior with expertly painted trim and crown molding, meticulously applied for a seamless transition between surfaces.",
              "Ceiling Paint: Experience the difference our ceiling paint can make in enhancing the overall ambiance of your home or office.",
              "Drywall Repair and Patching: Repairing damaged or cracked drywall before painting to ensure a smooth surface."
            ]
          },
          {
            id: 2,
            header: "Exterior Painting",
            mainParagraph: "Enhance your property's curb appeal and protect it from the elements with our expert exterior painting services. Our experienced painters use high-quality materials and techniques to deliver long-lasting results that withstand the test of time. Our exterior painting services include:",
    
            subParagraphs: [
              "House Painting: Give your home a fresh new look with our professional house painting services, including thorough surface preparation, premium paint application, and meticulous attention to detail.",
              "Deck and Fence Staining: Preserve and beautify your outdoor living spaces with our deck and fence staining services, using top-quality stains and sealants to enhance durability and appearance.",
              "Trim and Siding Painting: Revitalize your exterior trim and siding with our precision painting services, protecting against weather damage and maintaining a vibrant, attractive appearance.",
              "Door and Window Frame Painting: Painting of door frames, window frames, shutters, and other exterior features to match or contrast with the main house color."
            ]
          },
          {
            id: 3,
            header: "Flooring Services",
            mainParagraph: "Upgrade your floors with our comprehensive flooring services. Whether you prefer the timeless elegance of hardwood, the durability of laminate, or the versatility of tile, we have the expertise to handle all your flooring needs. Our flooring services include:",
            
            subParagraphs: [
              "Hardwood Installation: Add warmth and sophistication to your space with our professional hardwood flooring installation services, tailored to your specifications and finished to perfection.",
              "Laminate Flooring: Enjoy the look of hardwood or tile at a fraction of the cost with our durable laminate flooring options, expertly installed for lasting beauty and performance.",
              "Tile Installation: Enhance the style and functionality of your space with our tile installation services, available in a wide range of materials, colors, and patterns to suit your taste and lifestyle.",
              "Custom Flooring Design: Creating custom flooring designs, patterns, or inlays to add unique and personalized touches to the space."
            ]
          },
          {
            id: 4,
            header: "Additional Services",
            mainParagraph: "In addition to our core offerings, we also provide a range of supplementary services to meet your specific needs. These include:",
            
            subParagraphs: [
              "Surface Preparation",
              "Color Consultation",
              "Custom Finishes",
              "And Much More"
            ]
          },
          
        ];








const Services = () => {
      const scrollToTop = () => {
            window.scrollTo(0, 0)
        }
      return (
            <>
            <div className="bg-backgroundMain">

<main className="relative isolate">

{/* Header section */}
            <div className="px-6 pt-24 lg:px-8">
          <div className="mx-auto max-w-2xl  text-center sm:pt-10">
            <h2 className="text-4xl font-bold tracking-tight
             text-black sm:text-6xl font-sans">Revitalize Your Space with Premier Painting and Flooring Services</h2>
            <p className="mt-6 leading-8 text-black/80 font-serif text-[18px]">
            At River Run Custom Interiors LLC we offer a transformative array of top-quality solutions to breathe new life into your 
            home or business. Whether you're dreaming of vibrant interiors that reflect your personality or envisioning elegant 
            flooring that enhances your space's allure, we're here to make your vision a reality. Explore our comprehensive range
            of services below and let's embark on a journey to redefine your space together.
            </p>
          </div>
        </div>
{/* Content section */}
<div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-10 lg:px-8">
      {sections.map((section) => (
        <div className='pb-10'  key={section.id}>

            <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black  font-sans">{section.header}</h2>
          <p className='mt-6 text-lg leading-8 text-black font-serif'>{section.mainParagraph}</p>
          </div>

          <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 text-base leading-7 text-black/80 font-serif sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {section.subParagraphs.map((subParagraph, index) => (
              <li className="relative pl-9 inline pb-10" key={index}>{subParagraph}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
{/* Contact us*/}
<div className="px-6 pb-10 lg:px-8">
          <div className="mx-auto max-w-2xl  text-center sm:pt-10">
            <h2 className="text-4xl font-bold tracking-tight
             text-black sm:text-6xl font-sans">Lets Get Started!</h2>
            <p className="mt-6 leading-8 text-black/80 font-serif text-[18px]">
            Ready to transform your home or business? Contact us today to schedule
             a consultation and discover how our painting and flooring services can elevate your space. 
             Let us bring your vision to life with professionalism, expertise, and a commitment to excellence.
            </p>
            <div className='pt-10'>
            <Link onClick={scrollToTop} to="/contact" className="text-backgroundSecondary hover:text-accentButton
             bg-accentButton hover:bg-backgroundSecondary/90 focus:ring-4 focus:outline-none
              focus:ring-backgroundSecondary/50 rounded-lg text-lg px-10 py-4 text-center font-semibold
            inline-flex items-center dark:focus:ring-accentButton/100 me-2 mb-10 font-sans">Contact Us</Link>
</div>
            
          </div>
        </div>





        </main>
        </div>

       
            </>
      );
};

export default Services;