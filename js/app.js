var contenedor= document.getElementsByClassName("container")[0];
var cabecera = document.createElement("div");
cabecera.setAttribute("id","cabecera");
var derecha = document.createElement("div");
derecha.setAttribute("id","derecha");
var iconM = document.createElement("img");
iconM.setAttribute("src","image/medium.png");
iconM.setAttribute("class","iconM");
var cuadro = document.createElement("img");
cuadro.setAttribute("src","image/cuadropequeño.png");
cuadro.setAttribute("class","cuadro");

var icons = document.createElement("div");
icons.setAttribute("id","icons");
var twitter = document.createElement("span");
twitter.setAttribute("class","icon-twitter" );
var faceCirc = document.createElement("span");
faceCirc.setAttribute("class","icon-facebook-with-circle2" );

var izquierda = document.createElement("div");
izquierda.setAttribute("id","izquierda");
var span = document.createElement("span")
span.setAttribute("id","span");
span.textContent = "Edit";
var search = document.createElement("span");
search.setAttribute("class","icon-search" );
var circuloVerde = document.createElement("div");
circuloVerde.setAttribute("id","circuloVerde");
circuloVerde.textContent="5";
var circuloImagen = document.createElement("img");
circuloImagen.setAttribute("src","image/chica.jpeg");
circuloImagen.setAttribute("class","circuloImagen");
var logoCodigo = document.createElement("img");
logoCodigo.setAttribute("src","image/codigo.png");
logoCodigo.setAttribute("class","logoCodigo");
var informacion = document.createElement("div");
informacion.setAttribute("id","informacion");
/*escritora con texto en el centro de informacion*/
var centro = document.createElement("div");
centro.setAttribute("id","centro");


var circuloImag = document.createElement("img");
circuloImag.setAttribute("src","image/chica.jpeg");
circuloImag.setAttribute("class","circuloImag");

var centroTexto = document.createElement("div");
centroTexto.setAttribute("id","centroTexto");
var nombre = document.createElement("span")
nombre.setAttribute("id","nombre");
nombre.textContent = "Belen Recabal";
var enter = document.createElement("br");
var descripcion = document.createElement("span")
descripcion.setAttribute("id","descripcion");
descripcion.textContent = "Teaching Assistant at Laboratoria. Trabajando para ver a más mujeres en el mundo de la programación.";
var contenido = document.createElement("div");
contenido.setAttribute("id","contenido");
var titulo = document.createElement("h1");
titulo.setAttribute("id","titulo");
titulo.textContent = "Hazlo con estilo : Tipografías, iconos y sprite";
var texto = document.createElement("p");
texto.setAttribute("id","texto");
texto.textContent = "Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es, ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!!";

var footer = document.createElement("div");
footer.setAttribute("id","footer");
var ladoDerecho = document.createElement("div");
ladoDerecho.setAttribute("id","ladoDerecho");
var heart = document.createElement("span");
heart.setAttribute("class","icon-heart" );
var comment = document.createElement("span");
comment.setAttribute("class","icon-comment-o" );

var ladoIzquierdo = document.createElement("div");
ladoIzquierdo.setAttribute("id","ladoIzquierdo");
var twitter2 = document.createElement("span");
twitter2.setAttribute("class","icon-twitter2" );
var facebook = document.createElement("span");
facebook.setAttribute("class","icon-facebook" );
var bookmark = document.createElement("span");
bookmark.setAttribute("class","icon-bookmark-o" );


contenedor.appendChild(cabecera);
cabecera.appendChild(derecha);
derecha.appendChild(iconM);
derecha.appendChild(cuadro);
derecha.appendChild(icons);
icons.appendChild(twitter);
icons.appendChild(faceCirc);

cabecera.appendChild(izquierda);
izquierda.appendChild(span);
izquierda.appendChild(search);
izquierda.appendChild(circuloVerde);
izquierda.appendChild(circuloImagen);
izquierda.appendChild(logoCodigo);

contenedor.appendChild(informacion);
informacion.appendChild(centro);
centro.appendChild(circuloImag);
centro.appendChild(centroTexto);
centroTexto.appendChild(nombre);
centroTexto.appendChild(enter);
centroTexto.appendChild(descripcion);
informacion.appendChild(contenido);
contenido.appendChild(titulo);
contenido.appendChild(texto);

contenedor.appendChild(footer);
footer.appendChild(ladoDerecho);
ladoDerecho.appendChild(heart);
ladoDerecho.appendChild(comment);

footer.appendChild(ladoIzquierdo);
ladoIzquierdo.appendChild(twitter2);
ladoIzquierdo.appendChild(facebook);
ladoIzquierdo.appendChild(bookmark);
