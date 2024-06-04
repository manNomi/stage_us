introEvent()
var first_check=true
var computer_number_list=[]
var main_game_top=document.getElementById("main_game_top")
var main_game_bottom=document.getElementById("main_game_bottom")
btnMake()
defaultTextMake(3)
backPageEvent()
setDate()
setInterval(setDate,1000);
mainMenuMake()
scoreBtnEvent()
stageUsTitleEvent()
clrearRangkingDataEvnet()
mainPageGithubEvent()


function btnMake(){
    for(i=1;i<10;i++){
        var main_game_bottom=document.getElementById("main_game_bottom")
        var new_main_number_btn=document.createElement("button")
        new_main_number_btn.setAttribute("class","main_number_btn")
        new_main_number_btn.setAttribute("id",i)
        main_game_bottom.appendChild(new_main_number_btn)
        var new_main_number_text=document.createElement("P")
        new_main_number_text.innerHTML=i
        new_main_number_btn.appendChild(new_main_number_text)
        btnClickEvnet(new_main_number_btn)
    }
}

function defaultTextMake(number){
    i=1
    while (number!=0){
        var main_present_text_=document.createElement("div")
        main_present_text_.setAttribute("class","main_present_text")
        main_present_text_.setAttribute("id","main_present_text_"+i)
        main_present_text_.innerHTML="•"
        document.getElementById("main_present_text_shape").appendChild(main_present_text_)
        number--
        i++
    }
}

function textMake(wirte_list,value){
    var main_present_text_=document.getElementById("main_present_text_"+wirte_list.length)
    main_present_text_.innerHTML=value
    if(wirte_list.length==3){
        for(i=1;i<4;i++){
            document.getElementById("main_present_text_"+i).innerHTML="•"
        }
    }
}

function btnClickEvnet(btn){
    player_number_list=[]
    var present_text=document.getElementById("present")
    btn.onclick=function(){
        if(present_text.innerHTML.length==3){
            present_text.innerHTML=""
        }
        present_text.innerHTML+=btn.getAttribute("id")
        if(repeatText(btn.getAttribute("id"),player_number_list))
            {
                player_number_list.push(btn.getAttribute("id"))
                textMake(player_number_list,btn.getAttribute("id"))
            }
        if(player_number_list.length==3){
            if (first_check==true){
                randomNumber()
                first_check=false
            }
            checkResult(player_number_list)
            player_number_list=[]
        }
    }
}

function vibration(){
    var result=document.getElementById("result")
    result.setAttribute("style","animation: vibration 0.2s infinite;")
    setTimeout(function() {
        result.setAttribute("style","animation: none;")
    }, 800);
}

function vibrationMain(){
    var main=document.getElementById("main")
    main.setAttribute("style","animation: vibration 0.1s infinite;")
    setTimeout(function() {
        main.setAttribute("style","animation: none;")
    }, 400);
}

function repeatText(present_number,list){
    if (list.length==0){
        return true
    }
    test=0
    for(i=0;i<list.length;i++){
        if (present_number!=list[i]){
            test++
        }
    }
    if (test==list.length){
        return true
    }
    else{
        return false
    }
}

function randomNumber(){
    computer_number_list=[]
    for (i=0;computer_number_list.length!=3;){
        number=Math.floor(Math.random()*10)
        if(i==0 && number!=0){
            computer_number_list.push(number)
            i++
        }
        else if(i==1 && number!=0 && computer_number_list[0]!=number ){
            computer_number_list.push(number)
            i++
        }
        else if(i==2 && number!=0 && computer_number_list[0]!=number && computer_number_list[1]!=number){
            computer_number_list.push(number)
        }
        
    }
    solve.innerHTML=computer_number_list
    return(computer_number_list)
}
var rangking_score=0
var rangking_list=[]

