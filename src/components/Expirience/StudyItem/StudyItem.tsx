import React from 'react';
import s from './StudyItem.module.css';

type PropsType = {
    time: string
    course: string
    descr: string
}

export function StudyItem(props: PropsType) {

    return (
        <li className={s.studyItem}>
            <div className={s.studyItemMarker}>
                <img src="images/experiences/list_item.svg" alt="list item"/>
            </div>
            <div className={s.studyItemContent}>
                <h5 className={s.time}>{props.time}</h5>
                <p className={s.course}>{props.course}</p>
                <p className={s.descr}>{props.descr}</p>
            </div>
        </li>
    );
}

