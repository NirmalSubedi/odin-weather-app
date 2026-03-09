const [warnings, errorContainer, errorHeadline, errorDescription] =
  document.body.querySelectorAll(
    ".warnings, .errors, .errors .headline, .errors .description"
  );
const showError = (error) => {
  warnings.classList.remove("hidden");
  errorContainer.classList.remove("hidden");

  const { name, message } = error;
  errorHeadline.textContent = name;
  errorDescription.textContent = message;
};

const hideError = () => {
  warnings.classList.add("hidden");
  errorContainer.classList.add("hidden");
};

export { showError, hideError };
