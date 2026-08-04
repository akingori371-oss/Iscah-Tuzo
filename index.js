const display2 = document.getElementById('display2');

fetch('images.json')
.then(response => response.json())
.then(data => {
    data.forEach(item => {
display2.innerHTML += `
<article class="flex flex-col md:flex-row items-center gap-8 rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-lg shadow-amber-100/60">

    <div class="w-full md:w-1/2 flex justify-center">
        <img
            src="${item.image}"
            alt="${item.description}"
            class="w-72 h-96 object-cover rounded-2xl shadow-lg"
        >
    </div>

    <div class="w-full md:w-1/2">
        <h2 class="text-3xl font-bold text-[#a77716] mb-4">
            Iscah Tuzo
        </h2>

        <p class="text-lg leading-8 text-[#5b4a1c]">
            ${item.description}
        </p>
    </div>

</article>
`;}  )}
)
.catch(error => console.log(error));

const loginButton = document.getElementById('login');
loginButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});