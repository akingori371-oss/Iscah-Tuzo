const display2 = document.getElementById('display2');

fetch('images.json')
  .then(response => response.json())
  .then(data => {
    const items = Array.isArray(data) ? data : data.gallery || [];

    items.forEach(item => {
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

        <p class="text-lg leading-8 text-[#5b4a1c] mb-6">
            ${item.description}
        </p>

        <button
            type="button"
            class="book-btn rounded-full bg-[#a77716] px-6 py-3 text-white hover:bg-[#8d6510]"
            data-link="${item.bookingLink || 'booking.html'}">
            Book Now
        </button>

    </div>

</article>
`;
    });
  })
  .catch(error => console.error('Error loading gallery:', error));

window.addEventListener('click', event => {
  const bookButton = event.target.closest('.book-btn');
  if (bookButton) {
    const targetLink = bookButton.dataset.link;
    if (targetLink) {
      window.location.href = targetLink;
    }
  }
});