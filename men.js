const display = document.getElementById("mensCollection");

fetch("men.json")
    .then(response => response.json())
    .then(data => {

        data.forEach(item => {

            display.innerHTML += `
                <article class="rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-lg shadow-amber-100/60">

                    <div class="mb-4 overflow-hidden rounded-[20px] bg-[#f7efe0] p-2">
                        <img
                            src="mans/${item.image}"
                            alt="${item.description}"
                            class="h-[560px] w-full rounded-[16px] transition duration-500 hover:scale-105"
                        >
                    </div>

                    <p class="mt-5 text-base leading-7 text-gray-700">
                        ${item.description}
                    </p>

                </article>
            `;

        });

    })
    .catch(error => console.log(error));