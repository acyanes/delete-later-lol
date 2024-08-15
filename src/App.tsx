import "./App.css";
import StockTicker from "./Component";
import NoStockTicker from "./NoComponent";

function App() {
  const techStocks = ["AAPL", "GOOGL", "MSFT", "AMZN", "META"];
  const financeStocks = ["JPM", "BAC", "GS", "WFC", "C"];

  return (
    <>
      <h1>React Compiler</h1>
      <StockTicker stocks={techStocks} />
      <NoStockTicker stocks={financeStocks} />
    </>
  );
}

export default App;
