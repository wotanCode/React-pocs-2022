import React, { useState } from 'react';
//CSS
import "./ExpenseItem.css";
//Components
import ExpenseData from "./ExpenseData"
import Card from "../UI/Card"

const ExpenseItem = (props) =>{

    const [title,setTitle] = useState(props.title);
    
const clickhandler = () =>{
    setTitle("update!");
    console.log("click!!")
}

    return (
        <Card className="expense-item">
            <ExpenseData date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickhandler}>Change title</button>
        </Card>
    );
}
export default ExpenseItem;