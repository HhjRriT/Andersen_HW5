function isValidNumber(num) {
    return !isNaN(num) && num <= Number.MAX_SAFE_INTEGER && num >= Number.MIN_SAFE_INTEGER && ((num ^ 0) === num)
}

class Stack {
    static fromIterable(arr) {
        if (!arr[Symbol.iterator]) throw new Error("not iterable")
        const stack = new Stack(arr.length)
        arr.forEach(el => stack.push(el))
        return stack
    }

    constructor(length = 10) {
        if (!isValidNumber(length)) throw new Error("not valid")
        this.length = length
        this.stack = new Array(length).fill(null)
        this.elems = 0
    }

    push(el) {
        if (this.elems >= this.length) throw new Error("stack is full")
        this.stack[this.elems] = el
        this.elems++
    }

    pop() {
        const val = this.peek()
        if (val === null) throw new Error("stack is empty")
        this.stack[this.elems - 1] = null
        this.elems--
        return val
    }

    peek() {
        return this.stack[Math.max(0, this.elems - 1)]
    }

    isEmpty() {
        return this.elems === 0
    }

    toArray() {
        const arr = []
        for (let i = 0; i < this.length; i++) {
            arr.push(this.stack[i])
        }
        return arr
    }
}
