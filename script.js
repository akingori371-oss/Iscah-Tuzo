const womenBtn = document.getElementById(`exploreWomenBtn`);
const menBtn = document.getElementById(`exploreMenBtn`);
const homeBtn = document.getElementById(`home`);
menBtn.addEventListener(`click`, () => {
    window.location.href = "man.html"
});
womenBtn.addEventListener(`click`, () => {
    window.location.href = "women.html"
});
homeBtn.addEventListener(`click`, () => {
    window.location.href = "index.html"
});
