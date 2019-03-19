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
            $.background(100);
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
        
        var first_circle, distance;

        function Circle(velocity, x, y){
            this.velocity = velocity;
            this.x = x;
            this.y = y;
            this.show = function(){
                phys.noStroke();
                phys.ellipse(this.x,this.y,25);
            }
            this.moveX = function(){
                if(this.x > phys.width - 13 || this.x < 13){
                    this.velocity = -(this.velocity);
                    phys.fill(phys.random(255), phys.random(255), phys.random(255));
                }
                this.x += this.velocity;
            }
        }

        phys.setup = function(){
            phys.createCanvas(400, 400);
            first_circle = new Circle(2, 40, 170);
            second_circle = new Circle(-2, 360,170);
        };
        
        phys.draw = function(){
            var colorR = phys.random(0,255);
            var colorG = phys.random(0,255);
            var colorB = phys.random(0,255);
            phys.background(0);
            phys.line(first_circle.x, first_circle.y, second_circle.x, second_circle.y);
            first_circle.show();
            first_circle.moveX();
            second_circle.show();
            second_circle.moveX();
            distance = Math.sqrt((first_circle.x - second_circle.x)*(first_circle.x - second_circle.x)+(first_circle.y - second_circle.y)*(first_circle.y - second_circle.y));
            let string = phys.map(distance, 25, 350, 10, 2);
            let stringColor = phys.map(distance, 25, 350, 150,255);
            phys.stroke(stringColor);
            phys.strokeWeight(string);
            if(distance < 25){
                first_circle.velocity = -(first_circle.velocity);
                second_circle.velocity = -(second_circle.velocity);
                phys.fill(phys.random(255), phys.random(255), phys.random(255));
            }
        };
            
     }

    var first_sketch = new p5(simpleSketch, 'first-sketch-container');
    var second_sketch = new p5(touchSketch, 'second-sketch-container');
    var third_sketch = new p5(physicSketch, 'third-sketch-container');
}