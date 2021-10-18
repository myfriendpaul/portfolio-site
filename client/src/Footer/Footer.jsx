import { Icon } from "@iconify/react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
