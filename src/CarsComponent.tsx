import React from 'react';

type CarsComponentType = {
    cars: CarType[]
}

type CarType = {
    manufacturer: string
    model: string
}

export const CarsComponent = (props: CarsComponentType) => {
    const mappedCars = props.cars.map((c, i) => {
        return (
            <tr key={i}>
                <td>{c.manufacturer}</td>
                <td>{c.model}</td>
            </tr>
        )
    })
    return (
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {mappedCars}
        </table>
    );
};

