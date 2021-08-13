const progressBar = document.getElementsByClassName('progress__bar');

window.addEventListener('scroll', () => {
    const windowYPos = window.pageYOffset;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowYPos / height) * 40;
    const width = 40 - scrolled;
    progressBar[0].style.width = width + "%";
    progressBar[1].style.width = width + "%";
});

console.log(windowYPos);
console.log(typeof(windowYPos));
console.log(height);
console.log(width);
console.log(typeof(height));
console.log("hello");
console.log(scrolled);
