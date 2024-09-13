import Link from "next/link";

export const BlogCard = ({ title, desc, auth, id }) => {
  return (
    <>
      <Link
        href={`/dashboard/${id}`}
        className="bg-black text-white flex flex-col gap-10 w-10/12 p-4 rounded-xl shadow-lg md:w-4/12  card"
      >
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-slate-400 text-lg">{desc}</p>
        <p className="text-slate-600 text-sm">Author - {auth}</p>
      </Link>
    </>
  );
};
