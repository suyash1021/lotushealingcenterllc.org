import React, { useEffect } from 'react';
import AOS from 'aos';
import { useRouter } from "next/router";
import 'aos/dist/aos.css'; 


function Tarotreading() {
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
      <div className="flex justify-center">
        <h1  data-aos="fade-up" className="xl:text-4xl lg:text-4xl text-2xl font-bold  mt-32">
        Tarot Reading
        </h1>
      </div>
      <div className="flex  justify-center  mt-10 px-5 xl:px-0 lg:px-0">
        <img
          className="justify-center xl:w-2/3 lg:w-2/3 h-full items-center text-center ring-offset-2 ring-2 ring-pink-400"
          src="/card-reading.jpg"
        />
      </div>
      <div className="xl:px-20 lg:px-20 px-5 mt-20 text-xl text-slate-600 font-semibold">
        {" "}
        <p>
        At Lotus Healing, we offer Tarot Reading to provide insights into your past, present and future. Using 78 tarot cards, our skilled readers help you navigate areas such as love, career, relationships and personal growth. Each card reveals guidance from the universe, offering clarity on how to improve your life and make informed decisions. You can also explore a free tarot reading on our website to ask questions about any aspect of your life and gain valuable insights for a brighter future.
        </p>
      </div>

      <p  data-aos="fade-up" className="xl:text-4xl lg:text-4xl text-2xl font-bold text-center mt-16 pb-1 xl:px-32 lg:px-32 px-5">
      <strong className="text-pink-500">Tarot Reading </strong> at Lotus Healing
       
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mt-8 justify-center xl:px-32 lg:px-32 px-5">
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/Explore.jpg"
            alt="Clutter Clearing"
          />
          <p className="mt-2 text-center">
            {" "}
            <strong className="xl:text-xl lg:text-xl">
            Explore Your Life Path 
            </strong>
            <br></br> Tarot readings provide insights into your past, present and future, helping you understand your life’s journey.
          </p>
        </div>
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/Guidance.jpg"
            alt="Energy Cleansing"
          />
          <p className="mt-2 text-center">
            {" "}
            <strong className="xl:text-xl lg:text-xl">
              {" "}
              Guidance for Personal Growth
            </strong>
            <br></br>Gain clarity on important areas like relationships, career and personal development to make informed decisions.
          </p>
        </div>
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/Universe.jpg"
            alt="Nature & Light"
          />
          <p className="mt-2 text-center">
            {" "}
            <strong className="xl:text-xl lg:text-xl">
            Universe-Driven Messages
            </strong>
            <br></br> The cards you draw are believed to be guided by the universe, offering deep, meaningful insights.
          </p>
        </div>
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/Free-Tarot.jpeg"
            alt="Candles & Crystals"
          />
          <p className="mt-2 text-center">
            <strong className="xl:text-xl lg:text-xl">
            Free Tarot Reading
            </strong>{" "}
            <br></br>Ask questions about your life and receive a free tarot reading on our website for empowering advice and guidance.
          </p>
        </div>
      </div>

      <p  data-aos="fade-up" className="xl:text-4xl lg:text-4xl text-2xl font-bold text-center mt-16">
      <strong className="text-pink-500">Benefits </strong> of Tarot Reading at Lotus Healing
       
      </p>
      <ol className="list-decimal list-inside mt-8 mx-8 xl:mx-32 lg:mx-32 text-lg space-y-6 mb-20">
        <li>
          <div className="inline-flex">
            <span className="font-bold"> Gain Insight into Your Life</span>
          </div>
          <p>
          Tarot readings help uncover hidden aspects of your past, present and future, giving you a deeper understanding of your life’s path and how to navigate it effectively.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Improve Relationships</span>
          </div>
          <p>
          By exploring the dynamics in your personal and professional relationships, tarot readings provide guidance on how to strengthen bonds, resolve conflicts and improve communication.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Empower Your Decision-Making</span>
          </div>
          <p>
          Tarot cards offer clarity and direction, enabling you to make well-informed decisions about key areas of your life, whether it’s related to career, love, or personal growth.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Achieve Personal Balance</span>
          </div>
          <p>
          Tarot reading helps identify obstacles and challenges in your life, offering solutions to restore balance and harmony to your mind, body and spirit.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Discover New Opportunities</span>
          </div>
          <p>
          Through tarot reading, you can uncover opportunities for success and growth that you may have overlooked, helping you stay aligned with your goals and aspirations.
          </p>
        </li>
      </ol>
      <div className="bg-pink-300">
        <p className="xl:text-3xl lg:text-3xl font-serif  xl:px-20 lg:px-20 py-10  text-center">
        "Tarot reading offers guidance from the universe, helping you make empowered choices and navigate life with clarity."
        </p>
        <div className="text-center">
          <button
            onClick={() => router.push("/contact")}
            className="bg-white px-3 py-2 rounded-full mb-10 hover:bg-green-400 hover:text-white font-semibold"
          >
            <p>Contact Now</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Tarotreading;
