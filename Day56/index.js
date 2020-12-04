var Solution = function (head) {
    this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {

    const size = this.size();
    let randomIndex = Math.floor(Math.random() * (size));

    let count = 0;
    let current = this.head;
    console.log(size, randomIndex)

    while (current) {

        if (count == randomIndex) {
            return current.val;
        }

        count++;
        current = current.next;

    }

};

Solution.prototype.size = function () {
    let size = 0
    let current = this.head;
    while (current) {
        size++;
        current = current.next;
    }
    return size;
}