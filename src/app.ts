import { TibiaData } from './tibia-data';
import { populateWorldMap } from '../data/map';
import { populateQuest } from '../data/quest';

const data = new TibiaData();

populateWorldMap(data);
populateQuest(data);


console.log(data.map.getNode("thais-city"))
let completedQuestParts = []; //none
let availableQuests = data.quests.availableQuestsFor(completedQuestParts);
console.log(`\nWith no (${completedQuestParts}) quests complete, the available quests are the following :`)
availableQuests.forEach((value) => {
  console.log(value.identificator);
});
// complete a quest
completedQuestParts = ["the-explorer-society-quest-part1",
  "the-explorer-society-quest-part1-buypickaxeindp",
  "the-explorer-society-quest-part1-returntheaxe"]
console.log(`\nWith some (${completedQuestParts}) quests complete, the available quests are the following : `)
availableQuests = data.quests.availableQuestsFor(completedQuestParts);
availableQuests.forEach((value) => {
  console.log(value.identificator);
});