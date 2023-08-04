// app.js

// Function to add a new item to the checklist
function addItem() {
    const newItemText = document.getElementById("newItem").value.trim();
    if (newItemText === "") return;
  
    const newItem = {
      text: newItemText,
      isChecked: false
    };
  
    checklist.push(newItem);
    renderChecklist();
  }
  
  // Function to render the checklist
  function renderChecklist() {
    const checklistContainer = document.getElementById("checklist");
    checklistContainer.innerHTML = "";
  
    checklist.forEach(item => {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.isChecked;
      checkbox.addEventListener("change", () => {
        item.isChecked = checkbox.checked;
      });
  
      const textSpan = document.createElement("span");
      textSpan.textContent = item.text;
  
      listItem.appendChild(checkbox);
      listItem.appendChild(textSpan);
      checklistContainer.appendChild(listItem);
    });
  }
  
  const checklist = [];
  