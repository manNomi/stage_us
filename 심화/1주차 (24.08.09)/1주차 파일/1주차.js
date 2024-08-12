// js 문제

// 1. 증복 선언 허용 문제
// 2. 호이스팅 문제

var num1 = 10;
console.log(num1);
//10 출력
var num1 = 2;
console.log(num1);
//10 출력

function printMessage() {
  console.log("hello");
}
//by 출력
printMessage();
function printMessage() {
  console.log("by");
}
//by 출력
printMessage();

// Hoisting : js 의 자체적인 기능이며 , js 코드가 실행될 때 선언부를 상단으로 끌고 와서 실행하는 기능

console.log(num1);
var num1 = 1;
// undefined 출력

printMessage();
function printMessage() {
  console.log("by");
}
// hello 출력

// 호이스팅이 되면
var num1;
function printMessage() {
  console.log("by");
}
console.log(num1);
num1 = 10;
printMessage();
// 위와 같이 된다
// 대규포 프로젝트 기준으로 유지보수를 망치는 구조다

// let 을 쓰는 이유
// var 은 변수 증복선언이 되지만 let은 불가하다
// 증복선언을 막아주는게 let이다
//

console.log(num);
let num = 1;
// 실행시 호이스팅을 막지는 못한다
// 자바스크립트의 내장 문법이기에
// 하지만 후처리를 통해 초기화 되지 않았다고 애러가 난다

// let이기에 증복선언 막힌다
printMessage();
let printMessage = function () {
  console.log("hello");
};
// 초기화 되지 않았다고 나온다

// 호이스팅 될경우
let printMessage;
printMessage();
printMessage = function () {
  console.log("hello");
};

// 람다식
//  function 을 안써도 되는 장점
let printMessage = () => {
  console.log("hello");
};
// 이름없는 함수 , 한번만쓸 함수 만드는데 특화

let power = (number) => {
  return number * number;
};
//괄호 지워도 됨
let power2 = (number) => {
  return number * number;
};
// 중괄호 지워도 됨
// 그안의 명령어가 한종류일때 줄일 수 있다
// 그리고 중괄호 지웠을때 return 만 남으면 return 지워야함
let power3 = (number) => number * number;
// 축약형으로 쓰면 코드를 읽는데 더 쉽다

// 변수 -> 원할때 변경 가능
let num123 = 10;
// 상수 -> 값을 바꿀 수 없다
const oldNum2 = 20;
let newNum2 = oldNum2 * 123;

// 함수형 프로그래밍 1 원칙 -> 순수함수여야 한다
// 함수를 한번 실행했는데 특정 변수값이 바뀌어서는 안된다
// 바뀐다면 순수함수가 아니다

// 다 const를 쓰고 필요할 경우에만 let으로 바꾸어 쓰자

// 템플레이트 리터럴
// Template literal
const name = "스테이지어스";
console.log("내 이름은 " + name + " 입니다");
console.log(`내 이름은 ${name} 입니다`);

const target = 10;
const powerNum = (num) => num * num;

console.log(`${target}의 제곱은 ${powerNum(target)} 입니다.`);

const tmpObj = {
  name: "만욱",
  id: "123",
  location: "인천",
};

console.log(tmpObj.name);
tmpObj.name = "만욱만";

const key = "name";
tmpObj[key];
tmpObj.name;
// 오브젝트 리터럴이라고 부른다
tmpObj["name"];

// 상수의 리스트 나 객체는 안에있는 인덱스 값을 바꾸는것은 가능

// default parameter
const area = (radius, pie = 3.14) => {
  console.log(radius * radius * pie);
};
area(3);
area(3, 3.141592);

// rest parameter
// 매개변수 개수를 정해주지 않는 방법
const sum = (...list) => {
  let result = 0;
  for (let index = 0; index < list.length; index++) {
    result + list[index];
  }
  console.log(result);
};

sum(1, 2, 3);
sum(1, 2, 3, 1, 2, 3, 1, 1, 2, 3);

//Spread Operator
// -> 자료구조의 껍질을 벗겨줌
const list = [1, 2, 3];
console.log(list);
// [1,2,3]
console.log(...list);
// 1 2 3

const list1 = [1, 2, 3];
const list2 = [3, 4, 5];
const newList = [...list1, ...list2];

// 오브젝트를 여러개 합칠때도 쓸 수 있다

// 내가 보내려는 변수가 원시티입이냐 참조타입이냐
// int , boolean , String
// list , obj , dictionary 등이 참조타입
// 변수의 주소값을 보냄
// 함수에 넣으면 참조타입은 원본값이 바뀜

// 스프래드 오퍼레이터
const tmpFunc = (list) => {
  list[0] = 100;
};
const tmpList = [1, 2, 3];
tmpFunc([...tmpList]);
console.log(tmpFunc);

// Destricuring
// 디스트럭처링 재분배

// 리스트도 쓸 수있음
// list index 대로 이름 마음대로 지으면 됨
const func = (obj) => {
  //   const name = obj.stageus.name;
  //   const age = obj.stageus.name;
  //     const id = obj.stageus.name;
  // 디스트럭처링 문법
  const { name, age, id } = obj.stageus;
  console.log(name);
  console.log(age);
  console.log(id);
};

const data = {
  stageus: {
    name: "욱",
    age: "4",
    id: "5",
  },
};
func({ ...data });

// array helper
// 리스트 대상으로 반복문을 돌리는 경우
// for 문 쓰는것 보다 훨씬 좋다

const tmpListNum = [1, 2, 3, 4, 5];
tmpListNum.forEach((ele) => console.log(ele));

// 맵은 다른곳에 저장하는것임
// 그래서 변수를 무조건 저장해야함
// return 이 필수다
const newTmpList = tmpList.map((ele) => ele * ele);

const newListFilter = tmpList.filter((ele) => ele < 3);

// acc 는 현재 값
// ele 는 리스트의 원소
const newVar = tmpList.reduce((acc, ele) => {
  return acc + ele;
}, 0);

// 0 이 처음에 acc 로 들어간다
// 0+1 한 값이 acc 에 저장한다
// reduce 예제코드를 많이 찾아보자

// 초기값을 설정하지 않으면 첫번째 인덱스가 초기값임
const newVar2 = tmpList.reduce((acc, elem) => {
  return Math.max(acc, elem);
});
