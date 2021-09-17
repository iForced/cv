import React from 'react';
import container from '../../common/styles/Container.module.css'
import s from './Skills.module.css';
import {v1} from "uuid";
import {Skill} from "./Skill/Skill";

type SkillType = {
    id: string
    title: string
    text: string
    icon: string
}

export function Skills() {

    const skills: Array<SkillType> = [
        {
            id: v1(), title: 'HTML',
            text: 'React - кабзда как просто (специальный созданный для студентов инкубатора концептуально-практический курс по React+Redux)',
            icon: '/images/skills/html5.png'
        },
        {
            id: v1(), title: 'CSS/SASS',
            text: 'React - кабзда как просто (специальный созданный для студентов инкубатора концептуально-практический курс по React+Redux)',
            icon: '/images/skills/css3.png'
        },
        {
            id: v1(), title: 'JavaScript',
            text: 'React - кабзда как просто (специальный созданный для студентов инкубатора концептуально-практический курс по React+Redux)',
            icon: '/images/skills/javascript.png'
        },
        {
            id: v1(), title: 'TypeScript',
            text: 'React - кабзда как просто (специальный созданный для студентов инкубатора концептуально-практический курс по React+Redux)',
            icon: '/images/skills/typescript.png'
        },
        {
            id: v1(), title: 'React',
            text: 'React - кабзда как просто (специальный созданный для студентов инкубатора концептуально-практический курс по React+Redux)',
            icon: '/images/skills/react.png'
        },
        {
            id: v1(), title: 'Redux',
            text: 'React - кабзда как просто (специальный созданный для студентов инкубатора концептуально-практический курс по React+Redux)',
            icon: '/images/skills/redux.png'
        },
    ]

    return (
        <section className={s.skills}>
            <h3 className={s.skillsHeader}>My technology stack</h3>
            <div className={container.container + ' ' + s.container}>
                {skills.map(s => <Skill key={s.id} title={s.title} text={s.text} icon={s.icon} />)}
            </div>
        </section>
    );
}

