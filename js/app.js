// Clock and toggle button
const clock   = document.querySelector('.clock');
const toggle  = document.querySelector('.toggle');

// Checks clock visibility and switches it
let toggleClock = () => { 
    if (clock.style.display === 'none') {
        clock.style.display = 'block';
        toggle.innerHTML = 'ocultar relógio';
    } else {
        clock.style.display = 'none';
        toggle.innerHTML = 'mostrar relógio';
    }
};