import React from 'react';
import { v1 } from 'uuid';
import s from './Navbar.module.css';
import {NavbarItem} from "./Navbar-item/Navbar-item";

type NavbarItemType = {
    id: string
    title: string
    path: string
}

export function Navbar() {

    const navbarItems: Array<NavbarItemType> = [
        {id: v1(), title: 'Home', path: '/home'},
        {id: v1(), title: 'About me', path: '/about'},
        {id: v1(), title: 'My skills', path: '/skills'},
        {id: v1(), title: 'My Works', path: '/works'},
        {id: v1(), title: 'Education', path: '/edu'},
        {id: v1(), title: 'Contacts', path: '/contacts'},
    ]

    return (
        <nav className={s.navbar}>
            {navbarItems.map(item => <NavbarItem key={item.id} title={item.title} path={item.path} />)}
        </nav>
    );
}

