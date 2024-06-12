//Variabeln 
let minX = -290
let minY = -190
let graph = false;
let gespeicherteFunktion = [];
let zoom = 10

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

//Function fürs Zeichnen des Termes 
function zeichnen(){
    graph = true;
    stroke(0);
    let term = document.getElementById("term").innerText;
    term = term.replace("^","**");
    term = term.replace("×","*");
    let x = minX;
    while(x <= -minX){
        point (x*zoom + 300, -(eval(term))*zoom + 200);
        x+=0.01;
    }
}
//Funktion für das vollständige Kordinatensystem 
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
//Funktion für die Zahlen auf dem Strahl
function strahlzahlen(){
    let x = minX - minX%50;
    while(x <= -minX) {
        stroke(180)
        text(x/zoom, x + 300, 220);
        x+=50
    }
    let y = minY - minY%50;
    while(y <= -minY) {
        stroke(180);
        text(y/zoom, 305, (-y) + 200);
        y+=50
    }
}
//Funktion fürs Erstellen des Gitters 
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
//Funktion für die Nummer 0
function zero(){
    demTermhinzufügen("0")
}
//Funktion für die Nummer 1
function eins(){
    demTermhinzufügen("1")
} 
//Funktion für die Nummer 2
function zwei(){
    demTermhinzufügen("2")
} 
//Funktion für die Nummer 3
function drei(){
    demTermhinzufügen("3") 
} 
//Funktion für die Nummer 4
function vier(){
    demTermhinzufügen("4") 
} 
//Funktion für die Nummer 5
function fünf(){
    demTermhinzufügen("5")
} 
//Funktion für die Nummer 6
function sechs(){
    demTermhinzufügen("6")
} 
//Funktion für die Nummer 7 
function sieben(){
    demTermhinzufügen("7")
} 
//Funktion für die Nummer 8 
function acht(){
    demTermhinzufügen("8")
} 
//Funktion für die Nummer 9 
function neun(){
    demTermhinzufügen("9") 
} 
//Funktion für die X Variable 
function x(){
    demTermhinzufügen("x") 
} 
//Funktion für Additions Operation 
function plus(){
    demTermhinzufügen("+")
} 
//Funktion für Subtraktions Operation
function minus(){
    demTermhinzufügen("-")
} 
//Funktion für Mulitplikation Operation
function mal(){
    demTermhinzufügen("×")
} 
//Funktion für Teilungs Operation 
function geteilt(){
    demTermhinzufügen("/") 
} 
//Funktion für Potenz Operation 
function hoch(){
    demTermhinzufügen("^")
} 
//Funktion für Wurzel Operation 
function wurzel(){
    demTermhinzufügen("√")
}
//Funktion fürs Löschen des Graphen
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
//Unklar warum nicht Funktioniert
function zoomediting(){
    zoom = document.getElementById("zoom").innerText 
    zoom = parseFloat(zoom)
    if (!isNaN=zoom) {
        koordinatensystem()
        if(graph){
            zeichnen()
        }
    } 
    else {
        alert("Fehler:Ungültige Zahl")
    }
}
