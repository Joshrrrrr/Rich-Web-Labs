//<!-- C19303023 Josh Reilly 03/10/22-->
showNotes();
// If user adds a note add to the localStorage
var color = "white";
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) notesObj = [];
  else notesObj = JSON.parse(notes);

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";

  showNotes();
});
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

  if (notes == null) notesObj = [];
  else notesObj = JSON.parse(notes);

  let html = "";
  // use internal css for the noteCards so changing the color and text is easy
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard"
			style="width:18rem;margin-right: 50px;margin-bottom: 50px;
			background-color:${color}">
				<div class="card-body">
					<p class="card-text">${element}</p>
				<button id="${index}" onclick=
					"deleteNote(this.id)">
					Delete
				</button>
			</div>
		</div>`;
  });

  let notesElm = document.getElementById("notes");
  // check if there are any notes in notesObj
  if (notesObj.length != 0) notesElm.innerHTML = html;
  else notesElm.innerHTML = "Nothing to show";
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
