import React from "react";
import { useMediaQuery } from 'react-responsive'
import { PieChart, Pie, Cell } from "recharts";



function PieChartCard({label}) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const isMediumScreen = useMediaQuery({ query: '(max-width: 768px)'});
  const pieChartWidth = isSmallScreen ? 180 : isMediumScreen ? 300 : 400;
  const pieChartHeight = isSmallScreen ? 180 : isMediumScreen ? 300 : 400;
  const pieOuterRadius = isSmallScreen ? 60 : isMediumScreen ? 80 : 100;



  const data = [
    { name: "LCC", value: 15 },
    { name: "Corporation", value: 65 },
    { name: "DBA", value: 20 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28",];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="p-1 md:p-5 bg-medium-sky w-full max-w-[500px] rounded-lg">
        <div className="flex justify-end">
          <label htmlFor="select">{label}</label>
          <select id="select" className=" bg-medium-sky">
            <option></option>
          </select>
        </div>

      <PieChart width={pieChartWidth} height={pieChartHeight}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={pieOuterRadius}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default PieChartCard;
