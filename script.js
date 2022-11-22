let slider = document.getElementsByClassName("slider")[0];
let pics = [];
let dist = 0;
let shift = 0;

for (let i = 0; i < 5; i++) {
    pics.push("img"+i+".jpg")
}

for (let i = pics.length - 1; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * (i + 1))
    let temporary = pics[i]
    pics[i] = pics[randomNumber]
    pics[randomNumber] = temporary
}

for (let i = 0; i < 10; i++) {
    const image = new Image();
    image.src = pics[i%5];
    slider.appendChild(image)
    image.onload = function () {
        if (i < 5) {
            shift += image.offsetHeight;
        }
    }
}

window.onresize = () => {
    dist = 0;
    shift = 0;
    let images = slider.getElementsByTagName("img");
    for (let i = 0; i < 5; i++) {
        shift += images[i].offsetHeight;
    }
    slider.style.transform = "translateY(-" + dist + "px)";
}

function repeatOften() {
    dist += 0.5;
    if (dist >= shift) {
        dist = 0;
    }
    slider.style.transform = "translateY(-" + dist + "px)";
    requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);

