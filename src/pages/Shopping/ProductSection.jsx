import { useState, useEffect, useCallback, useMemo } from "react";
import DUMMY_PRODUCTS from "../../data/productData";
import ProductCard from "../../components/ProductCard";
import ProductFilter from "./ProductFilterList";

const ITEMS_PER_LOAD = 8;
const PRODUCT_COUNT = DUMMY_PRODUCTS.length;

const ProductSection = () => {
    const [products] = useState(DUMMY_PRODUCTS);
    const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_LOAD);
    const [activeTab, setActiveTab] = useState("추천");
    const tabs = ["추천", "예쁜", "유용한", "귀여운", "오늘의딜"];

    const repeatedProducts = useMemo(() => {
        const filterTabProducts = products.filter(
            (item) =>
                Array.isArray(item.tabFilter) &&
                item.tabFilter.includes(activeTab)
        );

        const baseProducts =
            filterTabProducts.length > 0 ? filterTabProducts : products;

        return Array.from({ length: itemsToShow }, (_, index) => {
            const productIndex = index % baseProducts.length;
            const originalProduct = baseProducts[productIndex];

            return {
                ...originalProduct,
                id: `${originalProduct.id}_${Math.floor(index / baseProducts)}`,
            };
        });
    }, [activeTab, products, itemsToShow]);

    const handleScroll = useCallback(() => {
        const scrollHeight = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollHeight >= documentHeight - 500) {
            setItemsToShow((prev) => prev + ITEMS_PER_LOAD);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
    const renderTabButton = (tabName) => {
        const isActive = activeTab === tabName;
        const baseClasses =
            "py-2 px-3 rounded-full text-xs transition-colors duration-200 cursor-pointer";
        const activeClasses = "bg-gray-800 text-white shadow-md";
        const inactiveClasses = "bg-gray-100 text-gray-800 hover:bg-gray-200";

        return (
            <button
                key={tabName}
                className={`${baseClasses} ${
                    isActive ? activeClasses : inactiveClasses
                }`}
                onClick={() => setActiveTab(tabName)}
            >
                {tabName}
            </button>
        );
    };

    return (
        <div className="container mx-auto px-10 py-8">
            <ProductFilter tabs={tabs} renderTabButton={renderTabButton} />
            <div key={activeTab} className="flex flex-wrap -mx-2">
                {repeatedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        activeTab={activeTab}
                    />
                ))}

                <div className="w-full text-center py-10 text-sky-600 text-sm">
                    상품을 계속 로드하는 중...
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
