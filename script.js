const button = document.getElementById("helloButton");
const message = document.getElementById("message");

if (button && message) {
    button.addEventListener("click", () => {
        message.textContent = "⚽ Welcome to the Soccer Website!";
    });
}

const tabs = document.querySelectorAll(".wc-tab");

const groupSection = document.getElementById("groups");
const knockoutSection = document.getElementById("knockout");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const tabName = tab.textContent.trim();

        if (tabName === "Groups" && groupSection) {
            groupSection.scrollIntoView({
                behavior: "smooth"
            });
        }

        if (tabName === "Knockout" && knockoutSection) {
            knockoutSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});
