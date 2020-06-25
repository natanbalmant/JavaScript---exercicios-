function calcula() {
    var um = document.getElementById("um").value;
    var dois = document.getElementById("dois").value;
    var tres = document.getElementById("tres").value;

    var multi = um * (dois * tres)

    document.getElementById("multi").innerHTML = multi.toFixed(2)
}