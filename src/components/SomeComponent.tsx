import React from "react";

interface Props {
    name: string;
    age: number | string;
    isOlderThan15?: boolean; // A '?' makes it an optional parameter (so we don't have to use it but can if we want to)
}

// The more popular way to use props variables in React

const SomeComponent: React.FC<Props> = ({name, age, isOlderThan15}) => {
    return (
        <div>
            <h2>Name - {name}</h2>
            <h2>Age - {age}</h2>
            <h2>Older than 15 - {isOlderThan15}</h2> // Figure out how to print a boolean
        </div>
    );
};

// The old fashion way to use props variables

// const SomeComponent = ({name, age} : Props) => {
//     return (
//         <div>
//             <h2>Name - {name}</h2>
//             <h2>Age - {age}</h2>
//         </div>
//     )
// }

export default SomeComponent;