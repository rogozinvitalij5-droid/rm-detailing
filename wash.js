function startWash() {
    const wash = document.createElement("div");
    wash.className = "wash-effect";

    document.body.appendChild(wash);

    const logo = document.querySelector(".logo");

    if (logo) {
        logo.classList.remove("logo-shine");

        // Перезапускаем анимацию
        void logo.offsetWidth;

        logo.classList.add("logo-shine");

        setTimeout(() => {
            logo.classList.remove("logo-shine");
        }, 4500);
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
function secretCarWash(car) {
    if (car.classList.contains("drive")) {
        return;
    }

    car.classList.add("drive");

    setTimeout(() => {
        startWash();
    }, 1800);

    setTimeout(() => {
        car.classList.remove("drive");
    }, 4000);
}