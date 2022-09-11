let check = document.querySelector(".check"),
    password = document.querySelector(".password"),
    text = document.querySelector(".text");

let regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

check.addEventListener("click" ,()=> {
    if(password.value == "" ){
        text.innerText = "Please Enter An Email Address"
        text.style.color = "#000";
    }
    else if (password.value.match(regex)){
        text.innerText = "Congrats! You ENter A Valid Email"
        text.style.color = "rgba(4,125,9,1)";
    }
    else {
        text.innerText = "Sorry ! You have entered Invalid Email"
        text.style.color = "#0f0";
    }
})