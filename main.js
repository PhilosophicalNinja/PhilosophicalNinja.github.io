document.getElementById("join").addEventListener("click", popupForm);
let popup = document.getElementById("popup");
let submit = document.getElementById("submit");
submit.addEventListener("click", onSubmit);
let gpa = document.getElementById('gpa');
function popupForm(){
    popup.style.visibility = "visible";
}
function onSubmit(){
    let val = Number(gpa.value);
    if(val < 4.1){
        alert("GPA is too low. Depart at once.");
    } else {
        alert("SSSSSSSSSSSSSSSSS");
    }
    popup.style.visiblity ="hidden";
    
}