

function maFonction(){
var blocA=document.getElementsByClassName("bloc");
for(let i=0;i<4;i++){
 blocA[i].classList.toggle("nouveaucouleur");
     
}
}
function envoyer(){
    let myForm=document.getElementById("myForm");
myForm.addEventListener("submit",function(e) {
let monNom=document.getElementById("nom");
let monPrenom=document.getElementById("prenom");
let monTelephone=document.getElementById("telephone");
let monEmail=document.getElementById("email");
let monMessage=document.getElementById("message");
if(monNom.value.trim()==""){
     let myError=document.getElementById("error");
     myError.innerHTML="le champs nom est requis.";
     myError.style.color="red"; }
      else if(monPrenom.value.trim()==""){ 
       let myError1=document.getElementById("error1");
     myError1.innerHTML="le champs prenom est requis.";
     myError1.style.color="red";}
     else if(monTelephone.value.trim()==""){ 
       let myError2=document.getElementById("error2");
     myError2.innerHTML="le champs telephone est requis.";
     myError2.style.color="red";}
     else if(monEmail.value.trim()==""){ 
       let myError3=document.getElementById("error3");
     myError3.innerHTML="le champs email est requis.";
     myError3.style.color="red";}
     else if(monMessage.value.trim()==""){ 
       let myError4=document.getElementById("error4");
     myError4.innerHTML="le champs message est requis.";
     myError4.style.color="red";}
  
 else{ 
   e.preventDefault();
  let resultat1=document.getElementById("nom").value;
    let resultat2=document.getElementById("prenom").value;
      let resultat3=document.getElementById("telephone").value;
        let resultat4=document.getElementById("email").value;
        let resultat5=document.getElementById("message").value;
         alert("vos données ont été enregistrer:"+
          "\nnom:"+resultat1+
         "\nprenom:"+resultat2+
         "\ntelephone:"+resultat3+
         "\nemail:"+resultat4+
         "\nmessage:"+resultat5
         );
}
 
}) 

}


