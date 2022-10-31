//<!-- C19303023 Josh Reilly 03/10/22-->
var Contact = function (name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
};
var contacts = [];
var listContacts = function () {
  document.getElementById("displayContacts").innerHTML = " ";
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
      '</td><td><button class="btn btn-danger" onclick=deleteContact(' +
      i +
      ")>Delete</button></td></tr>";
  }
};

var addNewContact = function () {
  var name = document.getElementById("inputName").value;
  var email = document.getElementById("inputEmail").value;
  var phone = document.getElementById("inputPhone").value;
  var contact = new Contact(name, email, phone);
  contacts.push(contact);
  listContacts();
};

var deleteContact = function (i) {
  contacts.splice(i, 1);
  listContacts();
};

function myFunction() {
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
