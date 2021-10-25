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
        <h4 class="text-sm md:text-2xl md:px-32  lg:text-2xl text-gray-600 mt-10 px-5 ">
          I'm a retail manager turned software engineer. I have utilized my
          people and team-building skills to train and develop sales teams that
          perform at the highest level. I left a sector I enjoyed and thrived in
          to bet on myself. I have taken on an opportunity to expand my
          technical skills and passion for growth by continuing my education and
          becoming a software engineer. I am always pursuing the opportunity to
          learn and grow as an individual and now, as a developer. I am
          goal-driven, people oriented, and impactful. I aim to bring my
          ambitious mindset to the tech industry to produce viable,
          user-friendly, solutions-oriented applications with a little comedic
          relief along the way! <br />
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
