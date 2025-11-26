import PerformanceChart from "@/components/Chart/PerformanceChart";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <div className="chartSection">
         <p className=" text-gray-100 mb-6 border-b border-gray-700 pb-3">
          🎯 Performance Analysis: Incident Load by Hour
        </p>
        <div id="chart" className="bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8">
          
          <PerformanceChart />
<div className="w-px mt-20 mx-5 h-60 bg-gray-600 opacity-70"></div>
          <PerformanceChart />
        </div>
      </div>
    </section>
  );
}
