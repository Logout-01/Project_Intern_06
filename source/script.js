window.onload = function () {
    var simpleSketch = function (sketch) {

        sketch.setup = function () {
            sketch.createCanvas(400, 400);
            sketch.background(0);
        };
        
        sketch.draw = function () {
            var r = sketch.random(0, 255);
            var g = sketch.random(0, 255);
            var b = sketch.random(0, 255);
            var randWidth = sketch.random(0, sketch.width);
            var randHeight = sketch.random(0, sketch.height);
            var randDiameter = sketch.random(10,100);
            sketch.noStroke();
            sketch.fill(r,g,b, 70);
            sketch.ellipse(randWidth, randHeight, randDiameter, randDiameter);
        };
    };

    var touchSketch = function ($) {
        
        $.setup = function () {
            $.createCanvas(400, 400);
            $.background(0);
            $.fill(255);
            $.text("Click to change color", 140, 170);
        };
        
        $.draw = function () {
            $.noStroke();
            $.ellipse($.mouseX, $.mouseY, 25);
        };

        $.mousePressed = function(){
            var colorR = $.random(0,255);
            var colorG = $.random(0,255);
            var colorB = $.random(0,255);
            $.fill(colorR, colorG, colorB,150);
        };
    };

    var physicSketch = function (phys) {
        
        var x = 140, y = 170;
        phys.setup = function(){
            phys.createCanvas(400, 400);
        };
        phys.speed = 5;
        phys.draw = function(){
            phys.background(0);
            function createObj(){
                phys.fill(colorR, colorG, colorB);
                phys.noStroke();
                phys.ellipse(x, y, 25);
            }
            if(x>phys.width || x < 0){
                var colorB = phys.random(0, 255);
                phys.speed = -phys.speed;
            }
            x = x + speed;
            createObj();
        };
            
     }

    var first_sketch = new p5(simpleSketch, 'first-sketch-container');
    var second_sketch = new p5(touchSketch, 'second-sketch-container');
    var third_sketch = new p5(physicSketch, 'third-sketch-container');
}