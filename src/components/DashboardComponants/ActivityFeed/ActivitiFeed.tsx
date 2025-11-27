
import type { Incident } from "@/interfaces/Incident";

interface ActivityFeedProps {
  incidents: Incident[];
}

export default function ActivityFeed({ incidents }: ActivityFeedProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-6 min-h-[400px] w-full">
    
  
    <ul className="space-y-3 overflow-y-auto max-h-[300px] pr-2">
        {incidents.map((incident) => (
          <li 
            key={incident.id} 
            className="text-sm p-3 rounded-lg transition-colors duration-150 border-l-4 border-red-600 hover:bg-gray-800"
          >
            <span className={`font-semibold text-xs uppercase tracking-wider ${
                incident.status === 'Terminé' ? 'text-green-500' : 
                incident.status === 'En cours' ? 'text-yellow-500' :
                'text-red-500'
            }`}>
              {incident.status}
            </span>
            
            <p className="text-gray-300 mt-1">
              <strong className="text-white mr-1">{incident.patient}</strong> 
              <span>- Incident à {incident.address}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">10:45 AM</p> 
          </li>
        ))}
    </ul>
    
</div>
  );
}
