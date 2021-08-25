 const express = require('express')
const app = express();
const path = require("path")
const db = require('./db')
const bodyParser = require("body-parser")
app.listen(3000)
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html",require("ejs").renderFile)
app.use(express.static(path.join(__dirname,"public")))
app.get('/', (req, res) => {
  res.render("index.html")
});

app.get('/memes', (req, res) => {
  res.render("memes.html")
});


app.get('/sobre-api', (req, res) => {
  res.render("sobre.html")
});
app.get("/criar-conta",(req,res)=>{

  res.render("registro.html")
})

app.get("/api/cats",async(req,res)=>{
  let {headers} = req
 let tokenOauth =headers.authorization
let token=await db.verifyToken(tokenOauth)
if(!token)return res.json({
  status:403,
  message:"Invalid Token, create oauth token in https://api.blacklight.net.br/criar-conta"
})
res.json({status:200,message:"OK",url:"https://assets1.eusouodouglas.repl.co/gatos/"+ Math.floor(Math.random() * 9)+".png"})
})