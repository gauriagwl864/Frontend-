const mainHeading= document.getElementById("title");
const triggerButton = document.getElementById("btn");
//mainHeading.textContent= "Hello from my side";
triggerButton.onclick=()=>{
    mainHeading.textContent="Hello from my side!"
}