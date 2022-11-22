// setInterval(() => {
//     let shift = 0;
//     for (let i = 0; i < pics.length; i++) {
//         const image = new Image(); 
//         image.onload = drawImageActualSize;
//         image.src = pics[(i + counter)%pics.length];
//         function drawImageActualSize() {
//             let imageHeight = this.height * (canvas.width / this.width);
//           ctx.drawImage(this, 0, dist + shift, canvas.width, imageHeight);
//           shift = shift + imageHeight;
//           if (i == 0) {
//             control = imageHeight;
//           }
//         }
//     }
    
//     dist -= 1;
//     console.log(dist, control);
//     if (dist == -Math.floor(control)) {
//         counter++;
//         dist = 0;
//     }
// }, 10)




// for (let i = pics.length - 1; i > 0; i--) {
//     let randomNumber = Math.floor(Math.random() * (i + 1))
//     let temporary = pics[i]
//     pics[i] = pics[randomNumber]
//     pics[randomNumber] = temporary
// }

// for (let i = 0; i < pics.length; i++) {
//     let img = document.createElement("img");
//     img.src = pics[i % pics.length]
//     img.classList.add("sliderPic")
//     slider.appendChild(img)

// }











// let dist = 0;
// let counter = 0;

// setTimeout(() => {
//     imgs = document.getElementsByClassName("sliderPic");
//     control = imgs[0].offsetHeight;
//     setInterval(() => {
//         slider.style.transform = "translateY(-" + dist + "px)";
//         dist = dist + 1;
//         console.log(dist, control, counter);
//         if (dist == (control - 20)) {
            
//         }
//         if (dist == control) {
//             counter++;
//             control = imgs[counter % imgs.length].offsetHeight;
//             slider.firstElementChild.style.display="none"
//             slider.firstElementChild.style.opacity = 0;
//             temporary.style.opacity = 0;
//             slider.removeChild(temporary)
//             pics.push(pics[0])
//             pics.shift()
//             for (let i = 0; i < pics.length; i++) {
//                 imgs[i].src = pics[i];
//             }
//             dist = 0;
//             setTimeout(() => {
//             let temporary = imgs[0].cloneNode();
//             slider.appendChild(temporary)
//                 temporary.style.opacity = 1;
//             }, 1000);
//         }
//     }, 10)
// }, 1000)