import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/savatcha";
import { useState } from "react";

export default function Cart({ setPage }) {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart) || [];
  let [count, setCount] = useState(1);

  return (
    <div className="p-4 mx-auto">
      <button
        onClick={() => setPage("home")}
        className="btn btn-primary mt-4 bg-slate-400 p-2 pr-10 pl-10 rounded-md transition-all hover:bg-slate-500"
      >
        🔙 Orqaga
      </button>
      <h1 className="text-2xl font-bold mb-4">Savatcha 🛒</h1>
      <h2 className="text-2xl mt-10">10-martdan Yetkazib beramiz!</h2>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
          {cart.map((product, index) => (
            <div
              key={index}
              className="w-[900px] mt-10 p-4 flex gap-10 shadow-lg border cursor-pointer mx-auto transition-transform duration-300 hover:scale-100"
            >
              <div className="relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-40 w-full object-cover rounded-t-lg"
                />
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  Super narx
                </span>
              </div>
              <div className="card-body p-2">
                <h2 className="text-2xl font-semibold">{product.title}</h2>
                <div className="flex items-center gap-1 text-yellow-500 text-[18px]">
                  ⭐ {product.rating} ({Math.floor(Math.random() * 1000)} ta sharh)
                </div>
                <h3>{product.stock} ta qoldi!</h3>
                <p className="line-through text-gray-500">${product.price}</p>
                <h3 className="text-[20px] font-bold text-blue-600">
                  {product.discountPercentage}
                </h3>
                <button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className="btn p-2 mt-2"
                >
                  🗑️ Yoq Qilish
                </button>
              </div>
              <div className="max-h-10 mt-16 flex items-center border rounded-lg px-4 py-2 w-32 justify-between">
                <button
                  onClick={() => setCount(count - 1)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  −
                </button>
                <span className="text-lg font-medium">{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Savatcha bo‘sh!</p>
      )}
    </div>
  );
}