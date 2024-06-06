
let minX = -290
let minY = -190
let graph = false;

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
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "0";
}
function eins(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "1";
} 

function zwei(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "2"; 
} 

function drei(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "3"; 
} 

function vier(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "4"; 
} 

function fünf(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "5"; 
} 

function sechs(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "6"; 
} 

function sieben(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "7"; 
} 

function acht(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "8"; 
} 

function neun(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "9"; 
} 


function x(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "x"; 
} 

function plus(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "+"; 
} 
function minus(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "-"; 
} 

function mal(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "×"; 
} 

function geteilt(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "/"; 
} 


function hoch(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "^"; 
} 

function wurzel(){
    let aktuelleEingabe = document.getElementById("term").innerText; 
    document.getElementById("term").innerHTML = aktuelleEingabe + "√";
}

function del(){
    graph = false
    koordinatensystem();
    document.getElementById("term").innerHTML = "";
}


