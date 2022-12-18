import React, { useRef} from "react";
function App() {
  const noteTextRef = useRef()
  var color = "white"
  const delBtnId = React.createRef();

  var notesObj = [];

  function handleAddNote(e){
    let addTxt = noteTextRef.current.value
    if(addTxt === '') return
    noteTextRef.current.value = null
    let notes = localStorage.getItem("notes");
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    notesObj.push(addTxt);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    console.log(notesObj)
    showNotes()
  }

  function handleColorNote(e){
    color = e.target.value
    console.log(color)
    showNotes()
  }

  function handleDelNote(e){
    let deleteId = delBtnId.current.id;
    console.log(deleteId)
    let notes = localStorage.getItem("notes");
    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);
    notesObj.splice(deleteId, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }

  function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null){
      notesObj = [];
    }
    else notesObj = JSON.parse(notes);

    let html = "";
    // use internal css for the noteCards so changing the color and text is easy
    notesObj.forEach(function (element, index) {
      console.log(notes)
      html += `<div class="noteCard"
			style="width:18rem;margin-right: 50px;margin-bottom: 50px;
			background-color:${color}">
				<div class="card-body">
					<p class="card-text">${element}</p>
				<button id="${index}">
					Delete
				</button>
			</div>
		</div>`;
    });

    let notesElm = document.getElementById("notes");
    // check if there are any notes in notesObj
    if (notesObj.length !== 0) notesElm.innerHTML = html;
    else notesElm.innerHTML = "Nothing to show";
    var delBtns = [];

    notesObj.forEach(function (element, index) {
      delBtns[index] = document.getElementById(index);
      delBtns[index].ref = {delBtnId}
    })
  }

  return (
    <>
    <div>
		<div class="card">
			<div class="card-body">
				<h1 class="card-title">
					Add a Note
				</h1>
				<div class="form-group">
					<textarea class="form-control"
						id="addTxt" ref={noteTextRef}>
					</textarea>
				</div>
				<button
					id="addBtn" onClick={handleAddNote}>
					Add Note
				</button>
				<button
					id="blue" value="blue" onClick={handleColorNote}>
					blue
				</button>
				<button
					id="red" value="red" onClick={handleColorNote}>
					red
				</button>
				<button
					id="green" value="green" onClick={handleColorNote}>
					green
				</button>
			</div>
		</div>
		<hr/>
		<h1>Notes</h1>
		<hr/>
		<div id="notes" class=
			"row container-fluid">
		</div>
	</div>
  </>
  );
}

export default App;
