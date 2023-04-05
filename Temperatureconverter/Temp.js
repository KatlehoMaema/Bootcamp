//Convert Temperature

//function cToF (c){
    
//  return   F = c*9/5+32

//}

//console.log(cToF(15))

function convert (){
let f = document.getElementById("entercelsius").value
  let c = (f-32) * 5/9;
  if (c<16){
    alert("it is cold, wear jacket");
  }
  else if(c>16 && c<21){
    alert("it is warm, wear t-shirt + jeans");
  }
  else{
    alert("it is hot, wear shots")
  }
  convert(50)
}