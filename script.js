var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



function ocultarPaneles(){
    let paneles = document.getElementsByClassName("panel");
    for (let index = 0; index < paneles.length; index++) {
        paneles[index].style.display='none';
        
    }
}

function mostrarHome(){
    ocultarPaneles();
    document.getElementById("home").style.display='block';
}

function mostrarGeneral(){
    ocultarPaneles();
    let http_request;
    if (window.XMLHttpRequest) { // Estándar W3C
        http_request = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // Versiones antiguas de IE
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    http_request.onreadystatechange = () => {
        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                let texto = http_request.responseText;
                document.getElementById("general-contenidos").innerHTML= texto                
            } else {
                alert(Error(`Código ${http_request.status} recibido.`))
            }
        }
    };
    let puerto = document.forms["servidores-form"]["servidor"].value;
    http_request.open("GET",`http://localhost:${puerto}/`, true);
    http_request.send();
    document.getElementById("info-general").style.display='block';
}

function mostrarLocalBusinessTodos(){
    ocultarPaneles();
    document.getElementById("LocalBusiness-todos").style.display='block';
    let http_request;
    if (window.XMLHttpRequest) { // Estándar W3C
        http_request = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // Versiones antiguas de IE
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    http_request.onreadystatechange = () => {
        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                let texto = http_request.responseText;
                document.getElementById("LocalBusiness-todos-contenido").innerHTML= texto                
            } else {
                alert(Error(`Código ${http_request.status} recibido.`))
            }
        }
    };
    let puerto = document.forms["servidores-form"]["servidor"].value;
    http_request.open("GET",`http://localhost:${puerto}/LocalBusiness`, true);
    http_request.send();
}

function mostrarLocalBusinessId(){
    ocultarPaneles();
    document.getElementById("LocalBusiness-id").style.display='block';  
    document.getElementById("LocalBusiness-formulario-contenido").style.display='block';
    document.getElementById("LocalBusiness-id-contenido").style.display='none';
}

function mostrarFoodEstablishmentTodos(){
    ocultarPaneles();
    document.getElementById("FoodEstablishment-todos").style.display='block';
    let http_request;
    if (window.XMLHttpRequest) { // Estándar W3C
        http_request = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // Versiones antiguas de IE
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    http_request.onreadystatechange = () => {
        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                let texto = http_request.responseText;
                document.getElementById("FoodEstablishment-todos-contenido").innerHTML= texto                
            } else {
                alert(Error(`Código ${http_request.status} recibido.`))
            }
        }
    };
    let puerto = document.forms["servidores-form"]["servidor"].value;
    http_request.open("GET",`http://localhost:${puerto}/FoodEstablishment`, true);
    http_request.send();
}

function mostrarFoodEstablishmentId(){
    ocultarPaneles();
    document.getElementById("FoodEstablishment-id").style.display='block';
    document.getElementById("FoodEstablishment-formulario-contenido").style.display='block';
    document.getElementById("FoodEstablishment-id-contenido").style.display='none';
}

function mostrarLocalBusinessActualizar(){
    ocultarPaneles();
    document.getElementById("LocalBusiness-actualizar").style.display='block';
}

function mostrarFoodEstablishmentActualizar(){
    ocultarPaneles();
    document.getElementById("FoodEstablishment-actualizar").style.display='block';
}

function mostrarLocalBusinessAgregar(){
    ocultarPaneles();
    document.getElementById("LocalBusiness-agregar").style.display='block';
}

function mostrarFoodEstablishmentAgregar(){
    ocultarPaneles();
    document.getElementById("FoodEstablishment-agregar").style.display='block';
}

function mostrarLocalBusinessDelete(){
    ocultarPaneles();
    document.getElementById("LocalBusiness-borrar").style.display='block';
}

function mostrarFoodEstablishmentDelete(){
    ocultarPaneles();
    document.getElementById("FoodEstablishment-borrar").style.display='block';
}


function mostrarOpcionesServidor(){
    if(document.forms["servidores-form"]["servidor"].value!=''){
        document.getElementById("opciones-servidor").style.display='block';
    }else{
        document.getElementById("opciones-servidor").style.display='None';
    }
}
