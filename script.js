let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQR(){

    // If there any text of value check.
    if(qrText.value.length > 0){
        qrImage.src = "Your Api comes Here" + qrText.value;
        imgBox.classList.add('show-img');
    }

    // Error animation when we click on the QR generate button without any text to url.
    else{
        qrText.classList.add('error');
        setTimeout(() =>{
            qrText.classList.remove('error');
        },1000);
    }
}