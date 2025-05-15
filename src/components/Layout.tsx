import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar.tsx";
import { FC } from "react";

const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
