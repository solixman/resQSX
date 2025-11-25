import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { PlusCircle } from "lucide-react";
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
    <header
      id="header"
      className="sticky top-0 z-40 w-full bg-slate-900 text-white shadow-lg"
    >
      <div className="flex h-14 w-full items-center justify-between px-6 lg:px-2  ">
        <div id="logo" className="flex items-center">
          <img src={logo} alt="logo" className="flex items-center" />
        </div>

        <div id="kpis" className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2">
            <span className="text-lg font-bold text-emerald-400">
              {KPIs?.NAA}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Available Ambulances
            </span>
          </div>

            <div className="flex items-center gap-2 bg-red-600 rounded-full px-4 py-2">
              
              <div className="flex items-center gap-2 pr-3">
                <span className="text-lg font-bold text-white">
                  {KPIs?.NIP}
                </span>
                <span className="text-xs text-white font-medium uppercase tracking-wider">
                  Pending
                </span>
              </div>

              <div className="w-px h-6 bg-white opacity-50"></div>

              <div className="flex items-center gap-2 pl-3">
                <span className="text-lg font-bold text-white">
                  {KPIs?.NII}
                </span>
                <span className="text-xs text-white font-medium uppercase tracking-wider">
                  In Progress
                </span>
              
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2">
            <span className="text-sm font-semibold text-slate-300">
              MTR: 7:44 min
            </span>
          </div>
        </div>

        <div id="headerActions" className="flex items-center gap-2">
          <Button className="hidden lg:flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-4 py-2 text-xs transition-colors duration-200">
            <PlusCircle className="h-4 w-4" />
            <span>NEW INCIDENT</span>
          </Button>

          <div id="burgerMenu">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors">
                  <Menu size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-slate-800 text-white border-slate-700"
              >
                <DropdownMenuItem className="hover:bg-slate-700">
                  <a href="/map">Dispatch Map</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700">
                  <a href="/dashboard">Dashboard</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-700">
                  <a href="/fleet">Fleet Management</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
