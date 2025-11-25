import { Button } from "@/components/ui/button";
import { BellRing, PlusCircle } from "lucide-react";
import logo from "@/assets/resQSXlogo-bg.png";
import getKPIs from "@/Services/getKPIs";
import { useEffect, useState } from "react";

interface kpis {
  NAA: number;
  NII: number;
  NIP: number;
}

const Header: React.FC = () => {
  const [KPIs, setKPIs] = useState<kpis | null>(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    getKPIs()
      .then((kpis) => setKPIs(kpis))
      .catch((err) => setError(err));
  }, []);




  if (error != null)
    return (
      <>
        <div> something went wrong, please contact the developer</div>
      </>
    );

  return (
    <header className="sticky top-0 z-40 w-full bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo/Title and Navigation */}
        <div className="flex items-center space-x-6">
          <div id="logo">
            <img src={logo} alt="logo" />
          </div>

          <nav className="hidden md:flex space-x-4">
            {/* Example Nav Links - Use Next.js Link or React Router Link if applicable */}
            <a
              href="/map"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Dispatch Map
            </a>
            <a
              href="/dashboard"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/fleet"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Fleet Management
            </a>
          </nav>
        </div>

        {/* Center Section: Mini KPIs */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-green-400">
              {KPIs?.NAA}
            </span>
            <span className="text-sm text-gray-400">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-red-500">
              {KPIs?.NIP}
            </span>
            <span className="text-sm text-gray-400">incident pending</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <BellRing className="h-5 w-5 text-gray-300 hover:text-white" />
            {/* <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"> 
                   You might want a separate state for actual unread notifications 
                 </span>  */}
          </Button>

          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center space-x-2">
            <PlusCircle className="h-4 w-4" />
            <span>New Incident</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
