const Edge = require('./Edge');
const Vertex = require('./Vertex');

class Graph {
    constructor(isWeighted = false, isDirected = false) {
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    addVertex(data) {
        let vertex = new Vertex(data);
        this.vertices.push(vertex);
        return vertex;
    }

    // removeVertex()
    // addEdge()
    // removeEdge()
    // getVertexByValue()
}

let graph = new Graph();

graph.addVertex('hello');

/* -------------------------------------------------------------------------- */
/*                                 GRAPH CLASS                                */
/* -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------

A Vertex can store any data.

A Vertex maintains a list of connections to other vertices, represented by a list of Edge instances.

A Vertex can add and remove edges going to another Vertex.

A Graph stores all of its vertices, represented by a list of Vertex instances.

A Graph knows if it is directed or undirected.

A Graph knows if it is weighted or unweighted.

A Graph can add and remove its own vertices.

A Graph can add and remove edges between stored vertices.

-------------------------------------------------------------------------- */
