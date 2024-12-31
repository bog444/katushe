// Изменение фона через определенные интервалы
let bgChangeInterval = setInterval(() => {
  let currentClass = document.body.className;
  if (currentClass === 'bg1') {
      document.body.className = 'bg2';
  } else {
      document.body.className = 'bg1';
  }
}, 5000); // меняется каждые 5 секунд

// Воспроизведение музыки
let music = document.getElementById('background-music');
music.volume = 0.5; // регулируем громкость

// Открытие сюрприза
document.querySelector('.surprise-btn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
});

// Закрытие попапа
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
