function toggleContent() {
    var moreContent = document.getElementById("more-content");
    var buttonText = document.querySelector(".read");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        buttonText.innerHTML = "Read less";
    } else {
        moreContent.style.display = "none";
        buttonText.innerHTML = "Read more";
    }
}

let btnClear = document.querySelector('.reset');
let inputs = document.querySelectorAll('input');
let msg = document.querySelectorAll('textarea');

btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
    msg.forEach(textarea =>  textarea.value = '');
});

function white() {

    document.getElementsByTagName('button').style.color = "red";
}


var content = document.body;
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
    if(content.classList.contains("night")){
        localStorage.setItem("theme","night");
    }else{
        localStorage.setItem("theme","");
    }
})
function themeUpdate(){
    if(localStorage.getItem("theme")!==null){
        if(localStorage.getItem("theme") == "night"){
            content.classList.add("night");
        darkMode.classList.add('active');
        }else{
            content.classList.remove("night");
        darkMode.classList.remove('active');
        }
    }
}

themeUpdate();

function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('hidden');
}

function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('hidden');
}


//darkmood start

const btns = document.getElementsByName("mode");

for (const btn of btns) {

    btn.onclick = changeBg;
    
}

function changeBg() {

    document.body.style.background=this.value;
    
}




//darkmood end
