const menuBtn=document.getElementById("menu")
const navOptions=document.getElementById("options")
const openModal=document.getElementById("open-modal")
const displayModal=document.querySelector(".modal")
const closeModal=document.getElementById("close")
const nameInput=document.getElementById("name")
const emailInput=document.getElementById("email")
const numberInput=document.getElementById("number")
const subjectInput=document.getElementById("subject")
const messageInput=document.getElementById("message")
const submitBtn=document.getElementById("submit-btn")
const modalOptions=document.querySelectorAll("#options a")
const form = document.querySelector("form");


let isVisible=false

function toggleMenu(){
    isVisible=!isVisible
    if(isVisible){
        navOptions.style.display="block"
        menuBtn.style.border="2px solid gold"
    }else{
        navOptions.style.display="none"
        menuBtn.style.border="2px solid red"
    }
}

modalOptions.forEach(option=>{
    option.addEventListener("click",()=>{
        isVisible=false
        navOptions.style.display="none"
    })
})

menuBtn.addEventListener("click",()=>{
    toggleMenu()
})


openModal.addEventListener("click",()=>{
    displayModal.style.display="flex"
})

closeModal.addEventListener("click",()=>{
    displayModal.style.display="none"
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
        !nameInput.value.trim() ||
        !emailInput.value.trim() ||
        !numberInput.value.trim() ||
        !subjectInput.value.trim() ||
        !messageInput.value.trim()
    ) {
        alert("Please fill in all fields before sending.");
        return;
    }

    form.submit();
});