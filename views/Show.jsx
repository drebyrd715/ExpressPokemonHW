import React from 'react'
import pokemon from '../models/pokemon'

function Show(props) {
  return (
    <>
    <h1> Gotta Catch Em All </h1>
    <h2>{props.pokemon.name}</h2>
    <img src ={`${props.pokemon.img}.jpg`}  />
    {/* use jpg with backticks and $ to add img dynamically */}
    <a href="/">Go Home</a>
    
    </>
  )
}

export default Show