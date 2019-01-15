window.onload = function() {
 var address, body;
 var sendmail = document.getElementById("send");
sendmail.onclick = function() {
 body = "";
 address = document.getElementById("email").value;
 location.href = 'mailto:' + address +'?body=' + body;
 }
}
