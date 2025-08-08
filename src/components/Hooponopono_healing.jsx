import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from "next/router";


function Hooponopono_healing() {
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
    <div data-aos="fade-up" className="flex justify-center"><h1 className="xl:text-4xl lg:text-4xl text-3xl font-bold  mt-32"> Ho'oponopono healing</h1></div>
    <div className="flex  justify-center  mt-10 px-5 xl:px-0 lg:px-0">
      <img
        className="justify-center  xl:w-2/3 lg:w-2/3 h-full items-center text-center ring-offset-2 ring-2 ring-pink-400"
        src="/ho-oponopono-healing.jpeg"
      />
    </div>
    <div className="xl:px-20 lg:px-20 px-5 mt-20 text-xl text-slate-600 font-semibold ">
     
      <p>
      At Lotus Healing, we offer Ho'oponopono, a powerful Hawaiian healing practice designed to restore harmony within yourself and your relationships. Meaning "to make right," Ho'oponopono focuses on clearing negative thoughts and emotions by taking responsibility for your inner conflicts. Through the simple yet profound mantra, "I'm sorry, Please forgive me, Thank you, I love you," we guide you in releasing negative energy, fostering forgiveness and promoting inner peace. This transformative process helps you align your mind and spirit, positively influencing your external world and overall well-being.
      </p>
    </div>

    <p  data-aos="fade-up"  className="xl:text-4xl lg:text-4xl text-3xl font-bold text-center mt-16 pb-1">
    Key Aspects of
      <strong className="text-pink-500">  Ho'oponopono  </strong> Healing
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mt-8 justify-center xl:px-32 lg:px-32 px-5">
      <div className="bg-pink-50 p-4 flex flex-col items-center">
        <img
          className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
          src="/Restoring-Harmony.jpg"
          alt="Clutter Clearing"
        />
        <p className="mt-2 text-center">
          {" "}
          <strong className='text-xl'>Restoring Inner Harmony</strong>
          <br></br> Ho'oponopono helps clear negative energy and restore balance within yourself and your relationships.
        </p>
      </div>
      <div className="bg-pink-50 p-4 flex flex-col items-center ">
        <img
          className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
          src="/Mantra-Forgiveness.jpg"
          alt="Energy Cleansing"
        />
        <p className="mt-2 text-center">
          {" "}
          <strong className='text-xl'> Mantra for Forgiveness</strong>
          <br></br> The mantra "I'm sorry, Please forgive me, Thank you, I love you" aids in releasing negativity and fostering healing.
        </p>
      </div>
      <div className="bg-pink-50 p-4 flex flex-col items-center">
        <img
          className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
          src="/Personal-Healing.jpg"
          alt="Nature & Light"
        />
        <p className="mt-2 text-center">
          {" "}
          <strong className='text-xl'>Adapted for Personal Healing </strong>
          <br></br> Originally a communal practice, it’s now used individually to address personal conflicts and promote well-being.
        </p>
      </div>
      <div className="bg-pink-50 p-4 flex flex-col items-center">
        <img
          className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
          src="/Accessible.jpeg"
          alt="Candles & Crystals"
        />
        <p className="mt-2 text-center">
          <strong className='text-xl'>Accessible for All</strong>{" "}
          <br></br>Ho'oponopono is a universally applicable technique, offering a simple path to emotional and spiritual healing.
        </p>
      </div>
    </div>

    <p  data-aos="fade-up"  className="xl:text-4xl lg:text-4xl text-3xl font-bold text-center mt-16">
    Steps to Meditate 
      <strong className="text-pink-500 ml-2">with Ho'oponopono</strong>
    </p>
    <ol className="list-decimal list-inside mt-8 mx-8 xl:mx-32 lg:mx-32 text-lg space-y-6 mb-20">
      <li>
        <div className="inline-flex">
          <span className="font-bold">Choose a Quiet Space</span>
        </div>
        <p>
        Find a peaceful place where you can sit comfortably without interruptions. A calm environment helps you focus and enhances your meditation experience.
        </p>
      </li>
      <li>
        <div className="inline-flex">
          <span className="font-bold">Calm Your Mind with Deep Breaths</span>
        </div>
        <p>
        Start by focusing on your breath, taking slow, deep breaths to relax and quiet your mind. This prepares you for the introspective work ahead.
        </p>
      </li>
      <li>
        <div className="inline-flex">
          <span className="font-bold">Recite the Ho'oponopono Mantra</span>
        </div>
        <p>
        Gently repeat the mantra, "I'm sorry, Please forgive me, Thank you, I love you," allowing each phrase to resonate deeply. Let the words guide you toward healing and self-reflection.
        </p>
      </li>
      <li>
        <div className="inline-flex">
          <span className="font-bold">Release Emotional Tension</span>
        </div>
        <p>
        As you repeat the mantra, visualize negative emotions and burdens leaving your body, creating space for healing and inner peace.
        </p>
      </li>
      <li>
        <div className="inline-flex">
          <span className="font-bold">End with Stillness and Acceptance</span>
        </div>
        <p>
        After chanting, take a few moments of silence to absorb the peaceful energy. Embrace the sense of clarity and emotional release you have cultivated during the practice.
        </p>
      </li>
    </ol>
    <div className="bg-pink-300"><p className="text-3xl font-serif  xl:px-20 lg:px-20 py-10  text-center">"Heal through forgiveness, release emotional blockages and invite peace and harmony."</p>
      <div className="text-center"> 
      <button  onClick={() => router.push("/contact")} className="bg-white px-3 py-2 rounded-full mb-10 hover:bg-green-400 hover:text-white font-semibold"><p>Contact Now</p></button>
      </div>
      </div>
  </>
  )
}

export default Hooponopono_healing