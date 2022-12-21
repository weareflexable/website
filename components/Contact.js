import React, { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const reCaptchaRef = React.createRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const captchaToken = formData.get("captchaToken");

    const emailData = {
      email: email,
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      business: business,
      message: `${message}`,
    };

    if (!captchaToken) {
      toast("Please submit captcha");
    } else {
      try {
        await fetch("api/sendgrid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }).then((response) => {
          if (!response.ok) {
            toast(`Email could not be sent (error: ${response.status})`);
          } else {
            toast("Contact submission sent");
          }
        });
      } catch (error) {
        toast("Error submitting form");
      }
      reCaptchaRef.current.reset();
    }
  };

  const handleChange = (token) => {
    // Add captcha token to form data
    const form = document.querySelector("form");
    const captchaTokenField = document.createElement("input");
    captchaTokenField.setAttribute("type", "hidden");
    captchaTokenField.setAttribute("name", "captchaToken");
    captchaTokenField.setAttribute("value", token);
    form.appendChild(captchaTokenField);
  };

  return (
    <Container id="contact" className={"mb-20 mt-12 lg:mt-24 scroll-mt-10"}>
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl lg:text-6xl mb-2">Contact Us</h2>
      </div>
      <div className="max-w-[1240px] m-auto pt-2 pb-5 font-figtree">
        <form className="max-w-[500px] m-auto pl-2" onSubmit={handleSubmit}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                id="first_name"
                value={first_name}
                onChange={(event) => setFirstName(event.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                id="last_name"
                value={last_name}
                onChange={(event) => setLastName(event.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={(event) => setPhone(event.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="company"
                id="company"
                onChange={(event) => setBusiness(event.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                for="company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Business Name
              </label>
            </div>
          </div>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="border shadow-lg p-3 w-full text-black"
            cols="30"
            rows="8"
            placeholder="Message"
          ></textarea>
          <div className="flex justify-center mt-4">
            <ReCAPTCHA
              ref={reCaptchaRef}
              sitekey="6LfUwIgjAAAAAHvqle9afBnsSglDDHwGiSPYcY6F"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-5">
            <Button
              className={"mr-3 text-black"}
              variant={"primary"}
              type={"submit"}
            >
              Submit
            </Button>
            <ToastContainer />
          </div>
        </form>
      </div>
      {/* <div className='max-w-[1240px] m-auto pt-2 pb-5'>
        
        <form className='max-w-[600px] m-auto '>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' />
                
                <input className='border shadow-lg p-3' type="email" placeholder='Email' />
               
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Business Name' />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="8" placeholder='Message'></textarea>
            <button className=' text-2xl border bg-purple-600 hover:bg-purple-800 shadow-lg p-2 text-white w-full mt-2'>Submit</button>
        </form>
    </div> */}
    </Container>
  );
};

export default Contact;
