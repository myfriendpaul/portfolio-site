import { Icon } from "@iconify/react";

export default function Cryptonite() {
  return (
    <div>
      <div class="flex items-center w-full px-4 pt-10 bg-cover card bg-base-200 z-10">
        <div class="card glass lg:card-side text-neutral-content">
          <figure class="p-6">
            <img src="https://litter.catbox.moe/d2iq8y.gif" />
          </figure>
          <div class="card-body flex flex-col justify-center items-center text-center">
            <img src="https://imgur.com/DTPBDV9.jpg" class="card-title w-40 " />
            <p class="mb-2">
              Remake and improvement on my previous cryptocurrency tracking app.
              Users are able to search, add, and remove coins from their
              watchlist. I used this as an opportunity to learn Firebase.
            </p>
            <div>
              <a
                href="https://github.com/myfriendpaul/crypto-tracker"
                target="_blank"
                class="px-2"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Github
                </button>
              </a>
              <a
                href="https://cryptonite-16c40.web.app/"
                target="_blank"
                class="px-2"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Website
                </button>
              </a>
              <a
                href="https://youtu.be/s6UN_RmTdVQ"
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
              <Icon
                icon="logos:material-ui"
                width="34"
                height="34"
                class="mx-2"
              />
              <Icon
                icon="vscode-icons:file-type-reactjs"
                width="34"
                height="34"
                class="mx-2"
              />
              <Icon
                icon="vscode-icons:file-type-firebase"
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
