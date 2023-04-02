const Rand = (min, max) => {
    let a = Math.random() * (max - min) + min;
    return Math.floor(a);
}

class List{
    constructor(text) {
        this.data = text;
        this.next = null;
    }
}

class First{
    constructor(head = null) {
        this.head = head;
        this.tail = null;
    }
    add(objact){
        const a = objact;

        if (!this.head || !this.tail) {
            this.head = a;
            this.tail = a;

            return this;
        }

        this.tail.next = a;

        this.tail = a;
    }
    toArray(){
        let array = [];

        let now = this.head;

        while (now){
            array.push(now);
            now = now.next;
        }
        return array;
    }
}

let a = new List(10);
let list1 = new First().add(a);

let a1 = new List(10);
let list2 = new First().add(a1);

for (let i = 0; i < 10000; i++){
    list1.add(new List(Rand(1, 10000)));
    list2.add(new List(Rand(1, 10000)));
}

let start = performance.now();

let arr1 = list1.toArray();
let arr2 = list2.toArray();
let result = list2;
for (let i = 0; i < arr1.length; i++){
    let count = 0;
    for (let j = 0; j < arr2.length; j++){
        if (arr1[i].data === arr2[j].data){
            count += 1;
            break;
        }
    }
    if(count === 0){
        result.add(new List(arr1[i].data));
    }
}


let end = performance.now();
console.log(list1);
console.log(result);

console.log(end-start);