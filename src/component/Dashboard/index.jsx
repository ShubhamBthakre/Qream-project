import React from "react";
import DashboardCard from "../DashboardCard";
import PieChartCard from "../PieChart";
import { data } from "autoprefixer";
import { useBusinessContext } from "../../context/businessContext";

function Dashboard() {
  const {} = useBusinessContext();
  return (
    <div className="flex flex-col min-h-full shadow-lg p-2 md:p-5">
      <div className="flex flex-wrap">
        <DashboardCard title="New business" count="12" label="Day" />
        <DashboardCard title="In progress" count="06" label="Type" />
        <DashboardCard title="Complete" count="06" label="Type" />
      </div>
      <div className="min-w-fit">
        <PieChartCard label="State" data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
