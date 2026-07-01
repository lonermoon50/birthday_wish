// const btn = document.getElementById("surprisebtn");
// const heading = document.getElementById("bdyheading");
// const container = document.getElementById('balloons');
// const bdymusic = document.getElementById("bdysong");
// const confettimusic = document.getElementById("confettisound")

// window.onload = () => {
//     createBalloons();
// }



// function createBalloons() {
//             const emojis = ['🎈','🪩','🎉','🌈','✨'];
//             for (let i = 0; i < 25; i++) {
//                 const b = document.createElement('div');
//                 b.className = 'balloon';
//                 b.textContent = emojis[Math.floor(Math.random()*emojis.length)];
//                 b.style.left = Math.random() *100 + '%';
//                 b.style.animationDuration =(10 + Math.random() * 12) + 's';
//                 b.style.animationDelay = '-' + Math.random() * 20 + 's';
//                 container.appendChild(b);
//             }
// }

// function btnaction() {
//     heading.style.display = "none";
//     container.style.display = "none";
//     btn.style.display = "none";
//     createconfetti();
//     setTimeout(() => createducks(), 2500);
//     setTimeout(() => showphotos(), 3000);
//     setTimeout(() => bdymusic.play().catch(err => console.log("Birthday song blocked:", err)), 3000);
// }

// function createconfetti(){
//     confettimusic.play().catch(err => console.log("Confetti sound blocked:", err));
//     for(let i=0; i<300; i++){
//         const confetti = document.createElement('div');
//         confetti.classList.add("confetti");
//         confetti.style.backgroundColor = "hsl(" + Math.random() * 360 + " , 80%, 60%)";
//         confetti.style.left = Math.random() * 100 + "vw";
//         confetti.style.animationDuration = (3 + Math.random() * 3) + "s";
//         document.body.appendChild(confetti);
//         setTimeout(() => confetti.remove(), 10000);
//     }
// }

// function showphotos() {
//     const photos = document.querySelectorAll(".photo");
//     photos.forEach((photo, index) => {
//         photo.style.left = Math.random() * 70 + "vw";
//         photo.style.top = Math.random() * 100 + "vh";
//         photo.style.display = "block";
//         setTimeout(() => {
//             photo.classList.add("show");
//         }, index * 300);
//     })
// }


// function createducks() {
//             const duckcontainer = document.getElementById('duck');
//             const emojis = ['🎂'];
//             for (let i = 0; i < 35; i++) {
//                 const d = document.createElement('div');
//                 d.className = 'duck';
//                 d.textContent = emojis[Math.floor(Math.random()*emojis.length)];
//                 d.style.left = Math.random() *100 + '%';
//                 d.style.animationDuration =(25 + Math.random() * 12) + 's';
//                 d.style.animationDelay = '-' + Math.random() * 20 + 's';
//                 duckcontainer.appendChild(d);
//             }
// }

const btn = document.getElementById("surprisebtn");
const heading = document.getElementById("bdyheading");
const container = document.getElementById('balloons');
const bdymusic = document.getElementById("bdysong");
const confettimusic = document.getElementById("confettisound");
const duckcontainer = document.getElementById('duck');
const replaybtn = document.getElementById('replaybtn');

const defaultHeadingText = "Click the button if its your birthday today";

window.onload = () => {
    applyNameFromURL();
    createBalloons();
}

function applyNameFromURL() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    if (name) {
        heading.textContent = `Happy Birthday, ${name}! 🎂`;
    }
}



function createBalloons() {
            const emojis = ['🎈','🪩','🎉','🌈','✨'];
            for (let i = 0; i < 25; i++) {
                const b = document.createElement('div');
                b.className = 'balloon';
                b.textContent = emojis[Math.floor(Math.random()*emojis.length)];
                b.style.left = Math.random() *100 + '%';
                b.style.animationDuration =(10 + Math.random() * 12) + 's';
                b.style.animationDelay = '-' + Math.random() * 20 + 's';
                container.appendChild(b);
            }
}

function btnaction() {
    heading.style.display = "none";
    container.style.display = "none";
    btn.style.display = "none";
    createconfetti();
    setTimeout(() => createducks(), 2500);
    setTimeout(() => showphotos(), 3000);
    setTimeout(() => bdymusic.play().catch(err => console.log("Birthday song blocked:", err)), 3000);
    setTimeout(() => replaybtn.classList.add('show'), 4500);
}

function replay() {
    // Reset audio
    bdymusic.pause();
    bdymusic.currentTime = 0;
    confettimusic.pause();
    confettimusic.currentTime = 0;

    // Clear confetti and ducks
    document.querySelectorAll(".confetti").forEach(el => el.remove());
    duckcontainer.innerHTML = "";

    // Reset photos
    document.querySelectorAll(".photo-wrap").forEach(wrap => {
        wrap.classList.remove("show");
        wrap.style.display = "none";
    });

    // Hide replay button, bring back heading + button + balloons
    replaybtn.classList.remove('show');
    heading.style.display = "";
    container.style.display = "";
    btn.style.display = "";

    // Play again
    btnaction();
}

function createconfetti(){
    confettimusic.play().catch(err => console.log("Confetti sound blocked:", err));
    for(let i=0; i<300; i++){
        const confetti = document.createElement('div');
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = "hsl(" + Math.random() * 360 + " , 80%, 60%)";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (3 + Math.random() * 3) + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 10000);
    }
}

function showphotos() {
    const wraps = document.querySelectorAll(".photo-wrap");
    wraps.forEach((wrap, index) => {
        wrap.style.left = Math.random() * 65 + "vw";
        wrap.style.top = Math.random() * 75 + "vh";
        wrap.style.display = "block";
        setTimeout(() => {
            wrap.classList.add("show");
        }, index * 300);
    })
}


function createducks() {
            const emojis = ['🦆'];
            for (let i = 0; i < 15; i++) {
                const d = document.createElement('div');
                d.className = 'duck';
                d.textContent = emojis[Math.floor(Math.random()*emojis.length)];
                d.style.left = Math.random() *100 + '%';
                d.style.animationDuration =(10 + Math.random() * 12) + 's';
                d.style.animationDelay = '-' + Math.random() * 20 + 's';
                duckcontainer.appendChild(d);
            }
}