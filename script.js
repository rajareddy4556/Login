document.getElementById("hello").style.display="none";
let c=0;
let i=document.getElementById("b1");
i.click();
function fun(){
  document.getElementById("hel").style.display="none";
  document.getElementById("b2").style.borderBottom="none";
    document.getElementById("b1").style.borderBottom="3px solid Red"
      c++;
    if(c%2==1)
    document.getElementById("hello").style.display="block";
}
function fun1(){
  document.getElementById("b1").style.borderBottom="none";
  document.getElementById("hello").style.display="none";
  document.getElementById("b2").style.borderBottom="3px solid Red"
    c++;
  if(c%2==0)
  document.getElementById("hel").style.display="block";
}