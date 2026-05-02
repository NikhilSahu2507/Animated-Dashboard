import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const data = [
    { month: "Jan", sales: 400 },
    { month: "Fab", sales: 300 },
    { month: "Mar", sales: 500 },
    { month: "Apr", sales: 700 },
    { month: "May", sales: 800 }, 
];

export default function LineChartComp() {
    return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      < XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#4F46E5" />
    </LineChart>
    );
}