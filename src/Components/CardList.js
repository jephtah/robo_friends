import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    //returns the card and the information 
    //of every robot on the card

    return (
        <div>
         {
            robots.map((user, i )=> {
            return (
            <Card 
             key= {i} 
             id={robots[i].id}
             name={robots[i].name} 
             email={robots[i].email}
             />
          );
        })
        }
    </div>
    );
}

export default CardList;