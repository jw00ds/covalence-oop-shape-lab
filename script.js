

// Set up shape-creation buttons
$("input#sq-btn").click(function () {
    // console.log("Oh, Johnny, I apologize; I forgot you were there");
    new Square($("input#sq-ipt").val());
    // $("#tri-ipt").val("");
});
$("input#rec-btn").click(function () {
    new Rectangle($("input#rec-hgt-ipt").val(), $("input#rec-w-ipt").val());
    // $("#rec-hgt-ipt").val("");
    // $("#rec-w-ipt").val("");
});
$("input#cir-btn").click(function () {
    new Circle($("input#cir-ipt").val());
    // $("#tri-ipt").val("");
});
$("input#tri-btn").click(function () {
    new Triangle($("input#tri-ipt").val());
    // $("#tri-ipt").val("");
});


//Set up info bar
$("#info-side-panel").append(`<div id="info-side-panel-shpNm-div"><span>Shape:  </span><span id="info-side-panel-shpNm-span"></span></div>`);
$("#info-side-panel").append(`<div id="info-side-panel-w-div"><span>Width:  </span><span id="info-side-panel-w-span"></span></div>`);
$("#info-side-panel").append(`<div id="info-side-panel-hgt-div"><span>Height:  </span><span id="info-side-panel-hgt-span"></span></div>`);
$("#info-side-panel").append(`<div id="info-side-panel-rad-div"><span>Radius:  </span><span id="info-side-panel-rad-span"></span></div>`);
$("#info-side-panel").append(`<div id="info-side-panel-area-div"><span>Area:  </span><span id="info-side-panel-area-span"></span></div>`);
$("#info-side-panel").append(`<div id="info-side-panel-perim-div"><span>Perimeter:  </span><span id="info-side-panel-perim-span"></span></div>`);



// Define shapes

// Parent
class Shape {
    constructor(hgt, w) {
        this.hgt = Math.round(Number(hgt));
        this.w = Math.round(Number(w));
        this.div = $(`<div class="shape">`);
        // this.div.dblclick(function () { console.log("You're a daisy if you do") });
        this.div.dblclick(() => this.remove());
    }
    remove() {
        this.div.remove();
        $(".side-pan-content").empty();
    }
}

// Children
class Square extends Shape {
    constructor(hgt) {
        super(hgt, hgt);
        this.div.addClass("square");
        this.div.css("width", `${hgt}px`); // Why can't these be moved into the parent? I tried to do that way; didn't work.
        this.div.css("height", `${hgt}px`); // I tried shorthand here with space; it didn't work
        this.place(); // Why does it not work when I call this method in the parent? (I.e. can methods be inherited and run from a parent?) It didn't work till I put the immediately invoked method into the child here.
        this.div.click(() => this.describe());
    }
    place() {
        $("div#shape-canvas").append(this.div);
        this.div.css("left", `${Math.floor(Math.random() * (600 - this.w))}px`);
        this.div.css("top", `${Math.floor(Math.random() * (600 - this.hgt))}px`);
    }
    describe() {
        $("#info-side-panel-shpNm-span").text("Square").addClass("side-pan-content");
        $("#info-side-panel-w-span").text(`${this.hgt}px`).addClass("side-pan-content");
        $("#info-side-panel-hgt-span").text(`${this.hgt}px`).addClass("side-pan-content");
        $("#info-side-panel-rad-span").text("N/A").addClass("side-pan-content");
        $("#info-side-panel-area-span").text(`${Math.pow(this.hgt, 2)}px`).addClass("side-pan-content");
        $("#info-side-panel-perim-span").text(`${this.hgt * 4}px`).addClass("side-pan-content");
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
    place() {
        $("div#shape-canvas").append(this.div);
        this.div.css("left", `${Math.floor(Math.random() * (600 - this.w))}px`);
        this.div.css("top", `${Math.floor(Math.random() * (600 - this.hgt))}px`);
    }
    describe() {
        $("#info-side-panel-shpNm-span").text("Rectangle").addClass("side-pan-content");
        $("#info-side-panel-w-span").text(`${this.w}px`).addClass("side-pan-content");
        $("#info-side-panel-hgt-span").text(`${this.hgt}px`).addClass("side-pan-content");
        $("#info-side-panel-rad-span").text("N/A").addClass("side-pan-content");
        $("#info-side-panel-area-span").text(`${this.hgt * this.w}px`).addClass("side-pan-content");
        $("#info-side-panel-perim-span").text(`${(this.hgt * 2) + (this.w * 2)}px`).addClass("side-pan-content");
    }
}
class Circle extends Shape {
    constructor(rad) {
        super(rad, rad);
        this.rad = Math.round(Number(rad));
        this.div.addClass("circle");
        this.div.css("width", `${rad * 2}px`);
        this.div.css("height", `${rad * 2}px`);
        this.place();
        this.div.click(() => this.describe());
    }
    place() {
        $("div#shape-canvas").append(this.div);
        this.div.css("left", `${Math.floor(Math.random() * (600 - (this.rad * 2)))}px`);
        this.div.css("top", `${Math.floor(Math.random() * (600 - (this.rad * 2)))}px`);
    }
    describe() {
        $("#info-side-panel-shpNm-span").text("Circle").addClass("side-pan-content");
        $("#info-side-panel-w-span").text(`${this.rad * 2}px`).addClass("side-pan-content");
        $("#info-side-panel-hgt-span").text(`${this.rad * 2}px`).addClass("side-pan-content");
        $("#info-side-panel-rad-span").text(`${this.rad}px`).addClass("side-pan-content");
        $("#info-side-panel-area-span").text(`${Math.round(Math.pow(this.rad, 2) * Math.PI)}px`).addClass("side-pan-content");
        $("#info-side-panel-perim-span").text(`${Math.round((this.rad * 2) * Math.PI)}px`).addClass("side-pan-content");
    }
}
class Triangle extends Shape {
    constructor(sdLen) {
        super(sdLen, sdLen);
        this.sdLen = Math.round(Number(sdLen));
        this.div.addClass("triangle");
        this.div.css("border-top", `${sdLen}px solid rgba(255, 255, 0, 0.486)`);
        this.div.css("border-left", `${sdLen}px solid transparent`);
        this.place();
        this.div.click(() => this.describe());
    }
    place() {
        $("div#shape-canvas").append(this.div);
        this.div.css("left", `${Math.floor(Math.random() * (600 - this.sdLen))}px`);
        this.div.css("top", `${Math.floor(Math.random() * (600 - this.sdLen))}px`);
    }
    describe() {
        $("#info-side-panel-shpNm-span").text("Triangle").addClass("side-pan-content");
        $("#info-side-panel-w-span").text(`${this.sdLen}px`).addClass("side-pan-content");
        $("#info-side-panel-hgt-span").text(`${this.sdLen}px`).addClass("side-pan-content");
        $("#info-side-panel-rad-span").text("N/A").addClass("side-pan-content");
        $("#info-side-panel-area-span").text(`${Math.round(Math.pow(this.sdLen, 2))}px`).addClass("side-pan-content");
        $("#info-side-panel-perim-span").text(`${Math.round((2 * this.sdLen) + (Math.sqrt(2) * this.sdLen))}px`).addClass("side-pan-content");
    }
}
