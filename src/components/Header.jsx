import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";

function Header({ isShadow }) {
  const [showSubNav, setShowSubNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [subNavPosition, setSubNavPosition] = useState({ left: 0, top: 0 });
  const servicesRef = useRef(null);
  const router = useRouter();
  let timer;

  const handleMouseEnter = () => {
    const rect = servicesRef.current.getBoundingClientRect();
    setSubNavPosition({
      left: rect.left,
      top: rect.bottom,
    });
    clearTimeout(timer);
    setShowSubNav(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setShowSubNav(false);
    }, 200);
  };

  const handleMobileSubmenuToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigateToInquiry = () => {
    router.push("/contact");
  };

  const closeMobileMenu = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-24">
        <div className="container mx-auto flex flex-col items-center justify-center px-8 py-2">
          <div className="flex justify-between items-center w-full">
            <a href="/" className="flex items-center text-black">
              <img src="/LotusHealing.png" alt="Logo" className="h-20" />
            </a>
            <div className=" hidden md:block px-8">
              <div className="flex flex-col items-center ">
                <span className="text-base font-semibold text-black ">
                  Contact: +1 (646) 9804507 | Email:
                  info@lotushealingcenterllc.org
                </span>

                <div className="w-full border-b border-gray-300 mt-2"></div>
              </div>

              <div className="hidden md:flex space-x-8 items-center font-semibold ml-14">
                <a
                  href="/"
                  className="text-[#cb1d5c]  hover:text-[#2d6a16] transition duration-300 ease-in-out font-Sans hover:font-bold text-lg"
                >
                  Home
                </a>
                <a
                  ref={servicesRef}
                  className="text-[#cb1d5c]  hover:text-[#2d6a16] transition cursor-pointer duration-300 ease-in-out font-Sans hover:font-bold text-lg relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Service
                </a>
                <a
                  href="/about"
                  className="text-lg text-[#cb1d5c]  hover:text-[#2d6a16] transition duration-300 ease-in-out font-Sans hover:font-bold"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-[#cb1d5c]  hover:text-[#2d6a16] transition duration-300 ease-in-out font-Sans hover:font-bold text-lg"
                >
                  Contact us
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="absolute top-16 left-0 w-full bg-white shadow-lg">
                      <div className="flex flex-col items-start p-4">
                        <a
                          href="/"
                          className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#2d6a16]"
                        >
                          Home
                        </a>
                        <div className="relative w-full">
                          <button
                            className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-black hover:text-[#2d6a16] cursor-pointer"
                            onClick={handleMobileSubmenuToggle}
                          >
                            Service
                            <ChevronDownIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                          {isDropdownOpen && (
                            <div className="mt-2 pl-6">
                             
                              <a
                                href="/tarot_reading"
                                className="block px-3 py-2 text-black hover:text-[#2d6a16]"
                                onClick={closeMobileMenu}
                              >
                                Tarot Reading
                              </a>
                              <a
                                href="/healing-negative-energy"
                                className="block px-3 py-2 text-black hover:text-[#2d6a16]"
                                onClick={closeMobileMenu}
                              >
                                Healing full of negative energy
                              </a>
                              <a
                                href="/crystal-healing"
                                className="block px-3 py-2 text-black hover:text-[#2d6a16]"
                                onClick={closeMobileMenu}
                              >
                                Crystal healing
                              </a>
                              <a
                                href="/money-reiki"
                                className="block px-3 py-2 text-black hover:text-[#2d6a16]"
                                onClick={closeMobileMenu}
                              >
                                Money Reiki
                              </a>
                              <a
                                href="/ho-oponopono-healing"
                                className="block px-3 py-2 text-black hover:text-[#2d6a16]"
                                onClick={closeMobileMenu}
                              >
                                Hoponopono healing
                              </a>
                            </div>
                          )}
                        </div>
                        <a
                          href="/about"
                          className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#2d6a16]"
                        >
                          About
                        </a>
                        <button
                          className="w-full bg-[#cb1d5c] hover:bg-[#2d6a16] text-white font-bold py-2 px-4 rounded mt-2"
                          onClick={navigateToInquiry}
                        >
                          Contact us
                        </button>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>

        {showSubNav && (
          <div
            className="bg-white border shadow-md py-2 px-8 rounded-lg fixed mt-4"
            style={{ left: subNavPosition.left, top: subNavPosition.top }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto">
              <div className="flex justify-center items-center space-x-20">
                <div className="flex flex-col">
                <a
                    href="/tarot_reading"
                    className="font-sans text-lg hover:text-green-500 cursor-pointer capitalize mt-1"
                  >
                    Tarot reading
                  </a>
                  <a
                    href="/healing-negative-energy"
                    className="font-sans text-lg hover:text-green-500 cursor-pointer capitalize mt-1"
                  >
                    Healing full of negative energy
                  </a>
                  <a
                    href="/crystal-healing"
                    className="font-sans text-lg hover:text-green-500 cursor-pointer capitalize  mt-1"
                  >
                    Crystal healing
                  </a>
                  <a
                    href="/money-reiki"
                    className="font-sans text-lg hover:text-green-500 cursor-pointer capitalize  mt-1"
                  >
                    Money Reiki
                  </a>
                  <a
                    href="/ho-oponopono-healing"
                    className="font-sans text-lg hover:text-green-500 cursor-pointer capitalize  mt-1"
                  >
                    Ho'oponopono healing
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
