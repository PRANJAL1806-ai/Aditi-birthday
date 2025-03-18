// Toggle Day and Night Mode
let isNightMode = false;

function toggleMode() {
    isNightMode = !isNightMode;
    if (isNightMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        document.querySelectorAll('.reveal-section').forEach(function (section) {
            section.style.backgroundColor = '#444';
        });
    } else {
        document.body.style.backgroundColor = '#f5f5f5';  // Pastel Light Color
        document.body.style.color = '#333';
        document.querySelectorAll('.reveal-section').forEach(function (section) {
            section.style.backgroundColor = '#FFF8DC';  // Pastel color background for content
        });
    }
}

// Reveal content on button click
function revealContent(id) {
    const content = document.getElementById(id);
    content.classList.toggle('active'); // Toggle visibility
}

// Toggle Sound On/Off
let audio = document.getElementById('audio');
function toggleSound() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}