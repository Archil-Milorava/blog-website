import { Menu, Search } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <main className="w-full h-[8rem] flex items-center justify-around">
      <div className="">
        <div>
          <Search />
        </div>
      </div>
      <div className="">
        <Link to="/">
          <h1 className="text-5xl font-bold text-[#FA5420] tracking-wider hover:text-orange-500 transition-all">
            BlogPost
          </h1>
        </Link>
      </div>
      <div>
        <h1>
          <Menu />
        </h1>
      </div>
    </main>
  );
};

export default Header;
