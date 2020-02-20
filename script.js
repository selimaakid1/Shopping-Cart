var plus = document.querySelectorAll(".fa-plus-circle");
var minus = document.querySelectorAll(".fa-minus-circle");
var times = document.querySelectorAll(".fa-times");
var hearts = document.querySelectorAll(".fa-heart");
var somme = document.querySelector(".total");



plus.forEach(elem => {
    elem.addEventListener("click", function(){
        elem.nextElementSibling.innerHTML++
        let price = parseInt(elem.parentElement.nextElementSibling.childNodes[1].innerHTML)
        somme.innerHTML = parseInt(somme.innerHTML) + price
       
       

    })
})
minus.forEach(elem => {
    elem.addEventListener("click", function(){
        if(elem.previousElementSibling.innerHTML > 0){
            elem.previousElementSibling.innerHTML--
            let price = parseInt(elem.parentElement.nextElementSibling.childNodes[1].innerHTML)
            somme.innerHTML = parseInt(somme.innerHTML) - price
        }
    })
})

times.forEach(elem => {
    elem.addEventListener("click", function(){
        elem.parentElement.parentElement.remove()
    })
})
hearts.forEach(elem => {
    elem.addEventListener("click", function(){
        elem.classList.toggle("red-heart")
    })
})