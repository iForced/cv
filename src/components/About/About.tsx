import React from 'react';
import container from '../../common/styles/Container.module.css';
import s from './About.module.css';

export function About() {

    return (
        <main className={s.about}>
            <div className={container.container + ' ' + s.container}>
                <div className={s.aboutText}>
                    <p>Hello. I am</p>
                    <h1>Ilya Orsich</h1>
                    <h3>Frontend developer</h3>
                    <p>I build single page applications using ReactJS</p>
                    <a href="/">Связаться со мной</a>
                </div>
                <div className={s.aboutPhoto}>
                    <img src="/images/about/photo.jpg" alt="It's me"/>
                </div>
            </div>
        </main>
    );
}

