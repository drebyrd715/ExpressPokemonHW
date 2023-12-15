const express = require('express')
const app = express()
const characters = require("./models/pokemon")


app.set("view engine","jsx")
// --> Gives ViewEngine
app.engine("jsx", require("express-react-views")
.createEngine())
// --> Initializes ViewEngine


// --> Intercept reqRes proccess and manage dataFlow
// ---------------------------------[Middleware]
app.get('/', (req,res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon',(req,res)=>{
    res.render('Index', {
    pokemon: characters
    })
})
// ----------------------------------[Index]


app.get('/pokemon/:indexOfPokemonArray', (req,res)=>{
    res.render('Show',{
        pokemon: 
        characters[req.params.indexOfPokemonArray]
    })
})
// ----------------------------------[Show]
app.listen(3000,()=>{
    console.log("YerrOn3k")
})