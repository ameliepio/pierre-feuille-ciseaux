var cptOrdi = 0;
var cptUser = 0;
var choixUser = ("choissisez pierre ou feuille ou ciseaux?");
var choixOrdi = Math.random();





function recup(choixUser) {

  // alert ("choix utilisateur");
  //
  // document.getElementById("pierre").innerHTML="choixUser";
  // document.getElementById("papier").innerHTML="choixUser";
  // document.getElementById("ciseau").innerHTML="choixUser";



  // while ((cptOrdi !=3) && (cptUser !=3)) {


  if (choixOrdi <= 0.34) {
    choixOrdi = "pierre";
    document.getElementById("choixOrdinateur").src = "img/caillou.png";


  } else if (choixOrdi <= 0.67) {
    choixOrdi = "papier";
    document.getElementById("choixOrdinateur").src = "img/feuille3.png";


  } else {
    choixOrdi = "ciseau";
    document.getElementById("choixOrdinateur").src = "img/image1.png";
  }

  if (choixOrdi === choixUser) {





    document.getElementById('result').innerHTML = "Egalité !";


  } else {

    switch (choixUser) {

      case 'pierre':

        if (choixOrdi === 'ciseau') {

          cptUser++;

          document.getElementById("score").innerHTML = "Joueur : " + cptUser + " : " + cptOrdi + " : ordi";

        } else {

          document.getElementById("score").innerHTML = "Joueur : " + cptUser + " : " + cptOrdi + " : ordi";

          cptOrdi++;
        }
        break;

      case 'ciseau':

        if (choixOrdi === 'feuille') {

          cptUser++;

         document.getElementById("score").innerHTML = "Joueur : " + cptUser + " : " + cptOrdi + " : ordi";
        } else {


          cptOrdi++;

          document.getElementById("score").innerHTML = "Joueur : " + cptUser + " : " + cptOrdi + " : ordi";

        }
        break;

      case 'papier':

        if (choixOrdi === 'pierre') {

          cptUser++;


          document.getElementById("score").innerHTML = "Joueur : " + cptUser + " : " + cptOrdi + " : ordi";

        } else {


          cptOrdi++;
          document.getElementById("score").innerHTML = "Joueur : " + cptUser + " : " + cptOrdi + " : ordi";

        }

        break;

      default:

        ("mauvaise saisie");
    }
    // }
  }
    setTimeout(function () { document.getElementById("choixOrdinateur").src = "";},3000)  ;
  if (cptUser==3 ) {

    alert ("win");
    cptOrdi=0;
    cptUser=0;
    document.getElementById("score").innerHTML = "Joueur : " + cptUser + " : " + cptOrdi + " : ordi";


  }

if (cptOrdi==3){

  alert ("loose");

  cptOrdi=0;
  cptUser=0;
  document.getElementById("score").innerHTML = "Joueur : " + cptUser + " : " + cptOrdi + " : ordi";

}



}
