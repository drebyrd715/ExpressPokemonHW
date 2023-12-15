const express = require('express')
const app = express()
const characters = require("./models/pokemon")


app.set("view engine","jsx")
// --> Gives ViewEngine
app.engine("jsx", require("express-react-views")
.createEngine())
// --> Initializes ViewEngine

app.use(express.urlencoded({extended:false}));
// --> Parse URLencoded responses [req.body*]

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
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

app.get('/pokemon/new',(req,res)=>{
    res.render('New')
})
//------------------------------------[New]
app.post('/pokemon',(req,res)=>{
    if(req.body.readyToCatchEm === 'on'){ 
        req.body.readyToCatchEm = true; 
    } else { 
        req.body.readyToCatchEm = false; 
    }
    characters.push(req.body)
    // ---> Add New Fruit to Existing DataSet
    console.log(req.body)
    res.redirect('/pokemon')
})
//-------------------------------------[POST]
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