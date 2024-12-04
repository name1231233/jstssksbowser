 document.getElementById("myButton").addEventListener("click", function() { 
    const newElement = document.createElement("div"); 
    newElement.textContent = "Я параграф";
    document.getElementById("div").append(newElement); 
    setTimeout(() => newElement.remove(), 1000);
});

document.getElementById("createButton").addEventListener("click", function() {
    const newButton = document.createElement("button");
    newButton.textContent = "New Button";
    newButton.addEventListener("click", function(){
        console.log("Button was clicked")
    })
    document.getElementById("div").append(newButton)
    setTimeout(() => newButton.remove(), 3000);
})

const changeColor1 = document.getElementById("div1");
document.getElementsById("changeColor").addEventListener("click",function() {
    changeColor1.style.backgrundColor = "lightblue";
})