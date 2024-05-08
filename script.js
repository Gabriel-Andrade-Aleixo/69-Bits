window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('scrollh', window.scrollY > 100)
})

window.onload = function() {
    window.scrollTo(0, 0);
}