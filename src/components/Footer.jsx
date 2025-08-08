import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#cb1d5c] text-white py-8 xl:px-10 lg:px-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3  lg:grid-cols-3  md:grid-cols-2  xl:space-x-36 md:space-x-10 lg:space-x-36 text-center md:text-left">
            <div className="w-full md:w-96">
              <img
                src="/Lotus-Healing.jpg"
                alt="Lotus Healing Logo"
                className="mb-4 h-20 mx-auto md:mx-0"
              />
              <h3 className="font-bold text-xl mt-4 mb-4">
                Our Healing Services
              </h3>
              <p className="mb-8 leading-relaxed">
                Lotus Healing offers transformative healing services, including
                Crystal Healing, Money Reiki, Ho'oponopono Healing and clearing
                negative energy. We aim to bring balance, peace and positivity
                to your life.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold xl:mb-4 lg:mb-4 text-xl">Our Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/healing-negative-energy"
                      className="hover:underline"
                    >
                      Healing full of negative energy
                    </a>
                  </li>
                  <li>
                    <a href="/crystal-healing" className="hover:underline">
                      Crystal Healing
                    </a>
                  </li>
                  <li>
                    <a href="/money-reiki" className="hover:underline">
                      Money Reiki
                    </a>
                  </li>
                  <li>
                    <a href="/ho-oponopono-healing" className="hover:underline">
                      Ho'oponopono Healing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold xl:mb-4 lg:mb-4 text-xl">Quick Links</h3>
                <ul className="text-black font-semibold xl:space-y-2 lg:space-y-2 ">
                  <li>
                    <a href="/privacy-Policy" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-conditions" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold xl:mb-4 lg:mb-4 text-xl mt-5 xl:mt-0 lg:mt-0">Get Connected</h3>
              <ul className="space-y-4">
                <li className="hover:underline">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=30+N+Gould+St+Ste+R,+Sheridan,+Wyoming,+82801"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    30 N Gould St Ste R
                    <br />
                    Sheridan
                    <br /> Wyoming,82801
                    <br />
                    United States
                  </a>
                </li>

                <li className="text-black">
                  <a
                    href="mailto:info@lotushealingcenterllc.org"
                    className="hover:underline"
                  >
                    info@lotushealingcenterllc.org
                  </a>
                </li>
                <li className="text-black">
                  <a href="tel:+1 (646) 9804507" className="hover:underline">
                    +1 (646) 9804507
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#2d6a16] h-20 text-white text-center text-sm">
        <p className="pt-8">  © {new Date().getFullYear()}. Lotus Healing | All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
