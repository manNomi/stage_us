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
    if (window.innerWidth>1000){
        instar_icon.src="img/aside_long_icon/instar_text_logo.png"
        instar_icon.style.width="100px"
        type_check="long"
    }
    else if(window.innerWidth>850){
        instar_icon.src="img/aside_long_icon/instargram_logo.png"
        instar_icon.style.width="30px"
        type_check="short"
    }
    else{
        document.getElementById("funciton_aside").style.display="none"
        document.getElementById("funciton_footer").style.display="flex"
        document.getElementById("posting_main").style.marginLeft=0
        document.getElementById("story_header").style.marginLeft=0
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
    console.log(innerWidth)
    var small_size=80
    var big_size=160
    if (window.innerWidth>1000){
        postReSize(big_size)
        text_present="long"
        instarLogoAnimate(text_present)

    }
    else if(window.innerWidth>850){
        document.getElementById("funciton_footer").style.display="none"
        document.getElementById("funciton_aside").style.display="flex"
        postReSize(small_size)
        text_present="short"
        instarLogoAnimate(text_present)
    }
    else{
        document.getElementById("funciton_aside").style.display="none"
        document.getElementById("funciton_footer").style.display="flex"
        document.getElementById("posting_main").style.marginLeft=0
        document.getElementById("story_header").style.marginLeft=0
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

// makePost()
function createPost(type) {
    // Create main post container
    const postBox = document.createElement('div');
    postBox.className = 'post_box';
    
    // Create thumb and title container
    const thumbAndTitle = document.createElement('div');
    thumbAndTitle.className = 'thumb_and_title';
    
    
    // Create and append post thumbnail image
    const postThumb = document.createElement('img');
    postThumb.className = 'post_thumb';
    postThumb.src = 'img/post_icon/post_thumb/img1.PNG';
    
    // Create post title container
    const postTitle = document.createElement('div');
    postTitle.classList="post_title"

    
    // Create and append post title ID
    const postTitleId = document.createElement('div');
    postTitleId.className = 'post_title_id';
    postTitleId.textContent = 'bop.pt';
    postTitle.appendChild(postTitleId);
    
    // Create title user container
    const titleUser = document.createElement('div');
    titleUser.className = 'title_user';
    
    // Create and append post title sentence
    const postTitleSentence = document.createElement('div');
    postTitleSentence.className = 'post_title_sentence';
    postTitleSentence.textContent = '300만이 선택한 요리...';
    titleUser.appendChild(postTitleSentence);
    
    // Create and append title user "더 보기"
    const postTitlePlus = document.createElement('div');
    postTitlePlus.className = 'post_title_plus';
    postTitlePlus.textContent = '더 보기';
    titleUser.appendChild(postTitlePlus);
    if(type=="right"){
        thumbAndTitle.appendChild(postThumb);
        thumbAndTitle.appendChild(postTitle);
    }
    else{
        thumbAndTitle.appendChild(postTitle);
        thumbAndTitle.appendChild(postThumb);
    }
    
    postTitle.appendChild(titleUser);
    
    // Create post comment container
    const postComment = document.createElement('div');
    postComment.className = 'post_comment';
    
    // Create and append comment count
    const commentCount = document.createElement('div');
    commentCount.className = 'comment_count';
    commentCount.textContent = '좋아요 997개';
    postComment.appendChild(commentCount);
    
    // Function to create individual comment
    function createComment(commentId, commentText) {
        const commentSpecific = document.createElement('div');
        commentSpecific.className = 'comment_specific';
        
        const commentIdDiv = document.createElement('div');
        commentIdDiv.className = 'comment_id';
        commentIdDiv.textContent = commentId;
        commentSpecific.appendChild(commentIdDiv);
        
        const commentTextDiv = document.createElement('div');
        commentTextDiv.className = 'comment_text';
        commentTextDiv.textContent = commentText;
        commentSpecific.appendChild(commentTextDiv);
        
        return commentSpecific;
    }
    
    // Create and append comments
    postComment.appendChild(createComment('bopbasd.ts', '왜 뭐를 했을까?'));
    postComment.appendChild(createComment('bopbasd.ts', '왜 뭐를 했을까?'));
    postComment.appendChild(createComment('bopbasd.ts', '왜 뭐를 했을까?'));
    
    // Create and append comment plus
    const commentPlus = document.createElement('div');
    commentPlus.className = 'comment_plus';
    commentPlus.textContent = '댓글 달기...';
    postComment.appendChild(commentPlus);
    
    postTitle.appendChild(postComment);
    postBox.appendChild(thumbAndTitle);
    
    // Create title icon box
    const titleIconBox = document.createElement('div');
    titleIconBox.className = 'title_icon_box';
    
    function createTitleIconButton(iconSrc) {
        const button = document.createElement('button');
        button.className = 'title_icon_btn';
        
        const img = document.createElement('img');
        img.className = 'title_icon';
        img.src = iconSrc;
        
        button.appendChild(img);
        return button;
    }
    
    const saveIconButton = createTitleIconButton('img/post_icon/save_icon.png');
    saveIconButton.className += ' save_icon';

    if(type=="right"){
        titleIconBox.appendChild(createTitleIconButton('img/post_icon/heart_icon.png'));
        titleIconBox.appendChild(createTitleIconButton('img/post_icon/chat_icon.png'));
        titleIconBox.appendChild(createTitleIconButton('img/post_icon/dm_icon.png'));
        titleIconBox.appendChild(saveIconButton);
        titleIconBox.style="flex-direction:row;"
    }
    else{
        titleIconBox.appendChild(saveIconButton);
        titleIconBox.appendChild(createTitleIconButton('img/post_icon/dm_icon.png'));
        titleIconBox.appendChild(createTitleIconButton('img/post_icon/chat_icon.png'));
        titleIconBox.appendChild(createTitleIconButton('img/post_icon/heart_icon.png'));
        titleIconBox.style="flex-direction:row-reverse;"
    }
    postBox.appendChild(titleIconBox);
    
    const postingMain = document.getElementById('posting_main');
    postingMain.appendChild(postBox);
}
for (i=0;i<2;i++){
    createPost("right")
    createPost("left")
}
// -----------------------------------------main---------------------------------------------
makeFooterIcon()
function makeFooterIcon(){
    const footer_icon_list = ["home_icon","compass_icon","video_icon","plus_icon","dm_icon"]
    function btnMake(img_src){
        var button=document.createElement("button")
        button.classList="footer_btn"
        var img=document.createElement("img")
        img.classList="footer_icon"
        img.src=`img/footer_icon/${img_src}.png`
        button.appendChild(img)
        return button
    }
    const footer = document.getElementById("funciton_footer")
    for(let i=0;i<footer_icon_list.length;i++){
        footer.appendChild(btnMake(footer_icon_list[i]))
        
    }
}