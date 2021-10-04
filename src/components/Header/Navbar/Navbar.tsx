import React from 'react';
import s from './Navbar.module.css';
import {NavbarItem} from "./Navbar-item/Navbar-item";
import {NavbarItemType} from "../Header";

export function Navbar(props: {navItems: Array<NavbarItemType>}) {
    return (
        <>
            <nav className={s.navbar}>
                {props.navItems.map(item => <NavbarItem key={item.id} title={item.title} path={item.path}/>)}
            </nav>
        </>
    );
}

