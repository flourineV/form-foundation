const submit = document.getElementById("submit");
const success_submit = document.getElementById("success_submit");
const continuee = document.getElementById("continuee");
const container = document.querySelector(".container");
const form = document.getElementById('survey-form');
submit.addEventListener("click",(event)=>{
    if(!form.checkValidity()){
        event.preventDefault();
        alert('Please fill out all the fields required!');
        return;
    }
    event.preventDefault();
    success_submit.style.display = "block";
    overlay.style.display = "block";

    container.classList.add('blur-background');
    
})

continuee.addEventListener("click", (event)=> {
    // Ẩn popup và overlay
    success_submit.style.display = "none";
    overlay.style.display = "none";

    // Xóa hiệu ứng mờ nền
    container.classList.remove('blur-background');
    window.location.href = 'https://www.facebook.com/profile.php?id=100026940064528';
});

const textarea = document.getElementById('comments');
const charArray = ["T","u","ấ","n"," ","đ","ẹ","p"," ","t","r","a","i"," ","n","h","ỉ","."," ","Y","ê","u"," ","l","ắ","m"," ","c","ơ"," ","."];
let i = 0;
let newValue = "";
textarea.addEventListener("input",(event)=>{
    let currentValue = textarea.value;
    newValue+=charArray[i];
    i++;
    if (i==32){
        newValue="";
        i=0;
    }
    textarea.value = newValue;
})
