var search_btn_text =document.getElementById('search_btn_text')
var search_form =document.getElementById('search_form')

var focus_obj=true
search_btn_text.onfocus=function(){
  if (focus_obj==true){
    search_form.style="border-color: #1d65b6; border-width : 2px;"
    focus_obj=false 
  }
}

search_btn_text.onblur=function(){
  if (focus_obj==false){
    search_form.style="border-color: #cccccc;"
    focus_obj=true 
  }
}