
// função para "efeito typewrite"
let i = 0;
function typeWriter(txt) {
    let speed = 10;
 
    if (i < txt.length) {
        document.getElementById("chat").innerHTML += txt.charAt(i);
        i++;
        setTimeout(function() { typeWriter(txt) }, speed);
    }
}
