import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector(".time");
    const wrapper = timeContainer.querySelector("div");

    wrapper.innerHTML = `
        <div class="akad-card">
            <h3>Akad Nikah</h3>
            <p>${data.time.marriage.day}, ${data.time.marriage.date} ${data.time.marriage.month} ${data.time.marriage.year}</p>
            <p>Pukul ${data.time.marriage.hours.start} WIB</p>
        </div>
    `;

    timeContainer.querySelector("a").href = data.link.map;
    timeContainer.querySelector("a + p").textContent = data.time.address;
};