function checkResult(player_number_list){
    var strike=0
    var ball=0
    for (i=0;i<3;i++){
        if (computer_number_list[i]==player_number_list[i]){
            strike++
        }
    }
    if (computer_number_list[0]==player_number_list[1] || computer_number_list[0]==player_number_list[2]) {
        ball++
    }
    if (computer_number_list[1]==player_number_list[0] || computer_number_list[1]==player_number_list[2]) {
        ball++
    }
    if (computer_number_list[2]==player_number_list[1] || computer_number_list[2]==player_number_list[0]) {
        ball++
    }
    if (strike==3){
        document.getElementById("result").innerHTML="맞췄습니다!"
        randomNumber()
        vibrationMain()
        dialogPageOpenEvent(rangking_score)
        rangking_score=0
    }
    else{
        rangking_score++
        document.getElementById("result").innerHTML=strike+"스트라이크"+ball+"볼"
        vibration()
    }
}

function setDate(){
    var now = new Date()
    var hour=now.getHours()
    var min=now.getMinutes()
    if(min<10){
        min="0"+min
    }
    header_present_time.innerHTML=hour+":"+min
}

function backPageEvent(){
    document.getElementById("baseball_btn").onclick=function(){
        document.getElementById("main_page").setAttribute("style","display:block;")
        downGamePage()
    }
}

function downGamePage(){
    main_game_top.setAttribute("style","display:none;")
    main_game_bottom.setAttribute("style","display:none;")
}
function openGamePage(){
    main_game_top.setAttribute("style","display:flex;")
    main_game_bottom.setAttribute("style","display:flex;")
}

function mainMenuBtnEvent(btns){
    btns.onclick=function(){
        if(btns.getAttribute("id")=="baseball"){
            var main_page=document.getElementById("main_page")
            main_page.setAttribute("style","display:none;")
            openGamePage()
        }
        else{
            alert("개발중입니다")
        }
    }
}

function introEvent(){
    var main=document.getElementById("main")
    main.setAttribute("style","animation: brightness 5s infinite;")
    setTimeout(
        function(){
            main.setAttribute("style","animation: none;")
            document.getElementById("intro").setAttribute("style","display:none;")
            document.getElementById("main_page").setAttribute("style","display:block;")
        },1000)
    // 시간 설정
    }

function mainMenuMake(){
    id_list=["baseball","soccer","bascket"]
    text_list=["숫자야구","미니축구","슬램덩크"]
    img_list=["image/baseball_icon_menu_img.png","image/soccer_icon_menu_img.png","image/bascket_icon_menu_img.png"]
    var main_page_menu=document.getElementById("main_page_menu")
    for(i=0;i<text_list.length;i++){
        var main_menu_item_box=document.createElement("div")
        main_menu_item_box.setAttribute("class","main_menu_item_box")
        main_page_menu.appendChild(main_menu_item_box)

        var main_page_menu_left_box=document.createElement("div")
        main_page_menu_left_box.setAttribute("class","main_page_menu_left_box")
        main_menu_item_box.appendChild(main_page_menu_left_box)

        var main_menu_thumb=document.createElement("img")
        main_menu_thumb.setAttribute("class","main_menu_thumb")
        main_menu_thumb.setAttribute("src",img_list[i])
        main_page_menu_left_box.appendChild(main_menu_thumb)

        var menu_text_box=document.createElement("div")
        menu_text_box.setAttribute("class","menu_text_box")
        main_page_menu_left_box.appendChild(menu_text_box)

        var main_menu_text_top=document.createElement("p")
        main_menu_text_top.innerHTML="-게임-"
        main_menu_text_top.setAttribute("class","main_menu_text_top")
        menu_text_box.appendChild(main_menu_text_top)

        var main_menu_text_bottom=document.createElement("p")
        main_menu_text_bottom.innerHTML=text_list[i]
        main_menu_text_bottom.setAttribute("class","main_menu_text_bottom")
        menu_text_box.appendChild(main_menu_text_bottom)

        var space=document.createElement("span")
        main_menu_item_box.appendChild(space)
        
        var main_menu_btns=document.createElement("button")
        main_menu_btns.setAttribute("class","main_menu_btn")
        main_menu_btns.setAttribute("id",id_list[i])
        main_menu_item_box.appendChild(main_menu_btns)


        var btn_text=document.createElement("p")
        btn_text.innerHTML="시작"
        main_menu_btns.appendChild(btn_text)
        mainMenuBtnEvent(main_menu_btns)

    }
    var main_page_line=document.createElement("div")
    main_page_line.setAttribute("id","main_page_line")
    
    main_page_menu.appendChild(main_page_line)


    var score_check_btn=document.createElement("div")
    score_check_btn.setAttribute("id","score_check_btn")
    score_check_btn.innerHTML="내 점수•순위•포인트 보기 >"
    main_page_menu.appendChild(score_check_btn)

}

