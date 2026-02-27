const TransactionItem = ({ transaction, deleteTransaction }) => {
  const { id, text, amount, type } = transaction;

  return (
    <div>
      <span>{text}</span>
      <span>
        {type === "income" ? "+" : "-"} ₹{amount}
      </span>

      <button onClick={() => deleteTransaction(id)}>
        Delete
      </button>
    </div>
  );
};

export default TransactionItem;