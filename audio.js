var data = {
    title: [
        "Lav Eli Autumn",
        "LavEli_Garun_E_Ekel",
        "Nemra_-_Daisy",
        "Nemra_-_If_You_Go",
        "Rosa_Linn_-_Snap",
        "Yellowheart_-_Rosa_Linn_-_Vardaguyn",
        "Yellowheart_-_Felo_(3.33)_-_Mi_Tesak",
        "Yellowheart_-_Pntrum_Em",
        "Yellowheart_-_Shat_Pind",
        "Zaz-Que_vendra",
        "Zaz-Je_veux"
    ],

    song: [
        "music/Lav_Eli_-_Autumn_64705516.mp3",
        "music/LavEli_Garun_E_Ekel.mp3",
        "music/Nemra_-_Daisy.mp3",
        "music/Nemra_-_If_You_Go.mp3",
        "music/Rosa_Linn_-_Snap.mp3",
        "music/Yellowheart__Rosa_Linn_-_Vardaguyn.mp3",
        "music/Yellowheart_-_Felo_(3.33)_-_Mi_Tesak.mp3",
        "music/Yellowheart_-_Pntrum_Em.mp3",
        "music/Yellowheart_-_Shat_Pind.mp3",
        "music/Zaz-Que_vendra.mp3",
        "music/Zaz-Je_veux.mp3"

    ],

    poster: [
        "https://cdn-images.dzcdn.net/images/cover/035678c581929e9ba0fd565eb20f5e5d/1900x1900-000000-80-0-0.jpg",
        "https://images.genius.com/597e488845b41ff509b86350f00e84d0.640x640x1.png",
        "https://i.ytimg.com/vi/iIdCJUBb0_Q/maxresdefault.jpg",
        "https://i.ytimg.com/vi/8Gy2ZDGLteQ/sddefault.jpg",
        "https://i.scdn.co/image/ab67616d0000b273927f72f3739f256fb01d1470",
        "https://cdn-images.dzcdn.net/images/cover/c3d1b0f38bbba1248a3a980acf4269c2/0x1900-000000-80-0-0.jpg",
        "https://i.ytimg.com/vi/dlWtTGL47c0/maxresdefault.jpg",
        "https://i.ytimg.com/vi/hNcN6gzDqHA/hqdefault.jpg",
        "https://i.ytimg.com/vi/vu8Znyv_zZw/hqdefault.jpg",
        "https://i.scdn.co/image/ab67616d0000b273a0560dc982f712d788df75da",
        "https://i.scdn.co/image/ab67616d0000b2733b5969aba116e8248a3e6369"
    ]

}
let song = new Audio()
let currentSong = 0
console.log(song);

window.onload = function () {
    playSong()
}
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementById("row1")
    img.style.backgroundImage = "url (" + data.poster[currentSong] + ")"
    console.log(img);
    
    let main = document.getElementById("main")
    main.style.backgroundImage = "url (" + data.poster[currentSong] + ")"
    song.play

}
function playOrPauseSong() {
    let play = document.getElementById("play")
    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}