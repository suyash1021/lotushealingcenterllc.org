import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from "next/router";
function Money_reiki() {
  const router = useRouter();
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
    <div data-aos="fade-up" className="flex justify-center"><h1 className="xl:text-4xl lg:text-4xl text-3xl font-bold  mt-32">Money Reiki</h1></div>
    <div className="flex  justify-center  mt-10 px-5 xl:px-0 lg:px-0">
      <img
        className="justify-center  xl:w-2/3 lg:w-2/3  h-full items-center text-center ring-offset-2 ring-2 ring-pink-400"
        src="/money-reiki.jpg"
      />
    </div>
    <div className="xl:px-20 px-5  lg:px-20 mt-20 text-xl text-slate-600 font-semibold ">
      {" "}
      <p>
      Money Reiki is a unique form of energy healing that focuses on clearing blocks and limiting beliefs related to wealth, abundance and financial prosperity. Rooted in the principles of traditional Reiki, this practice helps individuals shift their mindset and energy around money, enabling them to attract greater financial success and abundance. In a world where financial pressures can take a heavy toll on our mental and emotional well-being, Money Reiki offers a way to realign our thoughts and emotions with positivity and abundance, allowing for a healthier and more balanced approach to attracting wealth. </p>
    </div>

    <p data-aos="fade-up" className="xl:text-4xl lg:text-4xl text-3xl font-bold text-center mt-16 pb-1">
   
      <strong className="text-pink-500">  Money Reiki   </strong>  Services at Lotus Healing
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mt-8 justify-center xl:px-32 lg:px-32 px-5">
      <div className="bg-pink-50  xl:h-screen lg:h-screen p-4 flex flex-col items-center">
        <img
          className="w-full xl:h-96 lg:h-96 object-cover overflow-hidden transition-transform transform hover:scale-105"
          src="/black.jpg"
          alt="Clutter Clearing"
        />
        <p className="mt-5 text-center">
          {" "}
          <strong className='text-xl'>Clearing Financial Blockages </strong>
          <br></br>At Lotus Healing, our Money Reiki sessions help identify and clear energy blockages that hinder your financial growth. These blockages often stem from limiting beliefs and negative emotions around money. 
        </p>
      </div>
      <div className="bg-pink-50 xl:h-screen lg:h-screen p-4 flex flex-col items-center">
        <img
          className="w-full xl:h-96 lg:h-96 object-cover overflow-hidden transition-transform transform hover:scale-105"
          src="/Money-Mindset.jpg"
          alt="Energy Cleansing"
        />
        <p className="mt-5  text-center">
        
          <strong className='text-xl'> Shifting Money Mindset</strong>
          <br></br> We focus on transforming your mindset around money, helping you replace fear and anxiety with positive, empowering beliefs. This shift in perception allows you to approach financial matters with confidence and clarity, enhancing your ability to attract wealth.
        </p>
      </div>
      <div className="bg-pink-50 p-4 flex flex-col items-center overflow-hidden transition-transform transform hover:scale-105">
        <img
          className="w-full xl:h-96 lg:h-96 object-cover overflow-hidden transition-transform transform hover:scale-105"
          src="/Aligning-Energy.jpg"
          alt="Nature & Light"
        />
        <p className="mt-5 text-center">
          {" "}
          <strong className='text-xl'>Aligning Energy for Abundance</strong>
          <br></br>We align your energy with abundance, helping you attract financial opportunities and wealth more easily.   </p>
      </div>
      <div className="bg-pink-50 xl:h-screen lg:h-screen p-4 flex flex-col items-center">
        <img
          className="w-full xl:h-96 lg:h-96 object-cover overflow-hidden transition-transform transform hover:scale-105"
          src="/Personalized-Sessions.jpg"
          alt="Candles & Crystals"
        />
        <p className="mt-2 text-center">
          <strong className='text-xl'>Personalized Sessions</strong>{" "}
          <br></br> Whether you’re looking to overcome money-related stress, improve financial stability, or enhance your wealth attraction, Lotus Healing provides personalized Reiki treatments to support your financial journey.
        </p>
      </div>
    </div>

    <p data-aos="fade-up" className="xl:text-4xl lg:text-4xl text-3xl font-bold text-center mt-16">  
      Key Elements of  <strong className="text-pink-500 ml-1">   Money Reiki  </strong> 
    </p>
    <ol className="list-decimal list-inside mt-8 mx-8 xl:mx-32 lg:mx-32 text-lg space-y-6 mb-20">
      <li>
        <div className="inline-flex">
          <span className="font-bold">Attunements</span>
        </div>
        <p>
        Practitioners receive attunements from a Money Reiki Master, opening energy channels to connect with the frequencies of wealth and abundance.   </p>
      </li>
      <li>
        <div className="inline-flex">
          <span className="font-bold">Energy Healing</span>
        </div>
        <p>
        Money Reiki involves channeling healing energy through the hands to target areas related to financial issues, clearing energy blockages.

</p>
      </li>
      <li>
        <div className="inline-flex">
          <span className="font-bold">Chakra Balancing</span>
        </div>
        <p>
        It focuses on balancing chakras linked to abundance, such as the root, sacral and solar plexus chakras, to promote the free flow of energy. </p>
      </li>
      <li>
        <div className="inline-flex">
          <span className="font-bold">Affirmations and Visualizations
          </span>
        </div>
        <p>
        Positive affirmations and visualizations are used to reshape limiting beliefs about money and invite financial prosperity. </p>
      </li>
      <li>
        <div className="inline-flex">
          <span className="font-bold">Distance Healing
          </span>
        </div>
        <p>
        Money Reiki can be performed remotely, allowing practitioners to send healing energy to clients, no matter their location.  </p>
      </li>
    </ol>
    <div className="bg-pink-300"><p className="text-3xl font-serif  xl:px-20 lg:px-20 py-10  text-center">"Shift your mindset to attract abundance and release limiting beliefs around money."</p>
      <div className="text-center"> 
      <button  onClick={() => router.push("/contact")} className="bg-white px-3 py-2 rounded-full mb-10 hover:bg-green-400 hover:text-white font-semibold"><p>Contact Now</p></button>
      </div>
      </div>
  </>
  )
}

export default Money_reiki