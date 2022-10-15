




//////// carousel ////////

const carousel = [...document.querySelectorAll('.carousel img')];

let index = 0;

const changeCarousel = () => {
    carousel[index].classList.toggle('active');
    if(index >= carousel.lenght - 1){
        index = 0;
    } else {
        index++;
    }

    carousel[index].classList.toggle('active');
}

setInterval( () => {
    changeCarousel();
}, 3000);



// navigations ///

// toogle music player


const musicPlayer = document.querySelector('.music-player');

let clickCount = 1;

musicPlayer.addEventListener('click', () => {
    if(clickCount >= 2){
        musicPlayer.classList.add('active');
        clickCount = 1;
        return;
    }
    clickCount++;
    setTimeout( () => {
        clickCount = 1;

    }, 250);
})



//  back from music player

const backBtn = document.querySelector('.music-player .back-btn');

backBtn.addEventListener('click', () => {
    musicPlayer.classList.remove('active');
})


// playlist acces

const playlist = document.querySelector('.playlist');
const navBtn = document.querySelector('.music-player .nav-btn');

navBtn.addEventListener('click', () => {
    playlist.classList.add('active');
})


//  back from playslist

const backBtnPlaylist = document.querySelector('.playlist .back-btn');

backBtnPlaylist.addEventListener('click', () => {
    playlist.classList.remove('active');
})



//////////// MUSIC //////////

let currentMusic = 0;

const music = document.querySelector('#audio-source');

const musicBar = document.querySelector('.music-bar');
const songName = document.querySelector('.current-song-name');
const artistName = document.querySelector('.artist-name');
const coverImage = document.querySelector('.cover');
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');

const queue = [...document.querySelectorAll('.queue')];

// selct all butn here

const forwardBtn = document.querySelector('i.fa-forward-step');
const backwardBtn = document.querySelector('i.fa-backward-step');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const repeatBtn = document.querySelector('span.fa-repeat');
const volumeBtn = document.querySelector('span.fa-volume-high');
const volumeSlider = document.querySelector('.volume-slider');


//  playBtn event

playBtn.addEventListener('click', () => {
    music.play();
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
})

// pauseBtn event

pauseBtn.addEventListener('click', () => {
    music.pause();
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
})

//  function for setting music

const setMusic = (i) => {
    musicBar.value = 0;
    let song = songs[i];
    currentMusic = i;

    music.src = song.path;
    
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverImage.src = song.cover;

    setTimeout( () => {
        musicBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
    currentMusicTime.innerHTML = '00: 00';

    queue.forEach(item => item.classList.remove('active'));
    queue[currentMusic].classList.add('active');
}

setMusic(1);

// format time duration 00:00 format

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0` + min;
    }

    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0` + sec;
    }

    return `${min} : ${sec}`;
}


//  music bar events

setInterval( () => {
    musicBar.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(musicBar.max)){
        if(repeatBtn.className.includes('active')){
            setMusic(currentMusic);
            playBtn.click();

        } else{
            forwardBtn.click();
        }
    }
}, 500)

musicBar.addEventListener('change', () => {
    music.currentTime = musicBar.value;
})

// forward btn

forwardBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length -1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }

    setMusic(currentMusic);
    playBtn.click();
})

// backward btn

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = song.lenght -1;
    } else{
        currentMusic--;
    }

    setMusic(currentMusic);
    playBtn.click();
})


// repeat btn

repeatBtn.addEventListener('click', () => {
    repeatBtn.classList.toggle('active');
    
})


//  volume part

volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('active');
    volumeSlider.classList.toggle('active');
})

volumeSlider.addEventListener('input', () => {
    music.volume = volumeSlider.value;
})

queue.forEach((item, i) => {
    item.addEventListener('click', () => {
        setMusic(i);
        playBtn.click();
    })
})




