
class Shape {
    constructor() {
        this.div = $(`<div class="shape">`);
        this.div.dblclick(() => this.remove());
    }
    place() {
        $("div#shape-canvas").append(this.div);
        this.div.css("left", `${Math.floor(Math.random() * 500)}px`);
        this.div.css("top", `${Math.floor(Math.random() * 500)}px`);
    }
    remove() {
        $("div#shape-canvas").remove(this.div);
    }
}

class Square extends Shape {
    constructor() {
        this.div = $(`<div class="square"></div>`);
        $("button#sq-btn").click(() => this.place());
        this.div.css("width height", `${$("input#sq-ipt").val()}px`);
    }
}




