import React from "react";
const filtros = [
  "All",
  "Long Lost Friends",
  "ParagonsNFT",
  "Freelance",
  "Co-founder",
];
export default function Filters({ filtro, setFiltro }) {
  return (
    <div className="col-span-full w-full flex flex-wrap gap-2 h-fit">
      {filtros.map((i, index) => (
        <p
          key={index}
          className={`hover:bg-[#83c5be] text-[15px] border border-[#83c5be] rounded-lg px-3 py-1   cursor-pointer transition-colors duration-300 ${
            i === filtro ? "bg-[#83c5be]" : "bg-[#ffffff]"
          }`}
          onClick={() => setFiltro(i)}
        >
          {i}
        </p>
      ))}
    </div>
  );
}
