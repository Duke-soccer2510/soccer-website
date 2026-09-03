const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "⚽ Welcome to the Soccer Website!";
});
const tabs = document.querySelectorAll(".wc-tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        alert(tab.textContent + " selected!");
    });
