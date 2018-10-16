import React from 'react';

const Card = ({name, email, id}) =>{
    //Make this return the username and email
    return (
        <div className ='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img src ={`https://robohash.org/${id}?200x200`} alt="robots"/>
        <div>
            <h2 className = 'f2'>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
    );
}
export default Card;