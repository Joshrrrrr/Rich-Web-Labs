//<!-- C19303023 Josh Reilly 03/10/22-->
showNotes();
// If user adds a note add to the localStorage
var color = "white";
let addBtn = document.getElementById("addBtn");
rxjs.fromEvent(addBtn, 'click')
        .subscribe(() => add()
        );
function add(){
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) notesObj = [];
  else notesObj = JSON.parse(notes);

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";

  showNotes();
};
let blueBtn = document.getElementById("blue");
rxjs.fromEvent(blueBtn, 'click')
        .subscribe(() => blue()
        );
let redBtn = document.getElementById("red");
rxjs.fromEvent(redBtn, 'click')
        .subscribe(() => red()
        );
let greenBtn = document.getElementById("green");
rxjs.fromEvent(greenBtn, 'click')
        .subscribe(() => green()
        );
function blue() {
  color = document.getElementById("blue").value;
  showNotes();
}

function red() {
  color = document.getElementById("red").value;
  showNotes();
}
function green() {
  color = document.getElementById("green").value;
  showNotes();
}
// show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  let notesContainer = document.getElementById("notes");
  if (notes == null) notesObj = [];
  else notesObj = JSON.parse(notes);
  while (notesContainer.firstChild) {
    notesContainer.removeChild(notesContainer.lastChild);
  }
  // use internal css for the noteCards so changing the color and text is easy
  notesObj.forEach(function (element, index) {
    const note = document.createElement('div');
    note.setAttribute("id", "note-" + index);
    note.setAttribute("class", "noteCard");
    note.setAttribute("style",`"width:18rem;margin-right: 50px;margin-bottom: 50px; background-color:${color}"`);
    notesContainer.appendChild(note);
    const notebody = document.createElement('div');
    notebody.setAttribute("class", "card-body");
    note.appendChild(notebody);
    const p = document.createElement('p');
    p.setAttribute("class", "card-text");
    p.innerHTML=element;
    notebody.appendChild(p);
    const delBtn = document.createElement('button');
    delBtn.innerHTML = "Delete";
    delBtn.setAttribute("id", "del" + index);
    notebody.appendChild(delBtn);
  });

  let notesElm = document.getElementById("notes");
  // check if there are any notes in notesObj
  if (notesObj.length == 0) notesElm.innerHTML = "Nothing to show";
}

// delete a note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");

  if (notes == null) notesObj = [];
  else notesObj = JSON.parse(notes);

  notesObj.splice(index, 1);

  localStorage.setItem("notes", JSON.stringify(notesObj));

  showNotes();
}