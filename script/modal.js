window.addEventListener('load', () => {
    var modal = document.getElementById("controlsModal");
    var controlsButton = document.getElementById("k");

    controlsButton.addEventListener("click", () => {
        modal.style.display = 'block';
    });

    var closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});