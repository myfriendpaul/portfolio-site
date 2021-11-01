import { Icon } from "@iconify/react";

export default function BoomRoasted() {
  return (
    <div>
      <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200 z-0">
        <div class="card glass lg:card-side text-neutral-content">
          <figure class="p-6">
            <img src="https://litter.catbox.moe/2sywh2.gif" />
          </figure>
          <div class="card-body flex flex-col justify-center items-center text-center">
            <img class="card-title w-40" src="https://imgur.com/whQPVYY.jpg" />
            <p class="mb-2">
              Boom! Roasted is a web app where a user can easily navigate a
              coffee company's product line. Members can add, edit and update
              inventory as well as pricing.
            </p>
            <div>
              <a
                src="https://github.com/myfriendpaul/boom-roasted"
                class="px-2"
                target="_blank"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Github
                </button>
              </a>
              <a
                href="https://boomroasted.netlify.app/"
                target="_blank"
                class="px-2"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Website
                </button>
              </a>
              <a
                href="https://youtu.be/hELPoDDO0Oc"
                class="px-2"
                target="_blank"
              >
                <button class="h-10 px-5 gray-indigo-700 transition-colors duration-150 border border-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-indigo-100">
                  Demo
                </button>
              </a>
            </div>
            <div class="card-actions flex mt-2 justify-between">
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
                icon="logos:bootstrap"
                width="32"
                height="32"
                class="mx-2"
              />
              <Icon
                icon="simple-icons:express"
                width="34"
                height="34"
                class="mx-2"
              />
              <Icon
                icon="teenyicons:mongodb-solid"
                color="#589636"
                width="32"
                height="32"
                class="mx-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
