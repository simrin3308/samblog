import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { Blogs } from "@/constants";
import { BlogProps } from "@/types";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="mt-28 text-xl font-bold font-serif">Latest Posts</div>

      <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-5">
        {Blogs.map((blog) => {
          return (
            <section className="my-3 cursor-pointer hover:scale-105 transition-all">
              <Card blog={blog} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
