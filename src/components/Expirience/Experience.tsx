import React from 'react';
import container from '../../common/styles/Container.module.css'
import s from './Experience.module.css';
import {v1} from "uuid";
import {WorkItem} from "./WorkItem/WorkItem";
import {StudyItem} from "./StudyItem/StudyItem";

type WorkType = {
    id: string
    time: string
    company: string
    position: string
}

const works: Array<WorkType> = [
    {id: v1(), time: 'Feb 2015', company: 'National airport Minsk', position: 'Electromechanic of fire alarm maintenance department'},
    {id: v1(), time: 'Jan 2016', company: 'National airport Minsk', position: 'Network administrator of fire alarm maintenance department'},
    {id: v1(), time: 'Sep 2018', company: 'National airport Minsk', position: 'Lead Engineer of fire alarm maintenance department'},
    {id: v1(), time: 'Jan 2020 (until now)', company: 'National airport Minsk', position: 'Head of fire alarm maintenance department'},
]
const studies = [
    {id: v1(), time: 'Dec 2020', course: 'Some free courses of base HTML, CSS, JavaScript', descr: 'Learn base of frontend technologies'},
    {id: v1(), time: 'Feb 2021', course: 'Student of The Rolling Scopes school', descr: 'Made simple applications on basic JavaScript, practiced responsive layout of web pages, studied TypeScript'},
    {id: v1(), time: 'Aug 2020', course: 'Student of IT-Incubator', descr: 'Learning React. Creating a SPA using functional components and hooks. Deepening my knowledge in TypeScript. Learning Redux'},
]

export function Experience() {

    return (
        <div className={s.experience}>
            <div className={container.container + ' ' + s.container}>
                <h3 className={s.experienceTitle}>My experience</h3>
                <div className={s.experiences}>
                    <div className={s.studies}>
                        <h5 className={s.experiencesTitle}>Where i study</h5>
                        <ul className={s.studiesList}>
                            {
                                studies.map(s =>
                                    <StudyItem
                                        key={s.id}
                                        time={s.time}
                                        course={s.course}
                                        descr={s.descr}
                                    />)
                            }
                        </ul>
                    </div>
                    <div className={s.works}>
                        <h5 className={s.experiencesTitle}>Where i work</h5>
                        <ul className={s.worksList}>
                            {
                                works.map(w =>
                                    <WorkItem
                                        key={w.id}
                                        time={w.time}
                                        company={w.company}
                                        position={w.position}
                                    />)
                            }
                        </ul>
                    </div>
            </div>
            </div>
        </div>
    );
}

