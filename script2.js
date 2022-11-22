let slider = document.getElementsByClassName("slider")[0];
let pics = [];
let imgs, control;


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let dist = 0;
let counter = 0;
let images = [];
let shift = 0;
let canvasHeight = 0;
for (let i = 0; i < 5; i++) {
    pics.push("img" + i + ".jpg")
    const image = new Image();
    image.src = "img" + i + ".jpg";
    images.push(image);
    image.onload = function () {
        // ctx.drawImage(this, 0, dist + shift, canvas.width, imageHeight);
        let imageHeight = this.height * (canvas.width / this.width);
        counter++;
        canvasHeight += imageHeight;
        console.log(counter);
        ctx.canvas.height = canvasHeight
        if (counter == 1) {
            control = this.height;
        }
        if (counter == 5) {
            counter = 0;
            loadImages()
        }
    }
}

function loadImages() {

    for (let i = 0; i < 5; i++) {
        let imageHeight = images[i].height * (canvas.width / images[i].width);
        ctx.drawImage(images[i], 0, shift, canvas.width, imageHeight);
        shift = shift + imageHeight;
    }
}

setInterval(() => {
    dist += 1;
    // console.log(dist, control);
    canvas.style.transform = "translateY(-" + dist + "px)";
    if (Math.floor(dist) == Math.floor(control)) {
        dist = 0;
        shift = 0;
        counter++;
        for (let i = 0; i < pics.length; i++) {
            // images[i].src = pics[(i + counter) % pics.length];
            let imageHeight = images[(i + counter) % pics.length].height * (canvas.width / images[(i + counter) % pics.length].width);
            ctx.drawImage(images[(i + counter) % pics.length], 0, shift, canvas.width, imageHeight);
            shift = shift + imageHeight;
            if (i == 0) {
                control = imageHeight;
                console.log(control);
            }
        }
    }
}, 10)


// for (let i = pics.length - 1; i > 0; i--) {
//     let randomNumber = Math.floor(Math.random() * (i + 1))
//     let temporary = pics[i]
//     pics[i] = pics[randomNumber]
//     pics[randomNumber] = temporary
// }




// setInterval(() => {
    // let shift = 0;
    // for (let i = 0; i < pics.length; i++) {

    //     images[i].src = pics[(i + counter) % pics.length];
    //     let imageHeight = images[i].height * (canvas.width / images[i].width);
    //     ctx.drawImage(images[i], 0, dist + shift, canvas.width, imageHeight);
    //     shift = shift + imageHeight;

    // }
// }, 0)



// setInterval(() => {
//     let shift = 0;
//     for (let i = 0; i < pics.length; i++) {

//         images[i].src = pics[(i + counter) % pics.length];
//         let imageHeight = images[i].height * (canvas.width / images[i].width);
//         ctx.drawImage(images[i], 0, dist + shift, canvas.width, imageHeight);
//         shift = shift + imageHeight;
//         if (i == 0) {
//             control = imageHeight;
//         }
//     }

//     dist -= 0.1;
//     console.log(dist, control);
//     if (Math.floor(dist) == -Math.floor(control)) {
//         counter++;
//         dist = 0;
//     }
// }, 0)




