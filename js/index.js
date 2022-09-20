imgArray = [
    "lauryn.jpg",
    "walkman.jpg",
    "raptors.jpg",
    "rocket.jpg",
    "city.jpg",
    "disco.jpg",
    "coral.jpg",
    "einstein.jpg",
    "trees.jpg",
    "city2.jpg",
    "missy.jpg",
    "beatles.jpg",
    "ratm.jpg",
    "sinatra.jpg",
    "nyc.jpg",
    "jayz.jpg",
    "bubbles.jpg",
    "vintage.jpg",
]

const siteURL = window.location.origin

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

const renderDate = (target) => {
    const d = new Date();
    document.querySelector(target).innerHTML = d.getFullYear();
}
document.addEventListener('DOMContentLoaded', async (e) => {
    await prefetch(imgArray);
    renderDate(".footer-date");
    slideshow(imgArray, ".background-slides");
})