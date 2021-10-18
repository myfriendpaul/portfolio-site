import React from "react";
import BoomRoasted from "./BoomRoasted";
import OnlyGoesUp from "./OnlyGoesUp";
import OnlyStonks from "./OnlyStonks";
import SeentIt from "./SeentIt";
import "./Projects.css";
export const Projects = () => {
  return (
    <div className="cards" class="flex flex-wrap overflow-hidden">
      <div class="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-20">
        <OnlyStonks />
      </div>

      <div class="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-20">
        <SeentIt />
      </div>

      <div class="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <BoomRoasted />
      </div>

      <div class="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <OnlyGoesUp />
      </div>
    </div>
  );
};
