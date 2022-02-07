// --- selectors ------------------------

const player = document.querySelector('.player');
const video = document.querySelector('.player__video');
const playBtnMain = document.querySelector('.player__main-play-btn');
const playBtn = document.querySelector('.play-btn');
const progress = document.querySelector('.progress');
const progressLabel = document.querySelector('.progress__label');
const progressFilled = document.querySelector('.progress__filled');
const volumeBtn = document.querySelector('.volume-btn');
const volume = document.querySelector('.volume');
const volumeLabel = document.querySelector('.player__volume-label');
const volumeFilled = document.querySelector('.volume__filled');
const controlBar = document.querySelector('.control-bar');

// --- functions ------------------------

const hoverAdd = () => controlBar.classList.add('hover');
const hoverRemove = () => controlBar.classList.remove('hover');

const stopStart = () => {
    video.paused ? video.play() : video.pause();
    hoverAdd();
    setTimeout(hoverRemove, 4000 );
};

const changePlayIcons = () => {
    playBtn.classList.toggle('pause');
    playBtnMain.classList.toggle('showOnPause');
}
  
const updateProgress = () => {
    const currentPercent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexGrow = `${currentPercent / 100}`;
}

const updateVideoTime = (event) => video.currentTime = (event.offsetX / progress.offsetWidth) * video.duration;

const updateVolume = () => {
    volumeFilled.style.flexGrow = `${video.volume}`
    volumeLabel.textContent = Math.round(video.volume * 100) + '%';
    volumeLabel.style.display = 'block';
    setTimeout(() => volumeLabel.style.display = 'none', 3000 );
};

const updateVideoVolume = (event) => video.volume = event.offsetX / volume.offsetWidth;

const updateVideoVolumeScroll = (event) => {
    event.deltaY < 0 ? 
        video.volume = Math.min( Math.round(video.volume * 100) / 100 + 0.1, 1) : 
        video.volume = Math.max( Math.round(video.volume * 100) / 100 - 0.1, 0);
    video.volume === 0 ? volumeBtn.classList.add('muted') : volumeBtn.classList.remove('muted');
}

const muting = () => {
    volumeBtn.classList.toggle('muted');
    if (video.muted === false) {
        video.muted = true;
        video.volume = 0;
    } else {
        video.muted = false;
        video.volume = 0.3;
    }
}

const toLocate = (val) => {
    return Math.round(val).toString().length > 2 ? Math.round(val) : ("0" + Math.round(val)).slice(-2)
}

const progressLabelUpdate = () => {
    const currentSec = toLocate(video.currentTime % 60);
    const currentHrs = toLocate(Math.floor(video.currentTime / 60 / 60));
    const currentMts = toLocate(Math.floor(video.currentTime / 60 ) - currentHrs * 60);
    const totalSec = toLocate(video.duration % 60);
    const totalHrs = toLocate(Math.floor(video.duration / 60 / 60));
    const totalMts = toLocate(Math.floor(video.duration / 60 ) - totalHrs * 60);
    progressLabel.textContent = `${currentHrs}:${currentMts}:${currentSec} / ${totalHrs}:${totalMts}:${totalSec}`
};

// --- event listeners ------------------------

video.addEventListener('click', stopStart)
playBtn.addEventListener('click', stopStart)
playBtnMain.addEventListener('click', stopStart)

video.addEventListener('timeupdate', () => {updateProgress(); progressLabelUpdate()})
progress.addEventListener('click', updateVideoTime)

video.addEventListener('volumechange', updateVolume)
volume.addEventListener('click', updateVideoVolume)

player.addEventListener('wheel', updateVideoVolumeScroll)

volumeBtn.addEventListener('click', muting)

video.addEventListener('play', changePlayIcons)
video.addEventListener('pause', changePlayIcons)

progress.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', updateVideoTime);
});
progress.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', updateVideoTime);
});

window.addEventListener("keydown", function(event) {
    if (event.key === " ") stopStart()
});

volume.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', updateVolume);
});
volume.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', updateVolume);
});

// --- presets ------------------------

video.volume = 0.3;
updateVolume();
volumeLabel.style.display = 'none';
progressLabel.textContent = `00:00:00`;

console.log (
`Добрый день! И спасибо, что уделили мне время!

В этом задании постарался максимально кастомизировать видеоплеер
и прочуствовать некоторые другие пути, поэтому не использовал тег input.
В следующий раз подумаю трижды...

Предварительная оценка 60 баллов:

[+5] вёрстка видеоплеера: есть само видео, в панели управления есть кнопка Play/Pause, прогресс-бар, кнопка Volume/Mute, регулятор громкости звука
[+5] в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс
[+5] при клике по кнопке Play/Pause запускается или останавливается проигрывание видео
[+5] внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли видео в данный момент
[+10] Прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка
[+10] При перемещении ползунка регулятора громкости звука можно сделать звук громче или тише. Разный цвет регулятора громкости звука до и после ползунка
[+10] При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля
[+5] есть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления
[+5] когда видео проигрывается, кнопка Play/Pause в центре видео скрывается, когда видео останавливается, кнопка снова отображается
[+10] Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения

Хоть ползунка и нет, но видео можнол перематывать "нажатием и протавкиванием влево/вправо"

Дополнительный функционал:
    - клавиша "Пробел" запускает/отстанавливает видео
    - "Колесико" мышки регулирует громкость (если указатель мыши находится в области видео)
    - добвлено отображение текушего времени проигрывания
    - панель управления автоматически сворачивается в тоненькую полоску-индикатор (при наведении мыши появляется обратно)
`
)