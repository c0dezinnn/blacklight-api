let cooldown = 60;
let set = new Set()
let nome = "aaaaa"
async function connect(){

    if(set.has(nome))
        return global.connection;
        set.add(nome)
      setTimeout(()=>{
        set.delete(nome)
      },cooldown*1000)
let env = process.env
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://"+env.mysql_name+":"+env.mysql_pass+"@"+env.mysql_host+":"+env.mysql_port+"/"+env.mysql_name+"");
    console.log("Conectou no MySQL!");
    
    global.connection = connection;
    return connection;
    
}
connect()
async function generateToken({email,senha}){
  const db = await connect()
  const md5 = require('md5');
  const token = await md5(String(email)+String(senha))
  console.log(token)
  return await token
}
async function createAccount({email,senha}){
  const db = await connect()
  const token = await generateToken({email,senha})
const sql = "INSERT INTO `tokens`(`token`,email,senha) VALUES (?,?,md5(?))"
const outraDb = await connect()
 let aa=await db.query(sql,[String(token),String(email),String(senha)])



return await aa
}
async function verifyToken(token){
  const db = await connect()
  

  const sql = "SELECT `id`, `token`, `email`, `senha` FROM `tokens` WHERE token=?"
  const ae = [token]

  let resultado = await db.query(sql,ae)
  let [row] = resultado
  let tipo = false
    if(row[0]){
      tipo= true
    } else{
      tipo= false
    }
    return await tipo
}
module.exports = {createAccount,verifyToken}
