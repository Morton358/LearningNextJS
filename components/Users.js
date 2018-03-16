import React from 'react';
import { centered_box } from '../styles/styles';

const users = (props) => (
    <div>
        <h2>User Name: {props.name}</h2>
        <h3>Age: {props.age}</h3>
        {/* <style jsx>{`
            div {
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                padding: 20px;
                text-align: center;
            }
        `}</style> */}
        <style jsx>{centered_box}</style>
    </div>
);

export default users;
