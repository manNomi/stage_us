// 매개변수도 리턴값도 없는 형태

// function print_mseeage(){
//     console.log("bye")
// }
// function startProgram(){
//     print_mseeage()
//     print_mseeage()
//     print_mseeage()
//     print_mseeage()
//     print_mseeage()
//     print_mseeage()
//     print_mseeage()
//     print_mseeage()
//     print_mseeage()
// }

// startProgram()

// 매개변수만 있는 형태
// function add(num1,num2){
//     console.log(num1+num2)
// }

// add(1,5)
// add(10,15)

// 매개변수 리턴값 모두 있는 형태
// function power(num){
//     return num*num
// }
// console.log(power(10))

// 변수 -> 메모리에 공간을 만들어서 , 무언가를 저장하는 문법

// var number = 100
// console.log(number)

// 몇번이든 꺼내 쓸 수 있다

// number=20
// console.log(number)

// // 자료형
// // integer - 숫자
// // string - 문자
// var number2="100"

// console.log(number+number)
// console.log(number2+number2)

// // 변환방법

// var convertedNumber=parseInt(number2)
// console.log(convertedNumber+convertedNumber)


// var data="hello"
// function printMessage(){
//     // 지역변수
//     // var data="hello"
//     console.log(data)
// }
// printMessage()

// var data="hello2"
// 전역변수로 설정하면 사용가능
// console.log(data)

// 전역변수 사용을 지양할것 

// var text=[]
// var text=document.getElementsByTagName("imput")

// html을 사용해야하는 함수일경우 event를 붙여놓자 -필수-
function calNumberEvent(type){
    // 1.숫자두개를 가져온다
    var number1=parseInt(document.getElementById("first_number").value)
    var number2=parseInt(document.getElementById("second_number").value)
    if (type=="+"){
    document.getElementById("result_box").innerHTML=number1+number2
    }
    else if (type=="-"){
        document.getElementById("result_box").innerHTML=number1-number2
        }
    else if (type=="*"){
        document.getElementById("result_box").innerHTML=number1*number2
    }
    else if (type=="/"){
        document.getElementById("result_box").innerHTML=number1/number2
    }
    else{
        console.log("오류임")
    }
    // 가장 높은 확률로 나오는 것을 위쪽에 쓸수록 코드가 더 빨라진다
}

function subNumberEvent(){
    var number1=parseInt(document.getElementById("first_number").value)
    var number2=parseInt(document.getElementById("second_number").value)
    document.getElementById("result_box").innerHTML=number1-number2
}
function DivNumberEvent(){
    var number1=parseInt(document.getElementById("first_number").value)
    var number2=parseInt(document.getElementById("second_number").value)
    document.getElementById("result_box").innerHTML=number1*number2
}
function mulNumberEvent(){
    var number1=parseInt(document.getElementById("first_number").value)
    var number2=parseInt(document.getElementById("second_number").value)
    document.getElementById("result_box").innerHTML=number1/number2
}

// 조건문