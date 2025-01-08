function openSettings() {
    const settingsModal = new bootstrap.Modal(document.getElementById('settingsModal'));
    settingsModal.show();
}

function saveSettings() {
    const selectedMusic = document.getElementById('musicSelector').value;
    const selectedColor = document.getElementById('backgroundColor').value;
    const newMainHours = parseInt(document.getElementById('mainHours').value) || 0;
    const newMainMinutes = parseInt(document.getElementById('mainMinutes').value) || 25;
    const newMainSeconds = parseInt(document.getElementById('mainSeconds').value) || 0;

    document.body.style.backgroundColor = selectedColor;

    mainHours = newMainHours;
    mainMinutes = newMainMinutes;
    mainSeconds = newMainSeconds;

    updateMainTimerDisplay();

    audio = new Audio(selectedMusic);
    audio.load();

    const settingsModal = bootstrap.Modal.getInstance(document.getElementById('settingsModal'));
    settingsModal.hide();
}
