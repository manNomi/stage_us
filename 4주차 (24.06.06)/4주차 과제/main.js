var content=document.getElementById("main_book_content_container")
var cover_back=document.getElementById("main_book_cover_back_container")





puzzleImgMake("img",cover_back,content)

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

function puzzleImgMake(name,fist,second){
    var imgList=[]
    for (i=1;i<10;i++){
        var imgSrc="image/"+name+"_"+i+".webp"
        imgList.push(imgSrc)
    }
    console.log(imgSrc)
    imgList.sort(() => Math.random()-0.5);
    for (i=0;i<9;i++){
        var imgTag=document.createElement("img")
        imgTag.setAttribute("class","puzzle_img")
        imgTag.src=imgList[i]
        puzzleEventSet(imgTag,name)
        second.appendChild(imgTag)
    }
    for (i=0;i<9;i++){
        var tmpImgTag=document.createElement("img")
        tmpImgTag.setAttribute("class","puzzle_tmp_img")
        tmpImgTag.id="tmpImg"+i
        tmpImgTag.src="image/empty.png"
        puzzleEventSet(tmpImgTag,name)
        fist.appendChild(tmpImgTag)
    }
}

var focus_img=null
var persent_img=null
var result_img=null

function puzzleEventSet(e,name){
    e.ondragstart=function getImgEvent(e){
        persent_img=e.target
        focus_img=persent_img.src
        persent_img.style="opacity:0.4;"
    }
    e.ondragover=function dragOverEvent(e){
        e.preventDefault()
    }
    e.ondrop=function setImgEvent(e){
        result_img=e.target
        persent_img.src=result_img.src
        persent_img.style="opacity:1;"
        result_img.src=focus_img
        puzzleFinish(name)
    }
    e.draggable="true"
}


function puzzleFinish(name){
    var count=0
    var result_index=[3,2,1,6,5,4,9,8,7]
    for (i=0; i<9;i++){
        var src_name=name+"_"+(result_index[i])
        var check_name=document.getElementById("tmpImg"+i).src.split("/")
        check_name=check_name[check_name.length-1].split(".")[0]
        console.log(check_name,1)
        console.log(src_name,2)
        if(src_name==check_name){
            count++
            continue
        }
        else{
            break
        }
    }
    console.log(count)
    if(count==9){
        setTimeout(()=>alert("축하합니다")
    ,100)
    }
}

var first_click_event=false


var first_page_old=null
var second_page_old=content
function nextPageEvent(){
    var main_container=document.getElementById("main_book_container")

    var first_page_new=document.createElement("div")
    first_page_new.classList="main_book_next_back_container"

    var second_page_new=document.createElement("div")
    second_page_new.classList="main_book_next_content_container"
    main_container.appendChild(first_page_new)
    main_container.appendChild(second_page_new)
    puzzleImgMake("img",first_page_new,second_page_new)
    first_page_old=first_page_new

    // var imgLoad=second_page_new.querySelectorAll("img")
    // console.log(imgLoad)
    // imgLoad.forEach(element => {
    // })
    
    // imgLoad.onload=function(){
    //     console.log(imgLoad)
    //     first_page_new.style="transform:rotateY(-180deg);"
    //     second_page_old.style="transform:rotateY(-180deg);"
    //     setTimeout(()=>second_page_old=second_page_new
    //     ,1000)
    // }
    var imgLoad=second_page_new.querySelector("img")
    imgLoad.onload=function(){

    first_page_new.style="transform:rotateY(-180deg);"
        second_page_old.style="transform:rotateY(-180deg);"
        setTimeout(()=>second_page_old=second_page_new
        ,1000)
    }

}

    // var imgElement= second_page_new.querySelector("img")
    // imgElement.onload=function(){
    //     console.log("로드됨")
    //     setTimeout(()=>{
    //         first_page_new.style="transform:rotateY(-180deg);"
    //         second_page_old.style="transform:rotateY(-180deg);"
    //     }
    //     ,10)
    //     setTimeout(()=>second_page_old=second_page_new
    //     ,1010)
    // }