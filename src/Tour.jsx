import React from "react";
import { useState } from "react";

export function Tour(tour) {
  const [showInfo, setShowInfo] = useState(false);

  const { image, info, name, price } = tour;

  return (
    <article>
      <div className="rounded-tr-md rounded-tl-md overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-52" />
        <div className="bg-green-700 text-white w-fit py-1 px-2 absolute top-0 right-0">
          <span>$ {price}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="py-4 text-center text-xl font-medium">{name}</p>
        <div className="my-3">
          {showInfo ? (
            <p className="text-gray-500">{info}</p>
          ) : (
            <p className="text-gray-500">{info.slice(0, 210)}...</p>
          )}
          <div
            className="text-green-700 font-bold cursor-pointer"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? "see less" : "read more"}
          </div>
        </div>
      </div>
    </article>
  );
}
