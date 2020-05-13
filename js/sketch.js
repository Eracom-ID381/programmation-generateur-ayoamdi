// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
let words = ['apple', 'bear', 'cat', 'dog'];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
}

function draw() {
    // Conditionellle nous permettant de savoir si la souris est appuyée
    // et si le timer est écoulé
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
        // Appel de notre fonction generator
        //generator1(width / 2, height / 2, height - 400);
        generator2(10, 10);
        // generator2(random(innerWidth), random(innerHeight));
    }
}

// Fonction avec quatres paramètres
// function generator1(x, y, size) {
//     // fill utilise le paramètre de notre fonction
//     for (let offset = size; offset > 0; offset -= 10) {
//         fill(random(0, 230));
//         rect(x, y, offset, offset);
//         text(random(words), x, y);
//         console.log(offset);
//     }
// }

function generator2(x, y) {
    for (let x = 0; x < width; x = x + 5) {
        for (let y = 0; y < width; y = y + 5), 50) {
        fill(255, 255, 255);
        rect(x, y, 20, 20);
    }
}
}


// function generator2(x, y, ) {
//     // fill utilise le paramètre de notre fonction
//     for (let offset = size; offset > 0; offset -= 10) {
//         text(random('dog', 'cat', 'parrot'), x, y);
//         console.log(offset);
//     }
// }

// function generator2(wtexte, htext, letext) {
//     // fill utilise le paramètre de notre fonction
//     for (let offset = wtext; offset > 0; offset -= 10) {
//         text(letext, wtext, htext);
//         fill(255, 50, 50);
//         console.log(offset);
//     }
// }

function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}