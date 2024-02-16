let header = document.querySelector('.header');
let site = document.querySelector('.site');
let cta = document.querySelector('.cta');

let path = document.querySelector(".path");
console.log(path.getAttribute('d'))

let imageOverlay = document.querySelector('.image-container').children[0];
let mainImage = document.querySelector('.image-container').children[1];

let links = Array.from(document.querySelectorAll('.link'));






function animate(){
    
    setTimeout(()=>{
        header.classList.add('active');
        imageOverlay.style.animation = 'slide 1s forwards';
        mainImage.style.animation = 'slide-perm 1s forwards';
    }, 2000);

    setTimeout(()=>{
        site.classList.add('.active')
        cta.classList.add('.active')


    }, 3000);

    links.forEach((link,idx)=>{
        setTimeout(()=>{
            link.classList.add('active');
        },(idx * 200) +2500)
    })
}
animate()


function lerp(start, end, t){
    return start * (1 - t) + end * t;
}

let toggle = false;


let y = 100;
let c = 100;

// linear interpolation function
function animateMenu(){
    if(toggle){
        y = lerp(y, 0, .055);
        c = lerp(c, 0, 0.075);
        path.setAttribute('d', `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}` )
    }else{
        y = lerp(y, 100, .055)
        c = lerp(c, 100, 0.075);
        path.setAttribute('d', `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, ${50} ${c}, 0 ${y}` )
    }
    
    requestAnimationFrame(animateMenu)
}

animateMenu()


let menuToggle = document.querySelector('.menu-tog');
let ul = document.querySelector('.wrapper ul');

menuToggle.addEventListener('click', () => {
    setTimeout(() => {
        toggle = !toggle;
    }, 550)
    if(toggle){
        ul.classList.remove('active');

    }else{
        setTimeout(() => {
            ul.classList.add('active')
        }, 1000)
    }
    
    menuToggle.classList.toggle('active')
})

