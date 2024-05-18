let operation
let operand1 
let operand2 


function eins (){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "1";
}

function zwei(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "2";
}

function drei(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "3";
}

function vier(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "4";
}

function fünf(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "5";
}

function sechs(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "6";
}

function sieben(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "7";
}

function acht(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "8";
}

function neun(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "9";
}

function zero(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + "0";
}

function plus(){
    operation = "+"
    operand1 = Number( document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = "";
}

function resultat(){
    operand2 = Number( document.getElementById("display").innerText);
    if (operation === "+"){
        document.getElementById("display").innerHTML = operand1 + operand2;
    }
    else if(operation === "-"){
        document.getElementById("display").innerHTML = operand1 - operand2;    
    }
    else if(operation === "*"){
        document.getElementById("display").innerHTML = operand1 * operand2;
    }
    else if(operation === "/"){
        document.getElementById("display").innerHTML = operand1 / operand2;
    }
    else if(operation === "%"){
        document.getElementById("display").innerHTML = (operand1 * operand2)/100
    }
    else if(operation === "**"){
        document.getElementById("display").innerHTML = (operand1)**(operand2)
    }
    else if(operation === ""){
        document.getElementById("display").innerHTML = (operand1)**(1/operand2)
    }
}

function del(){
    document.getElementById("display").innerHTML = "";
    operand1 = ""
    operand2 = ""
}

function minus(){
    operation = "-"
    operand1 = Number( document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = ""; 
}

function komma(){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + ".";
}
function mal(){
    operation = "*"
    operand1 = Number( document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = "";    
}
function geteilt(){
    operation = "/"
    operand1 = Number( document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = "";      
}
function prozent(){
    operation = "%"
    operand1 = Number( document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = "";
}
function potenz(){
    operation = "**"
    operand1 = Number( document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = "";
}
function wurzel(){
    operation = ""
    operand1 = Number( document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = "";
}
