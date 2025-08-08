import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullName = e.target.fullName.value;
    const phoneNumber = phone; 

    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("email", e.target.email.value);
    formData.append("phone", phoneNumber);
    formData.append("message", e.target.message.value);

    try {
      const res = await fetch(
        "https://lotushealingcenterllc.org/api/send-email.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        setNotification({
          type: "success",
          message: `Thank You ${fullName} for Connecting with Us..! Our team will contact you soon.`,
        });
      } else {
        setNotification({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setNotification({
        type: "error",
        message:
          "An error occurred while sending mail. Please try again later.",
      });
    } finally {
      setLoading(false);
      e.target.reset();
      setShowModal(true);
    }
  };

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
        data-aos="fade-up"
        className="text-4xl mt-32 flex justify-center font-bold"
      >
        <p>
          {" "}
          <strong className="text-pink-500"> Contact</strong> Now
        </p>
      </div>
      <div className="flex xl:flex-row lg:flex-row flex-col-reverse justify-center items-center py-10 px-4 md:pt-16 pt-16 md:ml-20 md:mr-20">
        <div className="xl:w-1/2 lg:w-1/2 md:pr-8">
          <h2 className="xl:text-2xl text-2xl font-semibold text-center md:text-left">
            <ul>
              <li className="text-black mt-10 xl:mt-0 lg:mt-0">
                <p className="text-pink-700">Lotus Healing</p>
              </li>
              <li className="text-black hover:underline ">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=30+N+Gould+St+Ste+R,+Sheridan,+Wyoming,+82801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  30 N Gould St Ste R
                  <br />
                  Sheridan
                  <br /> Wyoming,82801
                  <br /> United States
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
          </h2>
        </div>

        <div className="xl:w-1/2 lg:w-1/2 w-full bg-pink-200 p-6 rounded-lg shadow-xl">
          <form onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your name*"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md peer"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email*"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md peer"
                  required
                />
              </div>
            </div>

            <div className="mt-4 relative">
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(value, countryData) => {
                  setPhone(value);
                  setCountryCode(countryData.dialCode);
                }}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
                className="peer "
              />
            </div>

            <div className="mt-4 relative">
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Your message..."
                className="mt-1 p-2 w-full border border-gray-300 rounded-md peer"
                rows="4"
                required
              />
            </div>

            <div className="text-center mt-4">
              {loading ? (
                <div className="flex justify-center">
                  <div className="loader"></div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-4 py-2.5 rounded-full text-lg font-semibold hover:bg-[#2d6a16]"
                >
                  Send Message
                </button>
              )}
            </div>
          </form>

          {notification && (
            <Modal
              show={showModal}
              onClose={() => setShowModal(false)}
              title={notification.type === "success" ? "Success" : "Error"}
            >
              {notification.message}
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
