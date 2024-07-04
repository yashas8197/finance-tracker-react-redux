import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome, addExpense } from "./action";

const IncomeExpenseForm = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleAddIncome = () => {
    dispatch(addIncome(parseFloat(amount)));  
    setAmount(0);
  };

  const handleAddExpense = () => {
    dispatch(addExpense(parseFloat(amount)));
    setAmount(0);
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button onClick={handleAddIncome}>Add Income</button>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default IncomeExpenseForm;
