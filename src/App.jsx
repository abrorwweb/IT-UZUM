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

      
      <div className=" py-3 flex items-center gap-[200px]">
        <div className="flex items-center gap-4">
          <a
            onClick={() => setPage("home")}
            className="text-2xl font-bold cursor-pointer"
          >
            <span className="text-yellow-500">IT</span>uzum
          </a>
          <button className="btn transition-all hover:bg-purple-200 rounded-lg flex items-center  p-2 gap-2  pr-5 pl-5 bg-purple-100 text-purple-700">
            <FiLayers /> Katalog
          </button>
          <label className="input flex items-center gap-3 border-2 rounded-md  ">
            <input
              className="p-2 pr-52"
              type="search"
              required
              placeholder="Search..."
            />
            <FaSearch
              style={{
                marginRight: "20px",
                marginLeft: "10px",
                fontSize: "20px",
              }}
            />
          </label>
        </div>
        <div className="flex gap-3 items-center">
          <span class="flex transition-all hover:bg-slate-200 p-2 rounded-md items-center gap-2 cursor-pointer">
            <VscAccount size={25} /> Kirish
          </span>
          <div onClick={() => setPage("likes")}  className="transition-all hover:bg-slate-300 p-2 rounded-md">
          <button
            
            className="btn gap-3 flex btn-outline"
          >
            <GrFavorite size={25} /> Saralangan
          </button>
          </div>
          <div onClick={() => setPage("cart")} className="transition-all hover:bg-slate-300 p-2 rounded-md" >
          <button  className="flex items-center gap-2">
            <BiCart size={30} /> Savat
          </button>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-outline"
          >
            {darkMode ? <WiDaySunny size={35} /> : <WiNightClear size={35} />}
          </button>
        </div>



      </div>
      <div className=" flex gap-[52px] ">
        <a className="hover:underline cursor-pointer" href="#">
          Elektronika
        </a>
        <a className="hover:underline cursor-pointer" href="#">
          Maishiy Texnika
        </a>
        <a className="hover:underline cursor-pointer" href="#">
          Kiyim
        </a>
        <a className="hover:underline cursor-pointer" href="#">
          Poyabzallar
        </a>
        <a className="hover:underline cursor-pointer" href="#">
          Aksesuarlar
        </a>
        <a className="hover:underline cursor-pointer" href="#">
          Gozallik va parvarish
        </a>
        <a className="hover:underline cursor-pointer" href="#">
          Salomatlik
        </a>
        <a className="hover:underline cursor-pointer" href="#">
          Uy Rozgor buyumlari
        </a>
        <a className="hover:underline cursor-pointer" href="#">
          Smartfonlar
        </a>
      </div>
     <Carusel></Carusel>
      {page === "home"}
      
      <Categories></Categories>
      <div className="p-4 flex flex-col items-center">
        {page === "home" && (
          <>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 max-w-6xl">
              {products.slice(0, visibleCount).map((product) => (
                <div
                  key={product.id}
                  className="card mt-10 p-4 w-72 shadow-lg border cursor-pointer mx-auto transition-transform duration-300 hover:scale-105"
                  onClick={() => {
                    setSelect(product);
                    setPage("detail");
                  }}
                >
                  <div className="relative ">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-40 w-full object-cover rounded-t-lg"
                    />
                    <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                      Super narx
                    </span>
                  </div>

                  <div className="card-body p-1 ">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                      ⭐ {product.rating} ({Math.floor(Math.random() * 1000)} ta
                      sharh)
                    </div>
                    <p className="line-through">${product.price}</p>
                    <h3 className="text-lg font-bold text-blue-600 ">
                      {product.discountPercentage}
                    </h3>
                    <div className="card-actions flex mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!likes.some((item) => item.id === product.id)) {
                            dispatch(addToLikes(product));
                            showToast("Mahsulot layk qilindi! ❤️");
                          }
                        }}
                        className="btn btn-error mr-[190px]"
                      >
                        <GrFavorite size={25} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!cart.some((item) => item.id === product.id)) {
                            dispatch(addToCart(product));
                            showToast("Mahsulot savatchaga qo'shildi! 🛒");
                          }
                        }}
                        className="btn btn-primary mr-[200px]"
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
                        ⭐ {product.rating} ({Math.floor(Math.random() * 1000)}{" "}
                        ta sharh)
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
                      <h2 className="text-lg font-semibold">{product.title}</h2>
                      <div className="flex items-center gap-1 text-yellow-500 text-sm">
                        ⭐ {product.rating} ({Math.floor(Math.random() * 1000)}{" "}
                        ta sharh)
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