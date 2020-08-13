import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpance from "./components/IncomeExpance";
import TransactionList from "./components/TransactionList";
import AddTranscation from "./components/AddTranscation";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <IncomeExpance />
      <TransactionList />
      <AddTranscation />
    </GlobalProvider>
  );
}

export default App;
