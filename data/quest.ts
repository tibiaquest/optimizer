import { TibiaData } from '../src/tibia-data';
import { populateQuest as explorerSociety } from './quests/explorerSociety'
export function populateQuest(data: TibiaData) { //SideEffect
  explorerSociety(data);
};