import "./header.scss";
import React from "react";
import Image from "next/image";
import logo from "../../img/Vector.svg";
import Group1 from "../../img/Group1.png";
import Group from "../../img/Group.png";
import img from "../../img/img.png";
import search from "../../img/Search.png";
import Link from "next/link";

const Headre = () => {
  return (
    <div className="header_conatiner items-center">
      <div className="flex gap-[50px] items-center ">
        <Link href="/">
          <Image
            width={111}
            height={30}
            className="sm:w-20 max-sm:w-16"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center max-md:h-0 gap-5 max-sm:justify-end sm:justify-end sm:max-w-[600px] max-w-[800px]">
        <div className="header__sarche flex items-center max-md:w-[200px] max-sm:w-[80px] max-w-[600px]">
          <input
            className="w-full bg-transparent h-20 max-sm:h-10 text-white outline-none text-2xl font-thin sm:h-3"
            type="sarche"
          />
          <Image className="w-5 h-5 sm:w-3 " src={search} alt="search" />
        </div>
        <div className="flex gap-5 items-center">
          <h2 className="header__item">ÇOCUK</h2>
          <Image className="w-5 h-5" src={Group} alt="Group" />
          <Image className="w-5 h-5" src={Group1} alt="Group" />
          <Image className="w-8 h-8" src={img} alt="dw" />
        </div>
      </div>
    </div>
  );
};

export default Headre;
