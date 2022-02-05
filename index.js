const video = document.querySelector('video');
const playBtn = document.querySelector('.control-bar__play-btn');
const playBtnVideo = document.querySelector('.player__play-btn-video');
let isPlaying; 

const isPlay = () => video.addEventListener ('playing', function() {isPlaying = true});
 
const play = () => video.play();
const pause = () => video.pause();
const stopStart = () => {
    playBtn.classList.toggle('pause');
    playBtnVideo.classList.toggle('onPause');
    isPlay()
    if (isPlaying) {
        pause();
        // isPlaying = false;
    } else {
        play();
        // isPlaying = true;
    };
};

// const stopStartHover = () => {
//     playBtn.classList.toggle('play-btn-hover');
// }


video.addEventListener('click', clk => {
    stopStart();
});
playBtn.addEventListener('click', clk => {
    stopStart();
});

// playBtn.addEventListener('mouseover', clk => {
//     console.log(!clk);
//     if (!clk) {
//         playBtn.classList.remove('play-btn-hover')
//     } else {
//         playBtn.classList.add('play-btn-hover')
//     }

// });








// video.addEventListener('play', play => {
//     console.log(`PLAYING? ${isPlaying}`);
//     // console.log(playBtn.style, document.querySelector('.play-btn'));
//     // playBtn.style.backgroundImage = "url('../assets/svg/play.svg')";
// })
// video.addEventListener('pause', paused => {
//     console.log(`PAUSED? ${isPlaying}`);
//     // playBtn.style.backgroundImage = "url('../assets/svg/pause.svg')";
// })

// console.log(` the end isPlaying: ${isPlaying}`);






// console.log(document.styleSheets[0].cssRules);

// for (let rule of document.styleSheets[0].cssRules) {
//     rule.cssText.replace('play', 'pause');
//     console.log(rule.cssText);
// };

// console.log(document.styleSheets[0].cssRules('.play-btn'));
// console.log(document.querySelector('.play-btn').style);
