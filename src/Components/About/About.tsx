import React from "react";

export default function About() {
  return (
    <section className="text-gray-600 h-full body-font  text-white overflow-hidden">
      <div className="container px-5 py-24 bg-black mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-2/3 lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-white text-4xl title-font font-medium mb-4">
              About Skill
            </h1>

            <p className="leading-relaxed text-l mb-4">
              We are the leding online training program for designers,
              programmers and more. Thousands of students connect with skilled
              professionals through eSkill, and gain hands-on training and real
              life experience. With more than 20 years of experience in the
              field, we know what leading companies are looking for when they
              seek out new hires. We provide the skills you need to learn, grow
              and succeed.
            </p>

            <button className="flex text-white bg-inherit border-solid border-2 border-white rounded-full py-2 px-6 focus:outline-none rounded">
              Our Contact
            </button>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-2/3 lg:h-auto h-64 object-cover object-center rounded"
            src="../../../public/vr.jpg"
          />
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-500 mb-5 px-5 fixed right-16 bottom-20" />
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-500 mb-5 px-5 fixed right-8 bottom-20" />
        </div>
      </div>
    </section>
  );
}
