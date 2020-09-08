imgArray = [
    "lauryn.jpg",
    "walkman.jpg",
    "raptors.jpg",
    "rocket.jpg",
    "city.jpg",
    "disco.jpg",
    "coral.jpg",
    "einstein.jpg",
    "jayz.jpg",
    "trees.jpg",
    "knight.jpg",
    "city2.jpg",
    "missy.jpg",
    "beatles.jpg",
    "ratm.jpg",
    "sinatra.jpg",
    "bubbles.jpg",
    "vintage.jpg",
]

const siteURL = "https://likejunellc.github.io/like-june"

const slideshow = (imgArray, target) => {
    let counter = 0;
    target = document.querySelector(target);
    window.setInterval(() => {
        target.style.background = `url(../assets/img/slides//${imgArray[counter]})`;
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