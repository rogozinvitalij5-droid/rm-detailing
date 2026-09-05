function startWash() {
    const wash = document.createElement("div");
    wash.className = "wash-effect";

    document.body.appendChild(wash);

    const logo = document.querySelector(".logo img");

    if (logo) {
        logo.classList.add("logo-shine");

        setTimeout(() => {
            logo.classList.remove("logo-shine");
        }, 30000);
    }

    setTimeout(() => {
        wash.classList.add("wash-active");
    }, 50);

    setTimeout(() => {
        wash.classList.add("wash-finish");
    }, 1800);

    setTimeout(() => {
        wash.remove();
    }, 3000);
}