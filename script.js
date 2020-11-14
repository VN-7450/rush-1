var champ_sexe = form_inscription.elements["noms"];
var champ_civ = form_inscription.elements["civ"];
var champ_nom = form_inscription.elements["nom"];
var champ_email = form_inscription.elements["email"];
var champ_phone = form_inscription.elements["phone"];
var champ_url = form_inscription.elements["url"];
var champ_age = form_inscription.elements["age"];
var champ_hobies = form_inscription.elements["hobies"];
var form_inscription = document.getElementById("inscription");
var form_ok = true;
if (champ) {
    
}
function valider(event) {
    var form_OK = true;
    if(champ_telephone.value.length != 10 || isNaN(champ_telephone.value)){
        form_OK = false;
    }
    if(!form_OK){
        event.preventDefault();
     }
    if (champ_age.value == "") {
        form_OK = false;
        champ_age.classlist.add("erreur");
       }
       else{
        champ_age.classlist.remove("erreur");
    }
    if (champ_hobies.value == "") {
        form_OK = false;
        champ_hobies.classlist.add("erreur");
    }
    else{
        champ_hobies.classlist.remove("erreur");
    }
}

form_inscription.addEventListener('submit', valider);