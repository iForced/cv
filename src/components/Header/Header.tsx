import React from 'react';
import s from './Header.module.css';
import container from '../../common/styles/Container.module.css';
import {Navbar} from "./Navbar/Navbar";

export function Header() {

    return (
        <div className={s.header}>
            <div className={container.container}>
                <Navbar />
            </div>
        </div>
    );
}

