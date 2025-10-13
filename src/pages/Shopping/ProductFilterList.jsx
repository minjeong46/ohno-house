const ProductFilter = ({renderTabButton, tabs}) => {
    return (
        <div className="flex space-x-2 overflow-x-auto whitespace-nowrap mb-5">
            {tabs.map(renderTabButton)}
        </div>
    );
};

export default ProductFilter;
