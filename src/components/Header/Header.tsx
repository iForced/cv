import React, {useState} from 'react';
import container from '../../common/styles/Container.module.css';
import s from './Header.module.css';
import {Navbar} from "./Navbar/Navbar";
import {v1} from "uuid";
import {NavbarItem} from "./Navbar/Navbar-item/Navbar-item";

export type NavbarItemType = {
    id: string
    title: string
    path: string
}

export function Header() {

    const navbarItems: Array<NavbarItemType> = [
        {id: v1(), title: 'Home', path: '/'},
        {id: v1(), title: 'About me', path: '/about'},
        {id: v1(), title: 'My skills', path: '/skills'},
        {id: v1(), title: 'My Works', path: '/works'},
        {id: v1(), title: 'Education', path: '/edu'},
        {id: v1(), title: 'Contacts', path: '/contacts'},
    ]

    const [menuToggled, setMenuToggled] = useState<boolean>(false)

    return (
        <div className={s.header}>

            <div className={container.container + ' ' + s.container}>
                <div className={s.menu} onClick={() => setMenuToggled(!menuToggled)}>
                    <span></span>
                </div>
                {
                    menuToggled &&
                    <nav className={s.menuItems}>
                        {navbarItems.map(item => <NavbarItem key={item.id} title={item.title} path={item.path}/>)}
                    </nav>
                }
                <Navbar navItems={navbarItems}/>
            </div>
        </div>
    );
}

