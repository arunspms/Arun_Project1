/* ==========================================
   Arun ❤️ Chandu Proposal Website
   Premium JavaScript - Part 1
========================================== */

// Loading Screen

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 2500);

});

// Countdown

//const targetDate = new Date("August 12, 2026 00:00:00").getTime();

const targetDate = new Date().getTime() - 1000;
const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("countdownPage").classList.add("hidden");

        document.getElementById("birthdayPage").classList.remove("hidden");

        if (typeof confetti === "function") {

            confetti({

                particleCount:300,

                spread:180

            });

        }

    }

},1000);

// Gift Button

document.getElementById("giftBtn").onclick = () => {

    document.getElementById("birthdayPage").classList.add("hidden");

    document.getElementById("giftPage").classList.remove("hidden");

};

// Gift Opening

document.querySelector(".giftBox").onclick = () => {

    document.getElementById("giftPage").classList.add("hidden");

    document.getElementById("letterPage").classList.remove("hidden");

    typeLetter();

};

// Love Letter

const letter = `

Dear Chandu ❤️,

Happy Birthday!

You came into my life and changed everything.

Every smile of yours brightens my day.

Every moment with you is my favorite memory.

Thank you for being my happiness.

I have one more surprise waiting for you...

Love,

Arun ❤️

`;

let index = 0;

function typeLetter(){

    const typing = document.getElementById("typing");

    typing.innerHTML = "";

    index = 0;

    const timer = setInterval(()=>{

        typing.innerHTML += letter.charAt(index);

        index++;

        if(index >= letter.length){

            clearInterval(timer);

        }

    },35);

}
/* ==========================================
   Premium JavaScript - Part 2
   Gallery + Music + Proposal
========================================== */

// Continue to Gallery

document.getElementById("nextGallery").onclick = () => {

    document.getElementById("letterPage").classList.add("hidden");

    document.getElementById("galleryPage").classList.remove("hidden");

    const music = document.getElementById("bgMusic");

    if(music){

        music.play().catch(()=>{});

    }

};

// Gallery

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

if(slides.length>0){

showSlide(currentSlide);

}

document.getElementById("nextPhoto").onclick=()=>{

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}

document.getElementById("prevPhoto").onclick=()=>{

currentSlide--;

if(currentSlide<0){

currentSlide=slides.length-1;

}

showSlide(currentSlide);

}

// Auto Slide

setInterval(()=>{

if(document.getElementById("galleryPage").classList.contains("hidden")){

return;

}

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

},4000);

// Go To Proposal

document.getElementById("proposalBtn").onclick=()=>{

document.getElementById("galleryPage").classList.add("hidden");

document.getElementById("proposalPage").classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

}
/* ==========================================
   Premium JavaScript - Part 3
   Proposal + Yes/No + Celebration
========================================== */

// YES Button

document.getElementById("yesBtn").addEventListener("click", () => {

    document.getElementById("proposalPage").classList.add("hidden");

    document.getElementById("yesPage").classList.remove("hidden");

    // Confetti Celebration

    if (typeof confetti === "function") {

        confetti({
            particleCount: 250,
            spread: 180,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 300,
                spread: 150
            });
        }, 800);

        setTimeout(() => {
            confetti({
                particleCount: 350,
                spread: 200
            });
        }, 1800);

    }

});

// NO Button

// NO Button

// ❤️ Cute NO Button

const noBtn = document.getElementById("noBtn");

const cuteMessages = [
    "🥺 No?",
    "😢 Really?",
    "💖 Think again!",
    "🥹 Please...",
    "❤️ Pretty please?",
    "😘 Are you sure?",
    "🙈 Try catching me!",
    "😂 Nope!",
    "💕 I know you love me!",
    "😍 Just press YES!"
];

let msgIndex = 0;

function escapeNoButton() {

    // Change the message
    noBtn.innerHTML = cuteMessages[msgIndex];
    msgIndex = (msgIndex + 1) % cuteMessages.length;

    // Move to a random position
    const x = Math.random() * (window.innerWidth - 170);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Little spin animation
    noBtn.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg) scale(1.1)";
}

noBtn.addEventListener("mouseover", escapeNoButton);

noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    escapeNoButton();
});

// Floating Hearts

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = 0;

    const timer = setInterval(() => {

        pos++;

        heart.style.bottom = pos + "vh";

        heart.style.opacity = 1 - (pos / 120);

        if(pos > 120){

            clearInterval(timer);

            heart.remove();

        }

    },40);

}

setInterval(createHeart,900);

// Final Button

document.getElementById("finalBtn").addEventListener("click",()=>{

    document.getElementById("yesPage").classList.add("hidden");

    document.getElementById("finalPage").classList.remove("hidden");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================================
   Premium JavaScript - Part 4
   Final Effects
========================================== */

// Fireworks Every 2 Seconds After YES

let fireworkInterval = null;

function startFireworks(){

    if(typeof confetti !== "function") return;

    fireworkInterval = setInterval(()=>{

        confetti({

            particleCount:150,

            spread:120,

            origin:{
                x:Math.random(),
                y:Math.random()-0.2
            }

        });

    },2000);

}

// Stop Fireworks

function stopFireworks(){

    if(fireworkInterval){

        clearInterval(fireworkInterval);

    }

}

// Start fireworks when YES page is shown

document.getElementById("yesBtn").addEventListener("click",()=>{

    startFireworks();

});

// Stop fireworks when final page opens

document.getElementById("finalBtn").addEventListener("click",()=>{

    stopFireworks();

});

// Background Music

const music=document.getElementById("bgMusic");

document.body.addEventListener("click",()=>{

    if(music){

        music.play().catch(()=>{});

    }

},{once:true});

// Floating Sparkles

function sparkle(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(10+Math.random()*20)+"px";

    star.style.pointerEvents="none";

    star.style.opacity="1";

    star.style.zIndex="999";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2000);

}

setInterval(sparkle,700);

// Typewriter Cursor

const typing=document.getElementById("typing");

setInterval(()=>{

    if(typing){

        typing.style.borderRight=
        typing.style.borderRight=="2px solid white"
        ?"none"
        :"2px solid white";

    }

},500);

// Scroll Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fadeIn");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// Console Message ❤️

console.log("%c❤️ Arun ❤️ Chandu ❤️",

"font-size:30px;color:#ff1493;font-weight:bold;");

console.log("Happy Birthday Chandu! 🎂");

// Finished

console.log("Proposal Website Loaded Successfully ❤️");
