import React, { useState } from "react";
import { FaLocationDot, FaBars } from "react-icons/fa6";

function Header1() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center p-3">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 text-sm">
          <FaLocationDot size={18} />
          Toshkent
        </span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline hover:underline cursor-pointer text-sm">
          Topshirish punktlari
        </span>
      </div>

      {/* Mobil menyu tugmasi */}
      <button
        className="md:hidden text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>

      {/* Katta ekranda ko'rinadigan menyu */}
      <div className="hidden md:flex items-center gap-4 text-sm">
        <span className="hover:underline cursor-pointer text-purple-600">
          Sotuvchi bo'lish
        </span>
        <span className="hover:underline cursor-pointer text-purple-600">
          Topshirish punktini ochish
        </span>
        <span className="hover:underline cursor-pointer">Savol-javob</span>
        <span className="hover:underline cursor-pointer">Buyurtmalarim</span>
        <select className="p-1 border rounded-md">
          <option value="uzbek">Uzb</option>
          <option value="English">Eng</option>
          <option value="Russian">Rus</option>
        </select>
      </div>

      {/* Mobil menyu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-3 flex flex-col items-start md:hidden">
          <span className="hover:underline cursor-pointer text-purple-600">
            Sotuvchi bo'lish
          </span>
          <span className="hover:underline cursor-pointer text-purple-600">
            Topshirish punktini ochish
          </span>
          <span className="hover:underline cursor-pointer">Savol-javob</span>
          <span className="hover:underline cursor-pointer">Buyurtmalarim</span>
          <select className="p-1 border rounded-md w-full mt-2">
            <option value="uzbek">Uzb</option>
            <option value="English">Eng</option>
            <option value="Russian">Rus</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default Header1;
