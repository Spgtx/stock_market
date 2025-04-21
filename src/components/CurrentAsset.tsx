import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Mon", value: 300 },
    { name: "Tue", value: 400 },
    { name: "Wed", value: 350 },
    { name: "Thu", value: 420 },
    { name: "Fri", value: 390 },
];

const CurrentAsset: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Bitcoin</h2>
                    <p className="text-gray-600 text-sm">BTC / USD</p>
                </div>
                <div className="text-right">
                    <p className="text-lg font-bold text-green-500">$42,130.20</p>
                    <p className="text-sm text-green-400">+2.14%</p>
                </div>
            </div>
            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#4F46E5"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CurrentAsset;
