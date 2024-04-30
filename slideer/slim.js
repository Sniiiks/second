document.querySelectorAll('.a_img_sector8 img').forEach(img => {
    img.onclick = () => {
        event.preventDefault();
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src');

    }

});

// for some reason this doesn't work properly and can't close the window by clicking on the X button,
// so i need your assistance in fixing this issue, i will apprechiate this issue that in advance mentor! 

/* document.querySelector('.pop-up-overlay').addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up-overlay')) {
        document.querySelector('.pop-up-overlay').style.display = 'none';
    }
});   */

var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

 
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});