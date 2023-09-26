import React from 'react';

type NewComponentType = {
    cars: CarType[]
}

export type CarType = {
    manufacturer: string
    model: string
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.cars.map((c, index) => {
                return (
                    <tr key={index + 1}>
                        <td>{c.manufacturer}</td>
                        <td>{c.model}</td>
                    </tr>
                )
            })}
        </table>
    );
};

