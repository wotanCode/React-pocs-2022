//css
import "./ExpenseData.css"

const ExpenseData = (props) => {

    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});

    return(
        
            <div className="expense-date">
                {/*props.date.toISOString()*/}
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
            </div>
    )
}
export default ExpenseData;