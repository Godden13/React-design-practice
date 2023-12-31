export default function Blog() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          <div className="xl:w-2/5 md:w-1/2 p-4">
            <div className="border-2 border-black p-8 rounded-xl">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-500 mb-5">
                <svg
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Study now. Pay later
              </h2>
              <p className="leading-relaxed text-base">
                Convenient payment plans enable you to delay payments, at no
                interest, for up to 12 months, less stress, so you can focus on
                skills
              </p>
            </div>
          </div>
          <div className="xl:w-2/5 md:w-1/2 p-4">
            <div className="border-2 border-black p-8 rounded-xl">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-500 mb-5">
                <svg
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Learn anywhere
              </h2>
              <p className="leading-relaxed text-base">
                Convenient payment plans enable ypu to delay payment, at no
                interest, for up to 12 months. Less stress, so you can focus on
                skills.
              </p>
            </div>
          </div>
          <div className="xl:w-2/5 md:w-1/2 p-4">
            <div className="border-2 border-black p-8 rounded-xl">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-400 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Flexible timetable
              </h2>
              <p className="leading-relaxed text-base">
                Convenient payment plans enable you to delay payment, at no
                interest, for up to 12 months. Less stress, so you can focus on
                skills.
              </p>
            </div>
          </div>
          <div className="xl:w-2/5 md:w-1/2 p-4">
            <div className="border-2 border-black p-8 rounded-xl">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal-200 mb-5">
                <svg
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Career placement
              </h2>
              <p className="leading-relaxed text-base">
                Convenient payment plans enable you to delay payment, at no
                interest, for up to 12 months. Less stress, so you can focus on
                skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
