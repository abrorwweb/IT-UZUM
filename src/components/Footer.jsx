import { FaInstagram, FaApple, FaGooglePlay, FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="container mx-auto grid grid-cols-4 gap-8 text-gray-700">
        <div>
          <h3 className="font-bold mb-2">Biz haqimizda</h3>
          <ul className="space-y-1">
            <li><a href="#">Topshirish punktlari</a></li>
            <li><a href="#">Vakansiyalar</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Foydalanuvchilarga</h3>
          <ul className="space-y-1">
            <li><a href="#">Biz bilan bog'lanish</a></li>
            <li><a href="#">Savol-Javob</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Tadbirkorlarga</h3>
          <ul className="space-y-1">
            <li><a href="#">Uzumda soting</a></li>
            <li><a href="#">Sotuvchi kabinetiga kirish</a></li>
            <li><a href="#">Topshirish punktini ochish</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Ilovani yuklab olish</h3>
          <div className="flex gap-4 mb-4">
            <FaApple size={27} className="text-black cursor-pointer" /> AppStore
            <FaGooglePlay size={27} className="text-green-400 cursor-pointer"  /> Google Play
          </div>
          <h3 className="font-bold mb-2">Uzum ijtimoiy tarmoqlarda</h3>
          <div className="flex gap-4 text-2xl">
            <FaInstagram className="text-pink-500 cursor-pointer" />
            <FaFacebook className="text-blue-600 cursor-pointer" />
            <FaTelegram className="text-blue-400 cursor-pointer" />
            <FaYoutube className="text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
