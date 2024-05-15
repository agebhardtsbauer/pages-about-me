import React, { ReactNode } from "react";
import MainNav from "./MainNav";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column vh-100">
      <MainNav />
      <main className="flex-grow-1 bg-content-dark">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
