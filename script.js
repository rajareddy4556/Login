document.getElementById("hello").style.display="none";
let c=0;
let i=document.getElementById("b3");
i.click();
window.onload=function(){
  var myDiv = document.getElementById("hel");
  myDiv.style.display = "none"; 
};
function fun(){
  document.getElementById("hel").style.display="none";
  document.getElementById("b2").style.borderBottom="none";
  document.getElementById("b3").style.borderBottom="none";

    document.getElementById("b1").style.borderBottom="3px solid Red"
    document.getElementById("hello").style.display="block";
}
function fun1(){
  document.getElementById("b3").style.borderBottom="none";
  document.getElementById("b1").style.borderBottom="none";
  document.getElementById("hello").style.display="none";
  document.getElementById("b2").style.borderBottom="3px solid Red"
  document.getElementById("hel").style.display="block";
}
function fun2(){
  let a=document.getElementById("e1").value;
  let b=document.getElementById("p1").value;
  if(a=='admin' && b=='admin'){
    window.location="form.html";
  }
  else if(a=='' || b==''){
    window.alert("plz enter all credentials");
  }
  else{
    window.alert("wrong credentials");
  }
}
function fun3(){
     document.getElementById("hello").style.display="none";
     document.getElementById("hel").style.display="none";
    document.getElementById("b1").style.borderBottom="none";
    document.getElementById("b2").style.borderBottom="none";
    document.getElementById("b3").style.borderBottom="3px solid Red"
}
let sname=document.getElementById("n1").value;
let branch=document.getElementById("n2").value;
let dreamjob=document.getElementById("n3").value;
let gender=document.getElementById("n4").value; 
