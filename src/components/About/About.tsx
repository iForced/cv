import React from 'react';
import s from './About.module.css';
import container from '../../common/styles/Container.module.css';

export function About() {

    return (
        <div className={s.about}>
            <div className={container.container + ' ' + s.container}>
                <div className={s.aboutText}>
                    <p>Привет. Меня зовут</p>
                    <h1>Илья Орсич</h1>
                    <h3>Frontend developer</h3>
                    <p>Я занимаюсь разработкой web приложений на React</p>
                    <a href="/">Связаться со мной</a>
                </div>
                <div className={s.aboutPhoto}>
                    {/*<img src="#" alt="It's me"/>*/}
                </div>
            </div>
        </div>
    );
}

