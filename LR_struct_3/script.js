const Rand = (min, max) => {
    let a = Math.random() * (max - min) + min;
    return Math.floor(a);
}

class List{
    constructor(text) {
        this.data = text;
        this.prev = null;
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

        a.prev = this.tail;
        this.tail.next = a;

        this.tail = a;
    }
    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.data === value) {
                deletedNode = currentNode;

                if (deletedNode === this.head) {
                    this.head = deletedNode.next;

                    if (this.head) {
                        this.head.prev = null;
                    }

                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    this.tail = deletedNode.prev;
                    this.tail.next = null;
                } else {
                    const previousNode = deletedNode.prev;
                    const nextNode = deletedNode.next;
                    previousNode.next = nextNode;
                    nextNode.prev = previousNode;
                }
            }
            currentNode = currentNode.next;
        }
    }
}

let a = new List(10);
let list1 = new First().add(a);


list1.add(new List(2));
list1.add(new List(3));
list1.add(new List(4));


let n = 3;
let nowNone = list1.head;
while (nowNone){
    if (nowNone.data === n){
        nowNone.prev.next = null;
    }
    nowNone = nowNone.next;
}
console.log(list1);