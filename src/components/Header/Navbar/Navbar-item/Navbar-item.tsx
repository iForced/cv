import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar-item.module.css';

type PropsType = {
    title: string
    path: string
}

export function NavbarItem(props: PropsType) {

    return (
        <div className={s.navbarItem}>
            <NavLink to={props.path} className={s.itemLink} activeClassName={s.activeLink}>{props.title}</NavLink>
        </div>
    );
}

