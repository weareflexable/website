import React from "react";

const Partnerwithus = () => {
  return (
    <>
      <div className="mt-10 pt-10">
        <div
          name="partnerwithus"
          className="text-center text-6xl font-bold italic mt-20 pt-20"
        >
          <h1>Partner with us !</h1>
        </div>
        <div className="max-w-[1240px] mx-auto mt-10 pt-10 grid md:grid-cols-2">
          <div className="flex flex-col text-[#8109f8] font-bold  mx-5 ">
            <h1 className="text-2xl ">GET MORE OUT OF YOUR SPACE !</h1>
            <br />
            <br />
            <p className="text-xl text-justify italic text-[#b73e2b]">
              The problem- <br />
              Venue owners are limited to the amount of space they own and
              operate. Until now, revenue was limited solely to the services
              they provide their patrons.
            </p>
            <br />
            <p className="text-xl text-justify italic text-[#b73e2b]">
              The solution- <br></br> Through the sale of custom-designed NFTs,
              Flexable has pioneered a system for venue owners to provide
              customers with exclusive access to their services- capitalizing on
              the venue’s existing popularity and increasing revenue all without
              changing the business model.
            </p>
          </div>
          <img
            className="w-[1000px] mx-5  rounded-full animate-pulse "
            src="/partner.gif"
            alt="/"
          />
        </div>
        <div className="mt-5 pt-5 text-[#8109f8] font-bold text-xl text-center">
          <h1>
            Are customers clamoring to get into your establishment? We can help
            you get them in.
          </h1>
          <br />
          <p className="text-[#b73e2b] italic">
            “Flexable has created passive income for my venue where I didn't
            know it existed before” <br></br> - You, the venue owner, shortly
            after partnering with us
          </p>
          <br />
          <p className="text-[#b73e2b] italic">
            “I literally only go to bars that are partnered with Flexable now. I
            love the utility!” <br /> - Someone who previously waited in lines
          </p>
        </div>
        <hr className="h-1 mx-20 mt-10 pt-10animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
        <div className="mt-10 pt-10 text-[#8109f8] font-bold text-xl text-center pb-10">
          <h1>Interested in becoming a partner? Drop us a line!</h1>
          <br />
          <br />

          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2 mx-20">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required=""
                />
              </div>
              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required=""
                />
              </div>
              <div>
                <label
                  for="company"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite"
                  required=""
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required=""
                />
              </div>
              <div>
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="joy@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="visitors"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  City Name
                </label>
                <input
                  type="text"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="florida"
                  required=""
                />
              </div>
            </div>
            <div className="mb-6 mx-20">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Message
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the message"
                required="/"
              />
            </div>

            <div className="flex items-start mb-6 mx-20">
              {/* <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div> */}
              {/* <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label> */}
            </div>
            <button
              type="Submit"
              className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 mt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  animate-pulse"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Partnerwithus;
