// 1. 변수를 선언하고 값을 할당해요.
var firstName="John"
let lastName="Doe"
const birthYear=1990


// 2. 변수를 출력해요.
console.log(firstName)
console.log(lastName)
console.log(birthYear)


// 3. 변수 값을 변경해요.
var firstName="Jane"

console.log(firstName)

/** 
const birthYear=3300 를 선언하면 const로 선언된 변수는 다시 그 변수값으로 사용 될 숭
수 없으므로 중복사용 될 수 없다는 아래의 오류가 나옴.

"SyntaxError: Identifier 'birthYear' has already been declared
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:10866"
"error"
*/


// 4. 변수 이름의 규칙을 알아보아요. 
/**
1번 1name 변수는 숫자로 시작 될 수 없음
2번 first_name 언더바는 변수에 사용 될 수 있음
3번 lastName 변수 이름은 대소문자를 구별함
4번 birth-year 하이픈은 변수로 사용 될 수 없음
5번 $age $는 변수에 사용 될 수 있음
*/
