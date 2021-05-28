import React from 'react';
import './History-page.css';

const HistoryPage = (props) => {

    const historyElements = props.history.map((item, i) => {
        return (
            <li key={i} className="history-page-item">
                {item}
            </li> 
        )
    })
    return (
        <div className="main-page">
            <div className="greetings-table">
                <h2>History page</h2>
            </div>
            <ol>
                {historyElements}
            </ol>
        </div>
    )
}

export default HistoryPage