import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./Heading";
import { contactCards } from "../constants/constants";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendMail } from "../libs/sendMail";

const Contact = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      const isTrue = regex.test(e.target.value);
      if (!isTrue) {
        e.currentTarget.classList.add("border-red-500");
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(true);
      } else {
        setError(false);
        e.currentTarget.classList.remove("border-red-500");
        setForm({ ...form, [e.target.name]: e.target.value });
      }
    } else if (e.target.name === "mobile") {
      const regex = /^(0|91)?[6-9][0-9]{9}$/;
      const isTrue = regex.test(e.target.value);
      if (!isTrue) {
        e.currentTarget.classList.add("border-red-500");
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(true);
      } else {
        setError(false);
        e.currentTarget.classList.remove("border-red-500");
        setForm({ ...form, [e.target.name]: e.target.value });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = async () => {
    if (!error) {
      const response = await sendMail(form);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    }
  };

  return (
    <div
      id="contact"
      className="md:px-[6vw] sm:px-[4vw] px-[1rem] h-[100svh] w-full relative overflow-hidden grid place-items-center no-scrollbar"
    >
      <div className="w-full">
        <div className="icons flex gap-8 flex-wrap justify-center">
          {contactCards.length > 0 &&
            contactCards.map((card, i) => {
              return (
                <a
                  key={i}
                  className="bg-text size-12  rounded-full grid place-items-center text-btn hover:text-text hover:scale-125 hover:bg-transparent transition-all hover:border hover:border-text text-2xl"
                  href={card.link}
                  title={card.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={card.icon} />
                </a>
              );
            })}
        </div>
        <form
          className="border-text border md:w-1/2 sm:w-3/4 w-[95%]  px-8 py-3 mx-auto mt-8 rounded-md relative z-10 "
          name="mail-from"
          id="mail-from"
        >
          <h3 className="text-center text-2xl font-medium mb-2 font-poppins text-text">
            Say Hello
          </h3>
          <div className="flex flex-col gap-1 w-11/12 mx-auto">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => handleInputChange(e)}
              max={4}
              className="p-1 bg-transparent border-b text-text"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handleInputChange(e)}
              className="p-1 bg-transparent border-b text-text"
            />
            <input
              type="number"
              placeholder="Mobile"
              onChange={(e) => handleInputChange(e)}
              name="mobile"
              className="p-1 bg-transparent border-b text-text"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              onChange={(e) => handleInputChange(e)}
              cols="10"
              rows="3"
              className="p-1 bg-transparent border-b resize-none text-text"
            ></textarea>
            <button
              type="button"
              className="uppercase mx-auto text-text inline-block w-[8rem] text-center mt-3 bg-btn transition-all px-2 py-3 rounded-full"
              onClick={handleFormSubmit}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Heading heading={"Let's Connect"} />
    </div>
  );
};

export default Contact;
