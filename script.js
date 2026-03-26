let on = false;

function toggleLamp() {
    on = !on;
    document.documentElement.style.setProperty('--on', on ? 1 : 0);
}
