function getResult() {
    var e = document.getElementById("typeSelect");
    var strType = e.value;
    window.location.href = "http://127.0.0.1:5000/result/"+strType;
}