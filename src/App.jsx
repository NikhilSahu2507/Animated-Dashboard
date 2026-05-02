import React, { useState} from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

export default function App(){
  const [activeChart, setActiveChart] = useState("line");

  return (
    <div className="flex h-screen bg-gray-100">
     <Sidebar setActiveChart={setActiveChart} />
     <Dashboard activeChart={activeChart} />
    </div>
  );
}


