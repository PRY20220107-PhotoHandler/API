function getResult() {
    var fileInput = document.getElementById('imageInput');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert('Debe subir una imagen con el formato jpg, jpeg, png o gif');
        fileInput.value = '';
    } else {
        var e = document.getElementById("typeSelect");
        var strType = e.value;
        window.location.href = "http://127.0.0.1:5000/result/"+strType;
    }
}