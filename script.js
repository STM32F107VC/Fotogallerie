// arrays
let images = ['img/1.webp.jpg', 'img/2.webp.jpg', 'img/3.webp.jpg', 'img/4.webp.jpg', 'img/5.webp.jpg', 'img/6.webp.jpg', 'img/7.webp.jpg', 'img/8.webp.jpg', 'img/9.webp.jpg',
    'img/10.webp.jpg', 'img/11.webp.jpg', 'img/12.webp.jpg', 'img/13.webp.jpg', 'img/14.webp.jpg', 'img/15.webp.jpg', 'img/16.webp.jpg', 'img/17.webp.jpg', 'img/18.webp.jpg', 'img/19.webp.jpg'];

// variables


function load() {
    let setImages = document.getElementById('mainImgContainer');
    setImages.innerHTML = '';// Clear containe
    setImages.classList.remove('addBackgroundColor');

    for (let i = 0; i < images.length; i++) {
        const img = images[i];

        setImages.innerHTML += /*html*/`
            <div onclick="openImg(${i})" class="imgBox">
                <img src="${img}">
            </div>
        `;
    }
}


function openImg(i) {
    console.log('Eingetreten in die openImg() Funktion');
    let setImages = document.getElementById('mainImgContainer');
    setImages.innerHTML = ''; // Clear container
    setImages.classList.add('addBackgroundColor');

    setImages.innerHTML = /*html*/`
        <div id="mainImgContainer">
            <img class="img" onclick="load()" src="img/icons8-back-50.png" alt="back">
            
            
            <div class="popUpImg">
                <img src="${images[i]}">    
                <img class="img" src="img/icons8-back-26.png" alt="previous back">
            <img class="img"src="img/icons8-forward-26.png" alt="next picture">
            </div>
        </div>
    `;
}