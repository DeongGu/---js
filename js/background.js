const bgImage = document.querySelector("body");

let images = ["20191020.jpg","20170116.jpg","1585027115011.jpg"];

let chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage.style.backgroundImage = `url('/image/${chosenImage}'`;