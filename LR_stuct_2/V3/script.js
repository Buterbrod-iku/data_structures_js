const Rand = (min, max) => {
    let a = Math.random() * (max - min) + min;
    return Math.floor(a);
}

let array1 = [];
let array2 = [];

for (let i = 0; i < 10000; i++){
    array1.push(Rand(1, 10000));
    array2.push(Rand(1, 10000));
}


let start = performance.now();

let result = array2;

for (let i = 0; i < array1.length; i++){
    let count = 0;
    for (let j = 0; j < array2.length; j++){
        if (array1[i] === array2[j]){
            count += 1;
            break;
        }
    }
    if(count === 0){
        result.push(array1[i]);
    }
}

let end = performance.now();
console.log(array1);
console.log(result);

console.log(end-start);