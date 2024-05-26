// 변수
var search_btn_text =document.getElementById('search_btn_text')
var search_form =document.getElementById('search_form')
var search_shape =document.getElementById('search_shape')
var search_event_btn =document.getElementById('search_event_btn')
var space =document.getElementById('space')
var search_shape = document.getElementById('search_shape')

// 검색창 줄어들면 삭제하기
const observer = new ResizeObserver(Obs => {
  for (let Ob of Obs) {
    const length = Ob.contentRect
    var length_width=length.width
    if (length_width<113){
      search_shape.style="display:none;"
    }
  }
})

// 윈도우 화면 통해 검색창 사라졌을때 다시 불러오기
window.addEventListener("resize",function(){
  if (innerWidth>540){
    search_shape.style="display:flex;"
  }
})

// 선언
observer.observe(search_shape)

// 클릭했을때 검색 아이콘 + 파랑색 나타내기
var focus_obj=true
search_btn_text.onfocus=function(){
  if (focus_obj==true){
    search_form.style="border-color: #1d65b6; border-width : 2px;"
    search_event_btn.style="display:block;"
    space.style="width:0px;"
    focus_obj=false 
  }
}

// 클릭을 벗어났을때 
search_btn_text.onblur=function(){
  if (focus_obj==false){
    search_form.style="border-color: #cccccc;"
    search_event_btn.style="display:none;"
    space.style="width:70px;"
    focus_obj=true
  }
}