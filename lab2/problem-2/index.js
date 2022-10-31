//<!-- C19303023 Josh Reilly 31/10/22-->
var arr = [];
fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => response.json())
  .then((json) => json.map(part1));
//part 1
function part1(num) {
  var words = num.title.split(" ");
  if (words.length > 6) {
    console.log(num.title);
  }
  part2(num.body);
}
//part 2
function part2(string) {
  var pattern = /\w+/g,
    matched = string.match(pattern);
  var count = matched.reduce(function (stored, word) {
    if (stored.hasOwnProperty(word)) {
      stored[word] = stored[word] + 1;
    } else {
      stored[word] = 1;
    }
    return stored;
  }, {});
  console.log(count);
}
