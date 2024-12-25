import { Link, useNavigate } from "react-router";
import { BlogInterface } from "../services/BlogsAPI";

interface BlogPorps {
  blog: BlogInterface;
}

const Blog: React.FC<BlogPorps> = ({ blog }) => {
  const { _id, title, content, image } = blog;

  const navigate = useNavigate();

  function onBlogOpen() {
    navigate(`/blog/${_id}`);
  }

  return (
    <main
      className="w-full h-auto shadow-md  min-h-[19rem] flex items-center justify-center  p-2 cursor-pointer hover:shadow-xl transition-all"
      onClick={() => onBlogOpen()}
    >
      <div className="w-2/5 h-full ">
        <img
          src={image}
          alt={_id}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className=" w-3/5 max-h-full overflow-hidden px-2 flex flex-col items-end gap-8 ">
        <h1 className="text-2xl font-semibold text-end">{title}</h1>
        <p className="text-sm text-end leading-6 ">
          {content.length > 450 ? content.substring(0, 450) + "..." : content}
        </p>
        <Link
          to={`/blog/${_id}`}
          className="bg-[#FA5420] text-white text-xs tracking-wider font-semibold w-28 h-8 flex items-center justify-center hover:bg-orange-500 transition-all "
        >
          <button>სრულად...</button>
        </Link>
      </div>
    </main>
  );
};

export default Blog;
