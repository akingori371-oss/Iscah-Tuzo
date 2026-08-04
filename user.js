const displayName = document.getElementById("displayName");
const recentChecks = document.getElementById('recent-checks-list');
displayName.textContent = localStorage.getItem("username");

const btn = document.getElementById('addCheck');
const btn2 = document.getElementById('add2Check');

function addCheckItem(label) {
    const newCheck = document.createElement('li');
    newCheck.className = 'mb-2 rounded-lg border border-[#d4a84d]/20 bg-white/70 px-3 py-2 text-[#5f4514]';
    newCheck.textContent = label;
    recentChecks.appendChild(newCheck);
}

if (btn) {
    btn.addEventListener('click', () => {
        addCheckItem('Luxury Men\'s Suit');
    });
}

if (btn2) {
    btn2.addEventListener('click', () => {
        addCheckItem('Elegant Women\'s Dress');
    });
}