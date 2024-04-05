var confirm = 
document.getElementById("myModal");

var button = 
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
    if (Event.targeted== modal){
    this.ariaModal.style.display ="none";
}
}
document.getElementsByIdName("confirmButton"
).onclick = function(){
       alert("Confirmed!");
    
}

document.getElementsByIdName("CancelButton"
).onclick = function(){
       
    modal.style.display ="none";
}

