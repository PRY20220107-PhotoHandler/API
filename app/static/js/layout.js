function getResult() {
    var fileInput = document.getElementById('imageInput');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.png)$/i;
    var obj = {};
    if (!allowedExtensions.exec(filePath)) {
        alert('Debe subir una imagen con el formato jpg o png');
        fileInput.value = '';
    } else {
        var e = document.getElementById("textInput");
        var strText = e.value;
        if (strText == "") {
            alert('Debe ingresar un texto para modificar la imagen');
            return;
        }
        var formdata = new FormData();
        formdata.append("image", fileInput.files[0], fileInput.value);
        formdata.append("text", strText);
        var requestOptions = { method: 'POST', body: formdata, redirect: 'follow' };
        fetch("http://a1ae-34-90-22-27.ngrok.io/edit", requestOptions)
            .then(response => response.text())
            .then(result => showResult(result))
            .catch(error => console.log('error', error));
        document.getElementById("loading-screen").style.display = "block";
        document.getElementById("photo-form").style.display = "none";
    }
}

function showResult(obj) {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("resultImage").src = JSON.parse(obj).message;
    document.getElementById("results").style.display = "block";
}