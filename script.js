let currentIndex = 0;
const images = document.querySelectorAll('.banner-images img');

function toggleMenu() {
    const popup = document.getElementById('popupMenu');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    document.querySelector('.closeIcon').style.display = popup.style.display === 'block' ? 'block' : 'none';
    document.querySelector('.menuIcon').style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function closeMenu() {
    document.getElementById('popupMenu').style.display = 'none';
    document.querySelector('.closeIcon').style.display = 'none';
    document.querySelector('.menuIcon').style.display = 'block';
}

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
images[currentIndex].classList.add('active'); // Show the first image