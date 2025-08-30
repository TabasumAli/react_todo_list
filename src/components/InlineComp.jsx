import React from 'react'
// import "../css/style.css";
import sytles from './inlinecomp.module.css'

// const header ={color : "blue", fontSize: "30px"};

// Inline styling
function InlineComp() {
  return (
    <div>
      {/* <h1 style={header}>Inline Component</h1> */}
      <h1 className={sytles.header}>Inline Component</h1>
    </div>
  )
}

export default InlineComp
