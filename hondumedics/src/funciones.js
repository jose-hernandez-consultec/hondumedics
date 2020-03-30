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

function logoutDoctor(){
    localStorage.clear();
    window.location.href = "./LoginDoctor.html";
}

function logoutAdmin(){
    localStorage.clear();
    window.location.href = "./LoginAdmin.html";
}

$(".picture-upload-doctor").on('change', function (){
    if (localStorage.getItem('doctor') !== null){
        //Abrir el lector de archivos del navegador
        var doctor_id = JSON.parse(localStorage.getItem("doctor")).doctor_id;
        var fileReader = new FileReader();
        fileReader.onload = function() {
            var data = fileReader.result; //obtiene la foto en formato base64 y envia ese formato al servidor donde va a ser subida
            $.ajax({
                url: 'http://localhost:5000/doctorProfiles/updateDoctorProfilePictureByDoctorId',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    "doctor_id": doctor_id,
                    "profile_picture": data,
                }),
                processData: false,
                success: function (result) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Excelente!',
                        text: 'Su foto de perfil ha sido actualizada!',
                        confirmButtonText: 'Entendido'
                    }).then((result2) => {
                        if (result2.value) {
                            $(".profile_picture").attr('src', result.image);
                        }
                    });
                },
                error: function (error){

                }
            });
        };
        fileReader.readAsDataURL($('.picture-upload-doctor').prop('files')[0]);
    }else{

    }
});