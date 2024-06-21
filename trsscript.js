//Variabeln 
let operation
let operand1 
let operand2 

//Funktionen für das Hinzufügen der Zahlen
function eins (){
    hinzufügenZahl("1")
}

function zwei(){
    hinzufügenZahl("2")
}

function drei(){
    hinzufügenZahl("3")
}

function vier(){
    hinzufügenZahl("4")
}

function fünf(){
    hinzufügenZahl("5")
}

function sechs(){
    hinzufügenZahl("6")
}

function sieben(){
    hinzufügenZahl("7")
}

function acht(){
    hinzufügenZahl("8")
}

function neun(){
    hinzufügenZahl("9")
}

function zero(){
    hinzufügenZahl("0")
}
//Funktionen für das Ausrechnen des Resultates 
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

//funktion für die Operationen
function plus(){
    operation = "+"
    operand1 = Number( document.getElementById("display").innerText);
    document.getElementById("display").innerHTML = "";
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
//Funktion für das Löschen des Displays 
function del(){
    document.getElementById("display").innerHTML = "";
    operand1 = ""
    operand2 = ""
}
//Funktion für Hinzufügen der Zahlen 
function hinzufügenZahl(zahl){
    let aktuelleEingabe = document.getElementById("display").innerText;
    document.getElementById("display").innerHTML = aktuelleEingabe + zahl;
}