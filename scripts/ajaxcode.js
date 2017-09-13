function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xhttp.open("GET", "data.js", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(null);
}

function myFunction(xmlhttp) {

    var dadosJSON;
    try {
        dadosJSON = JSON.parse(xmlhttp.responseText);
    } catch (e) {
        eval("dadosJSON = (" + xmlhttp.responseText + ");");
    }


    var tabela = "";
    tabela = " <table id=tabela>";
    tabela += " <caption>Registros</caption>";
    tabela += " <tr>";
    tabela += "<th> Código </th>";
    tabela += "<th> Nome </th>";
    tabela += "<th> Email </th>";
    tabela += "<th> Fone </th>";
    tabela += "<th> Status </th>";
    tabela += "</tr> ";



    var linhas;

    for (var i = 0; i < dadosJSON.length; i++) {
        var obj = dadosJSON[i];
        var novaLinha;

        novaLinha = "<tr>";

        novaLinha += "<td>";
        novaLinha += obj.codigo;
        novaLinha += "</td>";

        novaLinha += "<td>";
        novaLinha += obj.nome;
        novaLinha += "</td>";

        novaLinha += "<td>";
        novaLinha += obj.email;
        novaLinha += "</td>";

        novaLinha += "<td>";
        novaLinha += obj.fone;
        novaLinha += "</td>";

        novaLinha += "<td>";
        novaLinha += obj.status;
        novaLinha += "</td>";

        novaLinha += "</tr>";

        if (linhas == undefined) {
            linhas = novaLinha;
        } else {
            linhas += novaLinha;
        }


    }
    tabela += linhas;
    tabela += "</table>";

    document.getElementById("tabela").innerHTML = tabela;


}

/*
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}
*/