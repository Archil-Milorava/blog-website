import Blog from "../components/Blog";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-4  h-auto w-full ">
      <Blog />
      <Blog />
    </main>
  );
};

export default HomePage;
