window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (!loader) {
        return;
    }

    const navigation = performance.getEntriesByType("navigation")[0];
    const isReload = navigation && navigation.type === "reload";

    // Первый вход на сайт
    const firstVisit = !sessionStorage.getItem("rmSiteVisited");

    // Первый вход или обновление страницы
    if (firstVisit || isReload) {
        sessionStorage.setItem("rmSiteVisited", "true");

        setTimeout(() => {
            loader.classList.add("hide");

            setTimeout(() => {
                loader.remove();
            }, 600);
        }, 900);

        return;
    }

    // Переход между страницами сайта
    loader.remove();
});