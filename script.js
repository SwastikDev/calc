function addition(){
    let total = document.getElementById("ans").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let ans = parseInt(num1) + parseInt(num2)
    document.getElementById("ans").innerText = ans;
}
function substraction(){
    let total = document.getElementById("ans").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let ans = parseInt(num1) - parseInt(num2)
    document.getElementById("ans").innerText = ans;
}
function multiplication(){
    let total = document.getElementById("ans").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let ans = parseInt(num1) * parseInt(num2)
    document.getElementById("ans").innerText = ans;
}
function division(){
    let total = document.getElementById("ans").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let ans = parseInt(num1) / parseInt(num2)
    document.getElementById("ans").innerText = ans;
}