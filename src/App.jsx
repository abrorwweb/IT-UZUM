import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./Redux/productsSlice";
import { addToCart, removeFromCart } from "./Redux/savatcha";
import { addToLikes, removeFromLikes } from "./Redux/likes";
import Detail from "./components/Details";
import Carusel from "./components/Carusel";
import { BiCart } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { WiNightClear, WiDaySunny } from "react-icons/wi";
import { FiLayers } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import Categories from "./components/Catalorgy";
import Footer from "./components/Footer";
import Header1 from "./components/Header1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  let dispatch = useDispatch();
  let products = useSelector((state) => state.products.items);
  let cart = useSelector((state) => state.cart) || [];
  let likes = useSelector((state) => state.likes) || [];
  let [page, setPage] = useState("home");
  let [select, setSelect] = useState(null);
  let [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  let [visibleCount, setVisibleCount] = useState(9);
  let [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    console.log("Joriy sahifa:", page);
  }, [page]);

  useEffect(() => {
    document.body.classList.toggle("bg-black", darkMode);
    document.body.classList.toggle("text-white", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function showToast(message) {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: darkMode ? "dark" : "light",
    });
  }
  

  return (
    <div>
      <div className=" transition-all max-w-[1260px] m-auto ">
        <ToastContainer />
        <Header1></Header1>

        <div className="py-4 px-6 flex flex-wrap justify-between items-center shadow-sm bg-white dark:bg-gray-900 dark:text-white transition">
          {/* Logo & Search */}
          <div className="flex items-center gap-6 flex-wrap">
            <a
              onClick={() => setPage("home")}
              className="text-3xl font-bold cursor-pointer hover:scale-105 transition"
            >
              <span className="text-yellow-500">IT</span>uzum
            </a>

            {/* Katalog Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-all">
              <FiLayers size={20} />
              <span className="font-medium">Katalog</span>
            </button>

            {/* Search Bar */}
            <div className="relative max-w-sm">
              <label className="input flex items-center gap-3 py-3 px-4 border border-gray-300 rounded-xl shadow-md focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300 dark:bg-gray-800 dark:border-gray-600">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  className="grow bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-base"
                  placeholder="Mahsulot qidirish..."
                />
                <kbd className="kbd kbd-sm bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                  ⌘
                </kbd>
                <kbd className="kbd kbd-sm bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                  K
                </kbd>
              </label>
            </div>
          </div>

          {/* Account, Likes, Cart, DarkMode */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Account */}
            <span className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md transition">
              <VscAccount size={24} />
              <span>Kirish</span>
            </span>

            {/* Likes */}
            <div
              onClick={() => setPage("likes")}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition"
            >
              <button className="flex items-center gap-2 text-sm font-medium">
                <GrFavorite size={22} />
                Saralangan
              </button>
            </div>

            {/* Cart */}
            <div
              onClick={() => setPage("cart")}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md transition"
            >
              <button className="flex items-center gap-2 text-sm font-medium">
                <BiCart size={26} />
                Savat
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full hover:scale-105 transition"
            >
              {darkMode ? <WiDaySunny size={28} /> : <WiNightClear size={28} />}
            </button>
          </div>
        </div>
        <div className="w-full bg-white shadow-sm border-t border-b py-2">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
            <div className="flex gap-[60px] text-sm font-medium whitespace-nowrap">
              <a
                className="hover:underline text-gray-700 cursor-pointer transition"
                href="#"
              >
                Elektronika
              </a>
              <a
                className="hover:underline text-gray-700 cursor-pointer transition"
                href="#"
              >
                Maishiy Texnika
              </a>
              <a
                className="hover:underline text-gray-700 cursor-pointer transition"
                href="#"
              >
                Kiyim
              </a>
              <a
                className="hover:underline text-gray-700 cursor-pointer transition"
                href="#"
              >
                Poyabzallar
              </a>
              <a
                className="hover:underline text-gray-700 cursor-pointer transition"
                href="#"
              >
                Aksesuarlar
              </a>
              <a
                className="hover:underline text-gray-700 cursor-pointer transition"
                href="#"
              >
                Gozallik va parvarish
              </a>
              <a
                className="hover:underline text-gray-700 cursor-pointer transition"
                href="#"
              >
                Salomatlik
              </a>
              <a
                className="hover:underline text-gray-700 cursor-pointer transition"
                href="#"
              >
                Uy-rozgor buyumlari
              </a>
              <a
                className="hover:underline text-gray-700 cursor-pointer transition"
                href="#"
              >
                Smartfonlar
              </a>
            </div>
          </div>
        </div>

        <Carusel></Carusel>
        {page === "home"}

        <Categories></Categories>
        <div className="p-4 flex flex-col items-center">
          {page === "home" && (
            <>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
  {products.slice(0, visibleCount).map((product) => {
    const originalPrice = product.price;
    const discount = product.discountPercentage;
    const discountedPrice = Math.round(originalPrice * (1 - discount / 100));
    const monthlyInstallment = Math.round(discountedPrice / 12);

    return (
      <div
        key={product.id}
        onClick={() => {
          setSelect(product);
          setPage("detail");
        }}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col overflow-hidden border border-gray-100"
      >
        <div className="relative group">
          <img
            src={product.thumbnail || "https://via.placeholder.com/300x200?text=NIVEA"}
            alt={product.title}
            className="w-full h-48 object-contain rounded-t-xl p-4"
          />
          {discount > 5 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow animate-pulse">
              Chegirma
            </span>
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-gray-900 font-semibold text-lg mb-1 line-clamp-2">
            {product.brand || 'NIVEA'} {product.title}
          </h3>

          <p className="text-gray-500 text-sm mb-3 line-clamp-2">
            {product.description?.slice(0, 60)}...
          </p>

          <div className="flex items-center mb-3">
            <span className="text-yellow-400 text-lg mr-1">★</span>
            <span className="font-medium text-yellow-600">{product.rating || 4.9}</span>
            <span className="text-gray-500 text-sm ml-2">
              ({product.stock || 1000} sharhlar)
            </span>
          </div>

          <div className="mb-4">
            <p className="text-gray-400 text-sm">{monthlyInstallment.toLocaleString()} so'm/oyiga</p>
          </div>

          <div className="flex items-baseline gap-3 mb-4">
            <p className="text-gray-500 line-through text-sm">
              {originalPrice.toLocaleString()} so'm
            </p>
            <p className="text-red-600 font-bold text-xl">
              {discountedPrice.toLocaleString()} so'm
            </p>
          </div>

          <div className="mt-auto flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!likes.some((item) => item.id === product.id)) {
                  dispatch(addToLikes(product));
                  showToast("Mahsulot layk qilindi! ❤️");
                }
              }}
              className="animate-bounce flex-1 py-2 bg-gray-100 rounded-lg text-gray-700 font-semibold hover:bg-gray-200 active:scale-95 transition-transform duration-200 flex justify-center items-center"
              aria-label="Like"
            >
              <GrFavorite size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!cart.some((item) => item.id === product.id)) {
                  dispatch(addToCart(product));
                  showToast("Mahsulot savatchaga qo'shildi! 🛒");
                }
              }}
              className="animate-bounce flex-1 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 active:scale-95 transition-transform duration-200 flex justify-center items-center"
              aria-label="Add to cart"
            >
              <BiCart size={22} />
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>


              {visibleCount < products.length && (
                <button
                  onClick={() => setVisibleCount(products.length)}
                  className="btn btn-primary rounded-md mt-6 bg-slate-300 p-4 pl-32 pr-32"
                >
                  Ko‘proq ko‘rish
                </button>
              )}
            </>
          )}

          {page === "detail" && (
            <Detail product={select} onBack={() => setPage("home")} />
          )}
          {page === "cart" && (
            <div className="p-4 mx-auto ">
              <button
                onClick={() => setPage("home")}
                className="btn btn-primary mt-4 btn btn-primary bg-slate-400 p-2 pr-10 pl-10 rounded-md transition-all hover:bg-slate-500"
              >
                🔙 Orqaga
              </button>
              <h1 className="text-2xl font-bold mb-4">Savatcha 🛒</h1>
              <h2 className="text-2xl mt-10">10-martdan Yetkazib beramiz!</h2>
              {cart.length > 0 ? (
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
                  {cart.map((product, index) => (
                    <div
                      key={index}
                      className=" w-[900px]  mt-10 p-4 flex gap-10 shadow-lg border cursor-pointer mx-auto transition-transform duration-300 hover:scale-100"
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
                        <h2 className="text-2xl font-semibold">
                          {product.title}
                        </h2>
                        <div className="flex  items-center gap-1 text-yellow-500 text-[18px]">
                          ⭐ {product.rating} (
                          {Math.floor(Math.random() * 1000)} ta sharh)
                        </div>

                        <h3>{product.stock} ta qoldi!</h3>
                        <p className="line-through text-gray-500">
                          ${product.price}
                        </p>
                        <h3 className="text-[20px] font-bold text-blue-600 ">
                          {product.discountPercentage}
                        </h3>

                        <button
                          onClick={() => dispatch(removeFromCart(product.id))}
                          className="btn p-2 mt-2"
                        >
                          🗑️ Yoq Qilish
                        </button>
                      </div>
                      <div className=" max-h-10 mt-16 flex items-center border rounded-lg px-4 py-2 w-32 justify-between">
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
          )}

          {page === "likes" && (
            <div className="p-4 max-w-4xl mx-auto">
              <button
                onClick={() => setPage("home")}
                className="btn btn-primary mt-4 bg-slate-400 p-2 pr-10 pl-10 rounded-md transition-all hover:bg-slate-500"
              >
                🔙 Orqaga
              </button>
              <h1 className="text-2xl font-bold mb-4">Layklar ❤️</h1>
              {likes.length > 0 ? (
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {likes.map((product, index) => (
                    <div
                      key={index}
                      className="mt-10 p-4 w-72 shadow-lg border cursor-pointer mx-auto transition-transform duration-300 hover:scale-110"
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
                        <h2 className="text-lg font-semibold">
                          {product.title}
                        </h2>
                        <div className="flex items-center gap-1 text-yellow-500 text-sm">
                          ⭐ {product.rating} (
                          {Math.floor(Math.random() * 1000)} ta sharh)
                        </div>

                        <p className="text-lg font-bold text-blue-600">
                          ${product.price}
                        </p>
                        <p>{product.description}</p>
                        <button
                          onClick={() => dispatch(removeFromLikes(product.id))}
                          className="btn btn-error mt-3"
                        >
                          ❌ O‘chirish
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">Layklar bosh!</p>
              )}
            </div>
          )}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
