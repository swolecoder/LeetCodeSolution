class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    /*
      Push:
       - create a new node
       - check if list is empty - head and tail points to new node
       -else:
           -next propety of the tail  to new node
           -set previous property of new created node to tail
           -set tail to new node
       - increase length
    */

    push(val) {
        let newNode = new Node(val);

        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    /*
     Pop : Data from end
    */
    pop() {
        //nothing to pop
        if (this.length == 0) {
            return new Error("No Data in Doubly LL")
        }
        // if only one data
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let previousNode = this.tail.prev;
            previousNode.next = null;
            this.tail = previousNode;
        }

        this.length--;
        return this;
    }


    /*
     Shift- remove from front
    */
    shift() {
        let next = this.head.next;

        if (this.length == 0) return "Empty";

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }

        if (next) {
            this.head = next;
            next.previousNode = null;
        }
        this.length--;
        return this;
    }

    //unshift: Add element to front
    unshift(val) {
        let newNode = new Node(val);

        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head.next;
            this.head.prev = newNode;
            this.head = newNode
        }

        this.length++;
        return this;
    }

    //remove
   remove(val){}


}

const a = new DoublyLL();
a.push(1)
a.push(2)
a.push(3)
a.pop()
a.shift()
a.unshift(20)
a.shift()
console.log(a)