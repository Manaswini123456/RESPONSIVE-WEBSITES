document.addEventListener("DOMContentLoaded",() =>{
    function counter(id,start,end,duration){
        let object = document.getElementById(id),
        current = start,
        range = end-start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval( () =>{
            current += increment;
            object.textContent = current;
            if (current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,1267,3000);
    counter("count2",100,5786,2500);
    counter("count3",0,1672,5090);
    counter("count4",0,1789,3077);
})

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else{
        nav.classList.add("scroll-on");
    }
}

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a) {
    a.addEventListener('click',function(){
        navCollapse.classList.remove("show");
    })
})