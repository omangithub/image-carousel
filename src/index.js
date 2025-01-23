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
        thisSlide.classList.toggle("faceOut");
        photoNumber++;
        let nextSlide = document.getElementById("slide"+photoNumber)
        nextSlide.classList.toggle("hidden");
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
    }});

    back.addEventListener("click",()=>{
        if (photoNumber>1) {
        let thisSlide = document.getElementById("slide"+photoNumber)
        thisSlide.classList.toggle("faceOut");
        thisSlide.classList.toggle("hidden");
        photoNumber--;
        let nextSlide = document.getElementById("slide"+photoNumber)
        nextSlide.classList.toggle("fadeIn"); 
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
            thisSlide.classList.toggle("faceOut");
            photoNumber++;
            let nextSlide = document.getElementById("slide"+photoNumber)
            nextSlide.classList.toggle("hidden");
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
            thisSlide.classList.toggle("faceOut");
            photoNumber=1;
            let nextSlide = document.getElementById("slide"+photoNumber)
            nextSlide.classList.toggle("hidden");
            nextSlide.classList.toggle("fadeIn");
            navigator.innerText="| O O O"; 
        }
    }, 5000);
})();

