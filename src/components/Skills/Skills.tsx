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
            text: 'I use semantic markup when writing the structure of the applications',
            icon: '/images/skills/html5.png'
        },
        {
            id: v1(), title: 'CSS/SASS',
            text: 'Make adaptive page layout. Also use SASS preprocessor',
            icon: '/images/skills/css3.png'
        },
        {
            id: v1(), title: 'JavaScript',
            text: 'I have confident knowledge of native JavaScript',
            icon: '/images/skills/javascript.png'
        },
        {
            id: v1(), title: 'TypeScript',
            text: 'In my projects I use TypeScript, because knowledge of TS is an essential part of frontend developing today',
            icon: '/images/skills/typescript.png'
        },
        {
            id: v1(), title: 'React',
            text: 'I use React to render user interfaces. I have knowledge of React Hooks, use class and functional components',
            icon: '/images/skills/react.png'
        },
        {
            id: v1(), title: 'Redux',
            text: 'For state management I use redux. To interact with React, I use react-redux library',
            icon: '/images/skills/redux.png'
        },
    ]

    return (
        <section className={s.skills}>
            <div className={container.container + ' ' + s.container}>
                <h3 className={s.skillsTitle}>My technology stack</h3>
                <div className={s.skillsItems}>
                    {
                        skills.map(s =>
                            <Skill
                                key={s.id}
                                title={s.title}
                                text={s.text}
                                icon={s.icon}
                            />)
                    }
                </div>
            </div>
        </section>
    );
}

