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

let now1 = list1.head;
let now2 = list2.head;
let result = list2;

while (now1){
    let count = 0;
    while (now2){
        if (now1.data === now2.data){
            count += 1;
            break;
        }
        now2 = now2.next;
    }
    if(count === 0){
        result.add(new List(now1.data));
    }
    now1 = now1.next;
    now2 = list2.head;
}


let end = performance.now();
console.log(list1);
console.log(result);

console.log(end-start);