import { Icon } from "@iconify/react";

export default function OnlyStonks() {
  return (
    <div>
      <div class="flex items-center w-full px-4 pt-10 bg-cover card bg-base-200 z-10">
        <div class="card glass lg:card-side text-neutral-content">
          <figure class="p-6">
            <img src="https://litter.catbox.moe/jkhzk3.gif" />
          </figure>
          <div class="card-body flex flex-col justify-center items-center text-center">
            <img src="https://imgur.com/638yHix.jpg" class="card-title w-40 " />
            <p class="mb-2">
              Utilizing the Marketstack API, users can search stocks by their
              "tickers" and be provide opening, high, low, and closing prices
              for the day. Graph is produced with the last 30 days of data.
            </p>
            <div>
              <a
                href="https://github.com/myfriendpaul/OnlyStonks"
                target="_blank"
                class="px-2"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Github
                </button>
              </a>
              <a
                href="https://myfriendpaul.github.io/OnlyStonks/"
                target="_blank"
                class="px-2"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Website
                </button>
              </a>
              <a
                href="https://youtu.be/ZrGxMwCIKJM"
                class="px-2"
                target="_blank"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Demo
                </button>
              </a>
            </div>
            <div class="card-actions flex mt-2 w-md">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
