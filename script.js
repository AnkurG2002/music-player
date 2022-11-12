const music = new Audio('audio/1.mp3');

const songs = [
    {
        id: 1,
        songName: `Ashq Na ho 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/ashq na ho.jpg"
    },
    {
        id: 2,
        songName: `Channa Mereya 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/channa mereya.jpg"
    },
    {
        id: 3,
        songName: `Jo Bheji Thi Dua 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/Jo Bheji thi dua.jpg"
    },
    {
        id: 4,
        songName: `Kesariya
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/kesariya.jpg"
    },
    {
        id: 5,
        songName: `Khamoshiyan
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/Khamoshiyan.jpg"
    },
    {
        id: 6,
        songName: `Nashe Si Chad Gayi
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/nashe si chad gyi.jpg"
    },
    {
        id: 7,
        songName: `Soch Na Sake
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/soch na sake.jpg"
    },
    {
        id: 8,
        songName: `Sooraj Dooba Hai
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/sooraj dooba hai.jpg"
    }
]



Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    e.getElementsByTagName('i')[0].id = songs[i].id;
});

Array.from(document.getElementsByClassName('songItem_2')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    e.getElementsByTagName('i')[0].id = songs[i].id;
});




let play_side = document.getElementsByClassName('master_play')[0];
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', function(){
    if(music.paused || music.currentTime <= 0){
        music.play();
        play_side.classList.add('active_play');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        wave.classList.add('active1');
    }
    else{
        music.pause();
        play_side.classList.remove('active_play');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
        wave.classList.remove('active1');
    }
});




const resetPlay = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
        e.classList.add('bi-play-circle-fill');
        e.classList.remove('bi-pause-circle-fill');
    })
}
const resetBackgroundColor = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((e) => {
        e.style.backgroundColor = 'inherit';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', function(e1){
        index = e1.target.id;

        music.src = `audio/${index}.mp3`;
        music.play();
        
        play_side.classList.add('active_play');
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        wave.classList.add('active1');

        let songTitles = songs.filter((elem) => {
            return elem.id == index;
        });
        
        songTitles.forEach(element => {
            let { songName, poster } = element;
            title.innerHTML = songName;
            poster_master_play.src = poster;
        });

        resetBackgroundColor();
        resetPlay();

        Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroundColor = '#342d48';
        e1.target.classList.remove('bi-play-circle-fill');
        e1.target.classList.add('bi-pause-circle-fill');

    });
});



let currentStart = document.getElementById('curr_time');
let currentEnd = document.getElementById('end_time');
let seek = document.getElementById('seek');
let bar = document.getElementById('bar');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', function(){
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if(min1 < 10){
        min1= `0${min1}`;
    }
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(min2 < 10){
        min2= `0${min2}`;
    }
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseFloat((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;

});

seek.addEventListener('change', function(){
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');
let vol_per = document.getElementById('vol_per');

vol.addEventListener('change', function(){
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 33){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    }
    if(vol.value > 66){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_per.innerHTML = `${vol_a}%`;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', function(){
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    console.log(index);
    music.src = `audio/${index}.mp3`;
    music.play();
    
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');
    wave.classList.add('active1');

    let songTitles = songs.filter((elem) => {
        return elem.id == index;
    });
    
    songTitles.forEach(element => {
        let { songName, poster } = element;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    resetBackgroundColor();
    resetPlay();

    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroundColor = '#342d48';
    e1.target.classList.remove('bi-play-circle-fill');
    e1.target.classList.add('bi-pause-circle-fill');
});

next.addEventListener('click', function(){
    index += 1;
    let len = Array.from(document.getElementsByClassName('songItem')).length;
    if(index > len){
        index = 1;
    }
    console.log(index);
    music.src = `audio/${index}.mp3`;
    music.play();
    
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');
    wave.classList.add('active1');

    let songTitles = songs.filter((elem) => {
        return elem.id == index;
    });
    
    songTitles.forEach(element => {
        let { songName, poster } = element;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    resetBackgroundColor();
    resetPlay();

    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgroundColor = '#342d48';
    e1.target.classList.remove('bi-play-circle-fill');
    e1.target.classList.add('bi-pause-circle-fill');
});




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})