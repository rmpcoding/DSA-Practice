class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size).fill(null);
    }

    hash(key) {
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }

        hashCode = hashCode % this.hashmap.length;

        return hashCode;
    }
}

const myHash = new HashMap(6)

console.log(myHash.hash('hello'))

module.export = HashMap;