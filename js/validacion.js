function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const terminos = document.getElementById('terminos');

function camposLlenos() {
    return nombre.value != '' && apellido.value != '' && email.value != '' && password1.value != '' && password2.value != '';
}

function largoContraseña() {
    return password1.value.length >= 6;
}

function sonIguales() {
    return password1.value === password2.value;
}

function checkboxMarcado() {
    return terminos.checked;
}

function validacion() {
    if (camposLlenos() && largoContraseña() && sonIguales() && checkboxMarcado()) {
        showAlertSuccess();
    }else{
        showAlertError();
    }
}