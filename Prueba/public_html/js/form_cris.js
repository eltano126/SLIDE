/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function mostrarXml(){ //Agregado para diferenciar las funciones
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.open("GET","https://dl.dropboxusercontent.com/u/26635239/ejemlpoCd.xml",false);
    //xmlhttp.open("GET","ftp://enzocris.slide.com.ar@ftp.slide.com.ar/XML/ehs_nuevo.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML; 

     document.write("<table border='1'>");
    var x=xmlDoc.getElementsByTagName("CD");
    document.write("<tr><td>");
    document.write("ARTISTA");
    document.write("</td><td>");
    document.write("COUNTRY");
    document.write("</td><td>");
    document.write("COMPANY");
    document.write("</td><td>");
    document.write("PRICE");
    document.write("</td><td>");
    document.write("YEAR");
    for (i=0;i<x.length;i++)
      { 
      document.write("<tr><td>");
      document.write(x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue);
      document.write("</td><td>");
      document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
      document.write("<td></td>");
      document.write(x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue);
      document.write("<td></td>");
      document.write(x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue);
      document.write("<td></td>");
      document.write(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
      document.write("<td></td>");
      document.write(x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue);
    }
    document.write("</table>");
}