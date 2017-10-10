
// Begin exercice 1

console.log("Hello Word!");

var a;

a = "Hello Word";

console.log(a);

// End exercice 1

// begin exercice 2
console.log (3*3);
console.log (12/0);
console.log (4+9+78);
console.log (12-7);
console.log  (5e4);
// End  exercice 2

// begin exercice 3

var prenom = prompt("Entrez votre prénom :");
alert("Bonjour, " + prenom);

// End  exercice 3

// begin exercice 4


var firstName= " Amélie" ;
var LastName = " Pioger" ;
var fullName= firstName+LastName;
console.log (fullName);


var firstName= "Amélie" ;
var LastName = "Pioger" ;
var fullName= firstName+" " +LastName;
console.log (fullName);

// End  exercice 4


// begin exercice 5

var a = "122";

a = Number("122"); // convertion du texte en numérique :

console.log(a+ 1); // Addition numérique :

// exercice 5

var text = '123', number;


number = parseInt(text);

alert(typeof number); // Affiche : « number »

alert(number); // Affiche : « 123 »

// End  exercice 5




// exercice 2.1


var condition1 ="ok";

var condition2= " ";

if (condition1= " "){


  console.log("false");


}

else{

  console.log("true");


}

 // exercice 2.2


 var year = prompt(" En quelle année sommes-nous");

 var now ="2017";

 var Birthday = prompt ("ton année de naissance?");

 var myBirthday = "1990";

 var result = now - myBirthday;

 alert(result);

 var cumul=parseInt(result +( 37));

 alert (cumul);


// End exercice 2.2

//Exercice 2.3

var a= 70;

var b= 59;

var c= 20;

var montant= a+b+c;
var remise = 0.8;
var result= montant*remise;

alert(result);


//  exercice 2.4

var a =parseInt(prompt(" Donne moi un nombre"));

var b =parseInt(prompt("Donne moi un autre nombre?"));

var result=(a+b);

alert (result);
// End exercice 2.4
url: https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/les-chaines-de-caracteres-1

//  exercice 2.5


var prenom= prompt("Quel est ton prenom?");


var nom= prompt ("Quel est ton nom?");

var first= prenom.charAt(0).toUpperCase();


var last= prenom.charAt(prenom.length -1).toUpperCase();


alert(first+last);

var first1=nom.charAt(0).toUpperCase();

var last1= nom.charAt(nom.length -1).toUpperCase();

alert(first1+last1);



// End exercice 2.5


// exercice 3.1

var nb1,nb2,nb3,nb4;


var nb1=1<2;//0

var nb2=2<1;//0

var nb3=3<4;//4

var nb4=4<3;//0


var result =3<4;


alert(result);

// End exercice 3.1

//exercice 3.2


var yearOld = prompt(" En quel âge as-tu?");


if (yearOld<=0){// Entrez votre aĝe réél;

  alert('Entrez votre aĝe réél.');


}

if (yearOld>= 21) {//accés autorisé
    alert('accés autorisé.');
}

if (yearOld%2==0)  //votre âge est pair

 alert ('votre âge est pair.');

if (yearOld=Math.pow) //ton âge est un nombre carré

  alert ('ton âge est un nombre carré.');


//End exercice 3.2

// exercice 3.3

var entier= 3;

var question = prompt(" Devines le nbre?");


while (entier !=question){
if (question > entier) { // chiffre superieur

question = prompt(" nbre plus petit?");

}

else  { //  chiffre inferieur

question = prompt(" nbre plus grand?");
}

}
alert ("win");

  //End exercice 3.3


//  exercice3.4



var i = 0;
do {
  i += 1;
  console.log(i);
while (i < 100);
}


//End excercie3.4

//excercice 3.5

for (var i = 1; i <= 100; i++) {

    if (i % 2 === 0) {

        console.log(i + " est pair");

    }

}
//End excercice 3.5


//excercice 3.6

var longeur= prompt ("Quel est la longeur?");

var largeur= prompt("Quel est la largeur?");

var profondeur= prompt("Quel est la profondeur?");

var result=longeur*largeur*profondeur;

alert(result)


//End excercice 3.6
// piramide

var ligne = "";
var i = 1;
while (i <= 5) {
    ligne = ligne + "*";
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
    i++;
}



//piramide 2


var result = " ";

for (i=0; i<5; i++){
  for (j=0; j<=i; j++){
    result += "*";
  }
 result += "\n";
}

console.log(result);
// fin piramide

//Vous travaillez sur un site ecommerce et dans votre processus d'achat vous avez besoin de savoir si le montant du panier utilisateur est un nombre paire ou non.

Vous allez donc créer une fonction qui peut recevoir un nombre et vérifier que celui est paire. Si cest le cas elle affiche dans la console true, autrement elle affiche false.

Si le nombre rentré est un nombre à virgule, celui-ci est arrondie à entier le plus proche!//



var panier =Math.round(prompt("votre panier"));

alert ( panier);

if (panier%2===0)  //panier pair

 alert ('panier pair.');

else{

  alert ("chiffre impair");
}
// pierre feuille ciseaux

var choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
var choix = function () { choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?"); };
var nonValide = function () {


while (choixUtilisateur !== 'pierre' && choixUtilisateur !== 'feuille' && choixUtilisateur !== 'ciseaux') { confirm(choixUtilisateur + " l'entrer n'est pas valide !"); choix(); } }; nonValide();
var choixOrdi = Math.random();
if (choixOrdi <= 0.34) { choixOrdi = 'pierre'; }
else if (choixOrdi <= 0.67) { choixOrdi = 'feuille'; }
else { choixOrdi = 'ciseaux'; }
var ordiGagne = choixOrdi; ordiGagne = "Victiore pour l'ordinateur";
var userGagnent = choixUtilisateur; userGagnent = "Victiore pour l'utilisateur";

alert('L\'ordinnateur a choisi ' + choixOrdi);
var comparer = function (choix1, choix2) {
if (choix1 === choix2) {
 return "Egalité " + choixUtilisateur; }
else if (choix1 === 'pierre') {
if (choix2 === 'ciseaux') {
  return 'La pierre gagne ! ' + userGagnent; }
  else { return 'La feuille gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur; } }

else if (choix1 === 'feuille') {
if (choix2 === 'pierre') {
return 'La feuille gagne ! ' + userGagnent; }
else { return 'Le ciseaux gagnent ! ' + ordiGagne + ' l\'utilisateur avait choisi la ' + choixUtilisateur; } }
else if (choix1 === 'ciseaux') {
if (choix2 === 'feuille') {
return 'Le ciseaux gagne ! ' + userGagnent; }
else { return 'La pierre gagne ! ' + ordiGagne + ' l\'utilisateur avait choisi le ' + choixUtilisateur; } } };

alert(comparer(choixUtilisateur, choixOrdi));


//--------------matrixe


for (var i=0;i<4; i++){
  for (var j=0; j<4;j++){
    if (i==j) {
  console.log ("1"); }


    else {

      console.log ("0");}

}
console.log ("----------");

    }
