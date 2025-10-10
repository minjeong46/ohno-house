import Header from "./Header/index.jsx";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import CartAmountModal from "./Modal/Cart/CartAmountModal.jsx";
import ProductDetailModal from "./Modal/Product/ProductDetailModal";
import CartSuccessModal from "./Modal/Cart/CartSuccessModal";
import RemoveConfirmModal from "./Modal/Remove/RemoveConfirmModal.jsx";
import RemoveSelectedConfirmModal from "./Modal/Remove/RemoveSelectedConfirmModal.jsx";
import { useSelector } from "react-redux";
import Toast from "./Toast";

const Layout = () => {
    const [isSidebar, setIsSidebar] = useState(false);
    const { isOpen, modalType, data } = useSelector((state) => state.modal);

    return (
        <>
            <div className="w-full min-h-screen relative flex flex-col">
                <Header isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
                <main className="max-w-[1256px] xl:mx-auto my-7 relative">
                    <Outlet />
                </main>
                <Footer />

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
                {isOpen && modalType === "confirmRemove" && data?.product && (
                    <RemoveConfirmModal
                        product={data.product}
                        quantity={data.quantity}
                    />
                )}
                {isOpen && modalType === "confirmRemoveSelected" && (
                    <RemoveSelectedConfirmModal />
                )}
                <Toast />
            </div>
        </>
    );
};

export default Layout;
