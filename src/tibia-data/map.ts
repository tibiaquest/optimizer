import { Graph, NodeName, GraphNode } from '../graph';

export class WorldMap {

  private graph: Graph<Area, Distance>;
  constructor() {
    this.graph = new Graph<Area, Distance>();
  }
  addRoute(from: NodeName, to: NodeName, distance: Distance): any {
    this.graph.addEdge(from, to, distance);
  }
  addLocation(nodeName: NodeName, position: Position): any {
    this.graph.addNode(nodeName, { closestLocation: nodeName, position: position });
  }

  getNode(name: NodeName): GraphNode<Area, Distance> {
    return this.graph.getNode(name);
  }


}

export interface Area {
  position: Position;
  closestLocation: NodeName;
}

export interface Position {
  x: number;
  y: number;
  z: number;
}

interface Distance {
  time: number
}