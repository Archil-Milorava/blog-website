import { Outlet } from "react-router";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="  h-auto   w-auto mx-[10rem]">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
