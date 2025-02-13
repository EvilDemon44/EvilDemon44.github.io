function Perimeter() {
    let lengthP = parseInt(document.getElementById('Length1').value);
    let widthP = parseInt(document.getElementById('Width1').value);
    let resultP = 2 * (widthP + lengthP)
    document.getElementById('Perimeter').innerHTML = resultP;
}
function Area() {
    let lengthA = parseInt(document.getElementById('Length2').value);
    let widthA = parseInt(document.getElementById('Width2').value);
    let resultA = (widthA * lengthA)
    document.getElementById('Area').innerHTML = resultA;
}
function Volume() {
    let lengthV = parseInt(document.getElementById('Length3').value);
    let widthV = parseInt(document.getElementById('Width3').value);
    let heightV = parseInt(document.getElementById('Height3').value);
    let resultV = lengthV * widthV * heightV
    document.getElementById('Volume').innerHTML = resultV;
}