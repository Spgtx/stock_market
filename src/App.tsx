import React from "react";
import DashboardLayout from "./components/DashboardLayout";

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-100">
      <DashboardLayout />
    </div>
  );
};

export default App;