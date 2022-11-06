//<!-- C19303023 Josh Reilly 03/10/22-->
var Contact = function (name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
};
var contacts = [];
var listContacts = function () {
  document.getElementById("displayContacts").innerHTML =
    "<tr><th class='nameth'>Name</th><th>Phone</th><th>Email</th></tr>";
  for (var i = 0; i < contacts.length; i++) {
    document.getElementById("displayContacts").innerHTML +=
      '<tr><td id="name' +
      i +
      '">' +
      contacts[i].name +
      '</td><td id="phone' +
      i +
      '">' +
      contacts[i].phone +
      '</td><td id="email' +
      i +
      '">' +
      contacts[i].email +
      "</td></tr>";
  }
  //style every odd row to lightgrey, i starts as 1 to skip the header row
  table = document.getElementById("displayContacts");
  for (var i = 1, row; (row = table.rows[i]); i++) {
    if (i % 2) {
      row.style.backgroundColor = "#f2f2f2";
    }
  }
  //Sorting for the 'Name' header
  document.querySelectorAll(".nameth").forEach((headerCell) => {
    headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(
        headerCell.parentElement.children,
        headerCell
      );
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
  });
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
var addNewContact = function () {
  var name = document.getElementById("inputName").value;
  var email = document.getElementById("inputEmail").value;
  var phone = document.getElementById("inputPhone").value;
  var error = document.getElementById("error");
  //input validation
  if (name == "" || email == "" || phone == "") {
    alert("All fields must be filled out");
    error.style.display = "";
    return false;
  } else if (name.length > 20 || phone.length != 10 || email.length > 40) {
    error.style.display = "";
    alert("Bad input length");
  } else if (!validateEmail(email)) {
    error.style.display = "";
    alert("Incorrect email format");
  } else {
    error.style.display = "none";
    var contact = new Contact(name, email, phone);
    contacts.push(contact);
    name = "";
    email = "";
    phone = "";
    listContacts();
  }
};
function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}
//filter by phone number
function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue, table;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("displayContacts");
  noRes = document.getElementById("noResult");

  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0, row; (row = table.rows[i]); i++) {
    txtValue = row.innerHTML;
    if (txtValue.toUpperCase().includes(filter)) {
      row.style.display = "";
      noRes.style.display = "none";
    } else {
      row.style.display = "none";
      noRes.style.display = "";
    }
  }
}
listContacts();
