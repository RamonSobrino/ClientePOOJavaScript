function validateLocalBusinessAdd(params) {
    let http_request;

    let objeto = new Object();
    objeto.name = document.forms["LocalBusiness-agregar-form"]["fname"].value;
    objeto.address = document.forms["LocalBusiness-agregar-form"]["address"].value;
    objeto.description = document.forms["LocalBusiness-agregar-form"]["description"].value;
    objeto.telephone = document.forms["LocalBusiness-agregar-form"]["telephone"].value;
    objeto.url = document.forms["LocalBusiness-agregar-form"]["url"].value;
    objeto.openingHours = document.forms["LocalBusiness-agregar-form"]["openingHours"].value;
    objeto.acceptsReservations = document.forms["LocalBusiness-agregar-form"]["acceptsReservations"].checked;
    objeto.servesCuisine = document.forms["LocalBusiness-agregar-form"]["servesCuisine"].value;

    if (objeto.name == '' || objeto.address == '' || objeto.description == '' || objeto.url == ''
        || objeto.openingHours == '' || objeto.servesCuisine == '') {
        alert(Error('Se deben de rellenar todos los campos'))
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
                        document.getElementById("LocalBusiness-agregar-contenido").innerHTML = texto
                        ocultarPaneles();
                        document.getElementById("LocalBusiness-agregar").style.display = 'block';
                        document.getElementById("LocalBusiness-agregar-form-div").style.display = 'none';
                        document.getElementById("LocalBusiness-agregar-contenido").style.display = 'block';
                    }
                } else {
                    alert(Error(`Código ${http_request.status} recibido.`))
                }
            }
        };
        establish = new LocalBusiness(objeto);
        let data =establish.toJson()
        let puerto = document.forms["servidores-form"]["servidor"].value;
        http_request.open("POST", `http://localhost:${puerto}/LocalBusiness`, true);
        http_request.send(data);

    }
}

function validateFoodEstablishmentAdd(params) {
    let http_request;

    let objeto = new Object();
    objeto.name = document.forms["FoodEstablishment-agregar-form"]["fname"].value;
    objeto.address = document.forms["FoodEstablishment-agregar-form"]["address"].value;
    objeto.description = document.forms["FoodEstablishment-agregar-form"]["description"].value;
    objeto.telephone = document.forms["FoodEstablishment-agregar-form"]["telephone"].value;
    objeto.url = document.forms["FoodEstablishment-agregar-form"]["url"].value;
    objeto.openingHours = document.forms["FoodEstablishment-agregar-form"]["openingHours"].value;
    objeto.acceptsReservations = document.forms["FoodEstablishment-agregar-form"]["acceptsReservations"].checked;
    objeto.servesCuisine = document.forms["FoodEstablishment-agregar-form"]["servesCuisine"].value;

    if (objeto.name == '' || objeto.address == '' || objeto.description == '' || objeto.url == ''
        || objeto.openingHours == '' || objeto.servesCuisine == '') {
        alert(Error('Se deben de rellenar todos los campos'))
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
                        document.getElementById("FoodEstablishment-agregar-contenido").innerHTML = texto
                        ocultarPaneles();
                        document.getElementById("FoodEstablishment-agregar").style.display = 'block';
                        document.getElementById("FoodEstablishment-agregar-form-div").style.display = 'none';
                        document.getElementById("FoodEstablishment-agregar-contenido").style.display = 'block';
                    }
                } else {
                    alert(Error(`Código ${http_request.status} recibido.`))
                }
            }
        };
        establish = new FoodEstablishment(objeto);
        let data =establish.toJson()
        let puerto = document.forms["servidores-form"]["servidor"].value;
        http_request.open("POST", `http://localhost:${puerto}/FoodEstablishment`, true);
        http_request.send(data);

    }
}