import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { name: "Product A", sales: 2400 },
    { name: "Product B", sales: 2500 },
    { name: "Product C", sales: 2000 },
    { name: "Product D", sales: 3000 },
];

export default function BarChartComp() {
    return (
      <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            < XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#10B981" />
          </BarChart>
    );
}