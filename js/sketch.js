// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 0.25;
let words = ['apple', 'bear', 'cat', 'dog'];
let counterX = 0;
let counterY = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);

}

function draw() {

    // Conditionellle nous permettant de savoir si la souris est appuyée
    // et si le timer est écoulé
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
        counterX += 1;
        // Appel de notre fonction generator
        //generator1(width / 2, height / 2, height - 400);
        generator2();
        uncube();
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

function generator2() {
    let x = 40 * counterX * 5;
    let y = 40 * counterY * 5;
    rect(x, y, 30, 30);

    if (x > width) {
        counterY += 1;
        counterX = 0;
    }
    console.log(x);
}

function uncube() {
    rectMode(CENTER);
    noStroke();

    fill(255, 0, 0);
    rect(width / 2, height / 2, 50, 50);
    //rect(x, y, sizeCubeFace, sizeCubeFace);

    fill(255, 255, 0);
    triangle(width / 2 - 25, height / 2 - 25, width / 2 + 25, height / 2 - 25,
        width / 2 + 40, height / 2 - 40);
    //triangle(x - sizeCubeFace/2, y - sizeCubeFace/2, x + sizeCubeFace/2, y - sizeCubeFace/2, x + profondeurCube, y - profondeurCube);

    fill(255, 255, 0);
    triangle(width / 2 - 25, height / 2 - 25, width / 2 - 15, height / 2 - 40, width / 2 + 35, height / 2 - 40);
    //triangle(x - sizeCubeFace/2, y - sizeCubeFace/2, x - 15, y - 40, x + 35, y - 40);

    fill(255, 150, 76);
    triangle(width / 2 + 25, height / 2 - 25, width / 2 + 40, height / 2 - 40, width / 2 + 25, height / 2 + 25);
    //triangle(x + 25, y - 25, x + 40, y - 40, x + 25, y + 25);

    fill(255, 150, 76);
    triangle(width / 2 + 40, height / 2 + 15, width / 2 + 40, height / 2 - 40, width / 2 + 25, height / 2 + 25);
    //triangle(x + 40, y + 15, x + 40, y - 40, x + 25, y + 25);

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