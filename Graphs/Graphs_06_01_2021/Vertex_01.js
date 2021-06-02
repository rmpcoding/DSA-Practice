const Edge = require("../Graphs_05_31_2021/Edge");

class Vertex_01 {
    constructor(data) {
        this.data = data;
        this.edges = [];
    }

    // addEdge()
    addEdge(vertex, weight) {
        if (!(vertex instanceof Vertex_01)) 
            throw new Error('Expected a Vertex_01 argument')
        this.edges.push(new Edge(this, vertex, weight))
    }
    // removeEdge()
    // print()
}