import React from "react";

export default function Home() {
  return (
    <div class="w-screen py-32 absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center px-24">
      <img
        src="https://imgur.com/wERqsOS.jpg"
        alt="Paul Gonzalez Picture"
        class="w-64 md:w-72 rounded shadow-2xl mb-8"
      />
      <div class="w-screen flex flex-col justify-center text-center">
        <h2 className="hero-text" class="font-bold text-6xl text-gray-300">
          Hi, I'm Paul
        </h2>
        <h4 class="text-sm md:text-2xl lg:text-2xl text-gray-600 mt-10 px-5 ">
          I'm a tech enthusiast turned Software Engineer. Over time, I've had
          the opportunities to manage teams and develop solutions for businesses
          and consumers alike. I aim to bring my ambition to the tech industry
          to produce viable, user‐friendly, applications. How you may ask? Well,
          a little team-work, positive attitude and some comedic relief go a
          long way. <br />
          {/* Feel free to checkout my{" "}
          <a
            href="https://github.com/myfriendpaul"
            class="py-4 underline  text-gray-600 hover:text-gray-300
            ext-sm md:text-2xl lg:text-2xl"
          >
            Github
          </a>{" "}
          and download my resume{" "}
          <a
            class="underline"
            href="https://drive.google.com/uc?export=download&id=13vLZhrk0xgnxP6EwRM_qN4kKh3XPcIKG"
            download
          >
            here.
          </a> */}
        </h4>
      </div>
      <div>
        {/* <img
            src="https://imgur.com/wERqsOS.jpg"
            alt="Paul Gonzalez Picture"
            class="w-64 md:w-72 rounded shadow-2xl sm:mr-10"
          /> */}
      </div>
    </div>
  );
}
