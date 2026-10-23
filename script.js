const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("results");
const resultCount = document.querySelector(".result-count");
const emptyState = document.querySelector(".empty-state");
const status = document.getElementById("status");
let latestSearch = 0;

async function search(query) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrnamespace: "6",
    gsrlimit: "12",
    prop: "imageinfo",
    iiprop: "url",
    iiurlwidth: "300",
    format: "json",
    origin: "*",
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);

  if (!response.ok) {
    throw new Error(`Image search failed with status ${response.status}.`);
  }

  const data = await response.json();
  if (data.error) {
    throw new Error(data.error.info || "Image search API returned an error.");
  }
  return Object.values(data.query?.pages ?? []).filter(
    (item) => item.imageinfo?.[0]?.thumburl,
  );
}

function render(items) {
  results.replaceChildren();

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";

    const image = document.createElement("img");
    image.src = item.imageinfo[0].thumburl;
    image.alt = item.title;
    image.loading = "lazy";

    const caption = document.createElement("p");
    caption.textContent = item.title;

    card.append(image, caption);
    results.append(card);
  });

  resultCount.textContent = `${items.length} ${items.length === 1 ? "image" : "images"}`;
  emptyState.hidden = items.length > 0;
  if (items.length === 0) {
    status.textContent = "No images found. Try another search.";
  }
}

async function runSearch(query) {
  const searchId = ++latestSearch;
  results.replaceChildren();
  resultCount.textContent = "Searching…";
  emptyState.hidden = false;
  status.textContent = `Searching for “${query}”…`;

  try {
    const items = await search(query);
    if (searchId !== latestSearch) {
      return;
    }
    render(items);
  } catch (error) {
    if (searchId !== latestSearch) {
      return;
    }
    resultCount.textContent = "Search unavailable";
    status.textContent = "Something went wrong while searching. Please try again.";
    console.error(error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    input.focus();
    return;
  }

  runSearch(query);
});

document.querySelectorAll(".prompt-chip").forEach((button) => {
  button.addEventListener("click", () => {
    input.value = button.dataset.prompt;
    form.requestSubmit();
  });
});
