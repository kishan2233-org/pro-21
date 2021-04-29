var canvas;
var music;
var  surface1, surface2, surface3,surface4;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(930,600);
music.loop();
    //create 4 different surfaces
    surface1=createSprite(120,560,200,20);
    surface1.shapeColor="blue";

    surface2=createSprite(350,560,200,20);
    surface2.shapeColor="orange";

    surface3=createSprite(580,560,200,20);
    surface3.shapeColor="red";

    surface4=createSprite(810,560,200,20);
    surface4.shapeColor="green";


    //create box sprite and give velocity
    box=createSprite(random(20,750),300,20,20);
    box.shapeColor="white";

    box.velocityX=-5;
    box.velocityY=-5;

}

function draw() {
    background('black');
    
    //create edgeSprite
   edges = createEdgeSprites();
   box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor="blue";
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="orange";
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="red";
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="green";
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
    }

    drawSprites();
}
