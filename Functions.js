function myFunction(f){
    return (5/9) *(f-32)
}
var f = 50
document.getElementById("demo").innerHTML = f + " graus fahrenheit em celsius é: " + myFunction(f)