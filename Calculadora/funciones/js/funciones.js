
enviar();
limpiar_resultado();
calcular();
var total = 0;
raiz();
porcent();
opuest();
retroceder();
inve();

function enviar(numero){
    var txtResultado = document.getElementById('resultado');
    if(txtResultado!=null){
        txtResultado.value+=numero;
    }
}


function limpiar_resultado(){
    x=(document.getElementById("resultado").value="");

}

function calcular(){
    var respuesta = (document.getElementById("resultado").value)
    if(respuesta) {
        document.getElementById("resultado").value = eval(respuesta);
    }
}	

function raizCuadrada() {

     var respuesta = Number(document.getElementById("resultado").value);
    var res= Math.sqrt(respuesta);
    document.getElementById("resultado").value=res;
}


function porcent() {
    var respuesta = document.getElementById("resultado").value;

    var x1=respuesta.substr(0,respuesta.length-1) 
    var x2=respuesta.substr(respuesta.length-1,respuesta.length) 
    var x3 = x2/100;
    var evaluar = x1 + x3;
    document.getElementById("resultado").value= evaluar;


}

function opuest() { 
    var nx=Number(document.getElementById("resultado").value); //convertir en número
    var nx=-nx; //cambiar de signo
    var x=String(nx); //volver a convertir a cadena
    document.getElementById("resultado").value=x;
}

function retroceder(){ //Borrar sólo el último número escrito.
   var x=(document.getElementById("resultado").value);
   var cifras=x.length; //hayar número de caracteres en pantalla
    var br=x.substr(cifras-1,cifras) //describir último caracter
    var x=x.substr(0,cifras-1) //quitar el ultimo caracter
    document.getElementById("resultado").value=x; //mostrar resultado en pantalla

}
function inve() {
    var nx=Number(document.getElementById("resultado").value);
    var nx=(1/nx);
    var x=String(nx);		 
    document.getElementById("resultado").value=x;

    }
    

