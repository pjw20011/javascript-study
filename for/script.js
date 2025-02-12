for(let i=0; i<5; i++) {
    if (i == 3) {
        console.log('It is 3');
    }
}

const user = {
    name: 'Han',
    province: '경기도',
    city: '성남'
}

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}

let i =0;

while(i<10){
    console.log('Number '+ i);
    i++;
}

do {
    console.log('Number '+ i);
    i++;
} while(i <10)