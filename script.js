const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const status = document.querySelector("#status");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  status.textContent = query
    ? `Image search for “${query}” is planned for a future update.`
    : "Enter a search term. Image search is planned for a future update.";
});

document.querySelectorAll(".prompt-chip").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.prompt;
    searchInput.focus();
  });
});