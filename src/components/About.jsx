import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,    
      easing: "ease-in-out",  
      offset: 150,      
      once: false,     
    });
  }, []);
  return (
    <>
      <div  data-aos="fade-up" className="flex  justify-center  mt-32 text-black font-bold text-4xl mb-10">
        {" "}
        <p>
          {" "}
          <strong className="text-pink-500"> About</strong> Lotus Healing
        </p>
      </div>
      <div className="flex  justify-center">
        <img
          className="justify-center  w-2/3 h-full items-center text-center ring-offset-2 ring-2 ring-pink-400"
          src="/about.jpeg"
        />
      </div>
      <div className="xl:px-20 lg:px-20 px-5 mt-20 text-xl text-black font-semibold">
        <div className="xl:px-10 lg:px-10 px-3  py-10 border-2 border-pink-500  space-y-3 rounded-xl">
          <p  data-aos="fade-up" className="text-4xl text-pink-500 font-bold text-center">About</p>
          <p>
          At Lotus Healing, we are passionate about guiding individuals towards balance, positivity and inner peace through our holistic healing services. Our offerings include transformative Tarot readings, energy clearing, crystal healing, Money Reiki and Ho'oponopono healing. We focus on releasing negative energy, aligning the mind, body and spirit and helping you overcome emotional, spiritual and energetic blockages. Each session is uniquely tailored to promote healing, peace and abundance in every aspect of your life. Whether you seek clarity, emotional relief, or a renewed sense of well-being, our practices aim to restore harmony and flow to your life's journey.
          </p>
        </div>
      </div>

      <div className="w-full xl:h-screen  lg:h-screen flex justify-between gap-8 xl:px-20 lg:px-20 px-5 xl:mt-32 lg:mt-32 mt-10">
        <div className="w-full xl:flex lg:flex justify-between xl:space-x-10 lg:space-x-10">
          <div  data-aos="fade-up" className="w-full">
            <h1  className="text-4xl  font-bold mb-4 text-pink-500">Vision</h1>
            <p className="xl:text-xl lg:text-xl">
            Our vision is to foster a world where people live in harmony with themselves and others, free from the burden of negative energy. We strive to be a trusted source of healing, guiding individuals to cultivate positivity, self-awareness and emotional well-being in all aspects of their lives.
            </p>
          </div>
          <div className="w-full h-full mt-5  xl:mt-0  lg:mt-5">
            <img
              src="/vision.jpg"
              alt="Vision"
              className="w-full xl:h-96 lg:h-96  rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full  mb-20  xl:px-20 lg:px-20 px-5 lg:flex  xl:flex justify-between xl:space-x-10  lg:space-x-10">
        <div className="w-full h-full">
          <img
            src="/Mission.jpg"
            alt="Mission"
            className="w-full h-full rounded-lg mt-10 xl:mt-0 lg:mt-0"
          />
        </div>
        <div data-aos="fade-up" className="xl:w-full lg:w-full ">
          <h1 className="text-4xl font-bold mb-4 text-pink-500 mt-10 xl:mt-0 lg:mt-0">
            Mission
          </h1>
          <p className="xl:text-xl lg:text-xl">
          Our mission is to offer holistic healing services that empower individuals to overcome emotional and energetic blockages. Through personalized sessions, we help clients release negative patterns and embrace a life filled with peace, abundance and personal transformation. We are dedicated to supporting each person on their journey toward balance, well-being and self-discovery.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
