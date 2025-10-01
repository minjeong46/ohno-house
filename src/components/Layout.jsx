import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import CartAmountModal from "./Modal/CartAmountModal";
import { useSelector } from "react-redux";

const Layout = () => {
    const [isSidebar, setIsSidebar] = useState(false);
    const { isOpen, modalType } = useSelector((state) => state.modal);

    return (
        <div className="w-screen h-screen relative">
            <Header setIsSidebar={setIsSidebar} />
            <main className="max-w-[1256px] mx-auto my-7 ">
                <Outlet />
            </main>
            <Footer />
            {isSidebar && <Sidebar setIsSidebar={setIsSidebar} />}
            {isOpen && modalType === "cartAmount" && <CartAmountModal />}
        </div>
    );
};

export default Layout;
