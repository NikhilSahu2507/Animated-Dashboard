import React from "react";

export default function Sidebar({ setActiveChart }) {
    return (
        <div className="w-1/5 bg-white shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            <ul className="space-y-2">
                <li>
                    <button onClick={() => setActiveChart("line")} className="w-full text-left p-2 rounded hover:bg-gray-200">
                        Line Chart
                    </button>
                </li>
                <li>
                    <button onClick={() => setActiveChart("bar")} className="w-full text-left p-2 rounded hover:bg-gray-200">
                        Bar Chart
                    </button>
                </li>
                <li>
                    <button onClick={() => setActiveChart("pie")} className="w-full text-left p-2 rounded hover:bg-gray-200">
                        pie Chart
                    </button>
                </li>
            </ul>

        </div>
    );
}