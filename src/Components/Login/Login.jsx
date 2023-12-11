export default function Login() {
  return (
    <section className="text-gray-600 body-font ">
      <div className="flex relative bg-indigo-50 justify-evenly">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-500 mb-5 px-5 fixed left-16 top-25" />
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Have a question?
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    id="email"
                    name="email"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className=" bg-white m-x-5"
                  />
                  <label htmlFor="terms">
                    {" "}
                    I accept the{" "}
                    <a href="#" className="text-blue-600 font-semibold	">
                      TERMS OF SERVICE
                    </a>
                  </label>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className=" w-full text-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-6">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-500 mb-5 px-5 fixed right-16 bottom-16" />
      </div>
      <div className="w-full h-20 bg-teal-900 text-white flex justify-center items-center">
        <p className="text-xs">Sample text. Click to select Text Element</p>
      </div>
    </section>
  );
}
