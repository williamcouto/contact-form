
function enviarForm(){
    let name_user = document.getElementById('name_user')
    let email = document.getElementById('email_user')
    let sel_job = document.getElementById('status-job')
    let user_comment = document.getElementById('user-comment')

    if(name_user.length >= 10 && email.length != "" && sel_job != ""){
        window.alert = "Mensagem Enviada com Sucesso! Entraremos em contato!"
    }
}