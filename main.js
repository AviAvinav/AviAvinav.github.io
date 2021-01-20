const mode = document.getElementById('mode');
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

mode.addEventListener('click', () => {
    if (mode.checked){
        navbar.style.backgroundColor = '#000000';
        navbar.style.boxShadow = '0 2px 4px 4px rgba(255, 255, 255, 0.1)';
        modeText.innerHTML = 'Switch to light mode';
        hero.style.backgroundColor = '#000000';
        about.style.backgroundColor = '#000000';
        skills.style.backgroundColor = '#000000';
        projects.style.backgroundColor = '#000000';
    } else {
        navbar.style.backgroundColor = '#FFFFFF';
        navbar.style.boxShadow = '0 2px 4px 6px rgba(0, 0, 0, 0.1)';
        modeText.innerHTML = 'Switch to dark mode';
        hero.style.backgroundColor = '#FFFFFF';
        about.style.backgroundColor = '#FFFFFF';
        skills.style.backgroundColor = '#FFFFFF';
        projects.style.backgroundColor = '#FFFFFF';
    }
})

toggleButton[0].addEventListener('click', () => {
    list.classList.toggle('active');
    modeRes[0].classList.toggle('active');
    modeRes[1].classList.toggle('active');

    let i=0;
    while(i<2){
        if (i==0){
            let i;
            bar[1].style.width = '100%';
            bar[2].style.width = '100%';
            i=1;
        } 
    
    if(i==1) {   
        let i;     
        bar[1].style.width = '70%';
        bar[2].style.width = '40%';
        i= 0;
        }
    }
});