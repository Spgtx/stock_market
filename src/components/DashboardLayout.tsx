import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TopCoinsBar from "./TopCoinsBar";
import CurrentAsset from "./CurrentAsset";
import Watchlist from "./Watchlist";

const DashboardLayout: React.FC = () => {
    return (
        <div className="flex h-full">
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <div className="px-4 py-2 overflow-y-auto">
                    <TopCoinsBar />

                    <div className="flex gap-4 h-[500px]">
                        <div className="flex-1">
                            <CurrentAsset />
                        </div>
                        <div className="w-[300px] shrink-0">
                            <Watchlist />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;