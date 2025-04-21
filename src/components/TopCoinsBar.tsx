import React from "react";

const topAssets = [
    {
        name: "Apple",
        price: "$310.40",
        change: "-1.03%",
        color: "text-red-500",
    },
    {
        name: "Meta",
        price: "$140.45",
        change: "-0.30%",
        color: "text-red-400",
    },
    {
        name: "Microsoft",
        price: "$240.98",
        change: "+0.81%",
        color: "text-green-500",
    },
    {
        name: "Google",
        price: "$99.13",
        change: "-0.04%",
        color: "text-red-400",
    },
];

const TopCoinsBar: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow p-4 mb-4 overflow-x-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">My Portfolio</h2>
            <div className="flex gap-6 min-w-full">
                {topAssets.map((asset, index) => (
                    <div
                        key={index}
                        className="min-w-[160px] bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm"
                    >
                        <h3 className="text-md font-semibold text-gray-700 mb-1">
                            {asset.name}
                        </h3>
                        <p className="text-gray-600">{asset.price}</p>
                        <p className={`text-sm ${asset.color}`}>{asset.change}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCoinsBar;
