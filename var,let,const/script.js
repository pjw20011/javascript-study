//중복 선언 가능, 재할당 가능, 함수레벨 스코프

function func(){
    if (true) {
        var a = 1;
        console.log(a);
    }
}
// console.log(a); // 오류



// 중복선언 불가, 재할당 가능
let greeting = 'hello';
console.log(greeting);

greeting = 'Bye';
console.log(greeting);

//중복선언 불가, 재할당 불가
const mention = 'Hi';

// let, const block 레벨 스코프

function func2(){
    if (true) {
        let w = 'w';
        console.log(w);
    }
 // 오류   console.log(w);
}

func2();
