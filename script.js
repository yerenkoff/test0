let slider = document.getElementsByClassName("slider")[0];
let pics = [];
let imgs, control;

for (let i = 0; i < 13; i++) {
    pics.push("pic" + 3 + ".jpg")
}

for (let i = pics.length - 1; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * (i + 1))
    let temporary = pics[i]
    pics[i] = pics[randomNumber]
    pics[randomNumber] = temporary
}

for (let i = 0; i < 13; i++) {
    let img = document.createElement("img");
    img.src = pics[i]
    img.classList.add("sliderPic")
    slider.appendChild(img)

}

let dist = 0;
let counter = 0;

setTimeout(() => {
    imgs = document.getElementsByClassName("sliderPic");
    control = imgs[0].offsetHeight;
    setInterval(() => {
        dist = dist + 0.1;
        slider.style.transform = "translateY(-" + dist + "px)";
        console.log(dist, counter);
        
        if (dist == control) {
            counter++;
            control = imgs[counter].offsetHeight;
            dist = 0;
            slider.appendChild(imgs[0])
        }
    }, 20)
}, 1000)


