(async()=>{
  const lingua = document.cookie
  .split('; ')
  .find(row => row.startsWith('lang='))
  .split('=')[1] || "pt-br"; 
  /*
      <h1>Registro</h1>
    <h3>Crie sua conta pra usar os <a href="/recursos">Recursos</a> da api!</h3>
<form action="" method="post">
 <p>E-mail: <input type="email" required/></p>
 <p>Senha: <input type="password" required/></p>
 <input type="submit" value="Enviar"/>
</form>
 */
let lang = {
loading:"",
buttonvalue:"",
main:{
  text:"",
  desc:''
},
email:{
  text:"",
placeholder:""
},
password:{
  text:"",
  placeholder:""
}
}


  if(lingua == "pt-br") {
    lang = {
loading:"Carregando...",
buttonvalue:"Enviar",
main:{
  text:"Registro",
  desc:'Crie sua conta pra usar os <a href="/recursos">Recursos</a> da api!'
},
email:{
  text:"E-mail",
placeholder:"exemplo@exemplo.com.br"
},
password:{
  text:"Senha:",
  placeholder:"UmaSenha123"
}
}
  } else
  if(lingua == "en-US"){
    lang = {
loading:"Loading...",
buttonvalue:"Send",
main:{
  text:"Register",
  desc:'Create your account for use <a href="/recursos">recurses</a> for api'
},
email:{
  text:"E-mail",
placeholder:"example@example.com"
},
password:{
  text:"Password:",
  placeholder:"OnePassword123"
}
}
  }
let principal = document.createElement("div");
principal.innerHTML=lang.loading;

principal.id="aaa";
principal.innerHTML = "";
let titulo = document.createElement("h1");
let desc = document.createElement("h3");
let form = document.createElement("form");
(()=>{
  /* O form */
let textoEmail = document.createElement("p");
let textoSenha = document.createElement("p");
let email = document.createElement("input");
let senha = document.createElement("input");
let btn = document.createElement("input");

textoEmail.innerHTML = lang.email.text;
textoSenha.innerHTML = lang.password.text;
email.type = "email";
email.required = true;
email.placeholder = lang.email.placeholder;
senha.type = "password";
senha.required = true;
senha.placeholder = lang.password.placeholder;
btn.type = "submit";
btn.value =lang.buttonvalue;
textoEmail.appendChild(email);
textoSenha.appendChild(senha)
form.appendChild(textoEmail)
form.appendChild(textoSenha)
form.appendChild(btn)

})()
titulo.innerHTML = lang.main.text;
desc.innerHTML = lang.main.desc;
principal.appendChild(titulo);
principal.appendChild(desc)
principal.appendChild(form)

/* FIM */
let principalo = document.querySelector("#app-mount");
principalo.appendChild(principal)
})()