const imgConEl = document.querySelector('.image-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let x = 0;
let timer;

prevBtn.addEventListener('click', () => {
    x += 45;
    clearTimeout(timer);
    updateGallery();
});

nextBtn.addEventListener('click', () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
});


function updateGallery () {
    imgConEl.style.transform = `perspective(800px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 3000);
}

updateGallery();