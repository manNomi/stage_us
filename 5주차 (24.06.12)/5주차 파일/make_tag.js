var logo_text_list=[]
makeAsideIcon()
function makeAsideIcon(){
    const aside_icon_list = ["home_icon","search_icon","compass_icon","video_icon","dm_icon","heart_icon","plus_icon"]
    const aside_text=["홈","검색","탐색 탭","릴스","메시지","알림","만들기","프로필"]
    const aside = document.getElementById("funciton_aside")
    aside.style="display:flex;"
    aside.classList="funciton_aside"
    const logo_box=document.createElement("div")
    logo_box.id="aside_logo_box"
    const new_logo_icon = document.createElement("img")
    new_logo_icon.src=`img/aside_long_icon/instargram_logo.png`
    new_logo_icon.classList="aside_icon"
    aside.appendChild(new_logo_icon)
    for (var i=0;i<aside_icon_list.length;i++){
        const logo_text_box=document.createElement("div")
        logo_text_box.classList="logo_text_box"
        const new_icon = document.createElement("img")
        new_icon.src=`img/aside_long_icon/${aside_icon_list[i]}.png`
        new_icon.classList="aside_icon"
        const text_box=document.createElement("div")
        text_box.innerHTML=aside_text[i]
        text_box.classList="logo_text"
        logo_text_list.push(text_box)
        logo_text_box.appendChild(new_icon)
        logo_text_box.appendChild(text_box)
        logo_box.appendChild(logo_text_box)
    }
    aside.appendChild(logo_box)
    const logo_text_box=document.createElement("div")
    logo_text_box.classList="logo_text_box"
    const text_box=document.createElement("div")
    text_box.innerHTML="더보기"
    text_box.classList="logo_text"
    const new_list_icon = document.createElement("img")
    new_list_icon.src=`img/aside_long_icon/list_icon.png`
    new_list_icon.classList="aside_icon"
    logo_text_box.appendChild(new_list_icon)
    logo_text_box.appendChild(text_box)
    logo_text_list.push(text_box)
    aside.appendChild(logo_text_box)
}


window.addEventListener("resize",function(){
    const aside = document.getElementById("funciton_aside")
    if (window.innerWidth>700){
        console.log("높음")
        aside.style.width="160px"
        for (i=0;i<logo_text_list.length;i++){
            logo_text_list[i].style.display="block" 
        }
    }
    else{
        aside.style.width="80px"
        for (i=0;i<logo_text_list.length;i++){
            logo_text_list[i].style.display="none" 
        }
    }
  })