window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (!loader) {
        return;
    }

    setTimeout(() => {
        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 600);
    }, 900);
});