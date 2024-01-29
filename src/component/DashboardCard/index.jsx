import React from "react";

function DashboardCard({ label, title, count }) {
  return (
    <div className='w-[150px] md:w-[200px] lg:w-[350px] min-h-48 mb-4  mr-4 bg-light-sky rounded-xl flex flex-col p-5'>
      <div className="w-full flex justify-end mb-2">
        <label>{label}</label>
        <select  className=" bg-light-sky">
          <option></option>
        </select>
      </div>
      <p className="font-poppins text-lg md:text-2xl text-center my-5">{title}</p>
      <p className="font-poppins text-2xl md:text-3xl font-bold text-center">{count}</p>
    </div>
  );
}

export default DashboardCard;
