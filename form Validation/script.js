function validate()
{
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkconfirmpassword(password,cpassword)

}

function checkusername(username)
{
    if(username.length > 7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerText=''

    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='username must be atleast 8 letters long'

    }
}

function checkemail(email)
{
    if(email.length > 8 && email.includes('@gmail')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerText=''

    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='email must be 8 letter long and contain @gmail'

    }
}

function checkpassword(password)
{
    if(password.length>7 && password.includes('.')){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password_error').innerText=''

    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='passwaord must be 8 letters long and should include .'

    }
}

function checkconfirmpassword(password,cpassword)
{
    if(password==cpassword && password!=''){
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassword_error').innerText=''

    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText='password not matched'
    }
}
