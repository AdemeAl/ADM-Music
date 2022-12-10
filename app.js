
// loader

setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
        $('#loading').css("position", "relative");
        $("#box").css("display", "none");
    }, 500);
}, 500);



const refBtn = document.querySelector('.fa-arrows-rotate');

refBtn.addEventListener('click', function () {
    location.reload();
})

// list 
const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', () => {
    addBtn.classList.add('added');
    console.log('added');
})

// list 

const removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', () => {
    addBtn.classList.add('added');
    removeBtn.style.opacity = "1";
    console.log('added');
})



removeBtn.addEventListener('click', () => {
    addBtn.classList.remove('added');
    removeBtn.style.opacity = "0";
    console.log('removed');
})

//  reciter page

const recitersBtn = document.querySelector('.reciters');

function openPage() {
    document.querySelector('.reciter-page').classList.add('active');
}

function openPage2() {
    document.querySelector('.reciter-page2').classList.add('active');
}

function openPage3() {
    document.querySelector('.reciter-page3').classList.add('active');
}


const reciterCloseBtn = document.querySelector('.playlist-reciter .back-btn');

reciterCloseBtn.addEventListener('click', () => {
    document.querySelector('.reciter-page').classList.remove('active');
})

document.querySelector('.back-btn2').addEventListener('click', () => {
    document.querySelector('.reciter-page2').classList.remove('active');
})



document.querySelector('.back-btn3').addEventListener('click', () => {
    document.querySelector('.reciter-page3').classList.remove('active');
})

//////// carousel ////////




// navigations ///

// toogle music player


const musicPlayer = document.querySelector('.music-player');

let clickCount = 0;

musicPlayer.addEventListener('click', () => {
    if (clickCount >= 2) {
        musicPlayer.classList.add('active');
        clickCount = 1;
        return;
    }
    clickCount++;
    setTimeout(() => {
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
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.main i.fa-pause');
const repeatBtn = document.querySelector('span.fa-repeat');
const volumeBtn = document.querySelector('span.fa-volume-high');
const volumeSlider = document.querySelector('.volume-slider');


//  playBtn event

playBtn.addEventListener('click', () => {
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
    music.play();
})

// pauseBtn event


pauseBtn.addEventListener('click', () => {

    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
    music.pause();
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

    setTimeout(() => {
        musicBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
    currentMusicTime.innerHTML = '00: 00';

    queue.forEach(item => item.classList.remove('active'));
    queue[currentMusic].classList.add('active');
}
const queue2 = [...document.querySelectorAll('.queue2')];

const setMusic2 = (a) => {
    musicBar.value = 0;
    let song2 = songs2[a];
    currentMusic = a;

    music.src = song2.path;

    songName.innerHTML = song2.name;
    artistName.innerHTML = song2.artist;
    coverImage.src = song2.cover;

    setTimeout(() => {
        musicBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
    currentMusicTime.innerHTML = '00: 00';

    queue2.forEach(item2 => item2.classList.remove('active'));
    queue2[currentMusic].classList.add('active');
}

queue2.forEach((item2, a) => {
    item2.addEventListener('click', () => {
        setMusic2(a);
        playBtn.click();
    })
})

const queue3 = [...document.querySelectorAll('.queue3')];

const setMusic3 = (a) => {
    musicBar.value = 0;
    let song3 = songs3[a];
    currentMusic = a;

    music.src = song3.path;

    songName.innerHTML = song3.name;
    artistName.innerHTML = song3.artist;
    coverImage.src = song3.cover;

    setTimeout(() => {
        musicBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
    currentMusicTime.innerHTML = '00: 00';

    queue3.forEach(item3 => item3.classList.remove('active'));
    queue3[currentMusic].classList.add('active');
}

queue3.forEach((item3, a) => {
    item3.addEventListener('click', () => {
        setMusic3(a);
        playBtn.click();
    })
})

setMusic(0);

// format time duration 00:00 format

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0` + min;
    }

    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0` + sec;
    }

    return `${min} : ${sec}`;
}


//  music bar events

setInterval(() => {
    musicBar.value = music.currentTime;
    currentMusicTime.innerHTML = formatTime(music.currentTime);
    if (Math.floor(music.currentTime) == Math.floor(musicBar.max)) {
        if (repeatBtn.className.includes('active')) {
            setMusic(currentMusic);
            playBtn.click();

        } else {
            forwardBtn.click();
        }
    }
}, 500)

musicBar.addEventListener('change', () => {
    music.currentTime = musicBar.value;
})

// forward btn

forwardBtn.addEventListener('click', () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }

    setMusic(currentMusic);
    playBtn.click();
})

// backward btn

backwardBtn.addEventListener('click', () => {
    if (currentMusic <= 0) {
        currentMusic = song.lenght - 1;
    } else {
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




// name save

const take_input = document.getElementById("take_input")
const save_value = document.getElementById("save_value")
const localstorage_value = document.querySelector(".localstorage_value")
const nameChanger = document.querySelector('.name-changer');
const openNameBtn = document.querySelector('.name-container i');

const localstorage_value1 = document.querySelector('.localstorage_value1');

document.querySelector('.fa-house').addEventListener('click', () => {
    document.querySelector('.profil-page').classList.remove('active');
})

document.querySelector('.user-img').addEventListener('click', () => {
    document.querySelector('.profil-page').classList.add('active');
})

save_value.onclick = function () {
    localStorage.setItem('name', take_input.value);
    localstorage_value.innerHTML = localStorage.getItem("name");
    nameChanger.classList.remove('active');
    document.querySelector('.outsiders').classList.remove('active');
}
function get() {
    localstorage_value.innerHTML = localStorage.getItem("name");
    localstorage_value1.innerHTML = localStorage.getItem("name");
    const recentImageDataUrl = localStorage.getItem('recent-image');

    if (recentImageDataUrl) {
        document.querySelector('.user-img').setAttribute('src', recentImageDataUrl);
    }
}
openNameBtn.addEventListener('click', () => {
    nameChanger.classList.add('active');
    document.querySelector('.outsiders').classList.add('active');
})




