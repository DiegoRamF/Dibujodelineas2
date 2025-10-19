var elegircolor = document.getElementById("elegir_color");
var elegircolor2 = document.getElementById("elegir_color2");
var elegircolor3 = document.getElementById("elegir_color3");
var elegircolor4 = document.getElementById("elegir_color4");

var text = document.getElementById("texto_lineas");
var text2 = document.getElementById("texto_lineas2");
var text3 = document.getElementById("texto_lineas3");
var text4 = document.getElementById("texto_lineas4");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

var delet = document.getElementById("borrar");
delet.addEventListener("click", reinicio )

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(text.value);
    var lineas2 = parseInt(text2.value);
    var lineas3 = parseInt(text3.value);
    var lineas4 = parseInt(text4.value);
    var l = 0;
    var m = 0;
    var z = 0;
    var y = 0;
    var colorcito = elegircolor.value;
    var colorcito2 = elegircolor2.value;
    var colorcito3 = elegircolor3.value;
    var colorcito4 = elegircolor4.value;
    var espacio = ancho / lineas;
    var espacio2 = ancho / lineas2;
    var espacio3 = ancho / lineas3;
    var espacio4 = ancho / lineas4;



    for (l = 0; l < lineas; l++) 
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log("Linea " + l);
    }

    dibujarLinea(colorcito, 0, 0, 0, 300);
    dibujarLinea(colorcito, 0, 300, 300, 300);



  
    for (m = 0; m < lineas2; m++)
    {
        yi = espacio2 * (m + 1);
        xf = espacio2 * m;
        dibujarLinea(colorcito2, 300, yi, xf, 0);
        console.log("linea" + m);
    }

    dibujarLinea(colorcito2, 300, 300, 300, 0);
    dibujarLinea(colorcito2, 300, 0, 0, 0);




    for (z = 0; z < lineas3; z++)
    {
        xi = 300 - (espacio3 * z);
        yf = 300 - (espacio3 * (lineas3-(z+1)));
        dibujarLinea(colorcito3, xi, 0, 0, yf);
        console.log("linea" + z);
    }

    dibujarLinea(colorcito3, 0, 300, 0, 0);
    dibujarLinea(colorcito3, 0, 0, 300, 0);




    for (y = 0; y < lineas4; y++)
    {
        xi = espacio4 * y;
        yf = espacio4 * (lineas4 - (y + 1));
        dibujarLinea(colorcito4, xi, 300, 300, yf);
        console.log("linea" + y);
    }

    dibujarLinea(colorcito4, 300, 0, 300, 300);
    dibujarLinea(colorcito4, 300, 300, 0, 300);
}

function reinicio()
{
    location.reload();
}