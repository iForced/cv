import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";
import {Skills} from "./components/Skills/Skills";

export function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <About />
                <Skills />
            </BrowserRouter>
        </div>
    );
}

