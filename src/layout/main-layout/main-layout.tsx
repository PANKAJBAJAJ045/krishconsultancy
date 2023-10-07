import { Outlet } from "react-router-dom";
import { Header } from "../../components/secure/header/header";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <main className="">
        {<Outlet />}
      </main>
    </>
  );
};

export default MainLayout;
