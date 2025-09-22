import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
    const [isSidebar, setIsSidebar] = useState(false);

    return (
        <div className="w-screen">
            <Header setIsSidebar={setIsSidebar} />
            <main className="max-w-[1256px] h-full mx-auto my-7 px-14">
                <Outlet />
            </main>
            <Footer />
            {isSidebar && <Sidebar setIsSidebar={setIsSidebar}/>}
        </div>
    );
};

export default Layout;
