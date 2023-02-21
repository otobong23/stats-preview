

let animate = new ScrollReveal({
    origin: 'bottom',
    duration: 1000,
    distance: '60px'
});

animate.reveal('.title');
animate.reveal('.description', {duration: 1300});
animate.reveal('.dscrImage', {distance: '1px', duration: 4000});

window.addEventListener('load', animateTemplate);

function animateTemplate(){
    if(window.innerWidth >= 1024){
        animate.reveal('.template > div:nth-of-type(1)',{origin: 'left', duration: 1500});
        animate.reveal('.template > div:nth-of-type(2)',{origin: 'left', duration: 2000});
        animate.reveal('.template > div:nth-of-type(3)',{origin: 'left', duration: 2500});
    }else{
        animate.reveal('.template > div:nth-of-type(1)',{origin: 'bottom', duration: 1500});
        animate.reveal('.template > div:nth-of-type(2)',{origin: 'bottom', duration: 2000});
        animate.reveal('.template > div:nth-of-type(3)',{origin: 'bottom', duration: 2500});
    }
};