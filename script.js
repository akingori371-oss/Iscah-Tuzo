const womenBtn = document.getElementById(`exploreWomenBtn`);
const menBtn = document.getElementById(`exploreMenBtn`);

menBtn.addEventListener(`click`, () => {
    window.location.href = "man.html"
});
womenBtn.addEventListener(`click`, () => {
    window.location.href = "women.html"
});