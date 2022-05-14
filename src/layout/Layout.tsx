import React from "react";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen container mx-auto px-4">
        <Header />

        <main>{children}</main>
    </div>
  );
};

export default Layout;
