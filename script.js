function tela(num){
    let txt = document.getElementById("txt").innerHTML;

    document.getElementById("txt").innerHTML = txt + num;
}
function limpar(){
    document.getElementById("txt").innerHTML = "";
}
function limparPorLength(){
    let txt = document.getElementById("txt").innerHTML;
    document.getElementById("txt").innerHTML = txt.substring(0, txt.length -1);
}
function calcular(){
    let txt = document.getElementById("txt").innerHTML;
    document.getElementById("txt").innerHTML = eval(txt);
}