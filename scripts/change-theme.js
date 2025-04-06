const themeButton = document.querySelector(".theme-button");
const root = document.querySelector("html");

themeButton.addEventListener("click", () => {

    console.log("color cambiado")

    if (root.classList.contains("dark")) {
        root.classList.remove("dark");
        root.classList.add("light");
    } else {
        root.classList.remove("light");
        root.classList.add("dark");
    }
})