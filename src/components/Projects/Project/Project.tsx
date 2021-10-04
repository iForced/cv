import React from 'react';
import s from './Project.module.css';

type PropsType = {
    title: string
    descr: string
    image: string
    path: string
}

export function Project(props: PropsType) {

    return (
        <div className={s.project}>
            <div className={s.projectImage}>
                {/*TODO сделать кнопки перехода к проектам на всю картинку с затемнением*/}
                <a href={props.path} target='_blank' rel="noreferrer"><span className={s.projectButton}>Посмотреть</span></a>
                <img src={props.image} alt={props.title}/>
            </div>
            <h5 className={s.projectTitle}>{props.title}</h5>
            <div className={s.projectText}>
                <p>{props.descr}</p>
            </div>
        </div>
    );
}

