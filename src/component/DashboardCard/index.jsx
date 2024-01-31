import React from "react";

function DashboardCard({ label, title, count }) {
  return (
    <div className="w-full max-w-[200px] md:max-w-[280px] lg:max-w-[340px] min-h-[120px] lg:min-h-[210px] mb-4  mr-4 bg-light-sky rounded-xl flex flex-col p-5">
      <div className="w-full flex justify-end mb-2">
        <label>{label}</label>
        <select className=" bg-light-sky">
          <option></option>
        </select>
      </div>
      <p className="font-poppins text-lg md:text-2xl text-center my-5">
        {title}
      </p>
      <p className="font-poppins text-2xl md:text-3xl font-bold text-center">
        {count}
      </p>
    </div>
  );
}

export default DashboardCard;
