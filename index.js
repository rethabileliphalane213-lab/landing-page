const menuBtn=document.getElementById("menu")
const navOptions=document.getElementById("options")
const openModal=document.getElementById("open-modal")
const displayModal=document.querySelector(".modal")
const closeModal=document.getElementById("close")
const nameInput=document.getElementById("name")
const emailInput=document.getElementById("email")
const messageInput=document.getElementById("message")
const submitBtn=document.getElementById("submit")
const modalOptions=document.querySelectorAll("#options a")


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
    displayModal.style.display="block"
})

closeModal.addEventListener("click",()=>{
    displayModal.style.display="none"
})

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!nameInput.value || !emailInput.value || !messageInput.value){
        return alert("contact form must be Filled correctyly before sending")
    }
})