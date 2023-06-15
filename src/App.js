import React, { useState } from "react";
import ListComp  from "./Components/ListComp";
import p1 from "./p1.jpg"

const list=[
  {
      id:0,
      photoSrc:{p1},
      name:"Ismail Ramadan",
      age:20
  },  
  {
      id:1,
      photoSrc:"../20200130_154951.jpg",
      name:"Hassan Ramadan",
      age:18
  },
  {
      id:2,
      photoSrc:"../20200920_001120.jpg",
      name:"Mohamed Ramadan",
      age:29
  },
  {
      id:3,
      photoSrc:"../20190706_111857.jpg",
      name:"Loay Hesham",
      age:4
  }    
]

const App = () => {
  const[readList,setList]=useState(list);
  return (
    <div className="container">
      <section>
        <h1>{readList.length} bithdays today</h1>
      </section>
      <ListComp readList={readList}/>
      <button onClick={()=>{setList([])}}>Clear All</button>
    </div>
    );
};

export default App;
