let button = document.querySelectorAll("button");
let inputtxt = document.querySelector("input");

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            inputtxt.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            inputtxt.value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            inputtxt.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            inputtxt.value = string; 
        }
    }
    )
})

