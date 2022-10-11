const music = new Audio('audio/1.mp3');
music.play();

const songs = [
    {
        id: 1,
        songName: `Ashq Na ho <br> 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/ashq na ho.jpg"
    },
    {
        id: 2,
        songName: `Channa Mereya <br> 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/channa mereya.jpg"
    },
    {
        id: 3,
        songName: `Jo Bheji Thi Dua <br> 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/Jo Bheji thi dua.jpg"
    },
    {
        id: 4,
        songName: `Kesariya <br> 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/kesariya.jpg"
    },
    {
        id: 5,
        songName: `Khamoshiyan <br> 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/Khamoshiyan.jpg"
    },
    {
        id: 6,
        songName: `Nashe Si Chad Gayi <br> 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/nashe si chad gyi.jpg"
    },
    {
        id: 7,
        songName: `Soch Na Sake <br> 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/soch na sake.jpg"
    },
    {
        id: 8,
        songName: `Sooraj Dooba Hai <br> 
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "assets/sooraj dooba hai.jpg"
    }
]

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