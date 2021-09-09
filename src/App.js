// alert("Presiona OK si estas list@ para empezar con javascript");
const nombre = document.querySelector('#nombre-input');
const form = document.querySelector('#saludador-form');
const form_edad = document.querySelector('#saludador-con-edad-form');
const form_genero = document.querySelector('#saludador-con-genero-form');
const edad = document.querySelector('#edad-input');
const genero = document.querySelector('#genero-input');
const idioma = document.querySelector('#idioma-select');
var hoy = new Date();
const form_tiempo = document.querySelector('#saludador-con-tiempo-form');
var hora = hoy.getHours()
// alert(hora)

// alert(nombre.value);
form.addEventListener("submit", (event) =>{
    alert("Hola: " + nombre.value + edad.value);
});

form_edad.addEventListener("submit", (event) =>{
    if(edad.value <= 18){
        alert("Hola Joven/Señorita " + nombre.value);
    }else{
        if(edad.value <=30){
            alert("Hola Señor/Señora " + nombre.value);
        }
        else{
            alert("Hola Don/Doña " + nombre.value)
        }
    }    
});

form_genero.addEventListener("submit", (event) =>{
    if(edad.value <= 18){
        if(genero.value == "Masculino"){
            alert("Hola Joven " + nombre.value);
        }else{
            if(genero.value == "Femenino"){
                alert("Hola Señorita " + nombre.value);
            }else{
                alert("Genero invalido. Inserte Masculino o Femenino");
            }
        }
    }else{
        if(edad.value <=30){
            if(genero.value == "Masculino"){
                alert("Hola Señor " + nombre.value);
            }else{
                if(genero.value == "Femenino"){
                    alert("Hola Señora " + nombre.value);
                }else{
                    alert("Genero invalido. Inserte Masculino o Femenino");
                }
            }
        }
        else{
            if(genero.value == "Masculino"){
                alert("Hola Don " + nombre.value);
            }else{
                if(genero.value == "Femenino"){
                    alert("Hola Doña " + nombre.value);
                }else{
                    alert("Genero invalido. Inserte Masculino o Femenino");
                }
            }
        }
    }    
});

form_tiempo.addEventListener("submit", (event) => {
    if(edad.value <= 21){
        if(genero.value == "Masculino"){
            console.log("Entro");
            if(hora >= 5 && hora < 12){
                if(idioma.value == "espanol"){
                    alert("Buenos Dias Joven " + nombre.value);
                }else{
                    alert("Good morning Boy " + nombre.value);
                }
            }else{
                if(hora >= 12 && hora < 18){
                    if(idioma.value == "espanol"){
                        alert("Buenas Tardes Joven " + nombre.value);
                    }else{
                        alert("Good afternoon Boy " + nombre.value);
                    }
                }else{
                    if(idioma.value == "espanol"){
                        alert("Buenas Noches Joven " + nombre.value);
                    }else{
                        alert("Good evening Boy " + nombre.value);
                    }
                }
            }
            
        }else{
            if(genero.value == "Femenino"){
                if(hora>= 5 && hora < 12){
                    if(idioma.value == "espanol"){
                        alert("Buenos Dias Señorita " + nombre.value);
                    }else{
                        alert("Good morning Girl " + nombre.value);
                    }
                }else{
                    if(hora >= 12 && hora < 18){
                        if(idioma.value == "espanol"){
                            alert("Buenas Tardes Señorita " + nombre.value);
                        }else{
                            alert("Good afternoon Girl " + nombre.value);
                        }
                    }else{
                        if(idioma.value == "espanol"){
                            alert("Buenas Noches Señorita " + nombre.value);
                        }else{
                            alert("Good evening Girl " + nombre.value);
                        }
                    }
                }
            }else{
                alert("Genero invalido. Inserte Masculino o Femenino");
            }
        }
    }else{
        if(edad.value <=60){
            if(genero.value == "Masculino"){
                if(hora>= 5 && hora < 12){
                    if(idioma.value == "espanol"){
                        alert("Buenos Dias Señor " + nombre.value);
                    }else{
                        alert("Good morning Man " + nombre.value);
                    }
                }else{
                    if(hora >= 12 && hora < 18){
                        if(idioma.value == "espanol"){
                            alert("Buenas Tardes Señor " + nombre.value);
                        }else{
                            alert("Good afternoon Man " + nombre.value);
                        }
                    }else{
                        if(idioma.value == "espanol"){
                            alert("Buenas Noches Señor " + nombre.value);
                        }else{
                            alert("Good evening Man " + nombre.value);
                        }
                    }
                }
            }else{
                if(genero.value == "Femenino"){
                    if(hora>= 5 && hora < 12){
                        if(idioma.value == "espanol"){
                            alert("Buenos Dias Señora " + nombre.value);
                        }else{
                            alert("Good morning Woman " + nombre.value);
                        }
                    }else{
                        if(hora >= 12 && hora < 18){
                            if(idioma.value == "espanol"){
                                alert("Buenas Tardes Señora " + nombre.value);
                            }else{
                                alert("Good afternoon Woman " + nombre.value);
                            }
                        }else{
                            if(idioma.value == "espanol"){
                                alert("Buenas Noches Señora " + nombre.value);
                            }else{
                                alert("Good evening Woman " + nombre.value);
                            }
                        }
                    }
                }else{
                    alert("Genero invalido. Inserte Masculino o Femenino");
                }
            }
        }
        else{
            if(genero.value == "Masculino"){
                if(hora>= 5 && hora < 12){
                    if(idioma.value == "espanol"){
                        alert("Buenos Dias Don " + nombre.value);
                    }else{
                        alert("Good morning Mr. " + nombre.value);
                    }
                }else{
                    if(hora >= 12 && hora < 18){
                        if(idioma.value == "espanol"){
                            alert("Buenas Tardes Don " + nombre.value);
                        }else{
                            alert("Good evening Mr. " + nombre.value);
                        }
                    }else{
                        if(idioma.value == "espanol"){
                            alert("Buenas Noches Don " + nombre.value);
                        }else{
                            alert("Good evening Mr. " + nombre.value);
                        }
                    }
                }
            }else{
                if(genero.value == "Femenino"){
                    if(hora>= 5 && hora < 12){
                        if(idioma.value == "espanol"){
                            alert("Buenos Dias Doña " + nombre.value);
                        }else{
                            alert("Good morning Mrs. " + nombre.value);
                        }
                    }else{
                        if(hora >= 12 && hora < 18){
                            if(idioma.value == "espanol"){
                                alert("Buenos Tardes Doña " + nombre.value);
                            }else{
                                alert("Good afternoon Mrs. " + nombre.value);
                            }
                        }else{
                            if(idioma.value == "espanol"){
                                alert("Buenas Noches Doña " + nombre.value);
                            }else{
                                alert("Good evening Mrs. " + nombre.value);
                            }
                        }
                    }
                }else{
                    alert("Genero invalido. Inserte Masculino o Femenino");
                }
            }
        }
    }   
});
