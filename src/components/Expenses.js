import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenseList = props.expenses.map((item) => {
    return (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    );
  });
  return <div>{expenseList}</div>;
}
export default Expenses;
