import React from 'react';
import { Link } from "react-router-dom";
import ScrollButton from './utilities/ScrollButton';
import EnhancedAppeal from '../assets/EnhancedAppeal';
import IncreasedValue from '../assets/IncreasedValue';
import CustomConsultation from '../assets/CustomConsultation';
import Rating from '../assets/Rating';
import { Disclosure } from '@headlessui/react'
import Plus from '../assets/Plus';
import Minus from '../assets/Minus';
import User from '../assets/User';




const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
      const data = [
            {
                  id: 1,
                  imageSrc: "/mobileExpertise.png",
                  title: "Professional Expertise",
                  description: "Our team comprises skilled painters and flooring specialists with years of experience and a passion for excellence."
                },
                {
                  id: 2,
                  imageSrc: "/mobileAttention.png",
                  title: "Attention to Detail",
                  description: "We believe that perfection lies in the details. Our Meticulous approach guarantees flawless results that exceed your expectations."
                },
                {
                  id: 3,
                  imageSrc: "/mobileSatisfaction.png",
                  title: "Customer Satisfaction",
                  description: "Your satisfaction is our priority. We strive to not only meet but delivering outcomes that leave you delighted with your newly transformed space."
                },
                {
                  id: 4,
                  imageSrc: "/mobileCustom.png",
                  title: "Customized Solutions",
                  description: "We understand that every space is unique. That's why we work closely with you to tailor our services to your specific vision and requirements."
                },
                {
                  id: 5,
                  imageSrc: "/mobileQuality.png",
                  title: "Premium Quality",
                  description: "From the paints we use to the flooring materials we install, we prioritize quality, ensuring lasting beauty and functionality."
                }
          ];

          const icons = [

            {
            id: 10,
            svg: <CustomConsultation />,
            title: "Customized Consultation:",
            description: "Our experts work closely with you to understand your vision, offering personalized design recommendations to bring your ideas to life."
            },

            {
            id: 20,
            svg: <EnhancedAppeal />,
            title: "Enhanced Aesthetic Appeal:",
            description: "Transform your space into a captivating oasis with our expert color selection and flooring options, tailored to reflect your unique style and personality."
            },

            {
            id: 30,
            svg: <IncreasedValue />,
            title: "Increased Property Value:",
            description: "Boost the marketability and value of your property with professionally painted interiors and refreshed flooring."
            }

          ];

          const testimonials = [
            {
              id: 100,
              name: 'Bonnie Green',
              position: 'Developer at Open AI',
              quote: '"Could not be happier with the results. The team was professional, efficient, and the quality of work was outstanding. Highly recommend!"',
              profileImage: <User/>
            },
            {
              id: 200,
              name: 'Roberta Casas',
              position: 'Lead designer at Dropbox',
              quote: '"Absolutely thrilled with the transformation! Our home feels brand new thanks to the outstanding painting job done by River Run Custom Interiors. Professional, punctual, and attention to detail like no other."',
              profileImage: <User/>
            },
            {
              id: 300,
              name: 'Jese Leos',
              position: 'Software Engineer at Facebook',
              quote: '"Exceptional service and craftsmanship! Nate recently painted our office space. His team was efficient, organized, and ensured minimal disruption to our business operations. Our workspace looks vibrant and professional. Highly recommend their services!"',
              profileImage: <User/>
            },
            {
              id: 400,
              name: 'Joseph McFall',
              position: 'CTO at Google',
              quote: '"Outstanding workmanship and professionalism! River Run Custom Interiors transformed our outdated kitchen with a fresh coat of paint and new flooring. The teams attention to detail and dedication to perfection truly impressed us. Our kitchen now looks modern and inviting. Thank you for making our vision a reality!"',
              profileImage: <User/>
            }
          ];
          
          const faqs = [
            {
              id: 1000,
              question: "What happens if I'm not satisfied with the final results?",
              answer:
                "If you're not satisfied with the final results of our services, we have a satisfaction guarantee policy in place. We'll work closely with you to understand your concerns and address them promptly. Our goal is to ensure that you're completely happy with the outcome, and we'll go above and beyond to make it right.",
            },
            {
              id: 2000,
              question: "Are your painting and flooring services insured?",
              answer:
                "Yes, all our painting and flooring services are fully insured. We prioritize the safety and protection of both our clients and our team members. Our insurance coverage provides peace of mind, knowing that any unforeseen incidents or damages are fully covered.",
            },
            {
              id: 3000,
              question: "Do you offer eco-friendly paint options?",
              answer:
                "Yes, we offer eco-friendly paint options for clients who prioritize sustainability and environmental consciousness. Our eco-friendly paints are low in volatile organic compounds (VOCs) and other harmful chemicals, making them safe for both the environment and indoor air quality. These options provide a healthier and more environmentally responsible choice for your painting projects.",
            },
            {
              id: 4000,
              question: "How do you ensure a clean and tidy work environment during the painting and flooring process?",
              answer:
                "We prioritize cleanliness and organization throughout our projects. Our team takes meticulous care to protect your belongings and ensure minimal disruption to your daily routine. We use drop cloths, plastic sheeting, and other protective measures to safeguard your furniture, floors, and other surfaces. Additionally, we clean up thoroughly at the end of each workday, leaving your space tidy and ready for use.",
            },
            
          ];

          // START OF HERO SECTION
      return (
            <>   
            <main>
            <div className="lg:hidden  bg-cover bg-center w-screen h-screen" style={{backgroundImage: "url('/mediumBackground.png')",
        }}>
                  <div className='h-screen flex flex-col justify-center gap-y-5 px-6 items-center'>
                        <h1 className='text-center font-sans font-bold text-4xl md:text-5xl text-backgroundMain'>Transforming Spaces With Precision</h1>
                        <p className='text-center text-[16px] md:text-[24px] font-sans text-backgroundMain'>Your Trusted Business for Expert Painting and Flooring Solutions</p>
                        <Link onClick={scrollToTop} to="/Contact" className='bg-accentButtonSecondary text-backgroundMain text-[14px] md:text-lg 
                        lg:text-sm flex
                        max-w-[700px] max-h-[80px] items-center justify-center gap-[30px] pt-[13px] pb-[12px] px-[20px] 
                        md:px-[60px] 2xl:px-[200px] rounded-[15px] border-[3px] border-solid border-accentButtonSecondary'>SCHEDULE A FREE ESTIMATE</Link>
                        < ScrollButton />
                  </div>
            </div>

<div className=' hidden  lg:grid grid-flow-col grid-cols-2 py-12 px-5 2xl:px-[20rem] 2xl:gap-x-40 lg:gap-x-10 bg-backgroundMain'>
            <div className='   self-center   '>
                  <div className='h-auto flex flex-col justify-center gap-y-6  items-center'>
                        <h1 className='text-center font-black lg:text-4xl clamp:text-5xl biggest:text-6xl text-backgroundSecondary font-sans'>Transforming Spaces With Precision</h1>
                        <p className='text-center text-[16px] lg:text-[18px] 2xl:text-xl text-backgroundSecondary font-serif'>Your Trusted Business for Expert Painting and Flooring Solutions</p>
                        <Link onClick={scrollToTop} to="/Contact" className='bg-accentButton text-backgroundSecondary text-[18px]  clamp:text-xl biggest:text-4xl 
                        font-bold font-sans flex text-center  py-5 px-5  w-auto h-auto    
                         rounded-[15px] border-[3px] border-solid border-backgroundSecondary'>SCHEDULE A FREE ESTIMATE</Link>
                        
                  </div>
            </div>

            <div className='bg-backgroundMain '>
                  <img className='max-h-[80vh] lg:max-w-[100%] border-4 border-backgroundSecondary rounded-3xl' src="/largeBackground.png" alt="background" />
            </div>

             
                  
</div>
{/* // END OF HERO SECTION */}

{/* // START OF MAIN SECTION */}
<div className='bg-backgroundMain px-[2rem] text-center grid grid-cols-1 lg:px-[10rem] xl:px-[15rem] clamp:px-[26rem] biggest:px-[40rem] '>

      <h2 id="nextDiv"  className=' pt-10 pb-[10px] text-3xl 2xl:text-4xl text-black 
      text-center font-semibold font-sans '>Unlock the true potential of your space!</h2>

      <p className='text-center text-black/80 text-[16px]  mt-[10px] font-serif  '>Whether you're preparing to sell your home, revamping your office environment, or simply craving a fresh new look, 
      our <span className='font-bold'>expert painting</span> and <span className='font-bold'>flooring services</span> are the key to unlocking beauty, comfort, and value in every corner of your 
      property. <span className='font-bold'>Elevate your surroundings</span> with us today!</p>

      <h2  className='mt-20 text-3xl 2xl:text-4xl text-black font-semibold font-sans'>Why choose us?</h2>
      
      
      


</div>

<div className='pt-[20px] bg-backgroundMain grid md:grid-cols-2 2xl:grid-cols-3 2xl:px-[20rem] md:gap-10 md:px-10 m-0' >

      {data.map(data => (
        <section className='flex flex-col ' key={data.id}>
          <img className='justify-self-center ' src={data.imageSrc} alt={data.title} />
          <h2 className='pt-5 px-6 text-center text-black text-2xl 2xl:text-3xl font-semibold font-sans'>{data.title}</h2>
          <p className='pt-[10px] px-6 pb-5 text-center text-black/80 text-[16px] font-serif  '>{data.description}</p>
        </section>
      ))}
    </div>

    {/* // END OF MAIN SECTION */}



    {/* // START OF FEATURES */}

<div className="bg-backgroundMain">
      <div className="mx-auto max-w-screen px-6 2xl:px-[20rem] py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-200 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl xl:text-4xl font-bold tracking-tight text-black font-sans">
                We built our business on quality service
              </h2>
            </div>
            <section className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              {icons.map((icon) => (
                <div key={icon.id} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <div className="mx-auto h-16 w-16">{icon.svg}</div>
                    </div>
                  </div>
                  <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-2xl font-semibold text-black pt-[10px] md:pt-0 lg:pt-[10px] font-sans">{icon.title}</h3>
                    <p className="mt-2 text-[16px] text-gray-500 font-serif">{icon.description}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
    {/* // END OF FEATURES */}


    {/* // START OF TESTIMONIALS */}

<section className="grid pb-8 shadow-sm md:pb-12 md:grid-cols-2 gap-2 bg-backgroundMain px-6 2xl:px-[20rem] py-10">
      {testimonials.map((testimonial) => (
<figure key={testimonial.id} className={`flex flex-col items-center justify-center p-8 text-center bg-accentButton border-b-2 border-2 rounded-2xl border-r-2 border-backgroundSecondary
 md:rounded-2xl`}>
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-700 lg:mb-8">
      <p className="my-4 font-serif">{testimonial.quote}</p>
    </blockquote>
  <figcaption className="flex items-center justify-center">
      <div className="">{testimonial.profileImage}</div>
      <div className="space-y-0.5 font-semibold font-sans text-black text-left rtl:text-right ms-3">
          <div>{testimonial.name}</div>
      <div className=" "><Rating /></div>
      </div>
  </figcaption>
</figure>
))}
</section>


{/* // END OF TESTIMONIALS */}

{/* // START OF FAQ */}

<article className="bg-backgroundMain">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-black font-sans">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-black">
                        <span className="text-base font-semibold leading-7 font-sans">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <Minus />
                          ) : (
                            <Plus  />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-stone-500 font-serif">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </article>

{/* // END OF FAQ */}
<section>
<div className='text-center bg-backgroundMain px-[2rem] lg:px-[10rem] xl:px-[15rem] clamp:px-[26rem] biggest:px-[40rem]
 pt-10 flex flex-col gap-y-6 text-lg font-serif'>
    <p>Transforming your space into a reflection of your vision is more than just a project – it's an opportunity to create a haven you'll love coming home to. At <span className='font-bold'>River Run Custom Interiors</span>, we specialize in elevating <span className='font-bold'>interiors</span> and <span className='font-bold'>exteriors</span> through expert <span className='font-bold'>painting</span> and <span className='font-bold'>flooring installation services.</span></p>
    <p> <span className='font-bold uppercase'>Click below </span>to learn more about our journey, values, and the team behind the magic.</p>
    
</div>
<div className='bg-backgroundMain text-center py-6'>
<Link onClick={scrollToTop} to="/about" className="text-backgroundSecondary hover:text-accentButton bg-accentButton hover:bg-backgroundSecondary/90 
focus:ring-4 focus:outline-none focus:ring-backgroundSecondary/50 rounded-lg text-lg px-10 py-4 text-center font-semibold
 inline-flex items-center dark:focus:ring-accentButton/100 me-2 mb-10 font-sans">
ABOUT US
</Link>
</div>
</section>
</main>


  

            
            
         
           
            </>
      );
};

export default Home;
