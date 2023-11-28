import { background } from '@chakra-ui/react';
import React from 'react'


const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
     style={{border:"1px solid" ,
      height:"100px",
      width:"100px",
      display: "flex",
      alignItems:"center",
      justifyContent:"center",
      color: "black",
      borderColor:"red"
    
    }} className='square'>
        <h5>{props.value}</h5>
    </div>
  );
}

export default Square;

