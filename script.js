var h = document.getElementById("Hello")
var button = document.getElementById("go")
var p = document.getElementById("hello2")
var sub = document.getElementById("submit")
var tl = document.getElementById("taskList")
var inp = document.getElementById("task")
//TODOLIST

sub.addEventListener("click", todolist)

function todolist(){

    const li = document.createElement("li"); // 1. create li
        li.innerHTML = inp.value  +  `<button id='remove'> X</button>`;              // 2. set its text
        tl.appendChild(li);                      // 3. add it to the list
        document.getElementById("remove").addEventListener("click", remove)

        function remove(){
            tl.removeChild(li)
        }
}



//Timer
button.addEventListener("click", displayDate)

function displayDate() {
    for (let i = 0; i < 11; i++) {
        setTimeout(() => {
            h.innerHTML = i;

            if (h.innerHTML==10){

                h.innerHTML = 0

                for (let index = 0; index < 6; index++) {

                    setTimeout(() => {
                        p.innerHTML=+index;
                    }, 300*index);
                    
                    
                }
                
            
            }
                
        }, 500 * i); // delay increases with each loop
    }

    
    
}
