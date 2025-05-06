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
            <div className="relative">
              <input
                type="search"
                placeholder="Mahsulot qidirish..."
                className="pl-4 pr-12 py-2 w-[250px] md:w-[350px] rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
              <FaSearch className="absolute right-3 top-2.5 text-gray-500 text-lg" />
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {products.slice(0, visibleCount).map((product) => (
                  <div
                    key={product.id}
                    className="card p-5 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 cursor-pointer mx-auto"
                    onClick={() => {
                      setSelect(product);
                      setPage("detail");
                    }}
                  >
                    <div className="relative">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-56 w-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-lg">
                        Chegirma
                      </span>
                    </div>

                    <div className="card-body space-y-3 mt-4">
                      <h2 className="text-xl font-semibold text-gray-800 truncate">
                        {product.title}
                      </h2>
                      <div className="flex items-center gap-2 text-yellow-500 text-sm">
                        ⭐ {product.rating} ({Math.floor(Math.random() * 1000)}{" "}
                        ta sharh)
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <p className="line-through text-gray-400">
                          ${product.price}
                        </p>
                        <h3 className="text-lg font-semibold text-green-500">
                          {product.discountPercentage}% Chegirma
                        </h3>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!likes.some((item) => item.id === product.id)) {
                              dispatch(addToLikes(product));
                              showToast("Mahsulot layk qilindi! ❤️");
                            }
                          }}
                          className="p-3 rounded-full bg-pink-500 text-white hover:bg-pink-400 transition-all duration-200"
                        >
                          <GrFavorite size={28} />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!cart.some((item) => item.id === product.id)) {
                              dispatch(addToCart(product));
                              showToast("Mahsulot savatchaga qo'shildi! 🛒");
                            }
                          }}
                          className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-400 transition-all duration-200"
                        >
                          <BiCart size={30} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
