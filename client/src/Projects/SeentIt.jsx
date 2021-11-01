import { Icon } from "@iconify/react";

export default function SeentIt() {
  return (
    <div>
      <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200 z-10">
        <div class="card glass lg:card-side text-neutral-content">
          <figure class="p-6">
            <img src="https://litter.catbox.moe/aqn314.gif" />
          </figure>
          <div class="card-body flex flex-col justify-center items-center text-center">
            <img class="card-title w-40" src="https://imgur.com/H1CQhRx.jpg" />
            <p class="mb-2">
              With the movie enthusiast in mind, Seen-It is a movie tracking
              application that enables users to search through the TMDB API and
              add them to their Watch List.
            </p>
            <div>
              <a
                href="https://github.com/myfriendpaul/seent-it"
                target="_blank"
                class="px-2"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Github
                </button>
              </a>
              <a
                href="https://seent-it.netlify.app/"
                class="px-2"
                target="_blank"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Website
                </button>
              </a>
              <a
                href="https://youtu.be/5WFODIwVcjQ"
                class="px-2"
                target="_blank"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Demo
                </button>
              </a>
            </div>
            <div class="card-actions flex mt-2 justify-around w-md">
              <Icon
                icon="logos:javascript"
                width="32"
                height="32"
                class="mx-2"
              />
              <Icon
                icon="vscode-icons:file-type-html"
                width="34"
                height="34"
                class="mx-2"
              />
              <Icon
                icon="vscode-icons:file-type-css"
                width="34"
                height="34"
                class="mx-2"
              />
              <Icon
                icon="logos:material-ui"
                width="34"
                height="34"
                class="mx-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
