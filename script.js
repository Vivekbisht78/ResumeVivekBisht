// ======================================
// Vivek Bisht Portfolio Website
// script.js
// ======================================

// PRELOADER

window.addEventListener("load", function () {

const loader = document.getElementById("preloader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},600);

});

// ======================================
// TYPING EFFECT

const words = [

"IT Support Intern",

"BCA Student",

"Windows Enthusiast",

"Networking Learner",

"Quick Learner"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

if(!typing) return;

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

// ======================================
// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.onclick = ()=>{

navbar.classList.toggle("active");

};

// ======================================
// CLOSE MENU WHEN LINK CLICKED

document.querySelectorAll(".navbar a").forEach(link=>{

link.onclick = ()=>{

navbar.classList.remove("active");

};

});

// ======================================
// STICKY HEADER

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

header.classList.add("active");

}else{

header.classList.remove("active");

}

});

// ======================================
// DARK / LIGHT MODE

const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = ()=>{

document.body.classList.toggle("light");

const icon = themeBtn.querySelector("i");

if(document.body.classList.contains("light")){

icon.className = "fa-solid fa-sun";

}else{

icon.className = "fa-solid fa-moon";

}

};

// ======================================
// ACTIVE NAVIGATION

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top = section.offsetTop - 120;

const height = section.clientHeight;

if(pageYOffset >= top){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

// ======================================
// SIMPLE SCROLL ANIMATION

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

},{
threshold:0.15
});

document.querySelectorAll(

".about-card,.education-card,.skill-card,.knowledge-card,.project-card,.achievement-box,.strength-card,.language-card,.contact-box,.resume-download"

).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="0.8s";

observer.observe(el);

});

// ======================================
// BACK TO TOP BUTTON

const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.style.display="none";

// ======================================
// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ======================================
// END
