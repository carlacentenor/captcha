

var box = document.getElementById('box-js');
var update= document.getElementById("update");
var validate = document.getElementById("validate");
update.addEventListener('click',updateCode);
validate.addEventListener('click',validateCode);
var codeCaptcha ="";
function updateCode(event){
  var value1=parseInt(Math.random()*10)+"";
  var value2=parseInt(Math.random()*10)+"";
  var value3=parseInt(Math.random()*10)+"";
  var character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(i=0;i<character.length;i++){
  var charcode1 =character.charAt(Math.random()*character.length);
  }
  for(i=0;i<character.length;i++){
  var charcode2 =character.charAt(Math.random()*character.length);
  }
  for(i=0;i<character.length;i++){
  var charcode3 =character.charAt(Math.random()*character.length);
  }
  for(i=0;i<character.length;i++){
  var charcode4 =character.charAt(Math.random()*character.length);
  }

  var code = charcode1+value1+charcode2+value2+charcode3+value3+charcode4;
  box.textContent=code;
  codeCaptcha=code;
  box.style.color=getRandomColor();
}

function validateCode(){
  var wordCapture = document.getElementsByName("word")[0].value;
  if(wordCapture === codeCaptcha){
    alert("Correcto");
  }
  else {
    alert("incorrecto");

  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
