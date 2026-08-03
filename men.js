function resolveImagePath(image) {
    if (!image) return "";
    if (/^(https?:)?\/\//i.test(image) || image.startsWith("data:")) return image;
    if (image.startsWith("images/") || image.startsWith("mans/")) return image;

    return `mans/${image}`;
}

function getItems(data, sourceKey) {
    if (sourceKey) return Array.isArray(data[sourceKey]) ? data[sourceKey] : [];
    return Array.isArray(data) ? data : [];
}

function renderCollection(container) {
    const jsonFile = container.dataset.jsonFile || "men.json";
    const sourceKey = container.dataset.source || "";

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const items = getItems(data, sourceKey);

            if (!items.length) {
                container.innerHTML = '<p class="text-sm text-amber-700">No images available yet.</p>';
                return;
            }

            container.innerHTML = items.map(item => {
                const title = item.title || item.description?.split(" — ")[0] || item.description || "Featured collection";
                const description = item.description || "Fashion image";

                return `
                    <article class="group rounded-[24px] border border-[#d4a84d]/20 bg-white/80 p-5 shadow-[0_14px_36px_rgba(77,58,8,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_44px_rgba(77,58,8,0.20)] sm:p-6">
                        <h3 class="mb-4 text-xl font-semibold text-[#22190c]">${title}</h3>
                        <div class="mb-5 overflow-hidden rounded-[22px_8px_22px_8px] bg-gradient-to-br from-[#f8efcf] to-[#fefdf8] p-2 shadow-[inset_0_0_0_1px_rgba(212,168,77,0.18)]">
                            <img class="h-[260px] w-full rounded-[18px] object-contain object-center bg-gradient-to-br from-[#f8efcf] to-[#fefdf8] p-2 transition duration-500 group-hover:scale-105 group-hover:saturate-[1.15] group-hover:contrast-[1.03]" src="${resolveImagePath(item.image)}" alt="${description}">
                        </div>
                        <p class="mb-5 text-[#5e4930]">${description}</p>
                        <button class="rounded-full bg-gradient-to-r from-[#d4a84d] to-[#a77716] px-4 py-3 font-semibold text-white shadow-[0_10px_20px_rgba(167,119,22,0.25)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(167,119,22,0.35)]">
                            Explore collections
                        </button>
                    </article>
                `;
            }).join("");
        })
        .catch(error => {
            console.error(error);
            container.innerHTML = '<p class="text-sm text-amber-700">Unable to load images right now.</p>';
        });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-json-file]").forEach(renderCollection);
});