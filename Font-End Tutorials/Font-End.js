//window.onscroll



window.onscroll = function () {
    // section two (7al2a 2)
    if (window.scrollY >= sectionTwo.offsetTop) {
        if (!started) {
            numsTwo.forEach((num) => startCount(num));    
        }
        started =true
    }  
    // section three (7al2a 1)
    if (window.scrollY >= section.offsetTop - 250) {
        console.log("Reached Section Three");
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    //(7al2a 15 (Scroll To Top))
    if (this.scrollY >= 6500) {
        span.classList.add("show");}
    else {
        span.classList.remove("show");
        }
    };
};



// end window.onscroll
// start section one  (7al2a 3)



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



// end section one (7al2a 3)
/* start section two (7al2a 2)*/



let numsTwo = document.querySelectorAll(".numsTwo .numTwo");
let sectionTwo = document.querySelector(".two");
let started = false;// function started ? no



function startCount(el) {
    let goal = el.dataset.goal;
    let count =setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
};



/* end section two (7al2a 2)*/
/* start section three (7al2a 1)*/



let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progressOne span");



/* end section three (7al2a 1)*/
// start section five (7al2a 5)



let countFive = document.querySelector(".countFive");
let progressFive = document.querySelector(".progressFive");
let input = document.querySelector("input.five");
let sectoinFive = document.querySelector(".sectionFive");
let maxLength = input.getAttribute("maxlength");

countFive.innerHTML = maxLength;

input.oninput = function () {
    countFive.innerHTML = maxLength - this.value.length;
    countFive.innerHTML == 0 ? countFive.classList.add("zero") : countFive.classList.remove("zero");
    // set the progressFive
    progressFive.style.width = `${(this.value.length * 100) / maxLength}%`;
    progressFive.style.width == "100%" ? progressFive.classList.add("zeroPro") : progressFive.classList.remove("zeroPro");
};



// end section five (7al2a 5)
// start sectin seven (7al2a 7)



let toggleSeven = document.querySelector(".toggleSeven");
let nav = document.querySelector("nav");
let closeSeven = document.querySelector(".closeSeven")

toggleSeven.onclick = function () {
    nav.classList.add("openSeven");
};

closeSeven.onclick = function () {
    this.parentElement.classList.remove("openSeven")
}

document.onkeyup = function (e){
    //eza kbast 3all key Esc byedhar kamen
    if (e.key === "Escape") {
        nav.classList.remove("openSeven")
    }
}



// end sectin seven (7al2a 7)
// start section nine (7al2a 9)



let inputNine = document.querySelector(".inputNine");
let submitNine = document.querySelector(".addNine");
let tasksNine = document.querySelector(".tasksNine");

// 2- Empty Array To Store The Tasks
let arrayOfTasks = [];

//7- Check if Theres Tasks In Local Storage
    if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

//6-c- Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

//1- Add Task
submitNine.onclick = function () {
    if (inputNine.value !== "") {
        addTaskToArray(inputNine.value);// Add Task To Array Of Tasks
        inputNine.value = "";//Empty Input Field
    }
};
//8- Click On Task Element
tasksNine.addEventListener("click", (e) => {
    // Delete Button
    if (e.target.classList.contains("del")) {
        //9-a- Remove Task From Local Storage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        // Remove Element From Page
        e.target.parentElement.remove();
    }
    //10-a- Task Element
    if (e.target.classList.contains("task")) {
         // Toggle Done Class
        e.target.classList.toggle("done");
        // Toggle Completed For Task
        toggleStatusTaskWith(e.target.getAttribute("data-id")) 
    }
})
//3-
function addTaskToArray(taskText) {
    // Task Data
    const task = {
        id: Date.now(),
        title: taskText,
        completed:false,
    };
    // Push Task To Array Of Tasks
    arrayOfTasks.push(task);
    // Add Tasks To Page
    addElementsToPageFrom(arrayOfTasks);
    //6-a- Add Task To Local Storage
    addDataToLocalStorageFrom(arrayOfTasks);
    }
