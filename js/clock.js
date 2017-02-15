// Hands and time display
const secHand  = document.querySelector('.sec-hand');
const minHand  = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time     = document.querySelector('.time');

let setDate = () => {
    // Current date
    const now = new Date();

    // Seconds
    const secs    = now.getSeconds();
    const secsDeg = ((secs / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secsDeg}deg)`;

    // Minutes
    const min     = now.getMinutes();
    const minDeg  = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    // Hour
    const hour     = now.getHours();
    const hourDeg  = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    // Update time div  
    time.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

setInterval(setDate, 1000);