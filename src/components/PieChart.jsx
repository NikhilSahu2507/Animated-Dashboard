import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Mobile", value: 500 },
    { name: "Laptop", value: 700 },
    { name: "Tablet", value: 300 },
    { name: "Accessories", value: 200 },
];

const COLORS = ["#6366F1", "#F59E0B", "#10B981", "#EF4444"];
export default function PieChatComp() {
    return (
        <PieChart width={400} height={300}>
            <Pie
                data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            <Tooltip />
        </PieChart> 
    );
}