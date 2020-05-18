import React from 'react';
import logo from './../../images/Logo1.png';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__img} src={logo} />
        </header>
    )
}

export default Header;