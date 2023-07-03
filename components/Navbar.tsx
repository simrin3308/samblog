import React from "react";
import Link from "next/link";
import { NavItems } from "../constants";
const TopNavbar = () => {
  return (
    <nav className="">
      <div className=" flex justify-between items-center h-[80px] py-18">
        <Link href="/" className="font-[Trochut] text-2xl ">
          Sam<span className="font-extrabold">Blog</span>
        </Link>
        <div>
          <ul className="flex gap-5">
            {NavItems.map((item: any) => {
              return <li>{item.name}</li>;
            })}
          </ul>
        </div>
        <div>Theme</div>
      </div>
    </nav>
  );
};

export default TopNavbar;
