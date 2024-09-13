"use client";
import { MdError } from "react-icons/md";
import { BlogCard } from "../components/BlogCard";
export default function Dashboard() {

  const BlogData = JSON.parse(localStorage.getItem("bolg"));

  return (
    <>
      <section className="text-white w-11/12 m-auto shadow-xl text-center p-10 md:w-10/12">
        <p className="text-2xl">Welcome User! Here Are Your Blog's</p>
        {BlogData ? (
          <button
            onClick={() => (window.location.href = "/dashboard/add")}
            className="mt-4 bg-white w-8/12 text-lg rounded-lg font-bold text-black p-4 md:w-4/12"
          >
            Add More Blog
          </button>
        ) : (
          <></>
        )}
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {BlogData ? (
            BlogData.map((item, index) => (
              <>
                <BlogCard {...item} id={index} />
              </>
            ))
          ) : (
            <>
              <div className="flex flex-col gap-4 items-center">
                <MdError size={100} color="red" />
                <p>No Blog is Present Currently!</p>
                <button
                  onClick={() => (window.location.href = "/dashboard/add")}
                  className="bg-white w-6/12 rounded-lg font-bold text-black p-4"
                >
                  Add Blog
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
