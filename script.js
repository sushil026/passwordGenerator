const password = document.getElementById("pswd");
const sliderEl = document.getElementById("ranger");
const output = document.getElementById("rangeVal");
const upper = document.getElementById("Uppercase");
const lower = document.getElementById("Lowercase");
const nums = document.getElementById("Numbers");
const symbols = document.getElementById("Symbols");
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
        if( upper.checked && parseInt(output.innerHTML) < 4){
            sliderEl.value = parseInt(output.innerHTML) + 1;
            output.innerHTML = parseInt(output.innerHTML) + 1;
        }
        ranger();
}
function checkLc(){
        if( lower.checked && parseInt(output.innerHTML) < 4){
            sliderEl.value = parseInt(output.innerHTML) + 1;
            output.innerHTML = parseInt(output.innerHTML) + 1;
        }
        ranger();
}
function checkNum(){
        if( nums.checked && parseInt(output.innerHTML) < 4){
            sliderEl.value = parseInt(output.innerHTML) + 1;
            output.innerHTML = parseInt(output.innerHTML) + 1;
        }
        ranger();
}
function checkSym(){
        if( symbols.checked && parseInt(output.innerHTML) < 4){
            sliderEl.value = parseInt(output.innerHTML) + 1;
            output.innerHTML = parseInt(output.innerHTML) + 1;
        }
    ranger();
}
function generate() {
    var res = "";
    var req = output.innerHTML;
    var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var smalls = 'abcdefghijklmnopqrstuvwxyz';
    var numbs = '0123456789';
    var sym = '!@#$%^&_-';
    if( upper.checked || lower.checked || nums.checked || symbols.checked){
        var all = '';
        all += upper.checked ? caps: "";
        all += lower.checked ? smalls: "";
        all += nums.checked ? numbs: "";
        all += symbols.checked ? sym: "";
        while (res.length < req) {
            res += (all.charAt(Math.floor(Math.random() * all.length)));
        }
        password.innerHTML = res;
    }
    else{    
        alert("Please select required Characters for the Password");
        console.log("Please select required Characters for the Password");  
    }
}
function strong(){
    const lev = document.getElementsByClassName("levels");
    const checks = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < lev.length; i++) {
        lev[i].style.backgroundColor = "#18171F";
    }
    var str = 0;
    for (let i = 0; i < checks.length; i++) {   
        if( checks[i].checked ){
            str++;
        }
    }  
    for (let i = 0; i < str; i++) {
        lev[i].style.backgroundColor = "#A4FFAF";
    }
}
