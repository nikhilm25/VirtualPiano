document.addEventListener("DOMContentLoaded", function () {
    const keys = document.querySelectorAll('.key');
    const keybs = document.querySelectorAll('.keyb');

    let isMouseDown = false;

    function playSound(soundId) {
        const audioElement = document.getElementById(soundId);
        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play();
        }
    }

    function handleMouseEvents() {
        function handleMouseDown() {
            isMouseDown = true;
        }

        function handleMouseUp() {
            isMouseDown = false;
        }

        function handleMouseOver(event) {
            if (isMouseDown) {
                const target = event.target;
                const soundId = target.getAttribute("data-sound");
                if (soundId) {
                    playSound(soundId);
                }
            }
        }

        keys.forEach(key => {
            key.addEventListener('mousedown', handleMouseDown);
            key.addEventListener('mouseup', handleMouseUp);
            key.addEventListener('mouseover', handleMouseOver);
            key.setAttribute("data-sound", "note" + key.id);
        });

        keybs.forEach(keyb => {
            keyb.addEventListener('mousedown', handleMouseDown);
            keyb.addEventListener('mouseup', handleMouseUp);
            keyb.addEventListener('mouseover', handleMouseOver);
            keyb.setAttribute("data-sound", "note" + keyb.id);
        });

        document.addEventListener('mouseup', handleMouseUp);
    }

    handleMouseEvents();
});

function playSound(soundId) {
    const audioElement = document.getElementById(soundId);
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
}
