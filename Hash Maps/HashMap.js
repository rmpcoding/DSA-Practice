const LinkedList = require('./LinkedList');

class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
    }
    hash(key) {
        let hashcode = 0;

        for (let i = 0; i < key.length; i++) {
            hashcode += hashcode + key.charCodeAt(i);
        }

        return hashcode % this.hashmap.length;
    }

    assign(key, value) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];
        if (!linkedList.head) {
            linkedList.addHead({
                key,
                value,
            });
            return;
        }
        let current = linkedList.head;

        while (current) {
            //if data is found within our LinkedList
            // UPDATE with key, value stored as an object
            //if data is NOT found within LinkedList
            // ADD it as our tail
            if (current.data.key === key) {
                current.data = {
                    key,
                    value,
                };
                return;
            }

            if (!current.getNextNode()) {
                current.data = new Node({ key, value });
            }

            current = current.getNextNode();
        }
    }

    retrieve(key) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];
        let current = linkedList.head;

        while (current) {
            // if current's data's key property strictly equals our key parameter
                // print it for the user or return it
            // if it isn't there, let the user know it doesn't exist.

            if (current.data.key === key) {
                console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
                return current.data.value
            }

            if (!current.getNextNode()) {
                console.log(`"${key}" does not exist in the HashMap!`)
            }

            current = current.getNextNode();
        }
    }
}

module.exports = HashMap;


const birdCensus = new HashMap(16);

birdCensus.assign('mandarin duck', 'Central Park Pond');

birdCensus.assign('monk parakeet', 'Brooklyn College');

birdCensus.assign('horned owl', 'Pelham Bay Park');

console.log(birdCensus.retrieve('mandarin duck'));
console.log(birdCensus.retrieve('monk parakeet'));
console.log(birdCensus.retrieve('horned owl'));

/*
    constructor(size = 0) {
        this.hashmap = new Array(size)
        .fill(null)
        .map(() => new LinkedList());
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

    retrieve(key) {
        const arrayIndex = this.hash(key);
        return this.hashmap[arrayIndex];
    }
*/
