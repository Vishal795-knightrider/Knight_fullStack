import { useState } from "react";
import Form from "./Components/Form"
import TransactionList from "./Components/Transaction-list"
import { sum } from "./Components/Utils"
import Grocery from "./grocery";
import Book from "./bookstore";

function App() {
  // const [transactions, setTransactions] = useState([]);

  // const addTransaction = (transaction) => {
  //   setTransactions([...transactions, transaction]);
  // };

  // const deleteTransaction = (id) => {
  //   setTransactions(transactions.filter((t) => t.id !== id));
  // };

  // const totals = sum(transactions);

  return (
    <div>

      {/* <Grocery /> */}
      <Book />
      {/* <h2>Total Income: ₹{totals.income}</h2>
      <h2>Total Expense: ₹{totals.expense}</h2>

      <Form addTransaction={addTransaction} /> */}

      {/* <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      /> */}
    </div>
  );
}

export default App;