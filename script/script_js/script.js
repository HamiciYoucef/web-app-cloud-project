function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tabs button");

  tabs.forEach(tab => tab.style.display = "none");
  buttons.forEach(btn => btn.classList.remove("active-tab"));

  document.getElementById(tabId).style.display = "block";
  const index = parseInt(tabId.replace('tab', '')) - 1;
  buttons[index].classList.add("active-tab");
}

function simulateAPI(itemName) {
  const spinner = document.getElementById("spinner");
  const toast = document.getElementById("toast");
  const status = document.getElementById("status-bar");

  spinner.style.display = "block";
  status.innerText = "Status : Chargement de " + itemName + "...";

  setTimeout(() => {
    spinner.style.display = "none";
    status.innerText = "Status : " + itemName + " chargé avec succès";
    toast.innerText = itemName + " chargé !";
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 3000);
  }, 1500);
}

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
