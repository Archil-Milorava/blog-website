import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BlogInterface } from "../services/BlogsAPI";
import axios from "axios";

const BlogPage = () => {
  const [blog, setBlog] = useState<BlogInterface[]>([]);
  const { blogId } = useParams();

  const { title, content, image } = blog;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/blog/${blogId}`
        );
        setBlog(response.data.blog);
      } catch (error) {
        throw new Error(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred."
        );
      }
    };
    fetchBlog();
  }, []);

  return (
    <main className=" w-full h-auto mx-auto flex flex-col gap-6 items-center">
      <div className=" h-auto">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="h-auto max-h-[40rem] w-full ">
        <img
          src={image}
          alt={title}
          className="max-h-[35rem] mx-auto object-cover rounded-xl"
        />
      </div>
      <div className="h-auto w-full px-14 shadow">
        <p className="leading-[1.9rem]  text-start">{content}</p>
      </div>
    </main>
  );
};

export default BlogPage;
