const button = document.querySelector(".button");
const urlInput = document.querySelector("#url");
const fileInput = document.querySelector(".file"); // Foydalanuvchi yuklaydigan fayl
function Qrcode(url, color, backgroundColor, isDownload, insideImg, width = 280, height = 280) {
    const qrCode = new QRCodeStyling({
        width: width,
        height: height,
        type: "svg",
        data: url,
        image: insideImg, // Rasm kiritiladi
        dotsOptions: {
            color: color,
            type: "rounded"
        },
        backgroundOptions: {
            color: backgroundColor,
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 10
        }
    });
    document.getElementById("canvas").innerHTML = "";
    qrCode.append(document.getElementById("canvas"));

    if (isDownload) {
        qrCode.download({ name: "qr", extension: "svg" });
    }
};
Qrcode("https://qrcode-generator-xi-one.vercel.app/", "#000", "#fff", false, "../img/scanme.jpg");
// ** Asosiy Generate tugmasi bosilganda**
button.addEventListener("click", function () {
    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imageUrl = event.target.result;
            Qrcode(urlInput.value, "#000", "#fff", false, imageUrl);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        Qrcode(urlInput.value, "#000", "#fff", false, "../img/logo-big.png");
    }
});
// ** Oq rang tugmasi bosilganda**
document.querySelector(".white").addEventListener("click", function () {
    document.querySelector(".black").style.border = "none";
    document.querySelector(".white").style.border = "2px solid blue";
    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imageUrl = event.target.result;
            if (window.screen.availWidth <= 380) {
                Qrcode(urlInput.value, "#fff", "#000", false, imageUrl, 200, 200);
            } else {
                Qrcode(urlInput.value, "#fff", "#000", false, imageUrl, 280, 280);
            }
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        if (window.screen.availWidth <= 380) {
            Qrcode(urlInput.value, "#fff", "#000", false, "../img/logo-big.png", 200, 200);
        } else {
            Qrcode(urlInput.value, "#fff", "#000", false, "../img/logo-big.png", 280, 280);
        }
    }
    document.querySelector(".main_box_qrcode").style.backgroundColor = "#000";
});
// ** Qora rang tugmasi bosilganda**
document.querySelector(".black").addEventListener("click", function () {
    document.querySelector(".black").style.border = "2px solid blue";
    document.querySelector(".white").style.border = "none";
    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imageUrl = event.target.result;
            if (window.screen.availWidth <= 380) {
                Qrcode(urlInput.value, "#000", "#fff", false, imageUrl, 200, 200);
            } else {
                Qrcode(urlInput.value, "#000", "#fff", false, imageUrl, 280, 280);
            }
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        if (window.screen.availWidth <= 380) {
            Qrcode(urlInput.value, "#000", "#fff", false, "../img/logo-big.png", 200, 200);
        } else {
            Qrcode(urlInput.value, "#000", "#fff", false, "../img/logo-big.png", 280, 280);
        }
    }
    document.querySelector(".main_box_qrcode").style.backgroundColor = "#fff";
});
// ** QR kodni yuklab olish**
document.querySelector(".download").addEventListener("click", function () {
    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imageUrl = event.target.result;
            Qrcode(urlInput.value, "#000", "#fff", true, imageUrl);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        Qrcode(urlInput.value, "#000", "#fff", true, "../img/logo-big.png");
    }
});
window.addEventListener("resize", function () {
    if (window.screen.availWidth <= 380) {
        Qrcode("https://qrcode-generator-xi-one.vercel.app/", "#000", "#fff", false, "../img/scanme.jpg", 200, 200);
    } else {
        Qrcode("https://qrcode-generator-xi-one.vercel.app/", "#000", "#fff", false, "../img/scanme.jpg", 280, 280);
    }
});
if (window.screen.availWidth <= 380) {
    Qrcode("https://qrcode-generator-xi-one.vercel.app/", "#000", "#fff", false, "../img/scanme.jpg", 200, 200);
} else {
    Qrcode("https://qrcode-generator-xi-one.vercel.app/", "#000", "#fff", false, "../img/scanme.jpg", 280, 280);
}