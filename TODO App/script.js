const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};


const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");


function createButton() {
  var btn_cross = document.createElement("button")
  btn_cross.innerHTML = "Remove"
  
  btn_cross.className = "item-delete-button"
  btn_cross.onclick = removeTodo
  return btn_cross
}

function createTextitem(item_name) {
  var text = document.createElement("p")
  text.innerHTML = item_name
  return text
}

function createCheckbox() {
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "item_name"
  checkbox.id = "item-checkbox";
  checkbox.onclick = markAschecked
  return checkbox
}

function createListitem(button, checkbox, p) {
  var li = document.createElement("li");
  li.appendChild(checkbox);
  li.appendChild(p);
  li.appendChild(button);
  return li
}

function markAschecked() {
  var text = ""
  if (this.checked === true) {
    text = this.parentNode.childNodes[1].innerHTML
    this.parentNode.childNodes[1].innerHTML = ""
    var del = document.createElement("del")
    del.innerHTML = text
    this.parentNode.childNodes[1].appendChild(del)
    uncheckedCountSpan.innerHTML = uncheckedCountSpan.innerHTML * 1 - 1;
  }
  else {
    text = this.parentNode.childNodes[1].childNodes[0].innerHTML
    this.parentNode.childNodes[1].childNodes[0].style.display = "none"
    this.parentNode.childNodes[1].innerHTML = text
    uncheckedCountSpan.innerHTML = uncheckedCountSpan.innerHTML * 1 + 1;
  }
}

function newTodo() {
  // getting text from input
  var item_name = document.getElementById("item-text").value
  // creating button
  var btn = createButton()
  // creating checkbox
  var checkbox = createCheckbox()
  // creating text 
  var p = createTextitem(item_name)

  var li = createListitem(btn, checkbox, p)
  list.appendChild(li)
  itemCountSpan.innerHTML = itemCountSpan.innerHTML * 1 + 1
  uncheckedCountSpan.innerHTML = uncheckedCountSpan.innerHTML * 1 + 1;
  document.getElementById("item-text").value = "";
}


function removeTodo() {
  this.parentNode.style.display = "none"
  itemCountSpan.innerHTML = itemCountSpan.innerHTML * 1 - 1
  uncheckedCountSpan.innerHTML = uncheckedCountSpan.innerHTML * 1 - 1;
}
