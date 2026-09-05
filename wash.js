function startWash() {
    const wash = document.createElement("div");
    wash.className = "wash-effect";

    document.body.appendChild(wash);

    const logo = document.querySelector(".logo img");

    if (logo) {
        logo.classList.add("logo-shine");

        setTimeout(() => {
            logo.classList.remove("logo-shine");
        }, 2000);
    }

    setTimeout(() => {
        wash.classList.add("wash-active");
    }, 30);

    setTimeout(() => {
        wash.classList.add("wash-finish");
    }, 350);

    setTimeout(() => {
        wash.remove();
    }, 900);
}
// setTimeout(() => {
//     wash.classList.add("wash-active");
// }, 50);

// setTimeout(() => {
//     wash.classList.add("wash-finish");
// }, 700);

// setTimeout(() => {
//     wash.remove();
// }, 1400);