var contenedor= document.getElementsByClassName("container")[0];
var cabecera = document.createElement("div");
cabecera.setAttribute("id","cabecera");
var twitter = document.createElement("span");
twitter.setAttribute("class","icon-twitter" );




var informacion = document.createElement("div");
informacion.setAttribute("id","informacion");

var footer = document.createElement("div");
footer.setAttribute("id","footer");

contenedor.appendChild(cabecera);
contenedor.appendChild(informacion),
contenedor.appendChild(footer);
cabecera.appendChild(twitter);
