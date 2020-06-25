function calcula() {
    var um = document.getElementById("um").value;

    var dois = document.getElementById("dois").value;

    var area = um * dois

    document.getElementById("area").innerHTML = area.toFixed(2)
}