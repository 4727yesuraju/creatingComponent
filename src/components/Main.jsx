import React from 'react'
import Box from './Box'
import Data from './Data'

export default function Main() {

    const styles = {
        padding : "50px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap:"10px",
        rowGap:"20px"
    }
  return (
    <>
        <h1 style={{textAlign:"center",paddingTop:"50px",fontSize:"50px"}}>Main</h1>
        <div style = {styles}>
            {[1,2,3,4,5,6].map((ele,ind)=><Box key={ind} ele={ele} /> )}
        </div>
        <Data />
    </>
  )
}
