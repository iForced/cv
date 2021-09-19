import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Experience} from "./components/Expirience/Experience";
import {Contacts} from "./components/Contacts/Contacts";

export function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contacts />
            </BrowserRouter>
        </div>
    );
}

