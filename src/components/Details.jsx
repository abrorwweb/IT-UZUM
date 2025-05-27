import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/savatcha";
import { addToLikes } from "../Redux/likes";
import { BiCart } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";

export default function Detail({ product, onBack }) {
  const dispatch = useDispatch();
  if (!product)
    return (
      <p className="text-center text-2xl text-gray-600">
        Mahsulot topilmadi
      </p>
    );

  const originalPrice = product.price;
  const discount = product.discountPercentage || 0;
  const discountedPrice = Math.round(originalPrice * (1 - discount / 100));
  const monthlyPrice = Math.round(discountedPrice / 12);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button
        onClick={onBack}
        className="mb-6 text-gray-700 bg-gray-100 px-5 py-2 rounded-lg hover:bg-gray-200 transition"
      >
        ⬅ Orqaga
      </button>

      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
        {/* Rasm */}
        <div className="w-full md:w-1/2 p-6 bg-gray-50 flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Ma'lumot */}
        <div className="w-full md:w-1/2 p-6 flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-gray-800">
            {product.title}
          </h1>
          <p className="text-gray-600 text-base">{product.description}</p>

          {/* Kategoriya va Reyting */}
          <div className="flex flex-wrap gap-4 items-center">
            <span className="px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
              {product.category}
            </span>

            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span className="text-yellow-500 text-lg">⭐</span>
              {product.rating} ({product.stock} ta sharhlar)
            </div>
          </div>

          {/* Narxlar */}
          <div className="mt-2 space-y-1">
            <p className="text-gray-400 text-sm">{monthlyPrice.toLocaleString()} so'm/oyiga</p>
            <div className="flex items-baseline gap-3">
              <span className="text-gray-500 line-through text-base">
                {originalPrice.toLocaleString()} so'm
              </span>
              <span className="text-2xl text-red-600 font-bold">
                {discountedPrice.toLocaleString()} so'm
              </span>
            </div>
          </div>

          {/* Tugmalar */}
          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
              <BiCart size={22} />
              Savatchaga qo‘shish
            </button>

            <button
              onClick={() => dispatch(addToLikes(product))}
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition"
            >
              <GrFavorite size={20} />
              Sevimlilarga qo‘shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
