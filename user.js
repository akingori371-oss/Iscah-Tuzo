const displayName = document.getElementById("displayName");
const wishList = document.getElementById("wishlistItems");
const wishlistCount = document.getElementById("wishlistCount");
const clearWishlistBtn = document.getElementById("clearWishlistBtn");

if (displayName) {
    displayName.textContent = localStorage.getItem("username") || "Client";
}

function renderWishlist() {

    const wishlist = JSON.parse(localStorage.getItem("wishList")) || [];

    wishList.innerHTML = "";

    if (wishlist.length === 0) {

        wishList.innerHTML = `
            <li class="italic text-[#8d6f18]">
                Your wishlist is empty.
            </li>
        `;

        wishlistCount.textContent = "0";
        return;
    }

    wishlist.forEach(cloth => {

        const li = document.createElement("li");

        li.className =
            "mb-2 rounded-lg border border-[#d4a84d]/20 bg-white/70 px-3 py-2 text-[#5f4514]";

        li.textContent = cloth;

        wishList.appendChild(li);

    });

    wishlistCount.textContent = wishlist.length;
}

if (clearWishlistBtn) {
    clearWishlistBtn.addEventListener("click", () => {
        localStorage.removeItem("wishList");
        renderWishlist();
    });
}

renderWishlist();

function sendMessage() {
    const contactE = document.getElementById("contactEmail").value;
    const contactM = document.getElementById("contactMessage").value;

    if (contactE === "" && contactM === "") {
        alert("Please fill in your email and message before sending.");
    } else if (contactE === "" || contactM === "") {
        alert("Please fill in both your email and message before sending.");
    } else {
        alert(`Your message has sucessfully been recieved`);
    }
}

function personalisationLook() {
    const style = document.getElementById("customStyle").value;
    const notes = document.getElementById("customNotes").value;

    if (style === "" && notes === "") {
        alert('Kindly fill any forms');
    } else {
        alert(`Your personalization request has been sent. We will get back to you shortly.`);
    }
}

const collectionBtn = document.getElementById('collectionItems');

if (collectionBtn) {
    fetch('collection.json')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                collectionBtn.innerHTML += `
                <article class="flex flex-col md:flex-row items-center gap-8 rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-lg shadow-amber-100/60">
                  <div class="w-full md:w-1/2 flex justify-center">
                    <img
                      src="${item.image}"
                      alt="${item.description}"
                      class="w-72 h-96 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  <div class="w-full md:w-1/2">
                    <h2 class="text-3xl font-bold text-[#a77716] mb-4">
                      ${item.name}
                    </h2>

                    <p class="text-lg leading-8 text-[#5b4a1c] mb-6">
                      ${item.description}
                    </p>

                    <button
                      type="button"
                      class="book-btn rounded-full bg-[#a77716] px-6 py-3 text-white hover:bg-[#8d6510]"
                      data-link="${item.bookingLink || '#'}"
                      id="bookNowBtn"
                      onclick="bookCloth('${item.name}')"
                    >
                      Book Now
                    </button>
                  </div>
                </article>`;
            });
        });
}

function bookCloth(clothName) {

 
    const wishlist = JSON.parse(localStorage.getItem("wishList")) || [];


    wishlist.push(clothName);

    localStorage.setItem("wishList", JSON.stringify(wishlist));

    alert(`You have selected ${clothName}. You will be redirected to the user page for confirmation.`);
    window.location.href = "user.html";
}