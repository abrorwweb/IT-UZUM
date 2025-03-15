import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/savatcha";
import { addToLikes } from "../Redux/likes";
import { BiCart } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";

export default function Detail({ product, onBack }) {
  const dispatch = useDispatch();
  if (!product) return <p>Mahsulot topilmadi</p>;

  return (
    <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center">
      <button onClick={onBack} className="rounded-md max-w-[150px] bg-red-200 mb-4 p-4">
        ⬅ Orqaga
      </button>
      <div className=" flex shadow-lg border p-4">
        <figure>
          <img
            src={product.thumbnail}
            alt={product.title}
            className=" w-[1000px] h-64 object-cover rounded-lg"
          />
        </figure>
        <div className="card-body ml-10">
          <h2 className="card-title text-4xl font-bold">{product.title}</h2>
          <p className="text-2xl mt-10 mb-2 text-gray-700">{product.description}</p>
          <mark className="text-2xl ">{product.category}</mark>
          <p className="text-xl font-bold mt-12 text-blue-600">${product.price}</p>
          <div className="flex items-center mt-2 gap-1 text-yellow-500 text-sm">
            ⭐ {product.rating} ({Math.floor(Math.random() * 1000)} ta sharh)
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="btn btn-primary flex items-center gap-2"
            >
               <BiCart size={30} /> Savatchaga qo‘shish
            </button>
            <button
              onClick={() => dispatch(addToLikes(product))}
              className="btn btn-error flex items-center gap-2"
            >
              <GrFavorite size={25} /> Sevimlilarga qo‘shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
