import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { BlogInterface, fetchBlogs } from "../services/BlogsAPI";

const HomePage = () => {
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        console.error("Error fetching blogs:", error);
      }
    };

    getBlogs();
  }, []);

  return (
    <main className="flex flex-col gap-4  h-auto w-full ">
      {blogs.map((blog) => (
        <Blog key={blog._id} data={blog} />
      ))}
    </main>
  );
};

export default HomePage;
