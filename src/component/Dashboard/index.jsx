import React from "react";
import DashboardCard from "../DashboardCard";
import PieChartCard from "../PieChart";
import { data } from "autoprefixer";

function Dashboard() {
  return (
    <div className="h-full shadow-lg p-5">
      <div className=" flex justify-between items-center">
        <DashboardCard title="New business" count="12" label="Day" />
        <DashboardCard title="In progress" count="06" label="Type" />
        <DashboardCard title="Complete" count="06" label="Type" />
      </div>
      <div className="w-4/12 ">
      <PieChartCard label="State" data={data}/>
      </div>
    </div>
  ); 
}

export default Dashboard;
