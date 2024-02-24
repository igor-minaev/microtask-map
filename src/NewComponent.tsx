import React from 'react';

type NewComponentType = {
    students: StudentType[]
}
type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    const mappedStudents = props.students.map(s=>{
        return(
            <li key={s.id}>
                <span>{s.name} </span>
                <span>{s.age} </span>
            </li>
        )
    })
    return (
        <ul>
            {mappedStudents}
        </ul>
    );
};

