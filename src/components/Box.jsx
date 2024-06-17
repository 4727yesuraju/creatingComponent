import React from 'react'

export default function Box({ele}) {
  return (
    <div style={{
        backgroundColor:"aqua",
        borderRadius:"10px",
        textAlign:"center",
        padding:"20px 0px",
        cursor:"pointer"
    }} className="box">{ele}</div>
  )
}
