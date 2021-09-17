import React from 'react';
import s from './Skill.module.css';

type PropsType = {
    title: string
    text: string
    icon: string
}

export function Skill(props: PropsType) {

    return (
        <div className={s.skill}>
            <div className={s.skillImage}>
                <img src={props.icon} alt={props.title}/>
            </div>
            <h5 className={s.skillTitle}>
                {props.title}
            </h5>
            <p className={s.skillText}>
                {props.text}
            </p>
        </div>
    );
}

