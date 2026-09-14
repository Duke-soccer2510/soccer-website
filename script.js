const button = document.getElementById("helloButton");
const message = document.getElementById("message");

if (button && message) {
    button.addEventListener("click", () => {
        message.textContent = "⚽ Welcome to the Soccer Website!";
    });
}

const tabs = document.querySelectorAll(".wc-tab");
const groupSection = document.getElementById("groups");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        if (tab.textContent.trim() === "Groups" && groupSection) {
            groupSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});
