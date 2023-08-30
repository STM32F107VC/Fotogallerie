// array
let images = ['img/1.webp.jpg', 'img/2.webp.jpg', 'img/3.webp.jpg', 'img/4.webp.jpg', 'img/5.webp.jpg', 'img/6.webp.jpg', 'img/7.webp.jpg', 'img/8.webp.jpg', 'img/9.webp.jpg',
    'img/10.webp.jpg', 'img/11.webp.jpg', 'img/12.webp.jpg', 'img/13.webp.jpg', 'img/14.webp.jpg', 'img/15.webp.jpg', 'img/16.webp.jpg', 'img/17.webp.jpg', 'img/18.webp.jpg', 'img/19.webp.jpg'];

// variables
let i;

// Load all pictures out of array
function load() {
    let setImages = document.getElementById('ImgContainer');
    setImages.innerHTML = '';// Clear containe
    setImages.classList.add('mainImgContainer');
    setImages.classList.remove('increaseImg');

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
}

// Render the popUpImg div into the ImgContainer div
function templateRender(i) {
    return /*html*/`
    <div class="popUpImg">
        <img class="img back" onclick="load()" src="img/icons8-back-50.png" alt="back">
        <img id="previousPicture" onclick="previousImg(${i})" class="img" src="img/icons8-back-26.png" alt="previous back">
        <img src="${images[i]}">
        <img id="nextPicture" onclick="nextImg(${i})" class="img"src="img/icons8-forward-26.png" alt="next picture">
    </div>
`;
}

// Go to previous picture
function previousImg(i) {
    console.log('Du bist in die previousImg() Funktion eingetreten');
    if (!(i < 1)) { // Check that i isn't smaller than array length
        i -= 1;
        openImg(i);

        if (i == 0) {
            removeArrowLeft('leftArrow');
            // templateRender();
        }
    }
}

// Go to next picture
function nextImg(i) {
    console.log('Du bist in die nextImg() Funktion eingetreten');
    if (!(i > 17)) { // Check that i isn't bigger than array length 
        i += 1;
        openImg(i);

        if (i == 18) {
            removeArrowRight('rightArrow');
            // templateRender();
        }
    }
}

// Hide left arrow if first picture is reached
function removeArrowLeft(leftArrow) {
    let arrowBehindPrevious = document.getElementById('previousPicture');
    if (leftArrow) {
        arrowBehindPrevious.classList.add('hideArrow');
    }
}

// Hide right arrow if last picture is reached
function removeArrowRight(rightArrow) {
    let arrowBehindNext = document.getElementById('nextPicture');
    if (rightArrow) {
        arrowBehindNext.classList.add('hideArrow');
    }
}