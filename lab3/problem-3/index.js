//<!-- C19303023 Josh Reilly 27/11/22-->
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
  //note container div I made in html
  let notesContainer = document.getElementById("notes");
  if (notes == null) notesObj = [];
  else notesObj = JSON.parse(notes);
  //remove all notes before we start so there are no duplicates by removing the lastchild of the container
  while (notesContainer.firstChild) {
    notesContainer.removeChild(notesContainer.lastChild);
  }
  // use internal css for the noteCards so changing the color and text is easy
  notesObj.forEach(function (element, index) {
    //note div setting id, class and styling
    const note = document.createElement('div');
    note.setAttribute("id", "note-" + index);
    note.setAttribute("class", "noteCard");
    note.setAttribute("style","width:18rem;margin-right: 50px;margin-bottom: 50px; background-color:"+color);
    //append to the note container div I made in html
    notesContainer.appendChild(note);
    //Body of note setting class
    const notebody = document.createElement('div');
    notebody.setAttribute("class", "card-body");
    //append to the note element above
    note.appendChild(notebody);
    //Create note text element
    const p = document.createElement('p');
    p.setAttribute("class", "card-text");
    //note text
    p.innerHTML=element;
    //append text to the notebody element above
    notebody.appendChild(p);
    //Create del button element
    const delBtn = document.createElement('button');
    delBtn.innerHTML = "Delete";
    delBtn.setAttribute("id", "del" + index);
    //append button to the notebody element above
    notebody.appendChild(delBtn);
    rxjs.fromEvent(delBtn, 'click')
        .subscribe(() => deleteNote(index)
        );
    //Create add sub note button element
    const subBtn = document.createElement('button');
    subBtn.innerHTML = "Add sub note";
    subBtn.setAttribute("id", "sub" + index);
    //append button to the notebody element above
    notebody.appendChild(subBtn);
    rxjs.fromEvent(subBtn, 'click')
        .subscribe(() => addSubNote(subBtn.parentElement)
        );
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

function addSubNote(note){
  const childNote = document.createElement("textarea");
  childNote.setAttribute("id", "subNote");
  childNote.setAttribute("style", "background-color:#595959; color:white");
  note.appendChild(childNote);
}