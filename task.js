function isValidNumber(num) {
    return !isNaN(num) && num <= Number.MAX_SAFE_INTEGER && num >= Number.MIN_SAFE_INTEGER && ((num ^ 0) === num)
}

class Stack {
    static fromIterable(arr) {
        if (!arr[Symbol.iterator]) throw new Error("not iterable")
        const stack = new Stack(arr.length)
        for (let i = 0; i < arr.length; i++) {
            stack.stack[i] = arr[i]
        }
        return stack
    }


    constructor(length = 10) {
        if (!isValidNumber(length)) throw new Error("not valid")
        this.length = length
        this.stack = []
        for (let i = 0; i < this.length; i++) {
            this.stack[i] = null
        }
    }

    push(el) {
        for (let i = 0; i < this.length; i++) {
            if (this.stack[i] === null) return this.stack[i] = el;
        }
        throw new Error("stack is full")
    }

    pop() {
        for (let i = (this.length - 1); i > -1; i--) {
            if (this.stack[i] !== null) {
                const pop = this.stack[i]
                this.stack[i] = null;
                return pop
            }

        }
        throw new Error("stack is empty")
    }

    peek() {
        for (let i = (this.length - 1); i > -1; i--) {
            if (this.stack[i] !== null) return this.stack[i];
        }
        return null
    }

    isEmpty() {
        return !this.stack[0]
    }

    toArray() {
        const arr = []
        for (let i = 0; i < this.length; i++) {
            arr.push(this.stack[i])
        }
        return arr
    }

}

const stack = new Stack(3)

console.log(stack)
stack.push(33)
stack.push(22)
stack.push(111)
console.log(stack)
console.log(stack.pop())
// console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.toArray())
console.log(stack)

const ry = Stack.fromIterable([1, 2, 3, 4, 5, 6])
console.log(ry.peek())
