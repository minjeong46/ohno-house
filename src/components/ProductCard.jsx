import ScrapIcon from '../assets/community/scrap.svg';
import ScrapIconFill from '../assets/community/scrap-fill.svg';
import { useState } from 'react';
import ProductDetailModal from './Modal/ProductDetailModal.jsx';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/modalSlice.js';

const ProductCard = ({ product }) => {
  const [isScrapped, setIsScrapped] = useState(true);
  const dispatch = useDispatch();

  const handleScrapClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsScrapped(!isScrapped);
  };

  const handleCardClick = () => {
    dispatch(
      openModal({
        type: 'PRODUCT_DETAIL',
        data: {
          product: product,
        },
      })
    );
  };

  const sellingPrice = product.originalPrice * (1 - product.discountRate / 100);

  return (
    <button className="w-full md:w-1/4 p-2" onClick={handleCardClick}>
      <div className="bg-white rounded-lg group">
        <div className="relative overflow-hidden aspect-square rounded">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className="absolute bottom-1 right-1 p-1 duration-300 z-10"
            onClick={handleScrapClick}
            aria-label="스크랩"
          >
            <img
              src={isScrapped ? ScrapIcon : ScrapIconFill}
              alt="스크랩"
              className="w-5 h-6"
            />
          </div>
        </div>
        <div className="p-3">
          <p className="text-xs text-gray-500 text-left">{product.brand}</p>
          <h3 className="text-gray-800 text-xs truncate text-left">
            {product.name}
          </h3>
          <div className="flex items-baseline mt-1 mb-1 justify-start">
            <span className="text-sky-600 font-bold mr-1">
              {product.discountRate}%
            </span>
            <span className="text-gray-900 font-bold ">
              {Math.round(sellingPrice).toLocaleString()}
            </span>
            <span className="text-gray-900 text-sm ml-0.5">원</span>
          </div>
          <div className="flex items-center text-xs justify-start">
            <span className="text-sky-600 mr-1">★</span>
            <span className="text-gray-900 font-bold mr-1">
              {product.rating.toFixed(1)}
            </span>
            <span className="text-gray-500">
              리뷰 {product.reviewCount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
