//CSS
import "./ExpenseItem.css";
//Components
import ExpenseData from "./ExpenseData"
import Card from "../UI/Card"

const ExpenseItem = (props) =>{
const clickhandler = () =>{
    console.log("click!!")
}

    return (
        <Card className="expense-item">
            <ExpenseData date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickhandler}>Change title</button>
        </Card>
    );
}
export default ExpenseItem;