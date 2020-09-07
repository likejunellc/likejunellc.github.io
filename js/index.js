imgArray = [
    "../assets/img/lauryn.jpg",
    "../assets/img/city.jpg",
    "../assets/img/raptors.jpg",
    "../assets/img/walkman.jpg",
    "../assets/img/70.jpg",
]

const slideshow = (imgArray, target) => {
    let counter = 0;
    target = document.querySelector(target);
    window.setInterval(() => {
        target.style.background = `url(${imgArray[counter]})`;
        target.style.backgroundSize = "cover";
        target.style.backgroundPosition = "50% 50%";
        target.style.backgroundRepeat = "none";
        counter++
        if(counter >= imgArray.length) {
            counter = 0;
        }
    }, 233)
}

const changeImg = (target, img) => {
    target = document.querySelector(target);
    console.log(`changing to ${img}`);
    target.style.background = `url(${img})`
}

document.addEventListener('DOMContentLoaded', (e) => {
    slideshow(imgArray, ".background-slides");
})