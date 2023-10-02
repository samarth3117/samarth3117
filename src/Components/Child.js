import React from 'react';

const Child = props => {
    const person = {
        name: 'John Doe',
        age: 999
    };

    const buttonClickHandler = () => {
        props.PassData(person);
    }
    
    return <div>
        <button onClick={buttonClickHandler}>Show the info</button>
    </div>
}

export default Child;