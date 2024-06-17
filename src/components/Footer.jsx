import React from 'react'

export default function Footer() {
    const styles = {
        position:"fixed",
        bottom:"0px",
        backgroundColor:"red",
        width:"100vw",
        padding:"10px",
        textAlign:"center",
        fontSize:"40px"
    }
    const footer = "FOOTER";
  return (
    <div style={styles}>{footer}</div>
  )
}
