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

    //
//    document.querySelector("file").value = '';
}
//adding a picture using add btn



//Creating the next and prev btn
function next(){
    
    current++
    if(current >= image.length){
        current = 0;

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

function removeImage(){

    image.splice (current,1);
}

function add(){
    let image = document.querySelector(".new-image").value;

//console.log(image);

//    console.push(image);
    localStorage.setItem("pictures", JSON.stringify(image));
}

// let pictures = [
//     "image1.jpg",
//     "image2.jpg",
//     "image3.jpg",
//     "image4.jpg",
//     "image6.jpg",
//     "image7.jpg",
//     "image8.jpg",
// ]
image.push(img)
 localStorage.setItem("pictures", JSON.stringify(image))
 localStorage.getItem(image);

//function removeImage(){
//    image.splice(i,1);
//}

//  let images;
//  if(localStorage.getItem("keygee")){
//      image = JSON.parse(localStorage.getItem("keygee"));
//  }else{
//      //image["image1.jpg","image2","image3.jpg","image4.jpg","image6.jpg","image7.jpg","image7.jpg"];
//  }



