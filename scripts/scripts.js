



function DarkMode() {
    document.getElementById('PageBody').style="background-color: #363635;";
    document.getElementById('head1').style="color: #FFBF00;";
    document.getElementById('head2').style="color: #FFBF00;";
    document.getElementById('para1').style="color: #D79334;";
    document.getElementById('para2').style="color: #D79334;";
    document.getElementById('para3').style="color: #D79334;";
    document.getElementById('footer').style="color: #D79334;";
    document.getElementById('dark').style="background-color: #D79334;";
    document.getElementById('light').style="background-color: #FFFFFF;";
    document.getElementById('green').style="background-color: #FFFFFF;";

}

function LightMode() {
    document.getElementById('PageBody').style="background-color: #E9D5AC;";
    document.getElementById('head1').style="color: #283895;";
    document.getElementById('head2').style="color: #283895;";
    document.getElementById('para1').style="color: #854F3D;";
    document.getElementById('para2').style="color: #854F3D;";
    document.getElementById('para3').style="color: #854F3D;";
    document.getElementById('footer').style="color: #854F3D;";
    document.getElementById('light').style="background-color: #854F3D;";
    document.getElementById('dark').style="background-color: #FFFFFF;";
    document.getElementById('green').style="background-color: #FFFFFF;";
}

function GreenMode() {
    document.getElementById('PageBody').style="background-color: #001800;";
    document.getElementById('head1').style="color: #007A00;";
    document.getElementById('head2').style="color: #007A00;";
    document.getElementById('para1').style="color: #008200;";
    document.getElementById('para2').style="color: #008200;";
    document.getElementById('para3').style="color: #008200;";
    document.getElementById('footer').style="color: #008200;";
    document.getElementById('light').style="background-color: #FFFFFF;";
    document.getElementById('dark').style="background-color: #FFFFFF;";
    document.getElementById('green').style="background-color: #008200;";

}

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