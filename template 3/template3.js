window.onscroll = function () {
    //stats
    if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));    
        }
        started =true
    } 
    //slills 
    if (window.scrollY >= section.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    //scroll to top
    if (this.scrollY >= 6500) {
        spanUp.classList.add("show");}
    else {spanUp.classList.remove("show")}
};
//start stats
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;// function started ? no



function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}
//end stats
// start scroll to Up

let spanUp =document.querySelector("span.up")

spanUp.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
};



// end scroll to Up
//start  skills
let section = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");


//end skills
//start events
    // the end of the year date to conutdown to 
    //1000 milliseconds = 1 second
    let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
    let counter = setInterval(() => {
        //get date now
        let dateNow = new Date().getTime();
        //find the date difference between now and count down date
        let dateDiff = countDownDate - dateNow;
        
        //get time unites
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    
        document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        
        if (dateDiff < 0) {
            clearInterval(counter)
        }
    }, 1000);
//end events