function stageUsTitleEvent(){
    var main_page_title=document.getElementById("main_page_title")
    main_page_title.onclick=function(){
        document.location.href="https://stageus.co.kr/faq";
    }
}

function scoreBtnEvent(){
    var score_check_btn=document.getElementById("score_check_btn")
    score_check_btn.onclick=function(){
        document.getElementById("main_page_menu").setAttribute("style","display:none;")
        document.getElementById("main_page_title").setAttribute("style","display:none;")
        document.getElementById("score_board").setAttribute("style","display:flex")
        document.getElementById("score_board_title").setAttribute("style","display:flex")
        document.getElementById("score_page_back_btn").setAttribute("style","display:block")
        scoreBoardMake()
    }
}

var score_board = document.getElementById("score_board")
var new_score_box=document.createElement("div")

function scoreBoardMake(){
    new_score_box.setAttribute("class","score_box")
    score_board.appendChild(new_score_box)
    new_score_box.replaceChildren()
    if (rangking_list.length!=0){
        for(i=0;i<rangking_list.length;i++){
            var new_score_text=document.createElement("p")
            new_score_text.setAttribute("class","new_score_text")
            new_score_text.innerHTML=rangking_list[i][0]+":"+rangking_list[i][1]
            new_score_box.appendChild(new_score_text)
        }
    }

}

scoreBackEvent()
function scoreBackEvent(){
    document.getElementById("score_page_back_btn").onclick=function(){
        document.getElementById("main_page_menu").setAttribute("style","display:flex;")
        document.getElementById("main_page_title").setAttribute("style","display:flex;")
        document.getElementById("score_board").setAttribute("style","display:none")
        document.getElementById("score_board_title").setAttribute("style","display:none")
        document.getElementById("score_page_back_btn").setAttribute("style","display:none")
    
    }
}

function dialogPageOpenEvent(point){
    document.getElementById("dialog_box").setAttribute("style","display:flex;")
    downGamePage()
    var dialog_text=document.getElementById("dialog_text")
    dialog_text.focus()
    dialogEvent(point)
}

function dialogEvent(point){
    var dialog_text=document.getElementById("dialog_text")
    document.getElementById("dialog_btn").onclick=function(){
        id= dialog_text.value
        dialog_text.value=""
        rangking_list.push([id,point])
        dialogPageDownEvent()
    }
    dialog_text.onkeydown=function(input){
        if(input.key=="Enter"){
            id= dialog_text.value
            dialog_text.value=""
            rangking_list.push([id,point])
            dialogPageDownEvent()
    }
}

}
function dialogPageDownEvent(){
    document.getElementById("dialog_box").setAttribute("style","display:none;")
    openGamePage()
}


function storeData(){
    localStorage.setItem("score",JSON.stringify(rangking_list))
}

function getData(){
    var data = JSON.parse(localStorage.getItem('score'))
    rangking_list=data
}
window.onload=function(){
    getData()
}
window.onbeforeunload=function(){
    storeData()
}


function clrearRangkingDataEvnet(){
    document.getElementById("score_board_title_text").onclick=function(){
        rangking_list=[]
        scoreBoardMake()
    }
}

function mainPageGithubEvent(){
    document.getElementById("main_page_ad").onclick=function(){
        document.location.href="https://github.com/";
    }
}