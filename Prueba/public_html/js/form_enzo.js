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
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML; 

     document.write("<table border='1'>");
    var x=xmlDoc.getElementsByTagName("CD");
    document.write("<tr><td>");
    document.write("ARTISTA");
    document.write("</td><td>");
    document.write("TITULO");
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
      document.write("</td><td>");
      document.write(x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue);
      document.write("</td><td>");
      document.write(x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue);
      document.write("</td><td>");
      document.write(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
      document.write("</td><td>");
      document.write(x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue);
    }
    document.write("</table>");
}

function desplegar(tabla_a_desplegar,estadoT, estadoTfila) {
    
    //https://dl.dropboxusercontent.com/u/26635239/musica.xml
    
    var tablA = document.getElementById(tabla_a_desplegar);
    var estadOt = document.getElementById(estadoT);
    var fila = document.getElementById(estadoTfila);

    switch(tablA.style.display) {
        case "none":
            tablA.style.display = "block";
            estadOt.innerHTML = "Ocultar";
            fila.innerHTML = "";
            fila.innerHTML = " La fila de id: "+fila.id+". Contiene: "+fila.innerHTML+" :: "+fila.style.background;
            break;
        default:
            tablA.style.display = "none";
            estadOt.innerHTML = "Mostrar"
            break;
        }
}

function mostrarXmlDesplegable(){//Agregado para diferenciar las funciones
    
    //Obtener el valor de un campo de un tag de XML (Fuente: http://www.w3schools.com/dom/dom_nodes_get.asp)
    //x[i].getAttribute('category')
    
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    }else{// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.open("GET","https://dl.dropboxusercontent.com/u/26635239/musicaEnzo.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML; 
    
    var x=xmlDoc.getElementsByTagName("GENERO");
    
    for (i=0;i<x.length;i++){
        
        var numEstadoTabla = i + 1;
        var nomGenero = x[i].getAttribute('name');
        
        var tdInicio = "<td><div align='center' id='estado";
        var tdMedio = "' onClick='desplegar('tabla_a_desplegar";
        var tdMedio1 = "','estado";
        var tdMedio2 = "', 'estadoTfila')' style='background: #AEE756; cursor: pointer;'>";
        var tdFin = "</div></td>";
        
        var tdConcatenado = tdInicio + numEstadoTabla + tdMedio + numEstadoTabla + tdMedio1 + numEstadoTabla + tdMedio2 + nomGenero + tdFin;
        
        document.write("<table border='0' width='440'>");
        document.write("<tr>");
        document.write(tdConcatenado);
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td colspan='2'>");
        
        //ACA DEBERIA PONER EL OTRO NIVEL
        //var y=xmlDoc.getElementsByTagName("ARTISTA");
        var y = xmlDoc.getElementsByTagName("GENERO");
        
        for (i=0;i<x.length;i++){
            alert(y[i].childNodes[0].nodeValue);
            //document.write(y[i].childNodes[0].nodeValue);
            //document.write("<br>");
        }
        
        
//            <table border="1" id="tabla_a_desplegar2" style="display: none;">
//                <tr>
//                    <td id="estadoTfila2" style=" background: #E9FAD0">Esta es la segunda tabla</td>
//                </tr>
//            </table>
//            

        document.write("</td>");
        document.write("</tr>");
        document.write("</table>");
        
        var tableInicio = "<table id='tabla_a_desplegar";
        var tableFin = "' style='display:none;'>";
        tableConcatenado = tableInicio + numEstadoTabla + tableFin;
        
        document.write(tableConcatenado);
        document.write("<tr>");
        
        var tdSubTablaInicio = "<td id='estadoTfila";
        var tdSubTablaFin = "' style=' background: #E9FAD0'>Primera Tabla</td>";
        var SubConcat = tdSubTablaInicio + numEstadoTabla + tdSubTablaFin;
        
        document.write(SubConcat);
        document.write("</tr>");
        document.write("</table>");        
    }
    
}
