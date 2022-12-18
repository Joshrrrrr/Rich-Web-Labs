function App() {
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
						id="addTxt">
					</textarea>
				</div>
				<button
					id="addBtn">
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
