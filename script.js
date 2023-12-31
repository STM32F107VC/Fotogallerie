/*  Made by: Sydney Bär
    Project completed on: 31.08.2023
    Project changed on: ...
    Purpose: learning
*/

// array
let images = ['img/1.webp.jpg', 'img/2.webp.jpg', 'img/3.webp.jpg', 'img/4.webp.jpg', 'img/5.webp.jpg', 'img/6.webp.jpg', 'img/7.webp.jpg', 'img/8.webp.jpg', 'img/9.webp.jpg',
    'img/10.webp.jpg', 'img/11.webp.jpg', 'img/12.webp.jpg', 'img/13.webp.jpg', 'img/14.webp.jpg', 'img/15.webp.jpg', 'img/16.webp.jpg', 'img/17.webp.jpg', 'img/18.webp.jpg', 'img/19.webp.jpg', 'img/20.webp.jpg', 'img/21.webp.jpg', 'img/22.webp.jpg', 'img/23.webp.jpg', 'img/24.webp.jpg', 'img/25.webp.jpg', 'img/26.webp.jpg', 'img/27.webp.jpg', 'img/28.webp.jpg', 'img/29.webp.jpg', 'img/30.webp.jpg', 'img/31.webp.jpg'];

// global variables 
let i;


// Load all pictures out of array
function load() {
    let setImages = document.getElementById('ImgContainer');
    setImages.innerHTML = '';// Clear containe
    setImages.classList.add('mainImgContainer'); // add class to ImgContainer
    setImages.classList.remove('increaseImg'); // remove class from ImgContainer

    for (i = 0; i < images.length; i++) {
        const img = images[i];
        setImages.innerHTML += /*html*/`
            <div onclick="openImg(${i})" class="imgBox">
                <img src="${img}">
            </div>
        `;
    }
}

// When clicked on img, show only clicke img
function openImg(i) {
    console.log('Du bist in die openImg() Funktion eingetreten');
    let setImages = document.getElementById('ImgContainer');
    setImages.innerHTML = ''; // Clear container
    setImages.classList.remove('mainImgContainer');
    setImages.classList.add('increaseImg');
    setImages.innerHTML = templateRender(i);
    // checkKeyEvent(i);
}

// function checkKeyEvent(i) {
//     document.addEventListener("keydown", (e) => {
//         e = e || window.event;
//         if (openImg(i)) {
//             if (e.key === "ArrowLeft") {
//                 console.log("left arrow pressed");
//                 previousImg(i);
//             } else if (e.key === "ArrowRight") {
//                 console.log("right arrow pressed");
//                 nextImg(i);
//             }
//         }
//     });
// }

// Render the popUpImg div into the ImgContainer div
function templateRender(i) {
    return /*html*/`
    <div class="popUpImg">
        <img class="img back" onclick="load()" src="img/icons8-back-50.png" alt="back">
        <img class="img delete" onclick="deleteImg(${i})" src="img/delete_FILL0_wght400_GRAD0_opsz48.png" alt="delete">
        <div class="popUpImg-Subdiv">
            <img id="previousPicture" onclick="previousImg(${i})" class="img" src="img/icons8-back-26.png" alt="previous image">
            <img id="mainImg" src="${images[i]}">
            <img id="nextPicture" onclick="nextImg(${i})" class="img"src="img/icons8-forward-26.png" alt="next image">
        </div>
    </div>
    `;
}

// Go to previous picture
function previousImg(i) {
    console.log('Du bist in die previousImg() Funktion eingetreten');
    if (!(i <= (images.length - images.length))) { // Check that i isn't smaller than array length
        i -= 1;
        openImg(i);

        if (i === (images.length - images.length)) {
            removeArrowLeft('leftArrow');
        }
    }
}

// Go to next picture
function nextImg(i) {
    console.log('Du bist in die nextImg() Funktion eingetreten');
    if (i < images.length - 1) { // Check that i isn't bigger than array length 
        i += 1;
        openImg(i);

        if (i === images.length - 1) {
            removeArrowRight('rightArrow');
        }
    }
}

// Hide left arrow if first picture is reached
function removeArrowLeft(leftArrow) {
    console.log('Du bist in die removeArrowLeft() Funktion eingetreten');
    let arrowBehindPrevious = document.getElementById('previousPicture');
    if (leftArrow) {
        arrowBehindPrevious.classList.add('hideArrow');
    }
}

// Hide right arrow if last picture is reached
function removeArrowRight(rightArrow) {
    console.log('Du bist in die removeArrowRight() Funktion eingetreten');
    let arrowBehindNext = document.getElementById('nextPicture');
    if (rightArrow) {
        arrowBehindNext.classList.add('hideArrow');
    }
}

// Delete an img
function deleteImg(i) {
    console.log('Du bist in die deleteImg() Funktion eingetreten');
    if (!(i < 0)) {
        images.splice(i, 1);
        previousImg(i);
        if (i == 0) { // If the first picture ist deleted, render new
            console.log('Letztes Bild gelöscht, neu rendern');
            load();
        }
    } else {
        openImg();
        console.log('Es wurden alle Bilder gelöscht');
    }
}
