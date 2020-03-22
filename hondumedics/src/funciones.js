//Función es correo electrónico válido
function isValidEmail(email_registro) {
    //Verificar la longitud mínima válida de un correo electrónico
    if (email_registro.length <= 2) {
        return false;
    }

    //Si el correo electrónico tiene carácter @
    if (email_registro.indexOf("@") == -1) {
        return false;
    }

    var partes = email_registro.split("@");
    var punto = partes[1].indexOf(".");
    var longitud = partes[1].length;
    var divisiones_puntos = partes[1].split(".");
    var recuento_puntos = divisiones_puntos.length - 1;

    //Verificar si el punto está presente y ese mínimo un carácter después de @
    if (punto == -1 | punto < 2 || recuento_puntos > 2) {
        return false;
    }

    //Comprobar si el punto no es el último carácter y si los puntos no se repiten
    for (var i = 0; i < divisiones_puntos.length; i++) {
        if (divisiones_puntos[i].length == 0) {
            return false;
        }
    }
    return true;
}

function getQueryVariable(variable) {
    // Estoy asumiendo que query es window.location.search.substring(1);
    var query = "emailPatient=&passwordPatient=";
    var vars = query.split("&");
    alert(vars);
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}

function logout(){
    localStorage.clear();
    window.location.href = "./Login.html";

}