import React, { Component } from 'react';

const TestProp = (props) =>{
    return(
    <div>
    <h1>{props.name}</h1>
    {props.children}</div>
    )
} 
export default TestProp