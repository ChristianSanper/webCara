let mic;

function setup() {

    var canvas = createCanvas(windowWidth, windowHeight);
    canvas;
    canvas.parent('canvas');
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
}

function touchStarted() {
    getAudioContext().resume();
}

function draw() {
    background('#5B9279');

    micLevel = mic.getLevel();
    console.log(micLevel);
    mov = map(micLevel, 0, 1, 2, 60);

    translate(width / 4, height / 6);

    //oreja izq
    fill('#BF8040');
    ellipse(0, height / 3, width / 10);
    fill('black');
    ellipse(0, height / 3, width / 20);

    //oreja der
    fill('#BF8040');
    ellipse(width / 2, height / 3, width / 10);
    fill('black');
    ellipse(width / 2, height / 3, width / 20);

    //cabeza
    stroke('black');
    rectMode(CORNER);
    strokeWeight(5);
    fill('#BF8040')
    rect(0, 0, width / 2, height / 1.5, 50);

    //gorro
    fill('yellow')
    rect(0, 0, width / 2, height / 8, 30);
    fill('#F77103')
    rect(0, 60, width / 2, height / 20, 100);

    fill('#FDCE8B')
    //ojo izq
    fill('black');
    ellipse(width / 8, height / 4, width / 12);
    fill(255)
    ellipse(width / 8, height / 4, width / 18);

    //ojo der
    fill('black');
    ellipse(width / 2.65, height / 4, width / 12);
    fill(255)
    ellipse(width / 2.65, height / 4, width / 18);

    //ceja izq
    fill('#922913');
    rectMode(CENTER);
    rect(width / 8, (height / 5) - (mov * 0.6), width / 9, width / 20, 50);

    //ceja der
    rect(width / 2.65, (height / 5) - (mov * 0.6), width / 9, width / 20, 50);

    //nariz
    fill('#432818');
    rect(width / 4, height / 3, width / 15, height / 4, 50);

    //boca
    rectMode(CORNER);
    //interior bucal
    fill('black');
    rect(width / 12, height / 2 + 10, width / 3, ((height / 38) + (mov * 1.6)));

    //lengua
    fill('pink');
    rect(width / 8, (height / 1.95) + (mov * 1.6), width / 4, height / 50, 50);

    //labio superior
    fill('#432818');
    rect(width / 12, height / 2, width / 3, height / 40, 50, 50, 0);

    //labio inferior
    rect(width / 12, (height / 1.9) + (mov * 1.6), width / 3, height / 40, 0, 0, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


