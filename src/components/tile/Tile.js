import React from "react";

export const Tile = ({value}) => {
  const result = Object.values(value);

  return (
    <div className="tile-container">
      {
       result.map((data, index)=>{
        if(index === 0){
          return <p className="tile-title" key={index}>{data}</p>
        }
          return <p className="title" key={index}>{data}</p>
       })
      }            
    </div>
  );
};
