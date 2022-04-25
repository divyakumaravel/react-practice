import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenseList = props.expenses.map((item) => {
    return (
      <div className="expenses">
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      </div>
    );
  });
  return <div>{expenseList}</div>;
}
export default Expenses;
