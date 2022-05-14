import React from "react";
import Avatar from "../assets/images/avatar.jpg";
import Tg from "../assets/images/tg.svg";
import Inst from "../assets/images/inst.svg";
import Vk from "../assets/images/vk.svg";

const Header: React.FC = () => {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <img
          className="w-12 h-12 rounded-full mr-4 self-start"
          src={Avatar}
          alt="Автор работ"
        />
        <span className="self-center text-xl font-serif">Malaya</span>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://t.me/joss_sp" target={"_blank"} rel="noreferrer">
          <img className="mr-4" src={Tg} alt="tg"  />
        </a>
        <a href="https://t.me/joss_sp" target={"_blank"} rel="noreferrer">
          <img className="mr-4" src={Inst} alt="inst" />
        </a>
        <a href="https://t.me/joss_sp" target={"_blank"} rel="noreferrer">
          <img src={Vk} alt="vk" />
        </a>
      </div>
    </div>
  );
};

export default Header;
