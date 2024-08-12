const placehorderBox = document.querySelector(".placehorder_box");
const placehorderText = document.querySelector(".placehorder");

function handleInputBlur() {
  placehorderText.classList.add("small");
  placehorderBox.classList.add("active");

  const inputValue = placehorderBox.value.trim();
  if (inputValue === "") {
    placehorderText.classList.remove("small");
    placehorderBox.classList.remove("active");
  }
}
