import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from "next/router";
function Crystal_healing() {
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
      <div  data-aos="fade-up" className="flex justify-center">
        <h1 className="xl:text-4xl lg:text-4xl text-3xl font-bold  mt-32">
          Crystal healing
        </h1>
      </div>
      <div className="flex  justify-center  mt-10 xl:px-5 lg:px-5 px-5">
        <img
          className="justify-center  xl:w-2/3 lg:w-2/3  h-full items-center text-center ring-offset-2 ring-2 ring-pink-400"
          src="/crystal-healing.jpg"
        />
      </div>
      <div className="xl:px-20 lg:px-20 px-5 mt-20 text-xl text-slate-600 font-semibold ">
        {" "}
        <p>
          Crystal healing is a holistic alternative therapy where crystals and
          gemstones are believed to facilitate healing by channeling positive
          energy into the body and drawing out negative, disease-causing energy.
          Proponents claim that different stones possess unique properties that
          can aid in physical, emotional and spiritual healing. Despite its
          growing popularity, crystal healing is often regarded as pseudoscience
          by the medical community, as there is no scientific evidence to
          support the idea that energy flows through the body or that crystals
          can cure diseases. Nonetheless, many continue to use it for its
          perceived wellness benefits.
        </p>
      </div>

      <p  data-aos="fade-up" className="xl:text-4xl text-3xl px-5  xl:px-5  lg:px-5 font-bold text-center mt-16 pb-1">
        Effective Ways to Use the
        <strong className="text-pink-500"> 4 </strong> Best Crystals for
        Protection
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mt-8 justify-center xl:px-32 lg:px-32 px-5">
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/black-tourmaline.jpg"
            alt="Clutter Clearing"
          />
          <p className="mt-2 text-center">
            {" "}
            <strong className="text-xl">Black Tourmaline </strong>
            <br></br>Blocks negative energy, grounds you and reduces anxiety.
            Ideal for meditation or daily protection.
          </p>
        </div>
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/obsidian.jpg"
            alt="Energy Cleansing"
          />
          <p className="mt-2 text-center">
            {" "}
            <strong className="text-xl"> Obsidian</strong>
            <br></br> Absorbs harmful energy, encourages self-reflection and
            shields your space. Place near home entryways.
          </p>
        </div>
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/amethyst.jpg"
            alt="Nature & Light"
          />
          <p className="mt-2 text-center">
            {" "}
            <strong className="text-xl">Amethyst </strong>
            <br></br> Provides emotional and spiritual protection, promotes
            calmness and wards off overwhelm. Keep under your pillow or around
            your home.
          </p>
        </div>
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/colorless-rock-crystal.jpg"
            alt="Candles & Crystals"
          />
          <p className="mt-2 text-center">
            <strong className="text-xl">Clear Quartz</strong> <br></br>Amplifies
            the energy of other crystals, cleanses negativity and balances your
            aura. Carry or wear for daily protection.
          </p>
        </div>
      </div>

      <p  data-aos="fade-up" className="xl:text-4xl lg:text-4xl text-3xl px-5 xl:px-0 lg:px-0 font-bold text-center mt-16">
        5 Effective <strong className="text-pink-500 ml-1">Crystals </strong> to{" "}
        <strong className="text-pink-500 ml-1"> Use in </strong> Your{" "}
        <strong className="text-pink-500">Yoga</strong> Practice
      </p>
      <ol className="list-decimal list-inside mt-8 mx-8 xl:mx-32 lg:mx-32 text-lg space-y-6 mb-20">
        <li>
          <div className="inline-flex">
            <span className="font-bold">Citrine for Inner Calm and Peace</span>
          </div>
          <p>
            Citrine is known for promoting abundance and mental clarity. It
            helps bring calm, inner peace and a spark of energy to your yoga
            practice. Place citrine around your mat or create an altar to stay
            focused and energized during your session.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Clear Quartz for Mental Clarity</span>
          </div>
          <p>
            Clear quartz is a powerful healing stone that enhances energy flow
            and mental clarity. It helps you maintain focus during poses and
            elevates your spiritual awareness. Incorporating clear quartz into
            your practice can support mindful meditation and deeper connection
            in savasana.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Jasper for Stress Relief</span>
          </div>
          <p>
            Jasper is a nurturing stone that absorbs negative energy and helps
            relieve stress. It encourages boldness, confidence and quick
            thinking while shielding you from emotional negativity. Use jasper
            to energize your spirit and release tension during yoga.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Obsidian for Emotional Release</span>
          </div>
          <p>
            Obsidian is a protective stone that helps process emotions and let
            go of emotional blocks. It promotes strength, clarity and
            compassion, making it an ideal crystal for restorative yoga or
            meditation, aiding in releasing unwanted emotional baggage.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">
              Amethyst for Tranquility and Focus
            </span>
          </div>
          <p>
            Amethyst is known for its calming aura and healing properties. It
            helps purify thoughts, release anger and anxiety and promote inner
            peace. Keeping amethyst near your yoga mat enhances focus and
            tranquility, allowing you to fully engage in your practice.
          </p>
        </li>
      </ol>
      <div className="bg-pink-300">
        <p className="text-3xl font-serif  xl:px-20 lg:px-20 py-10  text-center">
          "Align your energy with the natural healing power of crystals for
          clarity, peace and balance."
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

export default Crystal_healing;
