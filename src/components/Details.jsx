import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/savatcha";
import { addToLikes } from "../Redux/likes";
import { BiCart } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";

export default function Detail({ product, onBack }) {
  const dispatch = useDispatch();
  if (!product) return <p className="text-center text-2xl text-gray-600">Mahsulot topilmadi</p>;

  return (
    <div className="max-w-[1200px] mx-auto p-8 flex flex-col justify-center">
      <button
        onClick={onBack}
        className="bg-gray-800 text-white py-2 px-6 rounded-md shadow-md mb-6 hover:bg-gray-700 transition-colors"
      >
        ⬅ Orqaga
      </button>
      <div className="flex flex-col md:flex-row shadow-2xl rounded-xl overflow-hidden border">
        <figure className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-cover"
          />
        </figure>
        <div className="p-6 md:p-10 flex flex-col justify-between md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-lg mt-4 text-gray-600">{product.description}</p>
          <div className="mt-4 flex items-center gap-3">
            <mark className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-lg">
              {product.category}
            </mark>
            <p className="text-xl font-semibold text-blue-600">${product.price}</p>
          </div>
          <div className="mt-4 flex items-center gap-3 text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-2xl">⭐</span>
              <span className="text-sm font-medium">
                {product.rating} ({Math.floor(Math.random() * 1000)} ta sharh)
              </span>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center gap-4">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition-colors"
            >
              <BiCart size={24} />
              Savatchaga qo‘shish
            </button>
            <button
              onClick={() => dispatch(addToLikes(product))}
              className="flex items-center gap-2 bg-red-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-red-700 transition-colors"
            >
              <GrFavorite size={24} />
              Sevimlilarga qo‘shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
