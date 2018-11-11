var elem_p =  document.body.appendChild(document.createElement('p'))

elem_p.innerText = "Click me, please"

elem_p.onclick = function() {
	var picture = document.body.appendChild (document.createElement("img"))
	
	picture.src = "https://artland.com.ua/img/catalog/item_45403.jpg"
	picture.width = "150"
	picture.height = "150"
	picture.style = `
		border: 2px solid black;
		border-radius: 50%;
		transition: all .7s;
	`
    picture.onmouseover = function (event) {
        this.width = "300"
		this.height = "300"
    }
    picture.onmouseout = function(event) {
        this.width = "150"
		this.height = "150"
    }
    picture.onclick = function (event) {
        this.remove()
    }
}