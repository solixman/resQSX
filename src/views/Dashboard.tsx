import ActivitiFeed from "@/components/DashboardComponants/ActivityFeed/ActivitiFeed";
import PerformanceChart from "@/components/DashboardComponants/Chart/PerformanceChart";
import { getLast6Incidents } from "@/Services/api";
import getChartData from "@/Services/getChartData";
import { useEffect, useState } from "react";
import type { Incident } from "@/interfaces/Incident";

export default function Dashboard() {
  const [amIncidents, setAmIncidents] = useState([0]);
  const [pmIncidents, setPmIncidents] = useState([0]);
  const [incidents,setIncidents] = useState<Incident[]>([])

  useEffect(() => {
    async function fetchData() {
      //fetching incidents per every hour
      const { amIncidents, pmIncidents } = await getChartData();
      setAmIncidents(amIncidents);
      setPmIncidents(pmIncidents);
      //fetching incidents      
      const LastIncidents= await getLast6Incidents();
      
      setIncidents(LastIncidents);
    }
    

    fetchData();
  }, []); 
  

  

  return (
    <section className="dashboard">
      <div className="chartSection">
        <p className=" text-gray-200 mb-6 border-b border-gray-700 pb-3">
          Incident Load by Hour
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
      <div className="avtivityFeed">
          <p className=" text-gray-300 mb-6 border-b border-gray-700 pb-3">
          Avtivity Feed
        </p>
        <div>
            <ActivitiFeed incidents={incidents} />
        </div>
      </div>
    </section>
  );
}
