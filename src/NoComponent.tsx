import React, { useState, useEffect } from "react";

// Type for the props of the StockPrice component
interface StockPriceProps {
  symbol: string;
  price: number;
}

// Type for the props of the StockTicker component
interface StockTickerProps {
  stocks: string[];
}

// Type for the state of prices
interface PricesState {
  [symbol: string]: number;
}

// StockPrice component with React.memo for potential optimization
const StockPrice: React.FC<StockPriceProps> = ({ symbol, price }) => {
  "use no memo";
  return (
    <li className="flex justify-between items-center py-2 border-b">
      <span className="font-semibold">{symbol}</span>
      <span className={price > 50 ? "text-green-600" : "text-red-600"}>
        ${price.toFixed(2)}
      </span>
    </li>
  );
};

// Clock component (assumed to be implemented elsewhere)
const Clock: React.FC = () => {
  "use no memo";
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="text-sm text-gray-600 mb-2">
      Last updated: {time.toLocaleTimeString()}
    </p>
  );
};

// Main StockTicker component
export const NoStockTicker: React.FC<StockTickerProps> = ({ stocks }) => {
  "use no memo";

  const [prices, setPrices] = useState<PricesState>({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      stocks.forEach((stock) => {
        setPrices((prev) => ({
          ...prev,
          [stock]: Math.random() * 100,
        }));
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [stocks]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Stock Ticker without Compiler</h2>
      <Clock />
      <ul>
        {stocks.map((stock) => (
          <StockPrice key={stock} symbol={stock} price={prices[stock] ?? 0} />
        ))}
      </ul>
    </div>
  );
};

export default NoStockTicker;
