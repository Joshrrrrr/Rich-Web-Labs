var startbtn = document.getElementById("start");
rxjs.fromEvent(startbtn, "click").subscribe(() => time());
function start(time) {
  var timer = rxjs.timer(time * 1000);
  // Update the count down every 1 second
  var stoptime = new Date().getTime() + time * 1000;
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = stoptime - now;
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("display").innerHTML =
      hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("display").innerHTML = "Refresh";
    }
  }, 1000);
}
function time() {
  var h = document.getElementById("hours").value;
  var m = document.getElementById("minutes").value;
  var s = document.getElementById("seconds").value;
  time = h * 3600 + m * 60 + s;
  start(time);
}
