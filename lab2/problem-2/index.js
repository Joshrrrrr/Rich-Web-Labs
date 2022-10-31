//<!-- C19303023 Josh Reilly 31/10/22-->
var arr = [];
fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => response.json())
  .then((json) => json.map(myFunction));

function myFunction(num) {
  var words = num.title.split(" ");
  if (words.length > 6) {
    console.log(num.title);
  }
}
