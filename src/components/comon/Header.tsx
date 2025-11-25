// components/Header.tsx
import React from 'react';
import { Button } from '@/components/ui/button'; 
import { BellRing, PlusCircle } from 'lucide-react'; 

interface HeaderProps {
  availableAmbulances: number;
  criticalIncidents: number;
  avgResponseTime: string;
  onNewIncidentClick: () => void;
  onNotificationsClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  availableAmbulances,
  criticalIncidents,
  avgResponseTime,
  onNewIncidentClick,
  onNotificationsClick,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo/Title and Navigation */}
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-green-500">ResQ</h1>
          <nav className="hidden md:flex space-x-4">
            {/* Example Nav Links - Use Next.js Link or React Router Link if applicable */}
            <a href="/map" className="text-gray-300 hover:text-white transition-colors">Dispatch Map</a>
            <a href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
            <a href="/fleet" className="text-gray-300 hover:text-white transition-colors">Fleet Management</a>
          </nav>
        </div>

        {/* Center Section: Mini KPIs */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-green-400">{availableAmbulances}</span>
            <span className="text-sm text-gray-400">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-red-500">{criticalIncidents}</span>
            <span className="text-sm text-gray-400">Critical</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-blue-400">{avgResponseTime}</span>
            <span className="text-sm text-gray-400">MTR</span>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center space-x-4">
          {onNotificationsClick && (
            <Button variant="ghost" size="icon" onClick={onNotificationsClick} className="relative">
              <BellRing className="h-5 w-5 text-gray-300 hover:text-white" />
              {/* Optional: Notification badge */}
              {criticalIncidents > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {/* You might want a separate state for actual unread notifications */}
                </span>
              )}
            </Button>
          )}
          <Button onClick={onNewIncidentClick} className="bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center space-x-2">
            <PlusCircle className="h-4 w-4" />
            <span>New Incident</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;