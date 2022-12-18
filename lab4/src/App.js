import React, { useRef} from "react";
function App() {
  const noteTextRef = useRef()
  var color = "white"

  function handleAddNote(e){
    let addTxt = noteTextRef.current.value
    if(addTxt === '') return
    console.log(addTxt)
    noteTextRef.current.value = null
  }

  function handleColorNote(e){
    color = e.target.value
    console.log(color)
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
					id="blue" value="blue" onclick="blue()">
					blue
				</button>
				<button
					id="red" value="red" onclick="red()">
					red
				</button>
				<button
					id="green" value="green" onclick="green()">
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
