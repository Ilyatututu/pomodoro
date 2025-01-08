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

    // Изменить цвет фона
    document.body.style.backgroundColor = selectedColor;

    // Изменить время основного таймера
    mainHours = newMainHours;
    mainMinutes = newMainMinutes;
    mainSeconds = newMainSeconds;

    // Обновить отображение таймера
    updateMainTimerDisplay();

    // Обновить аудио для таймера
    audio = new Audio(selectedMusic); // Обновляем глобальную переменную audio
    audio.load();

    // Закрыть модальное окно
    const settingsModal = bootstrap.Modal.getInstance(document.getElementById('settingsModal'));
    settingsModal.hide();
}