import react from 'react'
import { Link } from 'react-router-dom'



const stats = [
  { id: 1, value: 'Founded: 2023' },
  { id: 2, value: 'Charleston, WV' },
  { id: 3, value: 'Trusted Service' },
  { id: 4, value: 'Competitive Rates' },
]
const values = [
  {
    name: 'Exceptional Craftsmanship:',
    description: 'We deliver flawless finishes and impeccable installations, ensuring our clients receive exceptional results that stand the test of time.',
    
  },
  {
    name: 'Customer Satisfaction:',
    description: 'Our top priority is our clients satisfaction, achieved through open communication, personalized solutions, and a commitment to exceeding expectations.',
    
  },
  {
    name: 'Creativity and Innovation:',
    description: 'We bring fresh ideas and innovative designs to every project, creating unique and inspiring spaces that captivate the imagination.',
    
  },
  {
    name: 'Reliability and Dependability:',
    description: 'Clients can depend on us to deliver on our promises, with punctual timelines and transparent communication throughout the process.',
    
  },
  {
    name: 'Attention to Sustainability:',
    description: 'We prioritize eco-friendly materials and sustainable practices, minimizing environmental impact and promoting healthier living spaces.',
    
  },
  {
    name: 'Respect:',
    description: 'We value and respect our clients ideas, preferences, and spaces, fostering a collaborative environment built on mutual trust and understanding.',
    
  },
]
const team = [
  {
    name: 'Nate Embree',
    role: 'Founder',
    imageUrl:
      '/aboutus/NateandGisselle.png',
    location: 'Charleston, West Virginia',
  },
  // More people...
]
const benefits = [
  'Interior Painting',
  'Exterior Painting',
  'Hardwood Flooring',
  'Tile Flooring',
  'Trim',
  'And much more!',
]


export default function About() {
      const scrollToTop = () => {
            window.scrollTo(0, 0)
        }
  

  return (
    <div className="bg-backgroundMain">
     

      <main className="relative isolate">

        {/* Header section */}
        <div className="px-6 pt-10 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl font-sans">We love our work</h2>
            <p className="mt-6 leading-8 text-black/80 font-serif text-[18px]">
            Welcome to River Run Custom Interiors LLC, your premier destination for top-quality interior and exterior painting, along with expert flooring services.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8  leading-7 text-black/80 lg:max-w-none lg:grid-cols-2 font-serif text-[16px] ">
              <div>
                <p>
                At River Run Custom Interiors LLC, painting and flooring isn't just a service, 
                it's a passion deeply rooted in my upbringing in Winfield, WV. Growing up in a close-knit 
                community taught me the importance of treating everyone like family. This core value is at the heart of everything we do.
                </p>
                <p className="mt-8">
                As a locally owned and operated business, we're deeply invested in the communities we serve. 
                Beyond providing top-notch painting and flooring services, we actively participate in community events and initiatives. 
                Whether it's sponsoring local charity events or volunteering our time, we're dedicated to giving back and making a positive impact.
                </p>
              </div>
              <div>
                <p>
                We take pride in delivering nothing but the highest quality of workmanship to our clients. 
                From meticulous attention to detail in our painting projects to the careful selection of premium flooring materials, 
                our commitment to excellence shines through in every aspect of our work.
                </p>
                <p className="mt-8">
                At River Run Custom Interiors LLC, we understand that every client is unique, and so are their needs. 
                That's why we take the time to listen to your preferences and tailor our services to match your vision. 
                From color consultations to flooring recommendations, we're here to turn your dreams into reality.
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          
          <dl className=" grid grid-cols-1 gap-2 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col  bg-gradient-to-t from-backgroundSecondary/60 to-backgroundAccent p-8">
                
                <dd className="order-first text-2xl font-semibold tracking-tight text-black font-sans">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>





          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="/aboutus/WestVirginia.png"
            alt="West Virginia"
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black  font-sans">Our values</h2>
            <p className="mt-6 text-lg leading-8 text-black/80 font-serif ">
            At River Run Custom Interiors LLC, we believe in more than just paint and flooring – 
            we're dedicated to bringing your vision to life with heart and soul. Our commitment to creativity, reliability, 
            and respect ensures that every project is treated like a masterpiece, reflecting our core values and your unique style.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-black/80 font-serif sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-black">
                 
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black ">Meet the owners</h2>
            <p className="mt-6 text-lg leading-8 text-black/80 font-serif ">
            Hi, I'm Nate Embree. Born and raised in Winfield, WV, 
            I've embodied the values of hard work and dedication from my hometown, 
            infusing them into my lifelong passion for painting and flooring. Growing up in this tight-knit community, 
            I've learned firsthand the importance of craftsmanship and personal connection, principles that drive me in every project.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[14/13] w-full rounded-xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-2xl font-semibold leading-8 tracking-tight text-black font-sans">{person.name}</h3>
                <p className="text-base leading-7 text-black/80 font-serif">{person.role}</p>
                <p className="text-sm leading-6 text-black/80 font-serif">{person.location}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="/aboutus/Services.png"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-bold tracking-tight text-black  font-sans">Services</h2>
                <p className="mt-6 text-lg leading-8 text-black/80 font-serif">
                Discover our premier services designed to transform your space into a masterpiece, from expert painting to stunning flooring solutions.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-black/80 font-serif sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <Link onClick={scrollToTop} to="/services" className="text-2xl font-bold leading-6 text-black font-sans  hover:underline hover:underline-offset-4">
                    See our services <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      {/* Footer */}
      
    </div>
  )
}
