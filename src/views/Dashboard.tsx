import PerformanceChart from "@/components/Chart/PerformanceChart";
import getChartData from "@/Services/getChartData";
import { useEffect, useState } from "react";
// import { useState } from "react";

export default function Dashboard() {
  //to calculate data

  // const [data,setData]=useState([5, 6, 8, 0, 7, 5, 3, 2, 8, 5, 9, 6]);
 const [amIncidents, setAmIncidents] = useState([0]);
  const [pmIncidents, setPmIncidents] = useState([0]);
 

  useEffect(() => {
    async function fetchData() {
      const { amIncidents, pmIncidents } = await getChartData();
      setAmIncidents(amIncidents);
      setPmIncidents(pmIncidents);
    }

    fetchData();
  }, []); 


  return (
    <section className="dashboard">
      <div className="chartSection">
        <p className=" text-gray-100 mb-6 border-b border-gray-700 pb-3">
          🎯 Performance Analysis: Incident Load by Hour
        </p>
        <div
          id="chart"
          className="bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8"
        >
          <PerformanceChart AOP="am" IPH={amIncidents}  />
          <div className="w-px mt-20 mx-5 h-60 bg-gray-600 opacity-70"></div>
          <PerformanceChart AOP="pm" IPH={pmIncidents} />
        </div>
      </div>
    </section>
  );
}
