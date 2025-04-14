var baseAudioContainer;
var audioElem;
var controls;
var playBtn;
var pauseBtn;
var currTime;
var seekBarContiner;
var inputRange;
var totalTime;
var closeBtn;

function appendAudioPlayer() {
    baseAudioContainer = document.createElement('div');
    baseAudioContainer.className = "audioContainer hide";

    audioElem = document.createElement('audio');
    audioElem.id = 'audio-player';
    // audioElem.controls = 'controls';
    audioElem.type = 'audio/mpeg';
    audioElem.addEventListener('canplay', function(){ audioCanPlay(); })
    audioElem.addEventListener('timeupdate', function(){ audioPlayback(); })

    controls = document.createElement('div');
    controls.className = "audioControls";

    playBtn = document.createElement('div');
    playBtn.className = "playBtn audioBtns";
    playBtn.addEventListener('click', function(){ playAudioPlayer(); });

    pauseBtn = document.createElement('div');
    pauseBtn.className = "pauseBtn audioBtns hide";
    pauseBtn.addEventListener('click', function(){ pauseAudioPlayer(); });

    currTime = document.createElement('div');
    currTime.className = "currTimeLbl timeLabel";
    currTime.innerText = "00:00";

    seekBarContiner = document.createElement('div');
    seekBarContiner.className = "seekBarContainer";

    inputRange = document.createElement('input');
    inputRange.type = "range";
    inputRange.min = "0";
    inputRange.max = "100";
    inputRange.step = "1";
    inputRange.value = "0";
    inputRange.addEventListener('change', function(){ seekBarUpdate(); })

    totalTime = document.createElement('div');
    totalTime.className = "totalTimeLbl timeLabel";
    totalTime.innerText = "00:00";

    closeBtn = document.createElement('div');
    closeBtn.className = "closeBtn audioBtns";
    closeBtn.addEventListener('click', function(){ closeAudioPlayer(); });


    seekBarContiner.append(inputRange);

    controls.append(playBtn, pauseBtn, currTime, seekBarContiner, totalTime, closeBtn);

    baseAudioContainer.append(audioElem, controls);

    document.getElementsByTagName('body')[0].append(baseAudioContainer);
}

function playAudioPlayer() {
    audioElem.play();
    playBtn.className = "playBtn audioBtns hide";
    pauseBtn.className = "pauseBtn audioBtns";
}

function pauseAudioPlayer() {
    audioElem.pause();
    playBtn.className = "playBtn audioBtns";
    pauseBtn.className = "pauseBtn audioBtns hide";
}

function closeAudioPlayer() {
    audioElem.pause();
    baseAudioContainer.className += " hide";
}

function seekBarUpdate() {
    var newTime = Math.floor(inputRange.value);

    audioElem.pause();
    audioElem.currentTime = newTime;

    setTimeout(() => {
        playAudioPlayer();
    }, 100)
}

function audioCanPlay() {
    inputRange.max = Math.floor(audioElem.duration);
    totalTime.innerText = convertTime(audioElem.duration);
    playAudioPlayer();
}

function audioPlayback() {
    var newValue = Math.floor(audioElem.currentTime);
    currTime.innerText = convertTime(audioElem.currentTime);
    inputRange.value = newValue;
}

function playAudio(path) {
    audioElem.src = path;
    baseAudioContainer.className = "audioContainer";
}

function convertTime(time) {
    var mins = Math.floor(time / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    
    var secs = Math.floor(time % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    
    return mins + ':' + secs;
}

$(document).ready(function() {
    appendAudioPlayer();
});
