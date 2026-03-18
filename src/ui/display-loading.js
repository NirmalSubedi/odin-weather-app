const searchButton = document.body.querySelector(".search-button");

const displayLoading = () => {
  let { textContent: text } = searchButton;
  switch (text) {
    case "Searching.  ":
      text = "Searching.. ";
      break;
    case "Searching.. ":
      text = "Searching...";
      break;
    case "Searching...":
      text = "Searching.  ";
      break;
  }
  searchButton.textContent = text;
};

export { displayLoading };
