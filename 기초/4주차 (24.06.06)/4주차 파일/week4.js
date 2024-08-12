function calMul() {
  // // 1. 숫자 가져오기
  var number = parseInt(document.getElementById("number").value);
  // // 2. 숫자에 구구단 계산하기
  // var result = number *1
  // // 3. 화면에 반영하기
  // document.getElementById("result_1").innerHTML=result
  // 4. 위 과정을 9번 반복하기
  // for (i=1;i<10;i++){
  //     result=number*i
  //     var tmpP = document.createElement("p")
  //     tmpP.innerHTML=result
  //     document.getElementById("result_box").appendChild(tmpP)
  // }
}

// list

// numList"[1]" <- 조작 가능

// 리스트 돌릴때는 절대로 숫자 넣지 말것

// list vs Array
// 자료구조라고 부름 -> 어떠한 형태로 저장되어있나
// 내부 동작 구조가 다르기에 속도가 다르다
// 메모리에 저장되는 방식이 다름
// array -> 메모리에 몇칸 짜리 저장 할건지 / 사이즈 변경 불가
// array 에서 몇번째 값을 가져오려면 알고 있기에 속도가 엄청빠름
// 특정 인덱스 값을 가져올때 단위시간으로 가져 올 수 있음
// 어레이는 중간에 추가 삭제가 느림

// list는 기차처럼 연결 되어있음
// 사이즈를 지정하지 않아도 되고 중간에 값을 넣을 수 도 있다
// 몇번을 타고 가야함 속도가 느리겠지
// 중간에 추가 삭제가 빠름 기차를 끊고 기차를 넣는 게 됨

// push - 값 추가 pop - 끝에 값 삭제
// 자바 스크립트 list method 한번 읽어보기

// list=[]
// document.getElementById("input_btn").onclick=function(){
//     list.push(document.getElementById("text_box").value)
// }
// document.getElementById("output_btn").onclick=function(){
//     console.log(list)
// }

// EVENT Essential

// 이벤트 종류

// onclick
// onchange
// onmouseover
// onmouseleave
// ondblclick
// onscroll

// // 비슷한 이벤트 들끼리의 차이

// onmouseover VS onmouseenter
// onchange vs oninput
// onclick vs ontouchcancel

// -> 비슷한 것들의 차이를 알것

// drag & drop

// 드래그 이벤트는 아래의 순서로 진행
var color = null;

function getColorEvent(e) {
  // 1. 색을 가져와서 저장
  var tmp = e.target;
  // 아래 방식은 인라인 스타일을 가져옴 html에 적혀있는거
  console.log(tmp.style.backgroundColor);
  color = window.getComputedStyle(tmp).backgroundColor;
}

function dragOverEvent(e) {
  console.log("오버");
  // 브라우저의 기본 설정을 무시해달라
  // 필수적으로 들어가야 함
}

function setColorEvent(e) {
  console.log("드랍");
  // 2. 색을 입혀줌
  e.target.style.backgroundColor = color;
}

// 브라우저는 겹치는게 안되서
//  드랍 이벤트를 무시하게 됨
