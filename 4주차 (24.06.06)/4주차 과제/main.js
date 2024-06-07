var content=document.getElementById("main_book_content_container")
puzzleImgMake()
function openPage(e){
    var cover=e.target
    console.log(cover)
    moveEvnet(cover)
    moveEvnet(content)
    setTimeout(()=>cover.style="transform:rotateY(-180deg); opacity:0.4;"
    ,1300)
}

function moveEvnet(e){
    e.animate({
        marginLeft: [0, 50 +"%"]
    }, {
        duration: 1000,
        easing: "ease",
        fill: "forwards"
    });
}

function puzzleImgMake(){
    
    for (i=1;i<10;i++){
        var imgTag=document.createElement("img")
        imgTag.setAttribute("class","puzzle_img")
        // imgTag.src="image/img_"+i+".png"
        content.appendChild(imgTag)
    }
}