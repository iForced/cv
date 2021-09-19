import React from 'react';
import s from './WorkItem.module.css';

type PropsType = {
    time: string
    company: string
    position: string
}

export function WorkItem(props: PropsType) {

    return (
        //TODO сделать общий сить для itemMarker
        <li className={s.workItem}>
            <div className={s.workItemMarker}>
                <img src="/images/experiences/list_item.svg" alt="list item"/>
            </div>
            <div className={s.workItemContent}>
                <h5 className={s.time}>{props.time}</h5>
                <p className={s.company}>{props.company}</p>
                <p className={s.position}>{props.position}</p>
            </div>
        </li>
    );
}

