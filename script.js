
function enviarForm(){
    let name_user = document.getElementById('name_user')
    let email = document.getElementById('email_user')

    if(name_user.length > 30 && email.length == ''){
        window.alert("Enviado")
    }
}


