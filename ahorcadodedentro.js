// definimos las variables:
var palabritas = ["puigde","albert","mrajoy","oriol","inda"];
var condicion=true;
var intentos=0;
var aciertos=0;
var botonaco=document.getElementById("button");
var palabra0=[];
var aleatorio = Math.floor(Math.random()*(palabritas.length));
var adivinar = palabritas[aleatorio];
console.log(adivinar);

// empezamos con las estructuras de repeticion
for (var i = 0; i < adivinar.length; i++) {
    palabra0[i]='0';
}
// funcion de comprobar (letras introducidas)
function comprobacion() {
    var acertado=false;
    var textoIntroducido="";
    textoIntroducido = letraUsuario.value;
      console.log(palabra0);

// is not a number (comprobacion)
      if (isNaN(textoIntroducido)) {
        for (var i = 0; i < adivinar.length; i++) {
          if (adivinar.charAt(i)==textoIntroducido) {
            palabra0[i]=adivinar.charAt(i);
            acertado=true;
            aciertos++;
            console.log(aciertos);
          }
        }   console.log(palabra0);
        }  else {
            cuadroResultado.value="No party";
          }
          if (acertado==true) {
            cuadroComprobar.value="Premio pa la letra";
          } else {
            cuadroComprobar.value="No has acertado";
            intentos++;
  // almacenamos los errores aqui
            cuadroErrores.value=cuadroErrores.value+textoIntroducido+"-";
          }
          if (aciertos>=adivinar.length) {
            cuadroResultado.value="Premio maquina, la palabra era: "+adivinar
            botonaco=document.getElementById("botonaco");
          } else if (intentos>=5) {
            cuadroResultado.value="No party for you, palabra mal"
            botonaco=document.getElementById("botonaco");
          }
          letraUsuario.value="";
        }
