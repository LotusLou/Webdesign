
let minX = -290
let minY = -190
let graph = false;
let gespeicherteFunktion = [];
function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    koordinatensystem();
    if (graph){
    zeichnen();
    }

} 
function zeichnen(){
    graph = true;
    stroke(0);
    let term = document.getElementById("term").innerText;
    term = term.replace("^","**");
    term = term.replace("×","*");
    let x = minX;
    while(x <= -minX){
        point (x + 300, -(eval(term)) + 200);
        x+=0.01;
    }
}

function koordinatensystem(){
    background (220);
    gitter(200, 10)
    gitter(130, 50)
    stroke(20);
    line(10,200,590,200);
    line(300,390,300,10);
    fill ("black");
    triangle (300,10,295,20,305,20);
    triangle (590,200,580,205,580,195);
    strahlzahlen();
}
function strahlzahlen(){
    let x = minX - minX%50;
    while(x <= -minX) {
        stroke(180)
        text(x, x + 300, 220);
        x+=50
    }
    let y = minY - minY%50;
    while(y <= -minY) {
        stroke(180);
        text(y, 305, (-y) + 200);
        y+=50
    }
}
function gitter(s,r){
    let x = minX - minX%50;
    while(x <= -minX) {
        stroke(s);
        line (x + 300, 10, x + 300, 390);
        x+= r;
    }
    let y = minY - minY%50;
    while(y <= -minY) {
        stroke(s)
        line(10, y + 200, 590, y + 200);
        y+= r;
    }
}

function zero(){
    demTermhinzufügen("0")
}
function eins(){
    demTermhinzufügen("1")
} 

function zwei(){
    demTermhinzufügen("2")
} 

function drei(){
    demTermhinzufügen("3") 
} 

function vier(){
    demTermhinzufügen("4") 
} 

function fünf(){
    demTermhinzufügen("5")
} 

function sechs(){
    demTermhinzufügen("6")
} 

function sieben(){
    demTermhinzufügen("7")
} 

function acht(){
    demTermhinzufügen("8")
} 

function neun(){
    demTermhinzufügen("9") 
} 


function x(){
    demTermhinzufügen("x") 
} 

function plus(){
    demTermhinzufügen("+")
} 
function minus(){
    demTermhinzufügen("-")
} 

function mal(){
    demTermhinzufügen("×")
} 

function geteilt(){
    demTermhinzufügen("/") 
} 


function hoch(){
    demTermhinzufügen("^")
} 

function wurzel(){
    demTermhinzufügen("√")
}

function del(){
    graph = false
    koordinatensystem();
    document.getElementById("term").innerHTML = "";
}
//Einen Wert dem Term hinzufügen
function demTermhinzufügen(wert) {
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + wert; 
}
// Funktion zum eine Funktion speichern
function speichereFunktion() {
    let aktuelleEingabe = document.getElementById("term").innerText;
    if (aktuelleEingabe.trim() !== "") {
        gespeicherteFunktion.push(aktuelleEingabe);
        aktualisiereGespeicherteFunktionen();
    }
}
// Anzeige gespeicherter Funktionen aktualisieren
function aktualisiereGespeicherteFunktionen() {
    let gespeicherteFunktionListe = document.getElementById("gespeicherteFunktionen");
    gespeicherteFunktionListe.innerHTML = "";
    gespeicherteFunktion.forEach((func, index) => {
        let li = document.createElement("li");
        li.innerText = func;
        li.onclick = () => selectFunction(index);
        gespeicherteFunktionListe.appendChild(li);
    });
}
// Gespeicherte Funktion auswählen und zeichnen
function selectFunction(index) {
    document.getElementById("term").innerText = gespeicherteFunktion[index];
    zeichnen();
}
document.addEventListener("DOMContentLoaded", () => {
    // Erstellen und Hinzufügen der Liste für gespeicherte Funktionen
    aktualisiereGespeicherteFunktionen();
})