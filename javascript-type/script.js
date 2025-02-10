let foo = 42;
console.log(typeof(foo));
foo = 'bar';
foo = true;
console.log(typeof(foo));

// 원시타입 
// 문자열 string
const name = 'park';
// NUMBER
const age =30;
// BOOLEAN
const hasjob = true;
//null
const car = null;
//undefined
let anything;
//symbol
const sym = Symbol();

//참조타입
// Array 배열
const hobbies = ['walking', 'books'];
// Object 객체
const address = {
    province:'경기도',
    city: '성남시'
}

console.log(typeof(address));
