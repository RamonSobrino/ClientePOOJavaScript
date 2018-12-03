function borrarLocalBusinessId(params) {
    let http_request;

    let id = document.getElementById("id-LocalBusiness-borrar").value;
    if (id < 0) {
        alert(Error('El id ha de ser mayor o igual que 0'))
    }
    else {

        if (window.XMLHttpRequest) { // Estándar W3C
            http_request = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // Versiones antiguas de IE
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        http_request.onreadystatechange = () => {
            if (http_request.readyState == 4) {
                if (http_request.status == 200) {
                    let texto = http_request.responseText;
                    if (texto == '') {
                        alert(Error(`No hay LocalBusiness con el id  ${id}.`))
                    } else {
                        document.getElementById("LocalBusiness-borrar-contenido").innerHTML = texto
                        ocultarPaneles();
                        document.getElementById("LocalBusiness-borrar").style.display = 'block';
                        document.getElementById("LocalBusiness-formulario-borrar").style.display = 'none';
                        document.getElementById("LocalBusiness-borrar-contenido").style.display = 'block';
                    }
                } else {
                    alert(Error(`Código ${http_request.status} recibido.`))
                }
            }
        };
        let puerto = document.forms["servidores-form"]["servidor"].value;
        http_request.open("DELETE", `http://localhost:${puerto}/LocalBusiness/${id}`, true);
        http_request.send();

    }
}

function borrarFoodEstablishmentId(params) {
    let http_request;

    let id = document.getElementById("id-FoodEstablishment-borrar").value;
    if (id < 0) {
        alert(Error('El id ha de ser mayor o igual que 0'))
    }
    else {

        if (window.XMLHttpRequest) { // Estándar W3C
            http_request = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // Versiones antiguas de IE
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        http_request.onreadystatechange = () => {
            if (http_request.readyState == 4) {
                if (http_request.status == 200) {
                    let texto = http_request.responseText;
                    if (texto == '') {
                        alert(Error(`No hay FoodEstablishment con el id  ${id}.`))
                    } else {
                        document.getElementById("FoodEstablishment-borrar-contenido").innerHTML = texto
                        ocultarPaneles();
                        document.getElementById("FoodEstablishment-borrar").style.display = 'block';
                        document.getElementById("FoodEstablishment-formulario-borrar").style.display = 'none';
                        document.getElementById("FoodEstablishment-borrar-contenido").style.display = 'block';
                    }
                } else {
                    alert(Error(`Código ${http_request.status} recibido.`))
                }
            }
        };
        let puerto = document.forms["servidores-form"]["servidor"].value;
        http_request.open("DELETE", `http://localhost:${puerto}/FoodEstablishment/${id}`, true);
        http_request.send();

    }
}