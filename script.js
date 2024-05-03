window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('scrollh', window.scrollY > 100)
})