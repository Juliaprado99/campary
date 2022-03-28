function verificar(){
        let nome = document.getElementById("nome");
        let email = document.getElementById("email");
        let tel = document.getElementById("tel");
        let insert = document.getElementById("insert");
        if (nome.value.length == 0 || email.value.length < 5 || tel < 5){
            insert.innerHTML= (`Verifique seu email e tente novamente.`);
            insert.style.color = "red"
    
        }else{
            insert.innerHTML=(`Seu cadastro foi realizado!`);
            insert.style.color = "green"
    
    
    }}
