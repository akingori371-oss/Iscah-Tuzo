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
        womenGallery.innerHTML += `
          <article class="rounded-[24px] border border-[#d4a84d]/25 bg-white/80 p-5 shadow-[0_14px_36px_rgba(77,58,8,0.10) h-[760px]">
            <img src="women/${woman.image}" alt="${woman.description}" class="mb-4 h-[620px] w-full rounded-[24px] object-cover">
            <p class="text-sm uppercase tracking-[0.3em] text-[#a77716]">Featured look</p>
            <p class="mt-2 text-base leading-7 text-[#5e4930]">${woman.description}</p>
          </article>
        `;
      });
    })
    .catch(error => console.error('Error loading women data:', error));
}