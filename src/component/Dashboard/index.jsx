import React from "react";
import DashboardCard from "../DashboardCard";
import PieChartCard from "../PieChart";
import { data } from "autoprefixer";

function Dashboard() {
  return (
    <div
      className={`w-full flex flex-col min-h-full`}
    >
      <div className="flex flex-wrap justify-between">
        <DashboardCard title="New business" count="12" label="Day" />
        <DashboardCard title="In progress" count="06" label="Type" />
        <DashboardCard title="Complete" count="06" label="Type" />
      </div>
      <div className="w-full">
        <PieChartCard label="State" data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
