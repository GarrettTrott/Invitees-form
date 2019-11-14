const form = document.querySelector("#registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList");

function createLI(text) {
  const li = document.createElement("li");
  li.textContent = text;
  const label = document.createElement("label");
  label.textContent = "Confirmed";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.appendChild(checkbox);
  li.appendChild(label);
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  li.appendChild(editButton);
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  li.appendChild(removeButton);
  return li;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  const li = createLI(text);
  ul.appendChild(li);
});

ul.addEventListener("change", e => {
  const checkbox = e.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    listItem.className = "responded";
  } else {
    listItem.className = "";
  }
});

ul.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    if (e.textContent === "Remove") {
      const li = e.target.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    } else if (e.target.tagName === "Edit") {
    }
  }
});