//4-
function addElementsToPageFrom(arrayOfTasks) {
    //Empty Tasks Div
    tasksNine.innerHTML = "";
    //Looping On Array Of Tasks
    arrayOfTasks.forEach((task) => {
        // Create Main Div
        let div = document.createElement("div");
        div.className = "task";
        div.setAttribute("data-id", task.id)
        div.appendChild(document.createTextNode(task.title));
        //5- Check If Task is Done
        if (task.completed) {
            div.className = "task done";
        }
        // Create Delete Button
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        // Append Button To Main Div
        div.appendChild(span);
        // Add Task Div To Tasks Container
        tasksNine.appendChild(div);
    });
}
//6-b- 
function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}   
function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}
//9-b- 
function deleteTaskWith(taskId) {
    // For Explain Only
    //for (let i = 0; i < arrayOfTasks.length; i++){
    //    console.log(`${arrayOfTasks[i].id} === ${taskId}`);
    //}
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);
}
//10-b- 
function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskId) {
            arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
        }
    }
}


// end section nine (7al2a 9)
// start section 11 (7al2a 10 random background color)



let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];

for (let i = 0; i < 6; i++) {
    colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}

let finalColor = `#${colorParts.join("")}`;

document.querySelector(".eleven").style.backgroundColor = finalColor;



// end section 11 (7al2a 10 random background color)
// start section 11 (7al2a 11 Create Our Works Filter)



let switcherLis = document.querySelectorAll(".switcherEleven li");
let imgs = Array.from(document.querySelectorAll(".allE"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
    li.classList.remove("activeEleven");
    this.classList.add("activeEleven");
    });
}

// Manage Imgs
function manageImgs() {
    imgs.forEach((img) => {
    img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
    });
}



// end section 11 (7al2a 11 Create Our Works Filter)
// start section 12 (7al2a 12 Generate Random Serial Number)


/*
[1] Set Characters to Create The Serial
[2] Set Serial Characters Count
[3] Create Empyt Variable To Store The Serial
[4] Create Random Number + Access Sequence
[5] Store The Random Element in The Empty Variable
[6] Loop x Count
[7] Change Serial Element Countent With The Serial Variable
*/
let btnElTwelve = document.querySelector(".generate");
let serialElTwelve = document.querySelector(".serial");

btnElTwelve.onclick = function () {
    let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charsCount = 12;
    let randomSerial = "";
    for (let i = 0; i < charsCount; i++) {
        randomSerial += characters[Math.floor(Math.random() * characters.length)];
    }
    serialElTwelve.innerHTML = randomSerial;
};



// end section 12 (7al2a 12 Generate Random Serial Number)
// start  (7al2a 13 (Random Element From Sequence))



// Ahmed => Index 0
// Sayed => Index 1
// Ali => Index 2

let arr = ["Ahmed", "Sayed", "Ali"];

console.log(arr.length); // 3

console.log(Math.random() * arr.length);

console.log(Math.floor(Math.random() * arr.length));
console.log(Math.trunc(Math.random() * arr.length));

console.log(arr[Math.trunc(Math.random() * arr.length)]);



// end  (7al2a 13 (Random Element From Sequence))
// start section fourteen ((14)Create Tabs)



let tabsFourteen = document.querySelectorAll(".tabsFourteen li");
let tabsArrayFourteen = Array.from(tabsFourteen);
let divsFouteen = document.querySelectorAll(".contentFourteen > div");
let divsArrayFouteen = Array.from(divsFouteen);

// console.log(tabsArray);

tabsArrayFourteen.forEach((ele) => {
ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArrayFourteen.forEach((ele) => {
    ele.classList.remove("activeFourteen");
    });
    e.currentTarget.classList.add("activeFourteen");
    divsArrayFouteen.forEach((div) => {
    div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
});
});



// end section fourteen ((14)Create Tabs)
// start (7al2a 15 (Scroll To Top))



let span = document.querySelector(".up");

// (((((l comment maktoubin awal chi)))))

// window.onscroll = function () {
//   // console.log(this.scrollY);
//   // if (this.scrollY >= 1000) {
//   //   span.classList.add("show");
//   // } else {
//   //   span.classList.remove("show");
//   // }
//     this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
// };


span.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
};



// start (7al2a 15 (Scroll To Top))
