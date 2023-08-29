// arrays
let images = ['img/1.webp.jpg', 'img/2.webp.jpg', 'img/3.webp.jpg', 'img/4.webp.jpg', 'img/5.webp.jpg', 'img/6.webp.jpg', 'img/7.webp.jpg', 'img/8.webp.jpg', 'img/9.webp.jpg',
    'img/10.webp.jpg', 'img/11.webp.jpg'];
// variables


function load() {
    let setImages = document.getElementById('mainImgContainer');

    for (i = 0; i < images.length; i++) {
        // const img = images[i];


        setImages.innerHTML += /*html*/`
            <div class="imgBox">
                <img src="${images[i]}">
            </div>
        `;
    }
}