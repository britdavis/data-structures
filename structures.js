/*
    Data Structures in TypeScript

    To Compile:
        tsc structures.ts
        (optionally: tsc structures.ts --noImplicitAny)
    To run:
        node structures.js

*/
// Basic wrapper for a primitive
var Item = (function () {
    function Item(value) {
        this.value = value;
    }
    return Item;
}());
function assert(val1, val2, message) {
    if (val1 !== val2) {
        console.log("Assertion Failed: ", message);
        console.log(val1, "does not equal", val2);
    }
}
// 1. Stack
/*
 * A stack is a LIFO (Last In First Out) data structure. We use a stack when we
 * need to keep track of data that is nested, or when we need to make sure that
 * we solve all the sub-problems before solving a main problem. JavaScript uses
 * a stack to keep track of our function calls.
 */
var Stack = (function () {
    function Stack() {
        // initialize our storage so that it actually is an array.
        this.storage = [];
    }
    Stack.prototype.addItem = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage.push(i);
    };
    Stack.prototype.getLastItem = function () {
        // todo: remove and return the last item on the storage
        return this.storage.pop();
    };
    Stack.prototype.peekLastItem = function () {
        // todo: return a reference to the last item in storage without removing
        // this.storage[-1];
        return this.storage[this.storage.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        // todo: return true if storage is empty, false otherwise
        if (this.storage[0] === undefined) {
            return true;
        }
        return false;
    };
    ;
    return Stack;
}());
var st = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");
st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");
var i = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");
var i2 = st.getLastItem();
assert(i2.value, 3, "Stack returns last item on getLastItem");
assert(st.isEmpty(), true, "Stack is empty after popping last item");
// 2. Queue
/*
 * A queue is a FIFO (First In First Out) data structure. We use a queue when we
 * want to handle things in the order they are recieved. JavaScript uses a queue
 * to handle asynch functions in the order that they fire.
 */
// Write, from scratch, an implementation of a Queue, and at least one test for
// each method on the Queue.
/*	BCD
   * FIFO: create emtpy array, push items onto end of array, shift items off front of array.
   * LIFO: create empty array, unshift items onto start, shift items off front

*/
var Queue = (function () {
    function Queue() {
        // initialize our storage so that it actually is an array.
        this.storage = [];
    }
    Queue.prototype.addItem = function (i) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage.push(i);
    };
    Queue.prototype.getFirstItem = function () {
        // todo: remove and return the last item on the storage
        return this.storage.shift();
    };
    Queue.prototype.peekFirstItem = function () {
        // todo: return a reference to the last item in storage without removing
        // this.storage[-1];
        return this.storage[0];
    };
    Queue.prototype.isEmpty = function () {
        // todo: return true if storage is empty, false otherwise
        if (this.storage[0] === undefined) {
            return true;
        }
        return false;
    };
    ;
    return Queue;
}());
var que = new Queue();
assert(que.isEmpty(), true, "Queue is empty on creation");
que.addItem(new Item(4));
assert(que.isEmpty(), false, "Queue is not empty after one item added");
var i3 = que.peekFirstItem();
assert(i3.value, 4, "Peeking first item gets us the first item");
assert(que.isEmpty(), false, "Queue is not emptied by peeking");
var i4 = que.getFirstItem();
assert(i4.value, 4, "Queue returns last item on getLastItem");
assert(que.isEmpty(), true, "Queue is empty after popping first item");
// 3. Pick a Data Structure
/* Pick one structure from http://en.wikipedia.org/wiki/List_of_data_structures
 * and implement it in
 * TypeScript. Be sure to include tests! Make sure to choose something that
 * will be a good challenge for you! (Go with "Heap" if you're unsure. Ask Erty
 * if you need help :)
 */
// BCD Basic wrapper for an object
// Basic wrapper for a primitive
var objectItem = (function () {
    function objectItem() {
    }
    return objectItem;
}());
var assocArray = (function () {
    function assocArray() {
        // initialize our storage so that it actually is an object.
        this.storage = {};
    }
    assocArray.prototype.addObjectItem = function (key, value) {
        // void means that this function doesn't return anything.
        // to add an item, push that item onto the end of the array.
        this.storage[key] = value;
    };
    ;
    assocArray.prototype.getFirstObjectItem = function (key) {
        // todo: remove and return the last item on the storage
        delete this.storage[key];
        return this.storage[key];
    };
    assocArray.prototype.reassignObjectItem = function (key, value) {
        for (var i = 0; i < this.storage; i++) {
            if (this.storage[i][key]) {
                this.storage[i][key] = value;
                return;
            }
        }
    };
    /*
   reassign(key: string, value: any): void {
        for (let i:number = 0; i < this.storage.length; i++) {
            if (this.storage[i][key]) {
                this.storage[i][key] = value;
                return;
            }
        }
    }

    */
    assocArray.prototype.peekFirstObjectItem = function (key) {
        // todo: return a reference to the last item in storage without removing
        // this.storage[-1];
        return this.storage[key];
    };
    assocArray.prototype.isEmpty = function () {
        // 		// todo: return true if storage is empty, false otherwise
        if (this.storage === {}) {
            return true;
        }
        return false;
    };
    ;
    return assocArray;
}());
var aa = new assocArray();
assert(aa.isEmpty(), true, "Associative arrary is empty on creation");
aa.addObjectItem("key1", "myvalue1");
assert(aa.isEmpty(), false, "Associative Array is not empty after one ObjectItem added");
var i5 = aa.peekFirstObjectItem("key1");
assert(i5, "myvalue1", "Peeking first Associative Array item gets us the first ObjectItem");
assert(aa.isEmpty(), false, "Associative Array  is not emptied by peeking");
var i6 = aa.getFirstObjectItem("key1");
assert(i6, undefined, "Associative Array returns last item on getLastObjectItem");
assert(aa.isEmpty(), true, "Associative Array is empty after popping first item");
