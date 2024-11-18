const container=document.getElementById("container");
const registration=document.getElementById("register");
const loginbtn=document.getElementById("login");

registration.addEventListener("click" ,() =>{
    container.classList.add("active")
});


loginbtn.addEventListener("click" ,() =>{
    container.classList.remove("active")
});