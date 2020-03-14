import React , { useState } from 'react';

import './global.css'
import './App.css'
import './SideBar.css'

import Show from './show';
import VerificaChecks from './conta_box';
import makePostRequest from './routes'


const App = () => {
  const [showText, setShowText] = useState(false);
  const [nome , setnome  ] = useState("")
  const [sobrenome , setsobrenome  ] = useState("")
  const [email , setemail  ] = useState("")
  const [phone , setPhone  ] = useState("")
  
  function onSubmit(event)  {
    event.preventDefault()
    const valida_phone =  verifica_phone(phone)
    if(valida_phone === 1){ // se o telefone for válida , todas validações concluidas. Pronto pra enviar
    const redes_users = VerificaChecks() // verifica quais redes que o user possui e armazena no vetor
  
    setTimeout(function(){ alert("Envio com sucesso"); }, 1000);
    document.getElementById("enviar").disabled = true;
    const objeto = cria_objeto(redes_users)
    
    makePostRequest(objeto)
    //console.log(objeto)
   }
    

  }
    function cria_objeto(redes) 
    {
      const objeto = {
        nome ,
        sobrenome,
        email,
        phone,
        redes

      }
      return objeto
    }  

    function verifica_phone(e) 
    {
      
      if(e.indexOf("-") === -1) // se não tem'-' , phone inválido
      {
        alert("Telefone inválido")
        setPhone("")
        return -1
      }
    // phone válido
     
     return 1
  }
   
  
  return (
    <div id= "app">
      
    <aside >
    <form onSubmit = {onSubmit} action= "/" method= "POST">
      <div className= "inputs-config">
        <label htmlFor = "nome">Nome</label>
        <input id= "name" name = "name" type= "text" placeholder= "Insira seu nome" required value = {nome} onChange = { e => setnome(e.target.value)}/> <br/>
        <label htmlFor = "sobreNome">SobreNome</label>
        <input id= "sobreNome" name = "sobreNome" type= "text" placeholder= "Insira sobrenome" required value = {sobrenome} onChange = { e => setsobrenome(e.target.value)} /> <br/>
        <label htmlFor = "email">Email</label>
        <input id= "email" name = "email" type = "email"  placeholder= "Insira seu email válido" required value = {email} onChange = { e => setemail(e.target.value)} /> <br/>
        <label htmlFor = "phone">Telefone</label>
        <input id = "phone" placeholder= "Modelo: 99-99999999" type = "text" required value = {phone} onChange = { e => setPhone(e.target.value)}/> <br/>
        
      </div>
      
      <div className= "Select_control">
      <strong >Como nos conheceu?</strong> <br></br>
        <input type = "checkbox" name = "TV" value = "TV"></input><label>TV</label>
        <input type = "checkbox" name = "internet"value = "internet"></input><label>Internet</label>
        <input type = "checkbox" name = "outros" value = "outros"></input><label>Outros</label>
          
        
      </div>
      <div className= "Select_control_rede">
        <strong>Possui Rede social?</strong> <br></br> 
        <input type = "RADIO" 
        name = "rede" 
        value = "sim" 
        onClick = {() => setShowText(true)}></input><label>Sim</label>
        <input type = "RADIO" name = "rede" value = "nao" onClick = {() => setShowText(false)}></input> <label>Não</label>
          <br></br>
        {showText && <Show/> }

        
        
      </div>
      <button id = "enviar" type= "submit">Salvar</button>  
      {VerificaChecks}

    </form>
    </aside>
    
  </div>
  )
}

export default App;

