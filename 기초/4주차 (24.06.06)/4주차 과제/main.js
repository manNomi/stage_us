var content=document.getElementById("main_book_content_container")
var cover_back=document.getElementById("main_book_cover_back_container")
var first_click_event=false
var first_page_old=null
var second_page_old=content
var focus_img=null
var persent_img=null
var result_img=null
var present_tag=null
var drop_tag=null

// 페이지 오픈 , 시작
function openPage(e){
    var cover=e.target
    puzzleImgMake("img",cover_back,content)
    // 이동함수
    moveEvnet(cover)
    moveEvnet(cover_back)
    moveEvnet(content)
    // 클릭 함수 초기화
    cover.onclick=function(){}
    // 이동후 함수 실행
    setTimeout(()=>{
        rotateEvnet(cover)
        rotateEvnet(cover_back)
    },1300)
    setTimeout(()=>{
        document.getElementById("next_page_line").style.display="block"
    },2300)

}

// 회전 -css 코드다 
// transform-origin: left center;
// transition-duration: 1s;
// transition-timing-function: ease-in;
// easing: "ease-in", -> 가속 


// 아래 코드를 js에서 적으면 애니메이션 효과처럼 보인다
// transform:rotateY(-180deg);


// 책 이동 
// element.animate(keyframes,options)
    // keyframes -> 백분율 단위로 바꿀 css속성 의미
    // options -=>
        // durations 지속시간
        // delay 시작 전 지연시간 
        // iterations 반복 횟수 
        // direction 애니메이션 방향 
        // fill 애니메이션 끝나고 스타일 유지 여부
function moveEvnet(e){
    e.animate({
        marginLeft: [0, 50 +"%"]
    }, {
        duration: 1000,
        easing: "ease",
        fill: "forwards"
    });
}

function rotateEvnet(e){
    e.animate(
        [{transform:"rotateY(-180deg)"}],
        {
        duration: 1000,
        easing: "ease-in",
        fill: "forwards"
        }
    );
}




// 새로운 페이지 제작
function newPuzzleEventSet(imgTag){
    imgTag.ondragstart=function getImgEvent(e){
        present_tag=e.target
    }
    imgTag.ondragover=function dragOverEvent(event){
        // 드래그에 내장된 기능 해제 
        event.preventDefault()
    }
    imgTag.ondrop=function setImgEvent(event){
        drop_tag=event.target
        swapTag(present_tag,drop_tag)
        newPuzzleFinish()
    }
    imgTag.draggable="true"
}

// 퍼즐 이동 
function swapTag(select,drop){
    // 이동을 안할시 함수 종료
    if (select === drop) return;
    //부모노드 설정 
    var select_parent = select.parentNode;
    var drop_parent = drop.parentNode;
    // 첫번째 페이지의 경우 회전시켜주기 
    // 두번째 페이지의 경우 회전 없애주기 
    var parent_list=[select_parent,drop_parent]
    var child_list=[drop,select]
    for (i=0;i<2;i++){
        if (parent_list[i].id=="first_page"){
            child_list[i].style="transform:rotateY(-180deg);"
        }
        else{
            child_list[i].style="transform:rotateY(0deg);"
        }
    }
    // 빈 DIV태그 생성
    var temp = document.createElement('div');
    // 빈 DIV를 선택한 태그 앞에 삽입
    select_parent.insertBefore(temp, select);
    // 선택 태그 앞에 결과 태그 위치 앞에 삽입
    drop_parent.insertBefore(select, drop);
    // 빈 DIV 태그에 결과 태그 대체
    temp.replaceWith(drop);
}


// 퍼즐 이벤트 세팅
function newPuzzleFinish(){
    var children =document.getElementById("first_page").childNodes
    var result_index=[2,1,0,5,4,3,8,7,6]
    for(i=0;i<9;i++){
        if (children[result_index[i]].id!=i){
            return
        }
    }
    // 퍼즐 이동후 성공 로직 띄우기 위해서
    setTimeout(()=>alert("축하합니다"))
}



// 다음페이지 이동 
function nextPageEvent(){
    // 넘어가는 시간 맞춰서 사라지게끔 하기 
    setTimeout(() => {
        if (first_click_event!=false){
        first_page_old.replaceChildren()
    }
    else{
        document.getElementById("main_book_cover_back_container").replaceChildren()
        first_click_event=true
    }
        
    }, 700);
    
    var main_container=document.getElementById("main_book_container")

    var first_page_new=document.createElement("div")
    first_page_new.id="first_page"
    first_page_new.classList="main_book_container"

    var second_page_new=document.createElement("div")
    second_page_new.classList="main_book_container"
    second_page_new.id="second_page"

    var second_page_rotate = document.createElement("div");
    second_page_rotate.classList = "main_book_container";

    // second_page_old의 자식 요소들을 second_page_rotate에 추가
    for (var i = 0; i < second_page_old.children.length; i++) {
        // cloneNode -> true : 자식도 복사 false : 자식 X 
        var child = second_page_old.children[i].cloneNode(true); 
        second_page_rotate.appendChild(child);
    }

    var second_page_new_text=document.createElement("div")
    second_page_new_text.classList="second_page_empty"
    second_page_new_text.innerHTML="-사진을 드래그해 넣으세요-"
    second_page_new.appendChild(second_page_new_text)

    main_container.appendChild(second_page_new)
    main_container.appendChild(first_page_new)
    main_container.appendChild(second_page_rotate)
    console.log(first_page_new)
    rotateEvnet(first_page_new)
    rotateEvnet(second_page_rotate)
    // 넘어가는 타이밍 맞춰서 삭제 
    setTimeout(()=>second_page_rotate.remove(),
        550
    )
    // 기존 내용도 초기화
    second_page_old=second_page_new
    first_page_old=first_page_new
    // 이비지 다운로드 이벤트 등록
    getImgDragEventSet(second_page_new_text)
}

