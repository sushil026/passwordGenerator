const sliderEl = document.getElementById("ranger");
const output = document.getElementById("rangeVal");
function display(){
    output.innerHTML = sliderEl.value;
}
function ranger() {
    valPerc = (sliderEl.value / 10) * 100;
    sliderEl.style.background = `linear-gradient(to right, #A4FFAF ${valPerc}%, #19171F ${valPerc}%)`;
}
function copy() {
    var copyText = document.getElementById("pswd");
    navigator.clipboard.writeText(copyText.innerHTML);
    alert("Copied the text: " + copyText.innerHTML);
}
function checkUc(){
    if(parseInt(output.innerHTML) < 10){
        if( document.getElementById("Uppercase").checked){
            output.innerHTML = parseInt(output.innerHTML) + 1; 
        }
        else{
            output.innerHTML = parseInt(output.innerHTML) - 1;
        }
        sliderEl.value = parseInt(output.innerHTML);
        ranger();
    }
}
function checkLc(){
    if(parseInt(output.innerHTML) < 10){
        if( document.getElementById("Lowercase").checked){
            output.innerHTML = parseInt(output.innerHTML) + 1;
        }
        else{
            output.innerHTML = parseInt(output.innerHTML) - 1;
        }
        sliderEl.value = parseInt(output.innerHTML);
        ranger();
    }
}
function checkNum(){
    if(parseInt(output.innerHTML) < 10){
        if( document.getElementById("Numbers").checked){
            output.innerHTML = parseInt(output.innerHTML) + 1;
        }
        else{
            output.innerHTML = parseInt(output.innerHTML) - 1;
        }
        sliderEl.value = parseInt(output.innerHTML);
        ranger();
    }
}
function checkSym(){
    if(parseInt(output.innerHTML) < 10){
        if( document.getElementById("Symbols").checked){
            output.innerHTML = parseInt(output.innerHTML) + 1;
        }
        else{
            output.innerHTML = parseInt(output.innerHTML) - 1;
        }
        sliderEl.value = parseInt(output.innerHTML);
        ranger();
    }
}
