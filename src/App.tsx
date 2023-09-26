import React from 'react';
import './App.css';
import {CarType, NewComponent} from "./NewComponent";

function App() {
    const topCars: CarType[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'Renault', model: 'w7mf'},
        {manufacturer: 'Honda', model: 'n9j'},
        {manufacturer: 'Opel', model: 'c7t'}
    ]

    return (
        <div>
            <NewComponent cars={topCars}/>
        </div>
    );
}

export default App;
