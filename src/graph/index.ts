export type NodeName = String;
export type EdgeName = String;

export class Graph<TNodeContent, TEdgeContent> {
  private nodeData: Map<NodeName, GraphNode<TNodeContent, TEdgeContent>>;

  constructor() {
    this.nodeData = new Map();
  }
  public addNode(name: NodeName, content: TNodeContent): void {
    if (this.nodeData.has(name)) throw new Error(`Node <${name}> already exists`);
    this.nodeData.set(name, new GraphNode(name, content));
  }

  public addEdge(from: NodeName, to: NodeName, content: TEdgeContent): void {
    this._addEdge(from, to, content);
    this._addEdge(to, from, content);
  }
  private _addEdge(from: NodeName, to: NodeName, content: TEdgeContent): void {
    const fromNode = this.getNode(from);
    const toNode = this.getNode(to);
    if (!fromNode) throw new Error(`Node (${from}) does not exist`);
    if (!toNode) throw new Error(`Node (${to}) does not exist`);
    fromNode.addEdge(toNode, content);
  }
  public getNode(name: NodeName): GraphNode<TNodeContent, TEdgeContent> {
    return this.nodeData.get(name);
  }


}
export class GraphNode<TNodeContent, TEdgeContent> {
  public name: NodeName;
  public content: TNodeContent;
  public edges: Map<NodeName, GraphEdge<TNodeContent, TEdgeContent>>;
  constructor(name: NodeName, content: TNodeContent) {
    this.name = name;
    this.content = content;
    this.edges = new Map();
  }
  addEdge(toNode: GraphNode<TNodeContent, TEdgeContent>, content: TEdgeContent) {
    const edge = new GraphEdge(toNode, content);
    if (this.edges.has(toNode.name)) console.warn(`Warning duplicate entry for ${this.name} and ${toNode.name}. Action, overriding old value.`);
    this.edges.set(toNode.name, edge);
  }
}
export class GraphEdge<TNodeContent, TEdgeContent> {
  public content: TEdgeContent;
  public toNode: GraphNode<TNodeContent, TEdgeContent>;
  constructor(toNode: GraphNode<TNodeContent, TEdgeContent>, content: TEdgeContent) {
    this.toNode = toNode;
    this.content = content;
  }
}