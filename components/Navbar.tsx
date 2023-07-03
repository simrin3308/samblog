import React from "react";
import Link from "next/link";
import NavItems from "../constants";
const TopNavbar = () => {
  return (
    <nav className="h-[80px] flex justify-between items-center">
      <Link href="/" className="font-[Trochut] text-2xl">
        Sam<span className="font-extrabold">Blog</span>
      </Link>
      <div>
        <ul className="flex gap-5">
          {
            NavItems.map((item: any) => {
              return (
                <li>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
      <div>
        Theme
      </div>
    </nav>
  )
};

export default TopNavbar;
