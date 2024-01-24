import React from "react";

function DashboardCard({ label, title, count }) {
  return (
    <div className='w-1/3 min-h-44 m-4 bg-light-sky rounded-xl flex flex-col p-5'>
      <div className="w-full flex justify-end mb-2">
        <lable>{label}</lable>
        <select  className=" bg-light-sky">
          <option></option>
        </select>
      </div>
      <p className="font-poppins text-xl text-center mb-5">{title}</p>
      <p className="font-poppins text-3xl font-bold text-center">{count}</p>
    </div>
  );
}

export default DashboardCard;
