import React from "react";
import Footer from "../Footer/Footer";
import { Icon } from "@iconify/react";

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
          to produce viable, user‐friendly applications. How you may ask? Well,
          a little team-work, positive attitude and some comedic relief go a
          long way! <br />
        </h4>
        <div class="flex justify-center w-screen py-4 bottom-0 items-center">
          <a href="https://github.com/myfriendpaul" target="_blank">
            <Icon
              icon="jam:github"
              color="#4b5563"
              width="42"
              height="42"
              class="mx-4"
            />
          </a>
          <a href="https://www.linkedin.com/in/myfriendpaul/" target="_blank">
            <Icon
              icon="cib:linkedin"
              color="#4b5563"
              width="40"
              height="40"
              class="mx-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
