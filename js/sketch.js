// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
//let words = ['apple', 'bear', 'cat', 'dog'];

let face = ['10', '20', '30', '40', '60', '80', '90'];

function setup() {

    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);

}

function draw() {

    let sizeCubeFace = random(face);

    // Conditionellle nous permettant de savoir si la souris est appuyée
    // et si le timer est écoulé
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {

        // Appel de notre fonction generator
        generator2(width / 2, height / 2, random(5, 50));
        //uncube();

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

function generator2(x, y, profondeurCube) {
    let sizeCubeFace = random(face);
    let sizeCubeCote = sizeCubeFace / 2;
    for (let offset = sizeCubeFace; offset > 0; offset -= 10) {

        //console.log(x);

        rectMode(CENTER);
        //noStroke();

        //carré//
        fill(255, 255, 255);
        //rect(width / 2, height / 2, 50, 50);
        rect(x, y, sizeCubeFace, sizeCubeFace);

        //triangle haut droite//
        fill(255, 255, 0);
        //triangle(width / 2 - 25, height / 2 - 25, width / 2 + 25, height / 2 - 25,
        //    width / 2 + 40, height / 2 - 40);
        triangle(x - sizeCubeCote, y - sizeCubeCote,
            x + sizeCubeCote, y - sizeCubeCote,
            x + sizeCubeCote + profondeurCube, y - sizeCubeCote + profondeurCube);

        //triangle haut gauche//
        fill(255, 255, 0);
        //triangle(width / 2 - 25, height / 2 - 25, width / 2 - 5, height / 2 - 40, width / 2 + 40, height / 2 - 40);
        triangle(x - sizeCubeCote, y - sizeCubeCote,
            x + sizeCubeCote + profondeurCube, y - sizeCubeCote + profondeurCube,
            x - sizeCubeCote - profondeurCube, y - sizeCubeCote + profondeurCube);

        //triangle droite regarde vers le haut//
        fill(40, 33, 255);
        //triangle(width / 2 + 25, height / 2 - 25, width / 2 + 40, height / 2 - 40, width / 2 + 25, height / 2 + 25);
        triangle(x + sizeCubeCote, y - sizeCubeCote,
            x + sizeCubeCote + profondeurCube, y - sizeCubeCote + profondeurCube, x + sizeCubeCote, y + sizeCubeCote);

        fill(40, 33, 225);
        //triangle(width / 2 + 40, height / 2 + 5, width / 2 + 40, height / 2 - 40, width / 2 + 25, height / 2 + 25);
        triangle(x + sizeCubeCote + profondeurCube, y + sizeCubeCote + sizeCubeCote - profondeurCube,
            x + sizeCubeCote, y + sizeCubeCote,
            x + sizeCubeCote + profondeurCube, y + sizeCubeCote - profondeurCube);

    }
}

//function uncube() {

//}


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