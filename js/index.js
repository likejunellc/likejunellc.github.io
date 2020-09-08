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
    "nyc.jpg",
    "bubbles.jpg",
    "vintage.jpg",
]

const siteURL = "https://likejunellc.github.io/like-june"
//const siteURL = ".."

const slideshow = (imgArray, target) => {
    let counter = 0;
    target = document.querySelector(target);
    window.setInterval(() => {
        target.style.background = `url(${siteURL}/assets/img/slides/${imgArray[counter]})`;
        target.style.backgroundSize = "cover";
        target.style.backgroundPosition = "50% 50%";
        target.style.backgroundRepeat = "none";
        counter++
        if(counter >= imgArray.length) {
            counter = 0;
        }
    }, 500)
}

const prefetch = async (imgArray) => {
    imgArray.forEach(img => {
        const image = new Image();
        image.onload = () => {
            console.log(image)
            return
        };
        image.src = `${siteURL}/assets/img/slides/${img}`
    })
}

document.addEventListener('DOMContentLoaded', async (e) => {
    await prefetch(imgArray);
    slideshow(imgArray, ".background-slides");
})