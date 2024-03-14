// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

document.getElementById("downloadButton").addEventListener("click", function() {
  // Replace 'resume.pdf' with the path to your resume file
  var fileUrl = 'https://drive.google.com/file/d/1Jnln8ega0Ap_BdGce3fYt_nHkYairoZU/view?usp=sharing';

  // Create a hidden link element
  var link = document.createElement("a");
  link.href = fileUrl;

  // Set the target attribute to '_blank' to open in a new tab
  link.target = '_blank';

  // Set the download attribute to specify the filename
  link.download = 'YourName_Resume.pdf';

  // Append the link to the document body
  document.body.appendChild(link);

  // Trigger the click event on the link
  link.click();

  // Remove the link from the document body
  document.body.removeChild(link);
});

document.getElementById("chatButton").addEventListener("click", function() {
  // Replace 'YOUR_GMAIL_ADDRESS' with your Gmail address
  var email = 'rahulraparthi017@gmail.com';

  // Create the mailto link
  var mailtoLink = 'mailto:' + email;

  // Create a hidden link element
  var link = document.createElement("a");
  link.href = mailtoLink;

  // Set the target attribute to '_blank' to open in a new tab
  link.target = '_blank';

  // Append the link to the document body
  document.body.appendChild(link);

  // Trigger the click event on the link
  link.click();

  // Remove the link from the document body
  document.body.removeChild(link);
});

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
