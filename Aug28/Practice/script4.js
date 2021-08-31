let i=0;
let na=Array();
function add() {
     document.getElementById("b").innerHTML="Array :";
     na[i] = document.getElementById("a").value;
     i++;
    document.getElementById("a").value="";
    document.getElementById("b").innerHTML=na;

}