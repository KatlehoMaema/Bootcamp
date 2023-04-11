//const gallery = document.getElementById ('gallery');
//const viewer = new viewer(gallery);
let show = document.querySelector(".image-slide")

let image = [
   "image1.jpg",
   "image2.jpg",
   "image3.jpg",
]

let current = 0;

function next(){
    show.src = image[current]
    current++
    if(current >= image.length){
        current = 0
    }
}

function prev(){
    show.src = image[current]
    current--
    if(current < 0){
        current = image.length -1
    }
}

