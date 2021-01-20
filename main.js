const mode = document.getElementById('mode');
const eye = document.getElementById('eye');
const navbar = document.getElementById('navbar');
const hero = document.getElementById('hero');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const modeText = document.getElementById('mode-text')
const heads = document.getElementsByClassName('heads'); 
const toggleButton = document.getElementsByClassName('toggle-btn');
const navToggler = document.getElementsByClassName('nav')[0]; 
const bar = document.getElementsByClassName('bar');
const modeChange = document.getElementsByClassName('mode-change')[0];
const modeRes = document.getElementsByClassName('mode-res');
const list = document.getElementsByClassName('list')[0];
const listElement = document.getElementsByClassName('list-element'); 
const footer = document.getElementById('footer');

// const DELAY = 1000
// const TOP = window.innerHeight;
// const BOTTOM = window.innerHeight - window.innerHeight/4 ;

// let startLookTime = Number.POSITIVE_INFINITY;
// let lookDirection = null;


// window.saveDataAcrossSessions = true;
// webgazer.setGazeListener((data, elapsedTime) => {
//     if (data==null || lookDirection==='STOP') return

//     if (data.y < TOP && lookDirection!=='TOP' && lookDirection!=='RESET'){
//         startLookTime = elapsedTime;
//         lookDirection = 'TOP';
//     } else if (data.y > BOTTOM && lookDirection!=='BOTTOM') {
//         startLookTime = elapsedTime;
//         lookDirection = 'BOTTOM';
//     } else if (data.y >= TOP && data.y <= BOTTOM){
//         startLookTime = Number.POSITIVE_INFINITY;
//         lookDirection = null;
//     }

//     if (startLookTime+DELAY < elapsedTime){
//         if(lookDirection === 'TOP'){
//             window.scrollTo(0, -window.innerHeight);
//         } else {
//             window.scrollTo(0, -window.innerHeight);
//         }

//         startLookTime = Number.POSITIVE_INFINITY;
//         lookDirection = 'STOP';

//         setTimeout(() => {
            // window.scrollTo(0, -window.innerHeight)
            // lookDirection ='RESET'
        // }, 200)
    // }   
// }).begin();

// eye.addEventListener('click', () => {
//     if (mode.checked){
//         webgazer.resume();
//     } else {
//         webgazer.pause();
//     }
// })





mode.addEventListener('click', () => {
    if (mode.checked){
        navbar.style.backgroundColor = '#000000';
        navbar.style.boxShadow = '0 2px 4px 4px rgba(255, 255, 255, 0.1)';
        modeText.innerHTML = 'Switch to light mode';
        hero.style.backgroundColor = '#000000';
        about.style.backgroundColor = '#000000';
        skills.style.backgroundColor = '#000000';
        projects.style.backgroundColor = '#000000';
        footer.style.backgroundColor = '#EC336B';
        body.style.backgroundColor = '#32289B'
    } else {
        navbar.style.backgroundColor = '#FFFFFF';
        navbar.style.boxShadow = '0 2px 4px 6px rgba(0, 0, 0, 0.1)';
        modeText.innerHTML = 'Switch to dark mode';
        hero.style.backgroundColor = '#FFFFFF';
        about.style.backgroundColor = '#FFFFFF';
        skills.style.backgroundColor = '#FFFFFF';
        projects.style.backgroundColor = '#FFFFFF';
        footer.style.backgroundColor = '#32289B';
    }
})

let i = 0;

toggleButton[0].addEventListener('click', () => {
    list.classList.toggle('active');
    modeRes[0].classList.toggle('active');
    modeRes[1].classList.toggle('active');

    if (i==0){
        bar[0].style.width = '60%'
        bar[1].style.width = '60%';
        bar[2].style.width = '60%';
        toggleButton[0].style.left = '1rem';
        i=1;
    } else if (i==1){
        bar[0].style.width = '100%'
        bar[1].style.width = '70%';
        bar[2].style.width = '40%';
        toggleButton[0].style.left = null;
        i=0;
    }
});

listElement[0].addEventListener('click', () => {   
    if(window.innerWidth <= 830) {
        bar[0].style.width = '100%'
        bar[1].style.width = '70%';
        bar[2].style.width = '40%';
        toggleButton[0].style.left = null;
        list.classList.toggle('active');
        modeRes[0].classList.toggle('active');
        modeRes[1].classList.toggle('active');
        i=0;
    }
})

listElement[1].addEventListener('click', () => {     
    if(window.innerWidth <= 830){ 
        bar[0].style.width = '100%'
        bar[1].style.width = '70%';
        bar[2].style.width = '40%';
        toggleButton[0].style.left = null;
        list.classList.toggle('active');
        modeRes[0].classList.toggle('active');
        modeRes[1].classList.toggle('active');
        i=0;
    }
})

listElement[2].addEventListener('click', () => {    
    if(window.innerWidth <= 830){  
        bar[0].style.width = '100%'
        bar[1].style.width = '70%';
        bar[2].style.width = '40%';
        toggleButton[0].style.left = null;
        list.classList.toggle('active');
        modeRes[0].classList.toggle('active');
        modeRes[1].classList.toggle('active');
        i=0;
    }
})

listElement[3].addEventListener('click', () => {   
    if(window.innerWidth <= 830){   
        bar[0].style.width = '100%'
        bar[1].style.width = '70%';
        bar[2].style.width = '40%';
        toggleButton[0].style.left = null;
        list.classList.toggle('active');
        modeRes[0].classList.toggle('active');
        modeRes[1].classList.toggle('active');
        i=0;
    }
})

listElement[4].addEventListener('click', () => {    
    if(window.innerWidth <= 830){  
        bar[0].style.width = '100%'
        bar[1].style.width = '70%';
        bar[2].style.width = '40%';
        toggleButton[0].style.left = null;
        list.classList.toggle('active');
        modeRes[0].classList.toggle('active');
        modeRes[1].classList.toggle('active');
        i=0;
    }
})