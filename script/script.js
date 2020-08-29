function playSound(e) {
    const audio = document.querySelector(`audio[data-beat="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    hideAllDots(e);

    const dot = document.querySelector(`.dot[data-beat="${e.keyCode}"]`);
    dot.style.display = 'block';

    setTimeout(hideAllDots, 300);
}

function hideAllDots(e) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.style.display = 'none';
    });
}

function endTransition(e) {
    console.log(e);
}

window.addEventListener('keydown', playSound)
window.addEventListener('load', hideAllDots)