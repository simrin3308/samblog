import Image from "next/image";
import React from "react";
import image from "../public/Images/Image.png";
import { BlogProps } from "@/types";

interface blog {
  blog: BlogProps;
}
const Card = (blog: blog) => {
  return (
    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden p-2">
      <Image
        className="w-full object-cover object-center"
        src={image}
        alt="blog"
        width={300}
        height={300}
      />
      <div className="py-3">
        <div className="bg-blue-100 text-blue-600 inline-block px-3 py-2 rounded-xl text-xs my-2">
          {blog.blog.author}
        </div>
        <p className="text-2xl font-semibold line-clamp-3">
          {blog.blog.title}
        </p>
      </div>
      <div className=" flex justify-between font-thin pb-3 px-5">
        <div> {blog.blog.author}</div>
        <div> {blog.blog.date}</div>
      </div>
    </div>
  );
};

export default Card;
