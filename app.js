const users = [
    { email: "user@mail.com", pass: "22061941" },
    { email: "elmar@mail.com", pass: "01091939" },
    { email: "artist@mail.com", pass: "02091945" }
]
const succes = document.getElementById('succes')
const errorone = document.getElementById('errorone')
const errortwo = document.getElementById('errortwo')

function signIn() {

    const inputemail = document.getElementById('inputemail').value
    const inputPassword = document.getElementById('inputPassword').value

    succes.style.display = "none"
    errorone.style.display = "none"
    errortwo.style.display = "none"
    
    if(users.find(item => item.email === inputemail && item.pass === inputPassword)){
        succes.style.display = 'flex'
    }else if(!inputemail.includes("@")){
        errortwo.style.display = 'flex'
    }else if(inputPassword.length < 6){
        errortwo.style.display = 'flex'
    }else{
        errorone.style.display = 'flex'
    }
}