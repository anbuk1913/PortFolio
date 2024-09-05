// navbar for small scrreen
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// anchor tag active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '30px',
    duration: 1000,
    delay: 100
 });
 ScrollReveal().reveal('.home-content,.heading', {origin:'top'});
 ScrollReveal().reveal('.home-image', {origin:'bottom'});

 ScrollReveal().reveal('.home-content h1,.about h3,.projects h3,.work h3',{origin:'left'});
 ScrollReveal().reveal('.skills h3,.contact h3', {origin:'right'});


//  form data submission using ajax


$("#contact-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyJi3Wpa8Shi-pbtepyQ2KJoTcBxuODiUlROUx1hfz2proMKZy2Z3pVrPvAbch_UCSS/exec",
      data:$("#contact-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          FormData.clear()
         
      },
      error:function (err){
          alert("Something Error")

      }
  })
})
  /*

const scriptURL = 'https://script.google.com/macros/s/AKfycbyJi3Wpa8Shi-pbtepyQ2KJoTcBxuODiUlROUx1hfz2proMKZy2Z3pVrPvAbch_UCSS/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
*/

//  form validation.
const form = document.getElementById("contact-form");
const userName = document.getElementById("Name");
const userEmail = document.getElementById("Email");
const userMessage = document.getElementById("Message");


function validateInput() {
  const userNameVal = userName.value.trim();
  const userEmailVal = userEmailVal.value.trim();
  const userMessageVal = userMessageVal.value.trim();

  let success = true;

  if (userNameVal === "") {
    setError(userName, "Username required");
    success = false;
  } else {
    setSuccess(userName);
  }

  if (userEmailVal === "") {
    setError(userEmail, "Email is required");
    success = false;
  } else if (!validateEmail(userEmailVal)) {
    setError(userEmail, "Please enter valid email");
    success = false;
  } else {
    setSuccess(userEmail);
  }

  if (userMessageVal === "") {
    setError(userMessage, "Message is required");
    success = false;
  } else {
    setSuccess(userMessage);
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
}
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};




