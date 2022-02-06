const video = document.querySelector('.player__video');
const playBtnMain = document.querySelector('.player__main-play-btn');
const playBtn = document.querySelector('.play-btn');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeBtn = document.querySelector('.volume-btn');
const volume = document.querySelector('.volume');
const volumeFilled = document.querySelector('.volume__filled');

const stopStart = () => {
    video.paused ? video.play() : video.pause();
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

const updateVolume = () => volumeFilled.style.flexGrow = `${video.volume}`;

const updateVideoVolume = (event) => video.volume = event.offsetX / volume.offsetWidth;

const updateVideoVolumeScroll = (event) => {
    if(event.deltaY < 0) {
        video.volume = Math.min((video.volume + 0.1), 1)
    } else {
        video.volume = Math.max((video.volume - 0.1), 0)
    }
}
const muting = () => {
    volumeBtn.classList.toggle('muted');
    video.muted ? video.muted = false : video.muted = true;
}

video.addEventListener('click', clk => stopStart())
playBtn.addEventListener('click', clk => stopStart())
playBtnMain.addEventListener('click', clk => stopStart())

video.addEventListener('timeupdate', updateProgress)
progress.addEventListener('click', updateVideoTime)

video.addEventListener('volumechange', updateVolume)
volume.addEventListener('click', updateVideoVolume)

video.addEventListener('mousewheel', updateVideoVolumeScroll)
volume.addEventListener('mousewheel', updateVideoVolumeScroll)

volumeBtn.addEventListener('click', muting)

video.addEventListener('play', changePlayIcons)
video.addEventListener('pause', changePlayIcons)

// default volume settings
video.volume = 0.5
updateVolume();