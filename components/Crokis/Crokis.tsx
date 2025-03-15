import React from "react";

export default function Crokis() {
  return (
    <div className="relative col-span-1 bg-red-500">
      <img src="crokis.jpeg" alt="" className="w-full h-[650px]" />
      <div className="bg-gray-900 w-20 h-10 rounded-full flex items-center justify-center text-white absolute bottom-[60px] right-[190px]">
        Campo 1
      </div>
      <div className="bg-gray-900 w-20 h-10 rounded-full flex items-center justify-center text-white absolute top-[210px] right-[170px]">
        Campo 3
      </div>
      <div className="bg-gray-900 w-20 h-10 rounded-full flex items-center justify-center text-white absolute top-[350px] right-[170px]">
        Campo 2
      </div>
      <div className="bg-gray-900 w-20 h-10 rounded-full flex items-center justify-center text-white absolute top-16 right-[170px]">
        campo 4
      </div>
    </div>
  );
}
