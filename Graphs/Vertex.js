const Edge = require('./Edge');

class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = [];
    }

    // addEdge();
    addEdge(vertex, weight) {
        if (!(node instanceof Vertex))
            throw new Error('Expected an instantiated Vertex as argument');
        this.edges.push(new Edge(this, vertex, weight));
    }
    // removeEdge();
    removeEdge(vertex) {
        this.edges = this.edges.filter((edge) => edge.end !== vertex);
    }
    // print();
}
