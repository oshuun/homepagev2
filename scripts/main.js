let image = document.querySelector('#profile-pic');

image.onclick = function() {
    let src = image.getAttribute('src');
    let title = document.querySelector('.title');

    if (src === 'images/me-baldy.jpeg') {
        title.textContent = 'WANNA'
        image.setAttribute('src', 'images/wanna.jpg');
    } else {
        title.textContent = 'HOME'
        image.setAttribute('src', 'images/me-baldy.jpeg');
    }
}