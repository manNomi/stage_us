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
    for (i=0;i<9;i++){
        var tmpImgTag=document.createElement("img")
        tmpImgTag.setAttribute("class","puzzle_tmp_img")
        tmpImgTag.id="tmpImg"+i
        tmpImgTag.src="image/empty.png"
        puzzleEventSet(tmpImgTag,name)
        fist.appendChild(tmpImgTag)
    }
    if(name== null){
        return
    }
    var imgList=[]
    for (i=1;i<10;i++){
        var imgSrc="image/"+name+"_"+i+".webp"
        imgList.push(imgSrc)
    }
    imgList.sort(() => Math.random()-0.5);
    for (i=0;i<9;i++){
        var imgTag=document.createElement("img")
        imgTag.setAttribute("class","puzzle_img")
        imgTag.src=imgList[i]
        puzzleEventSet(imgTag,name)
        second.appendChild(imgTag)
    }
    
}
var focus_img=null
var persent_img=null
var result_img=null
var dataURL = null

function newPuzzleEventSet(imgTag){
    imgTag.ondragstart=function getImgEvent(e){
        persent_img=e.target
        focus_img=persent_img.src
    }
    imgTag.ondragover=function dragOverEvent(event){
        event.preventDefault()
    }
    imgTag.ondrop=function setImgEvent(event){
        result_img=event.target
        persent_img.src=result_img.src
        persent_img.style="opacity:1;"
        result_img.src=focus_img
        newPuzzleFinish()
    }
    imgTag.draggable="true"
}

function puzzleEventSet(e,name){
        e.ondragstart=function getImgEvent(e){
            persent_img=e.target
            focus_img=persent_img.src
        }
        e.ondragover=function dragOverEvent(event){
            event.preventDefault()
        }
        e.ondrop=function setImgEvent(event){
            result_img=event.target
            persent_img.src=result_img.src
            persent_img.style="opacity:1;"
            result_img.src=focus_img
            puzzleFinish(name)
        }
        e.draggable="true"
}

function newPuzzleFinish(){
    var result_index=[3,2,1,6,5,4,9,8,7]
    for (i=0;i<9;i++){
        var check_name=document.getElementById("tmpImg"+i).src
        if(urlList[result_index[i]]!=check_name){
            console.log(urlList[result_index[i]])
            console.log(check_name)
            return
        }
    }
    alert("축하합니다")
}

function puzzleFinish(name){
    var count=0
    var result_index=[3,2,1,6,5,4,9,8,7]
    for (i=0; i<9;i++){
        var src_name=name+"_"+(result_index[i])
        var check_name=document.getElementById("tmpImg"+i).src.split("/")
        check_name=check_name[check_name.length-1].split(".")[0]
        if(src_name==check_name){
            count++
            continue
        }
        else{
            break
        }
    }
    if(count==9){
        setTimeout(()=>alert("축하합니다")
    ,100)
    }
}
var first_click_event=false
var first_page_old=null
var second_page_old=content
var nullImg=null 

function nextPageEvent(){
    if (first_click_event!=false){
        first_page_old.replaceChildren()
    }
    else{
        document.getElementById("main_book_cover_back_container").replaceChildren()
        first_click_event=true
    }
    var main_container=document.getElementById("main_book_container")

    var first_page_new=document.createElement("div")
    first_page_new.id="first_page_new"
    first_page_new.classList="main_book_next_back_container"

    var second_page_new=document.createElement("div")
    second_page_new.classList="main_book_next_content_container"

    var second_page_new_text=document.createElement("div")
    second_page_new_text.classList="second_page_empty"
    second_page_new_text.innerHTML="-사진을 드래그해 넣으세요-"
    second_page_new.appendChild(second_page_new_text)

    main_container.appendChild(first_page_new)
    main_container.appendChild(second_page_new)

    first_page_new.style="transform:rotateY(-180deg);"
    second_page_old.style="transform:rotateY(-180deg);"
    getImgEventSet(second_page_new_text)
    second_page_old=second_page_new
    first_page_old=first_page_new
}

function getImgEventSet(e){
    e.addEventListener("dragover",(event) => {
        e.classList.add("main_book_next_content_on_file")
        event.preventDefault()
    })
    e.addEventListener("dragleave",(event) => {
        e.classList.remove("main_book_next_content_on_file")
        event.preventDefault()
    })
    e.addEventListener("drop",(event) => {
        event.preventDefault()
        e.classList.remove("main_book_next_content_on_file")
        event.target.remove()
        var getImgFile=event.dataTransfer.files
        contentPageSet(getImgFile)
    })
}

function contentPageSet(imgFile){
    var imgList=[]
    for (i=0; i<imgFile.length;i++){
        if(imgFile[i].type.match("image.*")===false){
            return
        }
        imgList.push(imgFile[i])
    }
    for( var imageFile of imgList){
        var fileReader=new FileReader()
        fileReader.readAsDataURL(imageFile)
        fileReader.addEventListener('load',(event)=>{
            imgCut(event.target.result)
        })
    }
}

var urlList=[]

function imgCut(img){

    // 받아온 이미지 객체로 생성 
    var imgObj = new Image
    imgObj.src=img
    // 이미지 로드 후 실행
    imgObj.onload=function(){
        // 너비의 3분의1로 계산
        var width = imgObj.width/3
        var height = imgObj.height/3
        
        //잘라낼 영역 계산
        var cut_legnth =[]
        for (o=0;o<3;o++){
            for (i=0;i<3;i++){
                cut_legnth.push([width*i,height*o])
            }
        }
        // 이미지 캔버스에 그리기
        for (o=0;o<9;o++){
            var sourceCanvas=document.createElement("canvas")
            var sourceContext=sourceCanvas.getContext("2d")
            sourceCanvas.width=imgObj.width
            sourceCanvas.height=imgObj.height
            sourceContext.drawImage(imgObj,0,0)

            // 캔버스 불러와서 부분영역 자르기
            var resultCanvas=document.createElement("canvas")
            var resultContext=resultCanvas.getContext("2d")
            var start_x=cut_legnth[o][0]
            var start_y=cut_legnth[o][1]
            resultCanvas.width = width;
            resultCanvas.height = height;
            resultContext.drawImage(
                sourceCanvas,
                start_x,
                start_y,
                width,
                height,
                0,
                0,
                width,
                height)
                resultCanvas.classList.add("puzzle_cut_img")
                url=resultCanvas.toDataURL("image/png")
                urlList.push(url)
        }
        newPuzzleImgMake(urlList)
    }
}
function newPuzzleImgMake(imgUrlList){
    for (i=0;i<9;i++){
        var tmpImgTag=document.createElement("img")
        tmpImgTag.setAttribute("class","puzzle_tmp_img")
        tmpImgTag.id="tmpImg"+i
        tmpImgTag.src="image/empty.png"
        newPuzzleEventSet(tmpImgTag)
        first_page_old.appendChild(tmpImgTag)
    }
    urlList=imgUrlList
    imgUrlList.sort(() => Math.random()-0.5);
    for (i=0;i<9;i++){
        var imgTag=document.createElement("img")
        imgTag.setAttribute("class","puzzle_img")
        imgTag.src=imgUrlList[i]
        newPuzzleEventSet(imgTag)
        second_page_old.appendChild(imgTag)
    }
    
}