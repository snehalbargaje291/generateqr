
    function generateQR() {
      let qrImg = document.getElementById('qrImg');
      let qrText = document.getElementById('qrText').value;
      let imgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
      qrImg.src = imgSrc;
    }
