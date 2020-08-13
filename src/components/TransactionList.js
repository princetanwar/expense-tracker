import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((oneTransaction) => (
          <Transaction key={oneTransaction.id} transaction={oneTransaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
