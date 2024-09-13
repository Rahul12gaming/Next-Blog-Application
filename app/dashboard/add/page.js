"use client";

import { useState } from "react";

export default function CardDetails() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [auth, setAuth] = useState();
  function AddBlog() {
    var abc = JSON.parse(localStorage.getItem("bolg")) || [];
    abc.push({ title, desc, auth });
    localStorage.setItem("bolg", null);
    localStorage.setItem("bolg", JSON.stringify(abc));
    alert("Blog Added");
    window.location.href = "/dashboard";
  }

  return (
    <>
      <section className=" w-11/12 m-auto shadow-xl text-center p-10 bg-black rounded-lg mt-4 md:10/12">
        <p className="text-2xl text-white">Add New Blog!</p>
        <div className="w-12/12 rounded-lg shadow-lg m-auto flex flex-col gap-10 justify-center items-center mt-10 bg-white text-black p-10 rounded-md shadow-xl md:w-8/12">
          <div className="flex flex-col gap-2 w-11/12 md:w-8/12">
            <label>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="text-white p-2 bg-slate-400  rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-11/12 md:w-8/12">
            <label>Description</label>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              cols={"30"}
              rows={"5"}
              className="text-white p-2 bg-slate-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-11/12 md:w-8/12">
            <label>Author</label>
            <input
              onChange={(e) => setAuth(e.target.value)}
              type="text"
              className="text-white p-2 bg-slate-400  rounded-md"
            />
          </div>

          <button
            onClick={AddBlog}
            className="w-8/12 m-auto bg-black text-white p-4 rounded-md shadow-md text-xl font-bold font-italic"
          >
            Add Blog
          </button>
        </div>
      </section>
    </>
  );
}
