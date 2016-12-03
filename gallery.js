// Declaration de variables
var modal = document.getElementById("modal")
var pictures = document.getElementsByClassName("miniature")
var modalPicture = document.getElementById("modal-picture")
var modalTitle = document.getElementById("modal-title")
var paul = document.getElementById("paul")

// Declaration de fonctions
var printModal = function(event){
	//Affichage de la modale
	modal.style.display = "block"

	//Affichage du titre
	var newPicSrc = event.srcElement.currentSrc
	var picUrl = newPicSrc.split('.JPG')
	var picName = picUrl[0].split('/')
	picName = picName[picName.length - 1].replace('_', ' ')
	modalTitle.innerHTML = picName
	picUrl = picUrl[0] + '-large'

	//Affichage de la bonne image dans la modale
	modalPicture.src = picUrl + '.JPG'
}

//Code

//Recuperation de toutes les photos de la gallerie et ajout d'un fonction
//lorsqu'on clique dessus

for (picture of pictures){
	picture.addEventListener("click", printModal)
}

modal.addEventListener("click", function(){
	//On enleve l'affichage de la modale
	modal.style.display = "none"
})