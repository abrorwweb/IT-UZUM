import React from "react";
import img1 from "../image/img1.png"
import img2 from "../image/img2.png"
import img3 from "../image/img3.png"
import img4 from "../image/img4.png"

const categories = [
  { img: img1, text: "Sizning go'zalligingiz" },
  { img: img2, text: "Hammmasi avto uchun" },
  { img: img3, text: "Yosh malikalarga" },
  { img: img4, text: "Garderoobni yangilaymiz" },
];

const Categories = () => {
  return (
    <div className="flex cursor-pointer justify-center  items-center">
      <div className="flex gap-20 mt-5 ">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-xl shadow transition-all hover:bg-slate-400"
          >
            <img src={item.img} alt={item.text} className="w-10 h-10 rounded-md" />
            <span className="text-sm font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
