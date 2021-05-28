import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <h1>Система начисления баллов Хогвартс</h1>
            <div className='nav-bar'>
                <NavLink to='/' className='nav-bar--button'>Счетчик очков факультетов</NavLink>
                <NavLink to='/history' className='nav-bar--button'>Журнал внесения изменений</NavLink>
                <NavLink to='/forum' className='nav-bar--button'>Доска сообщений для преподавателей</NavLink>
                <span className="nav-bar--button" title="Разлогиниться из учетной записи" onClick={props.loggingOut}>Выйти</span>
            </div>
        </div>
    )
}

export default Header