document.body.addEventListener("click", drop, false);

function drop(e) {

    var x = e.pageX;
    var y = e.pageY;

    var ripple = document.createElement("div");
    ripple.style.top = y + "px";
    ripple.style.left = x + "px";
    document.body.appendChild(ripple);

    ripple.className = "ripple";

    ripple.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
    }, false);
}