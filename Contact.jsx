import React from 'react';
import Clock from '../assets/Clock';
import Email from '../assets/Email';
import Phone from '../assets/Phone';
import Location from '../assets/Location';
import { useRef } from 'react';


const Contact = () => {
  const form = useRef();
  const sendEmail = () => {};
      return (
            <>
            
            <div className="bg-backgroundMain py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-backgroundSecondary lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-black font-sans">Get in Touch! We're Here to Help</h2>
              <p className="mt-4 leading-7 text-black/80 font-serif">
              Our team is committed to providing prompt and personalized service. 
              Expect a response within 24 hours of reaching out to us. We look forward to assisting you!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-accentButton p-10 flex flex-row justify-start gap-x-10 items-center">
              <div className='flex flex-col'>
              <h3 className="text-xl font-semibold leading-7 text-black">Email Us</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-black/80">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="text-base font-serif text-indigo-700" href="mailto:Nathan@riverruninteriors.com">
                      Nathan@riverruninteriors.com
                      </a>
                    </dd>
                  </div>
                </dl>
                

              </div>
             
                
              </div>
              <div className="rounded-2xl bg-accentButton p-10 flex flex-row justify-between items-center gap-2">
                <div className='flex flex-col'>
                <h3 className="text-xl font-semibold leading-7 text-black">Availability</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-black/80">
                  <div>
                    <dt className="sr-only">Hours Available</dt>
                    
                  </div>
                  <div className="mt-1">
                  
                    <dd className='text-black/80 text-base'>7AM - 7PM</dd>
                  </div>
                </dl>
                </div>
                
              </div>
              <div className="rounded-2xl flex flex-row justify-between items-center gap-2 bg-accentButton p-10 ">
                <div className='flex flex-col'>
                <h3 className="text-xl font-semibold leading-7 text-black">Call Us</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Phone Number</dt>
                    <dd>
                      <a className="font-semibold text-indigo-600" href="tel:304-761-8004">
                       304-761-8004
                      </a>
                    </dd>
                  </div>
                </dl>

                </div>

                
               
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-black">Locations</h2>
              <p className="mt-4 leading-7 text-black/80 font-serif ">
              While we call Charleston home, 
              our services extend across West Virginia, 
              bringing top-notch painting and flooring to your doorstep, wherever you may be. Let's add some color to your world!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-accentButton flex flex-row justify-between items-center gap-2 p-10">
                <h3 className="text-xl font-semibold leading-7  text-black/800 ">Charleston, West Virginia</h3>
                
  
              </div>
              
            </div>
           
          </div>
        </div>
      </div>
    </div>
  
            </>
      );
};

export default Contact;