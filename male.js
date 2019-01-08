function　btnLink() {
  var height = document.getElementById("height");
  var job = document.getElementById("job");
  var age = document.getElementById("age");

var name = document.getElementById("name");
var age1 = document.getElementById("age1");
var hobby = document.getElementById("hobby");
  if (height.value=="low" && job.value=="student" && age.value=="teen") {
    name.innerHTML = "鳴神葵　さん"
    age1.innerHTML = "17歳"
    hobby.innerHTML = "映画鑑賞"

  } else if(height.value=="standard" && job.value=="student" && age.value=="teen"){
    name.innerHTML = "上田さゆり　さん"
    age1.innerHTML = "21歳"
    hobby.innerHTML = "料理"
  } else if (height.value=="high" && job.value=="student" && age.value=="teen") {
    name.innerHTML = "佐藤優樹菜　さん"
    age1.innerHTML = "32歳"
    hobby.innerHTML = "茶道"

  } else if (height.value=="low" && job.value=="wife" && age.value=="teen") {
    name.innerHTML = "　島田アンジェリカ　さん"
    age1.innerHTML = "19歳"
    hobby.innerHTML = "Rap"

  }else if (height.value=="low" && job.value=="OL" && age.value=="teen"){
  name.innerHTML = "田中美尋　さん"
  age1.innerHTML = "18歳"
  hobby.innerHTML = "お菓子作り"

}else if (height.value=="low" && job.value=="student" && age.value=="young"){
name.innerHTML = "伊藤聖　さん"
age1.innerHTML = "21歳"
hobby.innerHTML ="お酒笑"
} else if (height.value=="low" && job.value=="student" && age.value=="soso"){
  name.innerHTML = "二階堂歩美　さん"
  age1.innerHTML = "35歳"
  hobby.innerHTML ="日本舞踊"
}ls



}
