import React, { useState } from "react";
import { FaLocationDot, FaBars } from "react-icons/fa6";

function Header1() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-purple-50 via-white to-purple-50 shadow-sm px-4 py-3 relative z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Chap tomonda joylashgan joylashuv */}
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <span className="flex items-center gap-1 font-medium">
            <FaLocationDot className="text-purple-600" />
            Toshkent
          </span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline cursor-pointer hover:underline transition">
            Topshirish punktlari
          </span>
        </div>

        {/* Mobil menyu tugmasi */}
        <button
          className="md:hidden text-2xl text-purple-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* Katta ekran menyusi */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <span className="text-purple-600 hover:underline cursor-pointer transition">
            Sotuvchi bo'lish
          </span>
          <span className="text-purple-600 hover:underline cursor-pointer transition">
            Topshirish punktini ochish
          </span>
          <span className="hover:underline cursor-pointer transition">
            Savol-javob
          </span>
          <span className="hover:underline cursor-pointer transition">
            Buyurtmalarim
          </span>
          <select className="bg-white border text-sm rounded-md px-2 py-1 outline-purple-400">
            <option value="uzbek">Uzb</option>
            <option value="english">Eng</option>
            <option value="russian">Rus</option>
          </select>
        </nav>
      </div>

      {/* Mobil menyu */}
      {menuOpen && (
        <div className="md:hidden mt-3 p-4 bg-white border rounded-lg shadow-lg flex flex-col gap-3 text-sm font-medium animate-fadeIn">
          <span className="text-purple-600 hover:underline cursor-pointer">
            Sotuvchi bo'lish
          </span>
          <span className="text-purple-600 hover:underline cursor-pointer">
            Topshirish punktini ochish
          </span>
          <span className="hover:underline cursor-pointer">Savol-javob</span>
          <span className="hover:underline cursor-pointer">Buyurtmalarim</span>
          <select className="border text-sm rounded-md px-2 py-1 w-full outline-purple-400">
            <option value="uzbek">Uzb</option>
            <option value="english">Eng</option>
            <option value="russian">Rus</option>
          </select>
        </div>
      )}
    </header>
  );
}

export default Header1;
