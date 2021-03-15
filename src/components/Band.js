import React from 'react';

const Band = props =>{

  
    return(
      <div><ul>
        <li>{props.band}</li></ul><button onClick={() => props.delete(props.band.id)}></button>
      </div>
    );
};

export default Band;
