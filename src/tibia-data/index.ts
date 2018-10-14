import { Graph } from '../graph';
import { WorldMap } from './map';
export class TibiaData {
  private map: WorldMap;
  constructor() {
    this.map = new WorldMap();
  }
  getQuest(): any {
    throw new Error('Method not implemented.');
  }
  getMap(): WorldMap {
    return this.map;
  }
}

