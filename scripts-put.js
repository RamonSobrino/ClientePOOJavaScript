function validateLocalBusinessUpdate(params) {
    let http_request;

    let objeto = new Object();
    objeto.id = document.forms["LocalBusiness-actualizar-form"]["id"].value;
    objeto.name = document.forms["LocalBusiness-actualizar-form"]["fname"].value;
    objeto.address = document.forms["LocalBusiness-actualizar-form"]["address"].value;
    objeto.description = document.forms["LocalBusiness-actualizar-form"]["description"].value;
    objeto.telephone = document.forms["LocalBusiness-actualizar-form"]["telephone"].value;
    objeto.url = document.forms["LocalBusiness-actualizar-form"]["url"].value;
    objeto.openingHours = document.forms["LocalBusiness-actualizar-form"]["openingHours"].value;
    objeto.acceptsReservations = document.forms["LocalBusiness-actualizar-form"]["acceptsReservations"].checked;
    objeto.servesCuisine = document.forms["LocalBusiness-actualizar-form"]["servesCuisine"].value;

    if (objeto.id < 0 || objeto.name == '' || objeto.address == '' || objeto.description == '' || objeto.url == ''
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
                        document.getElementById("LocalBusiness-actualizar-contenido").innerHTML = texto
                        ocultarPaneles();
                        document.getElementById("LocalBusiness-actualizar").style.display = 'block';
                        document.getElementById("LocalBusiness-actualizar-form-div").style.display = 'none';
                        document.getElementById("LocalBusiness-actualizar-contenido").style.display = 'block';
                        document.forms["LocalBusiness-actualizar-form"].reset();
                    }
                } else {
                    alert(Error(`Código ${http_request.status} recibido.`))
                }
            }
        };
        establish = new LocalBusiness(objeto);
        let data =establish.toJson()
        let puerto = document.forms["servidores-form"]["servidor"].value;
        http_request.open("PUT", `http://localhost:${puerto}/LocalBusiness/${objeto.id}`, true);
        http_request.send(data);

    }
}

function validateFoodEstablishmentUpdate(params) {
    let http_request;

    let objeto = new Object();
    objeto.id = document.forms["FoodEstablishment-actualizar-form"]["id"].value;
    objeto.name = document.forms["FoodEstablishment-actualizar-form"]["fname"].value;
    objeto.address = document.forms["FoodEstablishment-actualizar-form"]["address"].value;
    objeto.description = document.forms["FoodEstablishment-actualizar-form"]["description"].value;
    objeto.telephone = document.forms["FoodEstablishment-actualizar-form"]["telephone"].value;
    objeto.url = document.forms["FoodEstablishment-actualizar-form"]["url"].value;
    objeto.openingHours = document.forms["FoodEstablishment-actualizar-form"]["openingHours"].value;
    objeto.acceptsReservations = document.forms["FoodEstablishment-actualizar-form"]["acceptsReservations"].checked;
    objeto.servesCuisine = document.forms["FoodEstablishment-actualizar-form"]["servesCuisine"].value;

    if (objeto.id < 0 || objeto.name == '' || objeto.address == '' || objeto.description == '' || objeto.url == ''
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
                        document.forms["FoodEstablishment-actualizar-form"].reset();
                    }
                } else {
                    alert(Error(`Código ${http_request.status} recibido.`))
                }
            }
        };
        establish = new FoodEstablishment(objeto);
        let data =establish.toJson()
        let puerto = document.forms["servidores-form"]["servidor"].value;
        http_request.open("PUT", `http://localhost:${puerto}/FoodEstablishment/${objeto.id}`, true);
        http_request.send(data);

    }
}