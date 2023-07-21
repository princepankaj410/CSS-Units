

 function myFunction(){
var isChecked=document.getElementById("switchValue").checked;
console.log(isChecked);
if(isChecked==true){
      document.body.style.backgroundColor = "black";
      document.getElementById("h2").style.color = "white";
       }

       if(isChecked==false){
      document.body.style.backgroundColor = "white";
       document.getElementById("h2").style.color = "black";
     
       }
       }




