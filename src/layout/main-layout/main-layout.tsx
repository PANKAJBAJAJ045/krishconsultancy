import { Outlet } from "react-router-dom";
import { Header } from "../../components/secure/header/header";
import Navbar from "../../components/secure/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Navbar></Navbar>
      <main>        
        {<Outlet />}
      </main>
    </div>
  );
};

export default MainLayout;
