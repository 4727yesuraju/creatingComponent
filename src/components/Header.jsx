import React from 'react'
import Box from './Box'

export default function Header() {
    const styles = {
        position:"fixed",
        top:"0px",
        backgroundColor:"red",
        width:"100vw",
        padding:"10px",
        textAlign:"center",
        fontSize:"40px"
    }
    const header = "HEADER"
  return (
    <div style={styles}>{header}</div>
  )
}
