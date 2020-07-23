function validate(){

const myname = document.getElementById('myname');
const email = document.getElementById('email');
const filename = document.getElementById('filename');

if(myname.value == ""){
myname.nextElementSibling.innerHTML="Please include a name";
return false;
}
if(email.value == ""){
email.nextElementSibling.innerHTML="Please include an email address";
return false;
}
if(filename.value == ""){
filename.nextElementSibling.innerHTML="Please include an image";
return false;
}

alert("Thank you!");
return true;

}

