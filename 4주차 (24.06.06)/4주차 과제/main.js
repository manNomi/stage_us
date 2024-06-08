var content=document.getElementById("main_book_content_container")
var cover_back=document.getElementById("main_book_cover_back_container")

puzzleImgMake()
function openPage(e){
    var cover=e.target
    moveEvnet(cover)
    moveEvnet(cover_back)
    moveEvnet(content)
    setTimeout(()=>cover.style="transform:rotateY(-180deg);"
    ,1300)
    setTimeout(()=>cover_back.style="transform:rotateY(-180deg);"
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
        imgTag.src="image/img_"+i+".png"
        puzzleEventSet(imgTag)
        content.appendChild(imgTag)
    }
    for (i=1;i<10;i++){
        var tmpImgTag=document.createElement("img")
        tmpImgTag.setAttribute("class","puzzle_tmp_img")
        tmpImgTag.src="image/empty.png"
        puzzleEventSet(tmpImgTag)
        cover_back.appendChild(tmpImgTag)
    }
}

var focus_img=null
var persent_img=null
var result_img=null

function puzzleEventSet(e){
    e.ondragstart=function getImgEvent(e){
        persent_img=e.target
        focus_img=persent_img.src
        persent_img.style="opacity:0.4;"
    }
    e.ondragover=function dragOverEvent(e){
        // persent_img.src="image/empty.png"
        e.preventDefault()
    }
    e.ondrop=function setImgEvent(e){
        result_img=e.target
        console.log(e)
        persent_img.src=result_img.src
        persent_img.style="opacity:1;"
        result_img.src=focus_img
    }
    e.draggable="true"
}



