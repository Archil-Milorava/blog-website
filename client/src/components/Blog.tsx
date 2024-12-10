import { Link } from "react-router";

const article =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla atque repellat doloremque sunt illo fugiat? Vitae officiis deserunt cupiditate, porro inventore ducimus quo amet ullam, libero culpa eos odio, consequatur exercitationem cumque? Impedit ipsa, harum omnis quia velit ut accusamus dolor nam repellat aliquid officiis iusto fugit vitae nobis dolore.  Impedit ipsa, harum omnis quia velit ut accusamus dolor nam repellat aliquid officiis iusto fugit vitae nobis dolore. ";

const Blog = () => {
  return (
    <main className="w-full h-[19rem] shadow-md  max-h-[19rem] flex items-center justify-center  p-2">
      <div className="w-2/5 h-full ">
        <img
          src="https://gdb.rferl.org/dc3a4aed-0499-4afe-91ff-ea82479528a9_w1023_r1_s.jpg"
          alt="bla"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className=" w-3/5 max-h-full overflow-hidden px-2 flex flex-col items-end gap-8 ">
        <h1 className="text-4xl font-semibold text-end">
          დიდი ომის 1000 დღე რიცხვებში
        </h1>
        <p className="text-sm text-end leading-6 ">
          {article.length > 450 ? article.substring(0, 450) + "..." : article}
        </p>
        <Link
          to="/"
          className="bg-[#FA5420] text-white text-xs tracking-wider font-semibold w-28 h-8 flex items-center justify-center hover:bg-orange-500 transition-all "
        >
          <button>სრულად...</button>
        </Link>
      </div>
    </main>
  );
};

export default Blog;
