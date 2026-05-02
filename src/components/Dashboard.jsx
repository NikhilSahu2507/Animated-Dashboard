import React from "react";
import LineChartComp from "./LineChart";
import BarChartComp from "./BarChart";
import PieChartComp from "./PieChart";

export default function Dashboard({ activeChart }) {
    return (
        <div className="flex-1 flex items-center Justify-center">
            <h1 className="text-2xl font-semibold mb-4">Interactive Dashboard</h1>
            {activeChart === "line" && <LineChartComp />}
            {activeChart === "bar" && <BarChartComp />}
            {activeChart === "pie" && <PieChartComp />}
        </div>
    );
}