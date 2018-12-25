function　btnLink() {
  var height = document.getElementById("height");
  var job = document.getElementById("job");
  var age = document.getElementById("age");

var name = document.getElementById("name");
var age1 = document.getElementById("age1");
var hobby = document.getElementById("hobby");
alert(height.value);
alert(job.value);
alert(age.value);
  if (height.value=="low" && job.value=="student" && age.value=="teen") {
    name.innerHTML = "鳴神葵さん"
    age1.innerHTML = "17才"
    hobby.innerHTML = "映画鑑賞"

  } else {

  }
}
