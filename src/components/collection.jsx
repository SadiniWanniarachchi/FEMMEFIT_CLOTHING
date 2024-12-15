import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const Collection2023 = () => {
  const collections = [
    {
      id: 1,
      title: "NEW SUMMER COLLECTION",
      description: "Women's clothing for all types",
    },
    {
      id: 2,
      title: "NEW ARRIVAL T-SHIRTS",
      description: "Women's clothing for all types",
    },
    {
      id: 3,
      title: "UNUSUAL OUTFITS FOR GIRLS",
      description: "Women's clothing for all types",
    },
  ];

  return (
    <div className="bg-[#EEE9D3] flex flex-col items-start pt-5 pb-28 px-4 md:px-10">
      {/* Header Section */}
      <div className="mb-8 pl-4 sm:pl-12 md:pl-44">
        <p className="text-base text-[#1E1916]">Arrivals</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1E1916]">Collection 2023</h1>
      </div>

      {/* Collection Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((item) => (
          <div
            key={item.id}
            className="group bg-[#1E1916] text-white p-6 w-full h-[230px] max-w-sm rounded-2xl flex flex-col justify-between relative shadow-lg mx-auto transition-all duration-300 transform hover:bg-white hover:text-[#1E1916] hover:translate-y-[-10px]"
          >
            <p className="text-sm mb-2">Arrivals</p>
            <h2 className="text-lg font-semibold mt-auto">{item.title}</h2>
            <p className="text-xs">{item.description}</p>

            {/* Icon Button */}
            <button
              className="absolute top-4 right-4 bg-white text-[#1E1916] w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300 group-hover:bg-[#1E1916] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg"
            >
              <MdArrowForward size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection2023;
