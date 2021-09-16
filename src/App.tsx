import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";

export function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </div>
    );
}

