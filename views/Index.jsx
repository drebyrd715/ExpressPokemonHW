import React from 'react'

function Index(props) {
  return (
    <>
    <h1>
          {" "}
          {props.pokemon.map((pokes, i) => {
            return (
              <li
                style={{
                  borderRadius: "22px",
                  margin: "1em",
                  border: " solid grey",
                  textAlign: "center",
                }}
              >
                {" "}
                <a href={`/pokemon/${i}`}>{pokes.name} </a>
              </li>
            );
          })}
        </h1>
    
    </>
  )
}

export default Index