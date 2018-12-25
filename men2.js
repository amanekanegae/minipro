var x = document.getElementById('tabbutton').getElementsByTagName('a');
var y = document.getElementById('body').getElementsByTagName('div');
function select(){
var z = this.href.substring(this.href.indexOf("b")+1,this.href.length);
for(var i=0;i<y.length;i=i+1){
if(y[i].id != z){
y[i].style.display = "none";
 }else{
y[i].style.display = "block";
 }
}

for(var i=0;i<x.length;i=i+1){
x[i].style.zIndex = "0";
}
this.style.zIndex = "10";

return false;
}

for(var i=0;i<x.length;i=i+1){
x[i].onclick = select;
}

x[0].onclick();
