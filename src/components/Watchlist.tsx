import React from "react";

const watchlist = [
    {
        name: "Bitcoin",
        ticker: "BTC",
        price: "$42,130.20",
        change: "+2.14%",
        color: "text-green-500",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025", // optional
    },
    {
        name: "Ethereum",
        ticker: "ETH",
        price: "$2,920.55",
        change: "-1.08%",
        color: "text-red-500",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
    },
    {
        name: "Solana",
        ticker: "SOL",
        price: "$110.75",
        change: "+3.47%",
        color: "text-green-500",
        logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025",
    },
    {
        name: "Cardano",
        ticker: "ADA",
        price: "$0.58",
        change: "-0.65%",
        color: "text-red-500",
        logo: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=025",
    },
];

const Watchlist: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow p-4 h-full overflow-y-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Watchlist</h2>
            <div className="space-y-4">
                {watchlist.map((coin, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={coin.logo}
                                alt={coin.name}
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="font-semibold text-gray-700">{coin.name}</p>
                                <p className="text-sm text-gray-500">{coin.ticker}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-700">{coin.price}</p>
                            <p className={`text-xs ${coin.color}`}>{coin.change}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Watchlist;
