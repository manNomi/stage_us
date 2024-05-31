var first_check=true
var computer_number_list=[]
var main_present_text_shape=document.getElementById("main_present_text_shape")
btnMake()
defaultTextMake(3)

function btnMake(){
    for(i=1;i<10;i++){
        var main_bottom=document.getElementById("main_bottom")
        var new_main_number_btn=document.createElement("button")
        new_main_number_btn.setAttribute("class","main_number_btn")
        new_main_number_btn.setAttribute("id",i)

        main_bottom.appendChild(new_main_number_btn)

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
        main_present_text_shape.appendChild(main_present_text_)
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
            main_present_text_shape.setAttribute("animation","vibration .1s infinite;")
            if (first_check==true){
                randomNumber()
                first_check=false
            }
            checkResult(player_number_list)
            player_number_list=[]
        }
    }
}

function repeatText(present_number,list){
    if (list.length==0){
        return true
    }
    for(i=0;i<list.length;i++){
        if (present_number!=list[i])
            return true
    }
    return false
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
    }
    else{
        document.getElementById("result").innerHTML=strike+"스트라이크"+ball+"볼"
    }
}