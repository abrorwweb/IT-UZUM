import { FaInstagram, FaApple, FaGooglePlay, FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8 mt-12 border-gray-700">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-xl mb-4">Biz haqimizda</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Topshirish punktlari</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Vakansiyalar</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Foydalanuvchilarga</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Biz bilan bog'lanish</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Savol-Javob</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Tadbirkorlarga</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Uzumda soting</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Sotuvchi kabinetiga kirish</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Topshirish punktini ochish</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Ilovani yuklab olish</h3>
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <FaApple size={30} className="text-white cursor-pointer hover:scale-110 transition-transform" />
              <span className="text-lg">AppStore</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGooglePlay size={30} className="text-green-400 cursor-pointer hover:scale-110 transition-transform" />
              <span className="text-lg">Google Play</span>
            </div>
          </div>
          <h3 className="font-semibold text-xl mb-4">Uzum ijtimoiy tarmoqlarda</h3>
          <div className="flex gap-6 text-3xl">
            <a href="https://www.instagram.com/__abdurakhimovv_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 cursor-pointer hover:text-pink-400 transition-colors" />
            </a>
            <a href="https://t.me/qwerty_0990" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        <p>© 2025 Uzum. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
}
