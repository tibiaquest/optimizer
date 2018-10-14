import { Graph, NodeName, GraphNode } from '../graph';

export class WorldMap {

  private graph: Graph<Area, Distance>;
  constructor() {
    this.graph = new Graph<Area, Distance>();
  }
  addRoute(from: NodeName, to: NodeName, distance: Distance): any {
    this.graph.addEdge(from, to, distance);
  }
  addInfo(nodeName: NodeName, area: Area): any {
    this.graph.addNode(nodeName, area);
  }

  getNode(name: NodeName): GraphNode<Area, Distance> {
    return this.graph.getNode(name);
  }


}

interface Area {
  location: Position;
}

interface Position {
  x: number;
  y: number;
  z: number;
}

interface Distance {
  time: number
}