import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Experience} from "./components/Expirience/Experience";

export function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <About />
                <Skills />
                <Projects />
                <Experience />
            </BrowserRouter>
        </div>
    );
}

