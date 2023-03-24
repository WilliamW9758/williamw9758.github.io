let text = document.getElementById('text')
let layer1 = document.getElementById('layer1')
let layer2 = document.getElementById('layer2')
let layer3 = document.getElementById('layer3')
let layer4 = document.getElementById('layer4')
let layer5 = document.getElementById('layer5')
let layer6 = document.getElementById('layer6')
let logo = document.getElementById('logo')
// let navs = document.getElementsByClassName('navigation')
// let layers = {layer1s, layer2, layer3, layer4, layer5, layer6};
// const layers = document.querySelectorAll('.layer');

let scrollPos = 0;

function updateLayers() {
    const scaleFactor0 = 0.8 * scrollPos;
    const opacityFactor0 = 1 - scrollPos * 0.9
    text.style.scale = 1 + scaleFactor0;
    text.style.opacity = opacityFactor0;

    const scaleFactor1 = 0.8 * scrollPos;
    const opacityFactor1 = 1 - scrollPos * 0.9
    layer1.style.scale = 1 + scaleFactor1;
    layer1.style.opacity = opacityFactor1;
    // layer1.style.boxShadow = '${scaleFactor}px 0 0 #f00';
    // layer1.style.transform = "rotate(calc(var(--rotate-angle, 0deg) * 1deg))";
    
    const scaleFactor2 = 0.2 * scrollPos;
    const opacityFactor2 = 2 - scrollPos * 0.5
    layer2.style.scale = 1 + scaleFactor2;
    layer2.style.opacity = opacityFactor2;

    const scaleFactor3 = 0.05 * scrollPos;
    const opacityFactor3 = 3 - scrollPos * 0.5
    layer3.style.scale = 1 + scaleFactor3;
    layer3.style.opacity = opacityFactor3;

    const scaleFactor4 = 0.01 * scrollPos;
    const opacityFactor4 = 10 - scrollPos * 0.5
    layer4.style.scale = 1 + scaleFactor4;
    layer4.style.opacity = opacityFactor4;

    // const scaleFactor5 = 0.05 * scrollPos;
    // layer5.style.scale = 1 + scaleFactor5;

    // layers.forEach((layer, index) => {
    //     const scaleFactor = 1 + (index + 1) * 0.1 * scrollPos;
    //     layer.style.scale = 1 + scaleFactor;
    // });
}
  
function handleScroll(e) {
    e.preventDefault();

    // logo.classList.add(logo.offsetTop);
    // navs.forEach((nav) => {
    //     nav.style.top = scrollPos;
    // });

    if (e.deltaY > 0) {
        scrollPos += 0.05;
    } else {
        scrollPos -= 0.05;
    }

    scrollPos = Math.max(0, scrollPos); // Don't allow negative scrollPos values

    updateLayers();
}

window.addEventListener('wheel', handleScroll);


// scrollValue = 0;

// window.addEventListener('scroll', () => {
//     // window.scrollTo(window.scrollX, window.scrollY - 1);
//     // window.scrollTo(window.scrollX, window.scrollY + 1);
//     let value = window.scrollY;

//     text.style.marginTop = value * 2.5 + 'px';

// });