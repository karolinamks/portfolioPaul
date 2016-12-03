// Declaration de variables
var modal = document.getElementById("modal")
var pictures = document.getElementsByClassName("miniature")
var modalPicture = document.getElementById("modal-picture")

// Declaration de fonctions
var printModal = function(event){
	modal.style.display = "block"
	var newPicSrc = event.srcElement.currentSrc
	var picName = newPicSrc.split('.JPG')
	picName = picName[0] + '-large'
	modalPicture.src = picName + '.JPG'
}

//Code

//Recuperation de toutes les photos de la gallerie et ajout d'un fonction
//lorsqu'on clique dessus

for (picture of pictures){
	picture.addEventListener("click", printModal)
}

modal.addEventListener("click", function(){
	modal.style.display = "none"
})