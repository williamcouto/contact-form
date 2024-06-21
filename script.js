
function enviarForm(){
    let name_user = document.getElementById('name_user')
    let email = document.getElementById('email_user')
    let sel_job = document.getElementById('status-job')

    if(name_user.length >= 10 && email.length != ''){
        window.location = "./confirm-feed.html"
    }
}