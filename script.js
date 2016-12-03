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