const sliderEl = document.getElementById("ranger");
const output = document.getElementById("rangeVal");
function ranger() {
    valPerc = (sliderEl.value / 10) * 100;
    output.innerHTML = sliderEl.value;
    sliderEl.style.background = `linear-gradient(to right, #A4FFAF ${valPerc}%, #19171F ${valPerc}%)`;
}
function 