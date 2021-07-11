export class CircleArray<T> {
    public array: Array<T>;

    constructor(array: Array<T> = []) {
        this.array = array;
    }

    push(e) {
        this.array.pop();
        this.array.unshift(e);
        return this.array;
    }
}
