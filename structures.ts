/*
	Data Structures in TypeScript

	To Compile:
		tsc structures.ts
		(optionally: tsc structures.ts --noImplicitAny)
	To run:
		node structures.js

*/

// Basic wrapper for a primitive
class Item {
	constructor(
		public value: number | string | boolean
	) {}
}

function assert(val1: any, val2: any, message: string) {
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

	class Stack {
 	// set up our storage, and keep it from prying eyes
	private storage: Item[];

		constructor() {
	 		// initialize our storage so that it actually is an array.
			this.storage = [];
		}

		addItem(i: Item): void {
	 		// void means that this function doesn't return anything.
	 		// to add an item, push that item onto the end of the array.
			this.storage.push(i);
		}

		getLastItem(): Item {
	 		// todo: remove and return the last item on the storage
			return this.storage.pop();
		}

		peekLastItem(): Item {
	 		// todo: return a reference to the last item in storage without removing
	 		// this.storage[-1];
			return this.storage[this.storage.length - 1];
		}

		isEmpty(): boolean {
	 		// todo: return true if storage is empty, false otherwise
				if (this.storage[0] === undefined) {
					return true;
				} 
				return false;
			};

	}

let st: Stack = new Stack();
assert(st.isEmpty(), true, "Stack is empty on creation");

st.addItem(new Item(3));
assert(st.isEmpty(), false, "Stack is not empty after one item added");

let i: Item = st.peekLastItem();
assert(i.value, 3, "Peeking last item gets us the last item");
assert(st.isEmpty(), false, "Stack is not emptied by peeking");

let i2: Item = st.getLastItem();
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

class Queue {
	 // BCD set up our storage, and keep it from prying eyes
	private storage: Item[];

	constructor() {
 		// initialize our storage so that it actually is an array.
		this.storage = [];
	}
	addItem(i: Item): void {
 		// void means that this function doesn't return anything.
 		// to add an item, push that item onto the end of the array.
		this.storage.push(i);
	}

	getFirstItem(): Item {
 		// todo: remove and return the last item on the storage
		return this.storage.shift();
	}

	peekFirstItem(): Item {
 		// todo: return a reference to the last item in storage without removing
 		// this.storage[-1];
		return this.storage[0];
	}

	isEmpty(): boolean {
 		// todo: return true if storage is empty, false otherwise
			if (this.storage[0] === undefined) {
				return true;
			} 
			return false;
		};
}

let que: Queue = new Queue();
assert(que.isEmpty(), true, "Queue is empty on creation");

que.addItem(new Item(4));
assert(que.isEmpty(), false, "Queue is not empty after one item added");

let i3: Item = que.peekFirstItem();
assert(i3.value, 4, "Peeking first item gets us the first item");
assert(que.isEmpty(), false, "Queue is not emptied by peeking");

let i4: Item = que.getFirstItem();
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
class objectItem {
	constructor(
		public key1: string,
		public key2: string,
		public key3: number,
		public key4: boolean = true
	) {}
}


class assocArray {
	 // BCD set up our associative array, and keep it from prying eyes
	private storage: objectItem[];

	constructor() {
 		// initialize our storage so that it actually is an array.
		this.storage = [];
}
	addObjectItem(i: objectItem): void {
 		// void means that this function doesn't return anything.
 		// to add an item, push that item onto the end of the array.
		this.storage.push(i);
	};
	getFirstObjectItem(): objectItem {
 		// todo: remove and return the last item on the storage
		return this.storage.shift();
	}

	peekFirstObjectItem(): objectItem {
 		// todo: return a reference to the last item in storage without removing
 		// this.storage[-1];
		return this.storage[0];
	}

	isEmpty(): boolean {
 		// todo: return true if storage is empty, false otherwise
			if (this.storage[0] === undefined) {
				return true;
			} 
			return false;
		};


}

let aa: assocArray = new assocArray();
assert(aa.isEmpty(), true, "Associative arrary is empty on creation");

aa.addObjectItem(new objectItem("kitten", "sss", 5, true));
assert(aa.isEmpty(), false, "Associative Array is not empty after one ObjectItem added");

let i5: objectItem = aa.peekFirstObjectItem();
assert(i5.key3, 5, "Peeking first Associative Array item gets us the first ObjectItem");
assert(aa.isEmpty(), false, "Associative Array  is not emptied by peeking");

let i6: objectItem = aa.getFirstObjectItem();
assert(i6.key3, 5, "Associative Array returns last item on getLastObjectItem");
assert(aa.isEmpty(), true, "Associative Array is empty after popping first item");


