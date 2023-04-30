import React from 'react';


//Create a card
const Card = ({name,email,id}) => {
    //This is JSX and not html
    return (
       
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow'>
    
     
            <img alt='robots' src={`https://robohash.org/${name}?200x200`}></img>
            <div>
                <h2>
                    {name}
                </h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;

