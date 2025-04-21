const watchlist = [
    { name: "Chainlink", symbol: "LINK", price: "$14.32", change: "+5.2%" },
    { name: "Polygon", symbol: "MATIC", price: "$1.05", change: "+3.8%" },
    { name: "Avalanche", symbol: "AVAX", price: "$27.90", change: "+4.1%" },
];

const Watchlist = () => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 h-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">My Watchlist</h2>
            <ul className="space-y-6">
                {watchlist.map((coin, index) => (
                    <li key={index} className="flex justify-between border-b border-gray-600 pb-4">
                        <div>
                            <p className="font-medium text-gray-200">
                                {coin.name} <span className="text-sm text-gray-400">({coin.symbol})</span>
                            </p>
                            <p className="text-sm text-gray-400">{coin.price}</p>
                        </div>
                        <p className={`text-sm font-semibold ${coin.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {coin.change}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Watchlist;
