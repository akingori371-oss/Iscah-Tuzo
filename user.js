const displayName = document.getElementById("displayName");
const recentChecks = document.getElementById('recent-checks-list');
const wishList = document.getElementById('wishListItems');
const wishlistCount = document.getElementById('wishlistCount');
const clearWishlistBtn = document.getElementById('clearWishlistBtn');

displayName.textContent = localStorage.getItem("username") || 'Client';

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

function renderWishlist() {
    const selectedCloth = localStorage.getItem('wishList');
    wishList.innerHTML = '';

    if (selectedCloth) {
        const listItem = document.createElement('li');
        listItem.className = 'mb-2 rounded-lg border border-[#d4a84d]/20 bg-white/70 px-3 py-2 text-[#5f4514]';
        listItem.textContent = selectedCloth;
        wishList.appendChild(listItem);
        if (wishlistCount) wishlistCount.textContent = '1';
    } else {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'mb-2 rounded-lg border border-[#d4a84d]/20 bg-white/70 px-3 py-2 text-[#5f4514] italic text-[#8d6f18]';
        emptyItem.textContent = 'Your wishlist is empty.';
        wishList.appendChild(emptyItem);
        if (wishlistCount) wishlistCount.textContent = '0';
    }
}

if (clearWishlistBtn) {
    clearWishlistBtn.addEventListener('click', () => {
        localStorage.removeItem('wishList');
        renderWishlist();
    });
}

renderWishlist();