import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Healing_negative_energy() {
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
          Healing full of negative energy
        </h1>
      </div>
      <div className="flex  justify-center  mt-10 px-5 xl:px-0 lg:px-0">
        <img
          className="justify-center xl:w-2/3 lg:w-2/3 h-full items-center text-center ring-offset-2 ring-2 ring-pink-400"
          src="/fitness.jpg"
        />
      </div>
      <div className="xl:px-20 lg:px-20 px-5 mt-20 text-xl text-slate-600 font-semibold">
        {" "}
        <p>
          At Lotus Healing, we specialize in clearing negative energy from your
          life and space, helping you restore balance and peace. Negative energy
          can manifest in many forms stress, anxiety, depression or even
          insomnia often building up unnoticed in your home or body. This energy
          leaves you feeling drained, restless or overwhelmed. Our healing
          services are designed to cleanse these negative influences, creating a
          space filled with positivity, relaxation and vibrant energy.
          Experience the transformation as your surroundings become a haven of
          calm, allowing you to feel happy, refreshed and truly at ease.
        </p>
      </div>

      <p  data-aos="fade-up" className="xl:text-4xl lg:text-4xl text-2xl font-bold text-center mt-16 pb-1 xl:px-32 lg:px-32 px-5">
        Effective Ways to{" "}
        <strong className="text-pink-500"> Clear Negative Energy </strong> and
        Uplift Your Home's Vibe
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mt-8 justify-center xl:px-32 lg:px-32 px-5">
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/Clear-Out-Clutter.jpg"
            alt="Clutter Clearing"
          />
          <p className="mt-2 text-center">
            {" "}
            <strong className="xl:text-xl lg:text-xl">
              Clear Out Clutter and Air Out Your Space{" "}
            </strong>
            <br></br> Removing unnecessary clutter and allowing fresh air to
            circulate are key steps in clearing stagnant energy.
          </p>
        </div>
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/Natural-Energy.jpg"
            alt="Energy Cleansing"
          />
          <p className="mt-2 text-center">
            {" "}
            <strong className="xl:text-xl lg:text-xl">
              {" "}
              Use Natural Energy Cleansing Methods
            </strong>
            <br></br> Practices like burning incense (such as Palo Santo or
            sage), smudging rituals and ringing bells help dispel negative
            vibes.
          </p>
        </div>
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/Nature-Light.jpg"
            alt="Nature & Light"
          />
          <p className="mt-2 text-center">
            {" "}
            <strong className="xl:text-xl lg:text-xl">
              Incorporate Nature and Light{" "}
            </strong>
            <br></br> Houseplants and natural light uplift energy. Healthy
            plants purify the air, while lighter colors and bright decor enhance
            positivity.
          </p>
        </div>
        <div className="bg-pink-50 p-4 flex flex-col items-center">
          <img
            className="w-full h-full object-cover overflow-hidden transition-transform transform hover:scale-105"
            src="/Spirituality.jpeg"
            alt="Candles & Crystals"
          />
          <p className="mt-2 text-center">
            <strong className="xl:text-xl lg:text-xl">
              Enhance Spirituality with Candles and Crystals{" "}
            </strong>{" "}
            <br></br>Lighting candles and placing healing crystals like Amethyst
            boosts ambiance and protects from negative energy.
          </p>
        </div>
      </div>

      <p  data-aos="fade-up" className="xl:text-4xl lg:text-4xl text-2xl font-bold text-center mt-16">
        Quick Ways to Clear Negative Energy from{" "}
        <strong className="text-pink-500">Your Body and Mind </strong>
      </p>
      <ol className="list-decimal list-inside mt-8 mx-8 xl:mx-32 lg:mx-32 text-lg space-y-6 mb-20">
        <li>
          <div className="inline-flex">
            <span className="font-bold">Meditation</span>
          </div>
          <p>
            Meditating helps us connect to our inner wisdom and intuition. It
            can also help us release stress and anxiety, which in turn can
            improve our mood and outlook. A regular practice allows us to detach
            ourselves from external stressors and negativity. When you meditate,
            you learn to become still and open your heart to new opportunities
            and insights. Mantra meditation is a powerful tool to help cleanse
            and revitalize energy and clear out energetic blocks in the chakras.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Abhaya Mudra</span>
          </div>
          <p>
            Mudras are hand gestures that can change the energy flow of the body
            and create spiritual awareness. The Abhaya Mudra is one of the most
            powerful tools in yoga to make you feel protected and safe. You
            should practice this mudra whenever you need to feel strong and
            confident. This mudra is used to protect yourself from harm and bad
            luck. It also helps to calm the nervous system to reduce stress and
            anxiety. To do this mudra, simply bring your right hand up to
            shoulder height with palm open and facing forwards.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Move your body</span>
          </div>
          <p>
            Exercise releases endorphins into your system, which makes you feel
            happier and calmer. It also helps release stress hormones out of
            your body, leaving you feeling relaxed and energized. Walking is a
            wonderful low-impact exercise that helps people clear negative
            thoughts and emotions. Yoga is a great workout to release stress,
            tension and negativity. It also increases flexibility, strengthens
            your core muscles and promotes health and overall wellness.
          </p>
        </li>
        <li>
          <div className="inline-flex">
            <span className="font-bold">Smile often</span>
          </div>
          <p>
            Smiling releases endorphins into your system, which makes you feel
            happier and dispels negative thoughts and feelings. Smiling is a
            quick and easy way to improve your mood and reduce stress. A quick
            and easy way to practice is by looking at yourself in the mirror and
            smiling regularly.
          </p>
        </li>
      </ol>
      <div className="bg-pink-300">
        <p className="xl:text-3xl lg:text-3xl font-serif  xl:px-20 lg:px-20 py-10  text-center">
          "Clear negativity and restore peace, inviting positivity and emotional
          balance into your life."
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

export default Healing_negative_energy;
