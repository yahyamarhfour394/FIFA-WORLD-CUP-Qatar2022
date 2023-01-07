let new_create = document.querySelector('new-account')
let btn_account = document.getElementById('btn_account')
let btne = document.getElementById('btne')
let btna = document.getElementById('btna')
let container_accueil = document.getElementById('container_accueil')
let input_error = document.querySelector('input-error')
let input_done = document.querySelector('input-done')
let name = document.getElementById('name')
let password = document.getElementById('password')

let datapro = [];

new_create.classList.add('del')

input_done.classList.add('del')
input_error.classList.add('del')

function create_account(){
    container_accueil.classList.add('del')
    new_create.classList.remove('del')
}


function error_done(){
    if(password.value != '' && name.value != ''){
        input_done.classList.remove('del')
        input_error.classList.add('del')
        console.log(datapro)
        let object = {
            'name':name.value,
            'password':password.value
        }
        datapro.push(object)
        localStorage.setItem('account',JSON.stringify(datapro))
        setTimeout(function removedo(){
            input_done.classList.add('del')
            new_create.classList.add('del')
            container_accueil.classList.remove('del')
        }, 3000)
    }else{
        input_error.classList.remove('del')
        input_done.classList.add('del')
        setTimeout(function removeer(){
            input_error.classList.add('del')
        }, 3000)
    }
}
