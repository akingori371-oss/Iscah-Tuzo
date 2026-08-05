const womenGallery = document.getElementById('womenGallery');

if (!womenGallery) {
  console.error('womenGallery container not found');
} else {
  fetch('women.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to load women data');
      }
      return response.json();
    })
    .then(data => {
      data.forEach(woman => {
        const bookingLink = woman.bookingLink || 'booking.html';
        womenGallery.innerHTML += `
          <article class="rounded-[24px] border border-[#d4a84d]/25 bg-white/80 p-5 shadow-[0_14px_36px_rgba(77,58,8,0.10)]">
            <img src="women/${woman.image}" alt="${woman.description}" class="mb-4 h-[620px] w-full rounded-[24px] object-cover">
            <p class="text-sm uppercase tracking-[0.3em] text-[#a77716]">Featured look</p>
            <p class="mt-2 text-base leading-7 text-[#5e4930]">${woman.description}</p>
            <button type="button" class="mt-5 inline-flex rounded-full bg-[#a77716] px-6 py-3 text-white hover:bg-[#8d6510] book-btn" data-link="${bookingLink}">Book Now</button>
          </article>
        `;
      });
    })
    .catch(error => console.error('Error loading women data:', error));
}

window.addEventListener('click', event => {
  const bookButton = event.target.closest('.book-btn');
  if (bookButton) {
    const targetLink = bookButton.dataset.link;
    if (targetLink) {
      window.location.href = targetLink;
    }
  }
});