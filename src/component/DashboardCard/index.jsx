import React from "react";

function DashboardCard({ label, title, count }) {
  return (
    <div className='w-36 md:w-60 min-h-48 mb-4  mr-4 bg-light-sky rounded-xl flex flex-col p-5'>
      <div className="w-full flex justify-end mb-2">
        <label>{label}</label>
        <select  className=" bg-light-sky">
          <option></option>
        </select>
      </div>
      <p className="font-poppins text-xl text-center my-5">{title}</p>
      <p className="font-poppins text-3xl font-bold text-center">{count}</p>
    </div>
  );
}

export default DashboardCard;
