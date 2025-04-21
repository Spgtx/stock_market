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

                    <div className="mt-4 grid grid-cols-1 xl:grid-cols-3 gap-4">
                        <div className="xl:col-span-2">
                            <CurrentAsset />
                        </div>
                        <div>
                            <Watchlist />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;