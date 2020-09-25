
$("input#sq-btn").click(function () {
    // console.log("Oh, Johnny, I apologize; I forgot you were there");
    new Square($("input#sq-ipt").val());
});
$("input#rec-btn").click(function () {
    new Rectangle($("input#rec-hgt-ipt").val(), $("input#rec-w-ipt").val());
});
$("input#cir-btn").click(function () {
    new Circle($("input#cir-ipt").val());
});
$("input#tri-btn").click(function () {
    new Triangle($("input#tri-ipt").val());
});


// Define shapes

// Parent
class Shape {
    constructor(hgt, w) {
        this.hgt = hgt;
        this.w = w;
        this.div = $(`<div class="shape">`);
        // this.div.dblclick(function () { console.log("You're a daisy if you do") });
        this.div.dblclick(() => this.remove());
    }
    place() {
        $("div#shape-canvas").append(this.div);
        this.div.css("left", `${Math.floor(Math.random() * 400)}px`);
        this.div.css("top", `${Math.floor(Math.random() * 400)}px`);
    }
    remove() {
        $("div#shape-canvas").remove(this.div);
    }
}
// Children
class Square extends Shape {
    constructor(hgt) {
        super(hgt, hgt);
        this.div.addClass("square");
        this.div.css("width", `${hgt}px`); // Why can't these be moved into the parent? I tried to do that way; didn't work.
        this.div.css("height", `${hgt}px`); // Also - I tried shorthand here with space; it didn't work
        this.place(); // <<<< Why does it not work when I call this method in the parent? (I.e. can methods be inherited and run from a parent?) It didn't work till I put the immediately invoked method into the child here.
        this.div.click(() => this.describe());
    }
    describe() {
        $("div#info-side-panel").append(`
            Shape Name: Square \

            Width: ${this.div.css("width")} \

            Height: ${this.div.css("height")} \

            Radius: N/A \

            Area: ${this.div.css("width").match(/\d+/) * this.div.css("height").match(/\d+/)}px \
            
            Perimeter: ${this.div.css("width").match(/\d+/) * 4}px
        `);
    }
}
class Rectangle extends Shape {
    constructor(hgt, w) {
        super(hgt, w);
        this.div.addClass("rectangle");
        this.div.css("width", `${w}px`);
        this.div.css("height", `${hgt}px`);
        this.place();
        this.div.click(() => this.describe());
    }
    describe() {
        $("div#info-side-panel").append(`
            Shape Name: Rectangle 
            Width: ${this.div.css("width")} 
            Height: ${this.div.css("height")} 
            Radius: N/A
            Area: ${this.div.css("width").match(/\d+/) * this.div.css("height").match(/\d+/)}px
            Perimeter: ${(this.div.css("width").match(/\d+/) * 2) + (this.div.css("height").match(/\d+/) * 2)}px
        `);
    }
}
class Circle extends Shape {
    constructor(rad) {
        super(rad, rad);
        this.rad = rad;
        this.div.addClass("circle");
        this.div.css("width", `${rad * 2}px`);
        this.div.css("height", `${rad * 2}px`);
        this.place();
        this.div.click(() => this.describe());
    }
    describe() {
        $("div#info-side-panel").append(`
            Shape Name: Circle 
            Width: ${this.div.css("width")} 
            Height: ${this.div.css("height")} 
            Radius: ${this.rad}px 
            Area: ${Math.pow(this.rad, 2)}px 
            Perimeter: ${Math.round(this.div.css("width").match(/\d+/) * 3.14)}px 
        `);
    }
}
class Triangle extends Shape {
    constructor(sdLen) {
        super(sdLen, sdLen);
        this.sdLen = sdLen;
        this.div.addClass("triangle");
        this.div.css("width", `${sdLen}px`);
        this.div.css("height", `${sdLen}px`);
        this.place();
        this.div.click(() => this.describe());
    }
    describe() {
        $("div#info-side-panel").append(`
            Shape Name: Triangle 
            Width: ${this.div.css("width")} 
            Height: ${this.div.css("height")} 
            Radius: N/A
            Area: ${Math.round(this.div.css("width").match(/\d+/) * this.div.css("height").match(/\d+/) * 0.5)}px 
            Perimeter: ${Math.round((2 * this.div.css("width").match(/\d+/)) + (Math.sqrt(2) * this.div.css("height").match(/\d+/)))}px 
        `);
    }
    // describe() {
    //     $("div#info-side-panel").append(`
    //         Shape Name: ${this.div.className} -- WHY DOESN'T THIS WORK?
    //     `);
    // }
    // calculateArea() {
    //     return this.div.css("width").match(/\d+/) * this.div.css("height").match(/\d+/) * 0.5;
    // }
    // calculatePerimeter() {
    //     return (2 * this.div.css("width").match(/\d+/)) + (Math.sqrt(2) * this.div.css("height").match(/\d+/));
    // }
}
