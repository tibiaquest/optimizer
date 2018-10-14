import { TibiaData } from './tibia-data';
import { populateWorldMap } from '../data/map';
import { populateQuest } from '../data/quest';

const data = new TibiaData();

populateWorldMap(data);
//populateQuest(data);


console.log(data.getMap().getNode("thais-city"))
