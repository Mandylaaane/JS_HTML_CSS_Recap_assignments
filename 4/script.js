const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
    if (!event.target.closest("button")) {
        alert("Container clicked!");
    }
});

buttonChildContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  if (event.target.closest("button")) {
    alert(`${event.target.textContent} clicked`);
  }     
  if (!event.target.closest("button")) {
    alert("Child container clicked!");
  } 
});

const button2 = document.getElementById("button2")
button2.onclick = function(){
    alert("button 2 clicked")
}

const button3 = document.getElementById("button3")
button3.addEventListener('click', function(){
    alert("button 3 clicked");
})




