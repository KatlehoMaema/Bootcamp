//const gallery = document.getElementById ('gallery');
//const viewer = new viewer(gallery);
let show = document.querySelector(".image-slide")

let image = [
   "image1.jpg",
   "image2.jpg",
   "image3.jpg",
   "image4.jpg",
   "image6.jpg",
   "image7.jpg",
   "image8.jpg",
]

let current = 0;
function save() {
    let img = document.querySelector(".file").value;
    image.push(img);
    console.log(img)
    document.querySelector("file").value = '';
}

function next(){
    
   current++
    if(current >= image.length){
        current = 0

    }
    show.src = image[current]
}

function prev(){
    
    current--
    if(current < 0){
        current = image.length -1
    }
    show.src = image[current]
}

let pictures = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
]
 //localStorage.setItem("image",JSON.stringfy(pictures))
localStorage.setItem("pictures", JSON.stringify(image));
localStorage.getItem(image);


let mages;
if(localStorage.getItem("images")){
    image = JSON.parse(localStorage.getItem("images"));

}