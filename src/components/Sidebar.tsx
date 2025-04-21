import React from "react";
import { Home, Wallet, Newspaper, Layers, Users, Settings, MessageCircle } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r shadow-md flex flex-col p-4">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-700">GoStock</h2>
        <div className="mt-4 p-4 bg-black rounded-xl text-white">
          <p className="text-sm">Total Investment</p>
          <h3 className="text-xl font-bold mt-2">$5380.90</h3>
          <p className="text-green-400 text-sm">+18.30%</p>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-gray-700 hover:text-black">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700 hover:text-black">
            <Wallet className="w-5 h-5" />
            <span>Wallet</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700 hover:text-black">
            <Newspaper className="w-5 h-5" />
            <span>News</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700 hover:text-black">
            <Layers className="w-5 h-5" />
            <span>Stock & Fund</span>
          </li>
        </ul>
      </nav>

      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-3 text-gray-700 hover:text-black">
          <Users className="w-5 h-5" />
          <span>Community</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700 hover:text-black">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700 hover:text-black">
          <MessageCircle className="w-5 h-5" />
          <span>Contact Us</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;