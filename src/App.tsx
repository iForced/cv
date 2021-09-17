import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";

export function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <About />
            </BrowserRouter>
        </div>
    );
}

