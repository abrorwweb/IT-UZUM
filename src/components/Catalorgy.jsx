import React from "react";
import img1 from "../image/img1.png";
import img2 from "../image/img2.png";
import img3 from "../image/img3.png";
import img4 from "../image/img4.png";

const categories = [
  { img: img1, text: "Sizning go'zalligingiz" },
  { img: img2, text: "Hammmasi avto uchun" },
  { img: img3, text: "Yosh malikalarga" },
  { img: img4, text: "Garderoobni yangilaymiz" },
];

const Categories = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-purple-50 hover:bg-purple-100 transition-all px-4 py-3 rounded-xl shadow-sm hover:shadow-md cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <span className="text-sm md:text-base font-semibold text-gray-700">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
