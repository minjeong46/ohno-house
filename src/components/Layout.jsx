import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import CartAmountModal from "./Modal/CartAmountModal";
import ProductDetailModal from "./Modal/ProductDetailModal";
import CartSuccessModal from "./Modal/CartSuccessModal";
import { useSelector } from "react-redux";
import Toast from "./Toast";

const Layout = () => {
    const [isSidebar, setIsSidebar] = useState(false);
    const { isOpen, modalType, data } = useSelector((state) => state.modal);

    return (
        <div className="w-screen min-h-screen relative flex flex-col">
            <Header setIsSidebar={setIsSidebar} />
            <main className="flex-1 max-w-[1256px] mx-auto my-7 ">
                <Outlet />
            </main>
            <Footer />
            {isSidebar && <Sidebar setIsSidebar={setIsSidebar} />}
            {isOpen && modalType === "cartAmount" && (
                <CartAmountModal
                    product={data.product}
                    quantity={data.quantity}
                />
            )}
            {isOpen && modalType === "PRODUCT_DETAIL" && data?.product && (
                <ProductDetailModal product={data.product} />
            )}
            {isOpen && modalType === "cartSuccess" && <CartSuccessModal />}
            <Toast />
        </div>
    );
};

export default Layout;
