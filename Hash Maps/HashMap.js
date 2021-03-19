class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size).fill(null);
    }

    hash(key) {
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }

        return hashCode % this.hashmap.length;
    }

    assign(key, value) {
        const arrayIndex = this.hash(key);
        this.hashmap[arrayIndex] = value;
    }
}

const myHash = new HashMap(6)

console.log(myHash.hash('hello'))

module.export = HashMap;