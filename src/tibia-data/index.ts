import { Graph } from '../graph';
import { WorldMap } from './map';
import { Quests } from './quest';
export class TibiaData {
  public map: WorldMap;
  public quests: Quests;
  constructor() {
    this.map = new WorldMap();
    this.quests = new Quests();
  }

}

