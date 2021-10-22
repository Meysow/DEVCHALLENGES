const imgArray = new Array();
const lightbox = document.querySelector('.lightbox');

let pic = document.querySelector('.pic');

let currentIndex;

function imgSelect (image) {
    pic.src = image.src
    currentIndex = imgArray.indexOf(image)
}

const showImage = (image) => {
    lightbox.classList.add('visible')
    imgSelect(image)
}

const closeLightBox = () => {
    lightbox.classList.remove('visible')
}

const showNext = () => {
    if(currentIndex >= imgArray.length - 1) {
        pic.src = imgArray[0].src
        currentIndex = 0;
    }
    else {
        let nextImage = imgArray[currentIndex + 1]
        imgSelect(nextImage);
    }
}

const showPrev = () => {
    if(currentIndex <= 0) {
        pic.src = imgArray[5].src
        currentIndex = 5;
    }
    else {
        let nextImage = imgArray[currentIndex - 1]
        imgSelect(nextImage);
    }
}

imgArray[0] = new Image();
imgArray[0].src = './img/photo1.jpg';

imgArray[1] = new Image();
imgArray[1].src = './img/photo2.jpg';

imgArray[2] = new Image();
imgArray[2].src = './img/photo3.jpg';

imgArray[3] = new Image();
imgArray[3].src = './img/photo4.jpg';

imgArray[4] = new Image();
imgArray[4].src = './img/photo5.jpg';

imgArray[5] = new Image();
imgArray[5].src = './img/photo6.jpg';
