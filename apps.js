var msg=document.querySelector('#msg');
var error=document.querySelector('#error');
msg.addEventListener('keyup',function(e){
   
if(msg.value.length>20){
    error.innerHTML='right';
    msg.style.border='2px solid green';
}else{
    error.innerHTML="This message is so short. please type long message";
    msg.style.border='2px solid red';
}
if(msg.value.length==0){
error.innerHTML='';
}
})