// 새로운 이미지 -> 퍼즐 이벤트 세팅
function getImgDragEventSet(e){
    e.addEventListener("dragover",(event) => {
        e.style="opacity:0.4;"
        event.preventDefault()
    })
    e.addEventListener("dragleave",(event) => {
        e.style="opacity:0;"
        event.preventDefault()
    })
    e.addEventListener("drop",(event) => {
        event.preventDefault()
        e.style="opacity:0;"
        event.target.remove()
        var getImgFile=event.dataTransfer.files
        
        contentPageSet(getImgFile)
    })
}
// dataTransfer
        // setData(format, data): 드래그 작업 중에 전달할 데이터를 설정합니다. 
            // format은 데이터의 형식을 지정하고, data는 전달할 데이터를 나타냅니다.
        // getData(format): 드롭 이벤트 처리기에서 전달된 데이터를 가져옵니다.
            //  format은 가져올 데이터의 형식을 지정합니다.
        // clearData(): 설정된 모든 데이터를 제거합니다.
        // files: 드롭 이벤트에서 전달된 파일 목록을 나타내는 FileList 객체입니다.
            //  (이는 event.dataTransfer.files와 같습니다)

// 이미지 다운로드 태그 생성 
function contentPageSet(imgFile){
    // dataTransfer.files가 사용할 수 있는 속성 
    // length: 파일 목록의 개수를 나타내는 속성입니다.
    // item(): 특정 인덱스에 해당하는 파일을 가져오는 메서드입니다.
    // [index]: 파일 목록에서 특정 인덱스에 해당하는 파일을 가져오는 방법입니다.
    var imgList=[]
    for (i=0; i<imgFile.length;i++){
        // match -> 일치하는 부분 리턴 
        // type -> 파일의 mime 형태 반환
        // PEG 이미지 파일의 MIME 타입은 "image/jpeg"입니다.
        if(imgFile[i].type.match("image.*")===false){
            return
        }
        imgList.push(imgFile[i])
    }
    for( var imageFile of imgList){
        // 파일리더 객체 생성
        var fileReader=new FileReader()
        // readAsDataURL 통해 파일읽기 
        fileReader.readAsDataURL(imageFile)
        // onload 통해 결과 보내기 
        fileReader.addEventListener('load',(event)=>{
            imgCut(event.target.result)
        })
    }
}

// 이미지 자르기
function imgCut(img){
    var result_img_list=[]
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
            // 캔버스 불러와서 부분영역 자르기
            var resultCanvas=document.createElement("canvas")
            // getContext는 canvas tag 일때 가능 
            var resultContext=resultCanvas.getContext("2d")
            // getcontext 의 매개변수 
            // "2d": 2D 그래픽 컨텍스트 2D 그래픽 작업에 사용.
            // "webgl": WebGL 그래픽 컨텍스트를  3D 그래픽 작업에 사용
            var start_x=cut_legnth[o][0]
            var start_y=cut_legnth[o][1]
            resultCanvas.width = width;
            resultCanvas.height = height;
            // drawimgae의 배개변수
            // image: 그릴 이미지를 나타내는 img 객체입니다.
            // sx: 그릴 이미지의 시작 x 좌표입니다.  생략가능
            // sy: 그릴 이미지의 시작 y 좌표입니다. 생략가능  
            // sWidth: 그릴 이미지의 너비입니다. 생략가능
            // sHeight: 그릴 이미지의 높이입니다. 생략가능
            // dx: 이미지가 그려질 x 좌표입니다.
            // dy: 이미지가 그려질 y 좌표입니다.
            // dWidth: 이미지가 그려질 너비입니다. 생략가능
            // dHeight: 이미지가 그려질 높이입니다. 생략가능능
            resultContext.drawImage(
                imgObj,
                start_x,
                start_y,
                width,
                height,
                0,
                0,
                width,
                height)
                // canvas 태그 
                resultCanvas.classList.add("puzzle_cut_img")
                result_img_list.push(resultCanvas)
                resultCanvas.setAttribute("class","puzzle_img")
                // id를 통해 후에 비교 
                resultCanvas.id=o
                // 태그 이벤트 등록
                newPuzzleEventSet(resultCanvas)
        }
        // 퍼즐 생성
        newPuzzleImgMake(result_img_list)
    }
}
// 퍼즐생성
function newPuzzleImgMake(cut_img_list){
    for (i=0;i<9;i++){
        var tmpImgTag=document.createElement("img")
        tmpImgTag.setAttribute("class","puzzle_tmp_img")
        tmpImgTag.id="tmpImg"+i
        tmpImgTag.src="image/empty.png"
        newPuzzleEventSet(tmpImgTag)
        first_page_old.appendChild(tmpImgTag)
    }
    var shuffle_tag=cut_img_list
        shuffle_tag.sort(() => Math.random()-0.5);
        for(i=0;i<9;i++){
            second_page_old.appendChild(shuffle_tag[i])
        }
}

// 데모 퍼즐 파트

// 데모 퍼즐 제작 
function puzzleImgMake(name,fist,second){
    for (i=0;i<9;i++){
        var tmpImgTag=document.createElement("img")
        tmpImgTag.setAttribute("class","puzzle_tmp_img")
        tmpImgTag.id="tmpImg"+i
        tmpImgTag.src="image/empty.png"
        puzzleEventSet(tmpImgTag,name)
        fist.appendChild(tmpImgTag)
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


// 데모 퍼즐 이벤트 세팅
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

// 데모 퍼즐 결과 확인
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