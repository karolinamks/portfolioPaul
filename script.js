var links = document.getElementsByClassName("menu-link")


var addOpc = function(element){
	element.srcElement.classList.add("visible")
}

var removeOpc = function(element){
	element.srcElement.classList.remove("visible")
}


for (link of links){
	link.addEventListener("mouseover", addOpc)
	link.addEventListener("mouseleave", removeOpc)
}

/* 

<script language="javascript">

 
var Timer;

var Pas = 3; // vitesse défilement texte

var Img = 1; // le numéro de l'image à afficher

var End = 11; // le numéro de la dernière image

 
function moveLayer(Sens)

{

if(document.getElementById)

	Objet = document.getElementById("Contenu");

else

	Objet = document.all["Contenu"];

if(parseInt(Objet.style.top) + (Pas*Sens) > 0)

	Objet.style.top = "0px";

else

	Objet.style.top = (parseInt(Objet.style.top) + (Pas*Sens)) + "px";

Timer = setTimeout("moveLayer(" + Sens + ");", 50);

}

 
function nextImage() {

	Img = Img + 1 ;

	if (Img >= End) 

		Img = 1; // si on dépasse la dernière image, on revient au début

	if (Img >= 1 && Img <= 9)

		document.images['vue'].src='MagnetPhoto/Galeries/Naissance/0'+Img+'.jpg'; // si c'est <= 9 on met un 0 devant

	else 

		document.images['vue'].src='MagnetPhoto/Galeries/Naissance/'+Img+'.jpg'; // sinon on affiche le numéro

}

 
function previousImage() {

	Img = Img - 1;

	if (Img <= 1)

		Img = End; // si on dépasse la première image (en reculant), on passe à la dernière

	if (Img >= 1 && Img <= 9)

		document.images['vue'].src='MagnetPhoto/Galeries/Naissance/0'+Img+'.jpg'; // si c'est <= 9 on met un 0 devant

	else 

		document.images['vue'].src='MagnetPhoto/Galeries/Naissance/'+Img+'.jpg'; // sinon on affiche le numéro

}

</script>


Ensuite, tu as juste besoin de mettre onclick="javascript:p reviousImage();" quand tu veux reculer d'une image (sans l'espace entre java et script !)
Et de mettre onclick="javascript:nextImage();" quand tu veux avancer d'une image (sans l'espace aussi)

Quand on arrive à la dernière image, ça repasse au début, et quand on arrive à la première, ça repasse à la dernière.

*/