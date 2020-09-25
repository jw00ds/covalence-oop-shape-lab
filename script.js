
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
        this.div.dblclick(() => this.remove());
        this.div.click(() => this.describe());
    }
    place() {
        $("div#shape-canvas").append(this.div);
        this.div.css("left", `${Math.floor(Math.random() * 400)}px`);
        this.div.css("top", `${Math.floor(Math.random() * 400)}px`);
    }
    remove() {
        $("div#shape-canvas").remove(this.div);
    }
    describe() {
        $("div#info-side-panel").append(`
            Shape Name: ${this.className} 
            Width: ${this.attr("width")} 
            Height: ${this.attr("height")} 
            Radius: REPLACE THIS ONE WITH A CHILD-SPECIFIC FN TO REF THEN OMIT IF N/A
            Area: REPLACE THIS ONE WITH A CHILD-SPECIFIC FN TO REF THEN OMIT IF N/A 
            Perimeter: REPLACE THIS ONE WITH A CHILD-SPECIFIC FN TO REF THEN OMIT IF N/A
        `);
    }
}
// Children
class Square extends Shape {
    constructor(hgt) {
        super(hgt);
        this.div = $(`<div class="square"></div>`);
        this.div.css("width", `${hgt}px`); // Why can't these be moved into the parent? I tried to do that way; didn't work.
        this.div.css("height", `${hgt}px`);
        this.place(); // <<<< Why does it not work when I call this method in the parent? (I.e. can methods be inherited and run from a parent?) It didn't work till I put the immediately invoked method into the child here.
    }
}
class Rectangle extends Shape {
    constructor(hgt, w) {
        super(hgt, w);
        this.div = $(`<div class="rectangle"></div>`);
        this.div.css("width", `${w}px`);
        this.div.css("height", `${hgt}px`);
        this.place();
    }
}
class Circle extends Shape {
    constructor(rad) {
        // super(hgt)
        this.div = $(`<div class="circle"></div>`);
        this.div.css("width", `${rad}px`);
        this.div.css("height", `${rad}px`);
        this.place();
    }
}
class Triangle extends Shape {
    constructor(sdLen) {
        // super(hgt)
        this.div = $(`<div class="triangle"></div>`);
        this.div.css("width", `${sdLen}px`);
        this.div.css("height", `${sdLen}px`);
        this.place();
    }
}
