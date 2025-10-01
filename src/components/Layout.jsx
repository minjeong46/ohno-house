import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import CartAmountModal from "./Modal/CartAmountModal";

const Layout = () => {
    const [isSidebar, setIsSidebar] = useState(false);

    return (
        <div className="w-screen h-screen relative">
            <CartAmountModal></CartAmountModal>
            <Header setIsSidebar={setIsSidebar} />
            <main className="max-w-[1256px] mx-auto my-7 ">
                <Outlet />
            </main>
            <Footer />
            {isSidebar && <Sidebar setIsSidebar={setIsSidebar} />}
        </div>
    );
};

export default Layout;
