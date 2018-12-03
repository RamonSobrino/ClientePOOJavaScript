function validateLocalBusinessId(params) {
    let http_request;

    let id = document.getElementById("id-LocalBusiness").value;
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
                    if(texto ==''){
                        alert(Error(`No hay LocalBusiness con el id  ${id}.`))
                    }else{
                        document.getElementById("LocalBusiness-id-contenido").innerHTML = texto
                        ocultarPaneles();
                        document.getElementById("LocalBusiness-id").style.display = 'block';
                        document.getElementById("LocalBusiness-formulario-contenido").style.display = 'none';
                        document.getElementById("LocalBusiness-id-contenido").style.display = 'block';
                    }
                } else {
                    alert(Error(`Código ${http_request.status} recibido.`))
                }
            }
        };
        let puerto = document.forms["servidores-form"]["servidor"].value;
        http_request.open("GET", `http://localhost:${puerto}/LocalBusiness/${id}`, true);
        http_request.send();

    }
}

function validateFoodEstablishmentId(params) {
    let http_request;

    let id = document.getElementById("id-FoodEstablishment").value;
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
                    if(texto ==''){
                        alert(Error(`No hay FoodEstablishment con el id  ${id}.`))
                    }else{
                        document.getElementById("FoodEstablishment-id-contenido").innerHTML = texto
                        ocultarPaneles();
                        document.getElementById("FoodEstablishment-id").style.display = 'block';
                        document.getElementById("FoodEstablishment-formulario-contenido").style.display = 'none';
                        document.getElementById("FoodEstablishment-id-contenido").style.display = 'block';
                    }
                } else {
                    alert(Error(`Código ${http_request.status} recibido.`))
                }
            }
        };
        let puerto = document.forms["servidores-form"]["servidor"].value;
        http_request.open("GET", `http://localhost:${puerto}/FoodEstablishment/${id}`, true);
        http_request.send();

    }
}

