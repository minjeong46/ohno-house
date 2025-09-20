import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header />
                <main className="max-w-[1256px] mx-auto my-7 px-14">
                    <Outlet />
                </main>
            <Footer />
        </div>
    );
};

export default Layout;
