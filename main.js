
// FORMS AND FORM VALIDATION
let form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
const fullname = document.getElementById("fullname").value;
const tel = document.getElementById("tel").value;
const email = document.getElementById("email").value;

    if (fullname === "") {
    alert("please enter your fullname");
     return;
}
    if (tel === "") {
    alert("please enter your number");
     return;
}
    if (email === "") {
    alert("please enter your number");
     return;
}
// alert ("login information submitted")
console.log("request sent succassfully");
    console.log(fullname);
    console.log(tel);
    console.log(email);

});


let ideaform = document.getElementById("ideaform");
ideaform.addEventListener("submit", function (event) {
    event.preventDefault();
const fullname = document.getElementById("fullname").value;
const tel = document.getElementById("tel").value;
const email = document.getElementById("email").value;

    if (fullname === "") {
    alert("please enter your fullname");
     return;
}
    if (tel === "") {
    alert("please enter your nnumber");
     return;
}
    if (email === "") {
    alert("please enter your email");
     return;
}
    if (textarea === "") {
    alert("insert text");
     return;
}
// alert ("login information submitted")
console.log("Message submitted");
    console.log(fullname);
    console.log(tel);
    console.log(email);

});

function toggleMenu() {
    let nav = 
    document.getElementById("nav");

    nav.classList.toggle("show");
}