//Calculate age

function agecalculate (){

    let bornyear = document.getElementById("age").value
    let age =  (2023- bornyear);
    if (age < 0 ) {alert("age can never negetive")
    }
   
    else if (age>= 0)

    {
        alert(age)}

    else(!bornyear); {
alert("enter birth year") }
}
agecalculate()

