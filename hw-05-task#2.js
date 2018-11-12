var style = document.head.appendChild(
    document.createElement("style")
)
style.innerText = `
    .circle {
        border: solid 2px black;
        width: 150px;
        height: 150px;
        border-radius:50%;
    }
    .header {
        font-family: Arial;
        color: #fff;
        font-size: 2em;
        text-align: center;
        padding: 25% 0;
    }
    .paragraph {
        font-family: monospace, Arial;
        color: #555;
        font-size: 16px;
        text-align: center;
    }
    div.circle {
        margin: 0 auto;
        background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsBS5O1u08rbDJiOOIqDY8TiiNfrk4wlh_C3Oxm5zVgPAPO03vQ");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    img.circle{
        margin: 1em;
        display: inline-block;
    }
    .container {
        width: 800px;
        margin: 0 auto;
    }
`

var tags = [
    {
        name: "div",
        attrs: { 
                className: "circle",
    },
    children: [
            {
                name: "h1", 
                attrs: { 
                                    className: "header" 
                                },
                text: "Nami"
            }
        ]
    },
    {
        name: "p", 
        attrs: { 
                className: "paragraph" 
        },
        text: "Hello, My name is Nami. I'm cat. Look and click on my photo =)"
    },
    {
        name: "div",
        attrs: {
            className: "container",
        },
        children: [
            {
                name: "img",
                attrs: {
                    src: "http://vsezhivotnye.com/sites/default/files/imagecache/resizeimgpost-500-500/u69/2012/06/1313317041_239312872_3----.jpg",
                    className: "circle"
                }
            },
            {
                name: "img",
                attrs: {
                    src: "http://multipet.ru/images/image2breed/britanskaya1.b1.jpg",
                    className: "circle"
                }
            },
            {
                name: "img",
                attrs: {
                    src: "https://zooclub.ru/attach/10000/10990.jpg",
                    className: "circle"
                }
            },
            {
                name: "img",
                attrs: {
                    src: "http://www.sunny-cat.ru/datas/users/1-agidel_design001.jpg",
                    className: "circle"
                }
            }
        ]
    }

]

function addElement ( elemCh, elemParent ) {
    var elem = elemParent.appendChild ( 
        document.createElement ( elemCh.name ) 
    )
    if ( elemCh.text ) 
        elem.innerHTML = elemCh.text
    for ( var attr in elemCh.attrs )  
        elem [ attr ] = elemCh.attrs [ attr ]
    return elem
}
for ( var tag of tags ) {
    var elem = addElement ( tag, document.body )
    if ( !tag.children ) continue
    for ( var child of tag.children )  
        addElement ( child, elem )
}

var collection = document.getElementsByClassName ( "circle" )

console.log("Collection:= ", collection )

var str = document.body.appendChild(
    document.createElement("p")
)
var functionArray = [
    function (event){
        event.stopImmediatePropagation()
        str.innerText = "it's my avatar"
        str.style = `
            font-family: monospace, Arial;
            color: blue;
            font-size: 16px;
            text-align: center;
        `
    },
    function (event){
        str.innerText = "it's me in childhood"
        str.style = `
            font-family: monospace, Arial;
            color: red;
            font-size: 16px;
            text-align: center;
        `
    },
    function (event){
        str.innerText = "look i'm on the hunt"
        str.style = `
            font-family: monospace, Arial;
            color: green;
            font-size: 16px;
            text-align: center;
        `
    },
    function (event){
        str.innerText = "it means 'what do you give me yummy?'"
        str.style = `
            font-family: monospace, Arial;
            color: orange;
            font-size: 16px;
            text-align: center;
        `
    },
    function (event){
        str.innerText = "what?"
        str.style = `
            font-family: monospace, Arial;
            color: pink;
            font-size: 16px;
            text-align: center;
        `
    }
]

function clickHandler (event) {
    //event.stopPropagation()
    event.stopImmediatePropagation()
    this.style = `
        width: 200px;
      height: 200px;
        transition: all .5s;
            border: 3px solid silver;
    `
}


var ind = 0
for ( var elemColl of collection ) {
    elemColl.onclick = functionArray[ind++]
  elemColl.addEventListener ( 'click', clickHandler )
    
    elemColl.onmouseover = function(event) {
        this.style = `
            border: 3px solid silver;
        `
    }
    elemColl.onmouseout = function(event){
        this.style = `
            width: 150px;
            height: 150px;
            transition: all .5s;
        `
        str.innerText = ''
    }
}