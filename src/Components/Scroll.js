import React from 'react';

const Scroll = ( props )=>{
    console.log(props);
    return (
        <div id="card-list">
            {props.children}
        </div>
    );
};


export default Scroll;