import "./styles.css";

const frameFunctions = (function() {
    let next = document.getElementById("next");
    let back = document.getElementById("previous");
    let navigator = document.getElementById("slideNavigator")

    let photoNumber = 1;

    next.addEventListener("click",()=>{

        if (photoNumber<4) {
        let thisSlide = document.getElementById("slide"+photoNumber)
        thisSlide.classList.toggle("hidden");
        thisSlide.classList.toggle("fadeOut");
        photoNumber++;
        let nextSlide = document.getElementById("slide"+photoNumber)
        nextSlide.classList.toggle("hidden");
        nextSlide.classList.toggle("fadeOut");


        if (photoNumber===1) {
            navigator.innerText="| O O O";
        } else if (photoNumber===2) {
            navigator.innerText="O | O O";
        } else if (photoNumber===3) {
            navigator.innerText="O O | O";
        } else {
            navigator.innerText="O O O |"
        }   
    }});

    back.addEventListener("click",()=>{
        if (photoNumber>1) {
        let thisSlide = document.getElementById("slide"+photoNumber)
        thisSlide.classList.toggle("fadeOut");
        thisSlide.classList.toggle("hidden");
        photoNumber--;
        let nextSlide = document.getElementById("slide"+photoNumber)
        nextSlide.classList.toggle("fadeOut"); 
        nextSlide.classList.toggle("hidden");

    if (photoNumber===1) {
        navigator.innerText="| O O O";
    } else if (photoNumber===2) {
        navigator.innerText="O | O O";
    } else if (photoNumber===3) {
        navigator.innerText="O O | O";
    } else {
        navigator.innerText="O O O |"
    }
    }});

    setInterval(function () {
        console.log(photoNumber)
        if (photoNumber<4) {
            let thisSlide = document.getElementById("slide"+photoNumber)
            thisSlide.classList.toggle("hidden");
            thisSlide.classList.toggle("fadeOut");
            thisSlide.classList.toggle("fadeIn");
            photoNumber++;
            let nextSlide = document.getElementById("slide"+photoNumber)
            nextSlide.classList.toggle("hidden");
            nextSlide.classList.toggle("fadeOut");
            nextSlide.classList.toggle("fadeIn");    
    
            if (photoNumber===1) {
                navigator.innerText="| O O O";
            } else if (photoNumber===2) {
                navigator.innerText="O | O O";
            } else if (photoNumber===3) {
                navigator.innerText="O O | O";
            } else {
                navigator.innerText="O O O |"
            }
        } else if (photoNumber===4) {
            let thisSlide = document.getElementById("slide"+photoNumber)
            thisSlide.classList.toggle("hidden");
            thisSlide.classList.toggle("fadeOut");
            thisSlide.classList.toggle("fadeIn"); 
            photoNumber=1;
            let nextSlide = document.getElementById("slide"+photoNumber)
            nextSlide.classList.toggle("hidden");
            nextSlide.classList.toggle("fadeOut");
            nextSlide.classList.toggle("fadeIn"); 
            navigator.innerText="| O O O"; 
        }
    }, 5000);
})();

