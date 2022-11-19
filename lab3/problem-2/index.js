var time = rxjs.timer(1000);
var value = time.subscribe((val) => console.log(val));
