import { Icon } from "@iconify/react";

export default function OnlyGoesUp() {
  return (
    <div>
      <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200 z-10">
        <div class="card glass lg:card-side text-neutral-content">
          <figure class="p-6">
            <img src="https://litter.catbox.moe/tkkpj3.gif" />
          </figure>
          <div class="card-body flex flex-col justify-center items-center text-center">
            <img
              class="card-title mb-2 w-40"
              src="https://imgur.com/4KheEXf.jpg"
            />
            <p class="mb-2">
              Cryptocurrency tracker that allows users to search, discover, and
              keep track of their cryptocurrencies with real-time data. I built
              this to gain experience having different API's communicate with
              each other.
            </p>
            <div>
              <a
                href="https://github.com/myfriendpaul/only-goes-up"
                class="px-2"
                target="_blank"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Github
                </button>
              </a>
              <a
                href="https://onlygoesup.netlify.app/"
                target="_blank"
                class="px-2"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Website
                </button>
              </a>
              <a
                href="https://youtu.be/jFFTQfdgic8"
                class="px-2"
                target="_blank"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Demo
                </button>
              </a>
            </div>
            <div class="card-actions max-w-1/2 flex mt-2">
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
                icon="mdi:language-ruby-on-rails"
                color="#c00"
                width="40"
                height="40"
                class="-mt-1 mx-2"
              />
              <Icon
                icon="logos:postgresql"
                color="#c00"
                width="30"
                height="30"
                class="mt-1 mx-2"
                title="PostgreSQL Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
