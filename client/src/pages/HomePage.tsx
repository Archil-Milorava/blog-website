import { useQuery } from "@tanstack/react-query";
import Blog from "../components/Blog";
import { fetchBlogs } from "../services/BlogsAPI";

const HomePage = () => {
  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });


  return (
    <main className="flex flex-col gap-4  h-auto w-full ">
      {isPending ? (
        <div>Loading..</div>
      ) : (
        blogs?.map((blog) => <Blog key={blog._id} blog={blog} />)
      )}
    </main>
  );
};

export default HomePage;
