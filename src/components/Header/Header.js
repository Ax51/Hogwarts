import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <h1>Система начисления баллов Хогвартс</h1>
            <div className='nav-bar'>
                <div className='nav-bar--button'>Счетчик очков факультетов</div>
                <div className='nav-bar--button'>Журнал внесения изменений</div>
                <div className='nav-bar--button'>Доска сообщений для преподавателей</div>
            </div>
        </div>
    )
}

export default Header