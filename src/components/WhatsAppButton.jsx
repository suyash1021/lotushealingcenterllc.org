// components/WhatsAppButton.js

import { useState } from "react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "",
      image: "/lotus.png", // Update with the actual path
      whatsappLink:
        "https://api.whatsapp.com/send/?phone=%2B919972503957&text=https%3A%2F%2Flotushealingcenterllc.org//%0A++++++++Hi+there%21++++++++%0A++++&type=phone_number&app_absent=0",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-2 w-72 absolute bottom-16 right-0">
          <div className="flex justify-between items-center border-b pb-2 mb-2 ">
            <div className="flex items-center align-middle">
              <img
                src="/Lotus-Healing.jpg"
                href="/"
                alt="Lotus-Healing"
                className="w-32 h-16 align-center"
              />{" "}
              {/* Update with the actual path */}
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500">
              &times;
            </button>
          </div>
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => window.open(contact.whatsappLink, "_blank")}
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-bold">{contact.name}</div>
                <div className="text-green-800 font-bold">lotus_healing</div>
                <div className="text-sm text-gray-400">
                  online <span className="text-green-500">●</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
     <button
  onClick={() => setIsOpen(!isOpen)}
  className="bg-green-400 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center focus:outline-none animate-pulsate"
>
  <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-10 h-10" />
</button>

    </div>
  );
};

export default WhatsAppButton;
