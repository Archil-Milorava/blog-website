const article =
  " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem modi illum nihil in voluptatum, iure tempore laudantium laboriosam, eligendi expedita, ipsa dolorum corrupti ut iste voluptates optio voluptas culpa sint et explicabo voluptate.  ";

const title = "   დიდი ომის 1000 დღე რიცხვებში";

const image =
  "https://gdb.rferl.org/dc3a4aed-0499-4afe-91ff-ea82479528a9_w1023_r1_s.jpg";

const BlogPage = () => {
  return (
    <main className=" w-full h-auto mx-auto flex flex-col gap-6 items-center">
      <div className=" h-auto">
        <h1 className="text-5xl font-semibold">{title}</h1>
      </div>
      <div className="h-auto max-h-[40rem] w-full ">
        <img
          src={image}
          alt="bla"
          className="max-h-[35rem] mx-auto object-cover rounded-xl"
        />
      </div>
      <div className="h-auto w-full px-14 shadow">
        <p className="leading-[1.9rem]  text-start">{article}</p>
      </div>
    </main>
  );
};

export default BlogPage;
