import React from 'react';
import container from '../../common/styles/Container.module.css'
import s from './Contacts.module.css';

export function Contacts() {

    return (
        <div className={s.contacts}>
            <div className={container.container + ' ' + s.container}>
                <h3 className={s.contactsTitle}>Contact me</h3>
                <form className={s.contactsForm}>
                    <div className={s.name}>
                        <input type="text" placeholder="Your name"/>
                    </div>
                    <div className={s.connections}>
                        <input type="email" placeholder="Your E-mail"/>
                        <input type="tel" placeholder="Your tel."/>
                    </div>
                    <textarea placeholder="Your message here" />
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
}

