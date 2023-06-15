import React from 'react'

export const Person = ({photoSrc,name,age}) => {
  return (
    <div className='person'>
    <img src={photoSrc} alt={name}/>
    <ul>
        <li style={{fontSize:"20px"}}>
            {name}            
        </li>
        <li>
            {age}            
        </li>
    </ul>
    </div>
  )
}