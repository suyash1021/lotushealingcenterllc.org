import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
  const router = useRouter();

  const images = [
    {
      url: "/Natural-Energy.jpg",
      text: "",
    },
    {
      url: "/home1.jpg",
      text: "",
    },
    {
      url: "/home2.jpg",
      text: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

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
      <div
        className="relative md:mt-20 h-20 flex items-center justify-center backdrop-blur-3xl"
        style={{
          backgroundImage: `url(${images[currentIndex].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
          transition: "background-image 1s ease-out",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center px-5">
          <div className="bg-white bg-opacity-50 rounded-xl  p-8 justify-self-start shadow-lg xl:w-1/2 xl:h-72  lg:w-1/2  lg:h-72 px-5  md:w-1/2 md:h-72 2xl:w-1/2 2xl:h-72">
            <h1 className="text-4xl font-bold text-center text-black mb-4">
              Welcome to <span className="text-pink-500">LOTUS HEALING</span>
            </h1>
            <p className="text-xl text-center text-black mb-8">
              At Lotus Healing, we help you release negative energy and invite
              healing and balance into your life. Our holistic practices support
              emotional well-being and a deeper sense of peace.
            </p>
            <div className="flex justify-center">
              <button
                className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2d6a16]"
                onClick={() => router.push("/about")}
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div  className="container mx-auto  py-10 xl:px-20 lg:px-20 px-5">
        <h2 data-aos="fade-up"  className="text-center xl:text-4xl lg:text-4xl text-2xl  font-bold mb-10">
          Our <strong className="text-pink-500">Services </strong>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg  rounded-lg p-6 text-center drop-shadow-2xl shadow-pink-50 overflow-hidden transition-transform transform hover:scale-105">
            <h3 className="font-bold xl:text-2xl  lg:text-2xl text-xl mb-4">
              Healing Full of Negative Energy
            </h3>
            <p className="mb-6">
              Our Healing Full of Negative Energy service is designed to cleanse
              your body, mind and environment of harmful, stagnant energy. By
              clearing these negative influences, we help you restore emotional
              balance, reduce stress and invite positivity into your life,
              creating a space that feels lighter and more harmonious.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-[#cb1d5c] hover:bg-[#2d6a16] text-white py-2 px-4 rounded"
            >
              Contact Now
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center  drop-shadow-2xl shadow-pink-50 overflow-hidden transition-transform transform hover:scale-105">
            <h3 className="font-bold xl:text-2xl  lg:text-2xl text-xl mb-4">
              Crystal Healing
            </h3>
            <p className="mb-6">
              Crystal Healing at Lotus Healing uses the natural energy of
              crystals to balance and align your chakras, clear energy blockages
              and promote overall well-being. Each crystal is chosen for its
              specific properties, helping to heal emotional wounds, boost
              positive energy and bring about inner peace and clarity.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-[#cb1d5c] hover:bg-[#2d6a16] text-white py-2 px-4 rounded"
            >
              Contact Now
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center  drop-shadow-2xl shadow-pink-50 overflow-hidden transition-transform transform hover:scale-105">
            <h3 className="font-bold xl:text-2xl  lg:text-2xl text-xl mb-4">
              Money Reiki
            </h3>
            <p className="mb-6">
              Our Money Reiki service focuses on clearing energy blockages
              related to wealth, abundance and financial prosperity. By shifting
              your mindset and releasing negative beliefs surrounding money, we
              help you align with the energy of abundance, attracting financial
              success and security into your life.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-[#cb1d5c] hover:bg-[#2d6a16] text-white py-2 px-4 rounded"
            >
              Contact Now
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center  drop-shadow-2xl shadow-pink-50 overflow-hidden transition-transform transform hover:scale-105">
            <h3 className="font-bold xl:text-2xl  lg:text-2xl text-xl mb-4">
              Ho'oponopono Healing
            </h3>
            <p className="mb-6">
              Ho'oponopono Healing is a powerful practice of forgiveness and
              self-healing. At Lotus Healing, we guide you through this Hawaiian
              technique to release negative thoughts, emotional blockages and
              inner conflicts. By embracing forgiveness, love and gratitude, you
              achieve emotional freedom and a renewed sense of peace and
              balance.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-[#cb1d5c] hover:bg-[#2d6a16] text-white py-2 px-4 rounded"
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
