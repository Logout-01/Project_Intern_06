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
        };
        
        $.draw = function () {
            var colorR = $.random(0,255);
            var colorG = $.random(0,255);
            var colorB = $.random(0,255);
            $.noStroke();
            $.fill(colorR, colorG, colorB, 50);
            $.ellipse($.mouseX, $.mouseY, 25,25);

        };
    };

    var first_sketch = new p5(simpleSketch, 'first-sketch-container');
    var second_sketch = new p5(touchSketch, 'second-sketch-container');
}