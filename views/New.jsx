import React from 'react'

function New() {
  return (
    <>
    <h1>Create A New Pokemon</h1>
    <form action="/pokemon" method="POST"><br/>
      Name: <input style={{margin:"1em"}} type="text" name="name" /><br/>
      Color: <input  style={{margin:"1em"}}type="text" name="color" /><br/>
      ReadyToCatchEmAll: <input  style={{margin:"1em"}}type="checkbox" name="Ready to Catch Em" /><br/>
      <input style={{margin:"1em"}} type="submit" value="Create pokemon" />
    </form>
  </>
  )
}

export default New