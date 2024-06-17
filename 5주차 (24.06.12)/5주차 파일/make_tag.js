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
    new_logo_icon.id="instar_icon"
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
    asideReSize()
})
  window.onload=function(){
    var instar_icon = document.getElementById("instar_icon")
    if (window.innerWidth>700){
        instar_icon.src="img/aside_long_icon/instar_text_logo.png"
        instar_icon.style.width="100px"
        type_check="long"
    }
    else{
        instar_icon.src="img/aside_long_icon/instargram_logo.png"
        instar_icon.style.width="30px"
        type_check="short"
    }
    asideReSize()
}

var text_present=null
var type_check=""

function postReSize(size){
    const aside = document.getElementById("funciton_aside")
    aside.style.width=`${size}px`
    document.getElementById("posting_main").style.marginLeft=`${size}px`
    document.getElementById("story_header").style.marginLeft=`${size}px`
    var type=""
    if(size>150){
        type="block"
    }
    else{
        type="none"
    }
    for (i=0;i<logo_text_list.length;i++){
        logo_text_list[i].style.display=type
    }
}


function asideReSize(){
    var small_size=80
    var big_size=160
    if (window.innerWidth>700){
        postReSize(big_size)
        text_present="long"
        instarLogoAnimate(text_present)

    }
    else{
        postReSize(small_size)
        text_present="short"
        instarLogoAnimate(text_present)
    }
}

function instarLogoAnimate(type){
    if (type_check==type){
        return
    }
    var img_url=null
    var img_length=null
    if (type=="long"){
        img_url="img/aside_long_icon/instar_text_logo.png"
        img_length="100px"
    }
    else{
        img_url="img/aside_long_icon/instargram_logo.png"
        img_length="30px"
    }
    type_check=type

    var instar_icon = document.getElementById("instar_icon")
    instar_icon.animate([
        {transform:"scale(1.0)"}, 
        {transform:"scale(0.0)"}],
        {
        duration: 800,
        easing: "ease",
    });
    setTimeout(()=>
        {
            instar_icon.src=img_url
            instar_icon.style.width=img_length
        }
        ,800)
}

// -----------------------------------------aside---------------------------------------------

makePost()
function makePost(){
    const post_container=document.getElementById("posting_main")

    var tmp_post=document.createElement("div")
    tmp_post.classList="post_box"
    post_container.appendChild(tmp_post)

    var tmp_post=document.createElement("div")
    tmp_post.classList="post_box"
    post_container.appendChild(tmp_post)
}