import React from 'react';
import container from '../../common/styles/Container.module.css'
import s from './Projects.module.css';
import {v1} from "uuid";
import {Project} from "./Project/Project";

type ProjectType = {
    id: string
    title: string
    descr: string
    image: string
    path: string
}

export function Projects() {

    const projects: Array<ProjectType> = [
        {
            id: v1(), title: 'Social network',
            descr: 'React - кабзда как просто (специальный созданный для студентов инкубатора концептуально-практический курс по React+Redux)',
            image: 'images/projects/social_network.png',
            path: 'https://github.com/iForced/socialNetwork'
        },
        {
            id: v1(), title: 'TODO list',
            descr: 'React - кабзда как просто (специальный созданный для студентов инкубатора концептуально-практический курс по React+Redux)',
            image: 'images/projects/todolist.png',
            path: 'https://github.com/iForced/todoList'
        },
        {
            id: v1(), title: 'Counter',
            descr: 'React - кабзда как просто (специальный созданный для студентов инкубатора концептуально-практический курс по React+Redux)',
            image: 'images/projects/counter.png',
            path: 'https://github.com/iForced/counter'
        },
    ]

    return (
        <section className={s.projects}>
            <div className={container.container + ' ' + s.container}>
                <h3 className={s.projectsTitle}>There is my projects</h3>
                <div className={s.projectsItems}>
                    {
                        projects.map(p =>
                            <Project
                                key={p.id}
                                title={p.title}
                                descr={p.descr}
                                image={p.image}
                                path={p.path}
                            />)
                    }
                </div>
            </div>
        </section>
    );
}

