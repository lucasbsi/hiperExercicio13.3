//alert("0n")
var lamp = document.getElementById('lampada');
lamp.addEventListener('click', Acende);

function Acende(e) {

    if (e.target.src.match("lampada_on.gif")) {
        e.target.src = "lampada_off.gif";
    }

    else {
        e.target.src = "lampada_on.gif";
    }

}