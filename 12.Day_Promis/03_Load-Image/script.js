const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {

    return new Promise((resolve, reject) => {

        const imgNew = document.createElement('img')

        imgNew.src = imgPath
        imgContainer.appendChild(imgNew)

        imgNew.addEventListener("load", function () {
            resolve(imgNew)
        })
        imgNew.addEventListener("error", function () {
            reject(alert("uyarı"))
        })
    });
}



//call createImage with then and catch
let imgLoad;
createImage("./images/img-1.jpg")
    .then((imgNew) => {
        imgLoad = imgNew
        return waitFor(3)
    })
    .then(() => {
        imgLoad.style.display = "none"
        return createImage("./images/img-2.jpg")
    })
    .then((imgNew) => {
        imgLoad = imgNew
        return waitFor(3)
    })
    .then(() => {
        imgLoad.style.display = "none"
        return createImage("./images/img-3.jpg")
    })
    .catch((err) => {
        alert("Resim Yüklenmedi")
    })


// create a wait function
const waitFor = function (second) {

    return new Promise(resolve => {

        setTimeout(resolve, second * 1000)
    });
}