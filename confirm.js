var confirm = 
document.getElementById("myModal");

var btn = 
document.getElementById("openModalBtn");

var span =
document.getElementsByClassName("close")[o];
btn.onclick = function(){
    this.ariaModal.style.display ="block";

}
span.onclick = function(){
    this.ariaModal.style.display ="none";
}


window.onclick = function(Event){
    if (Event.target== modal){
    this.ariaModal.style.display ="none";
}
}
document.getElementsByClassName("confirmBtn"
).onclick = function(){
       alert("Confirmed!");
    modal.style.display ="none";
}

document.getElementsByClassName("CancelBtn"
).onclick = function(){
       
    modal.style.display ="none";
}

